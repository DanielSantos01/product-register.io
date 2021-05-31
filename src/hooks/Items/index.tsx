/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
import React, {
  createContext,
  useContext,
  useCallback,
  useReducer,
  useEffect,
} from 'react';
import moment from 'moment';

import AppHttpHelper from '@services/httpService';
import { HttpHelperResponse } from '@/modules/http/data/protocols';
import { useAuth } from '../Auth';
import { HttpStatusCode } from '../../modules/http/domain/interfaces';
import { itemReducer, getInitialState, mountUrl } from './utils';
import {
  ItemContextData,
  ItemReducer,
  ItemStateData,
  Item,
  BaseItemModel,
  OptionalBaseItemModel,
} from './interfaces';
import { useSheets } from '../Sheets';
import { PossibleKeys } from '../Sheets/interfaces';

const ItemsContext = createContext<ItemContextData>({} as ItemContextData);

export const ItemsProvider: React.FC = ({ children }) => {
  const { userData, hasUserData, position } = useAuth();
  const { write, read } = useSheets();
  const initialState: ItemStateData = getInitialState();
  const [state, dispatch] = useReducer<ItemReducer>(itemReducer, initialState);
  const { isLoading, items } = state;

  const updateSpreasdheet = useCallback(async () => {
    const response: Array<string[]> = await read({
      key: PossibleKeys.creation,
      position,
    });
    const hasRegister: boolean = !!response;
    if (hasRegister) {
      const value: string = `${items.length}`;
      await write({ key: PossibleKeys.count, position: position + 1, value });
    } else {
      const date: string = moment(new Date()).format('DD/MM/YYY');
      const value: string = `${date},${items.length}`;
      await write({ key: PossibleKeys.creation, position: position + 1, value });
    }
  }, []);

  const getItems = useCallback(async () => {
    dispatch({ type: 'set_loading', isLoading: true });
    const url: string = mountUrl(`/item/all?ownerId=${userData._id}`);
    const response: HttpHelperResponse<Item[]> = await AppHttpHelper.get<Item[]>({ url });
    if (response.statusCode === HttpStatusCode.OK) {
      dispatch({ type: 'set_items', items: response.body });
    }
    dispatch({ type: 'set_loading', isLoading: false });
  }, []);

  const create = useCallback(async (data: BaseItemModel) => {
    const url: string = mountUrl('/item/create');
    const response: HttpHelperResponse<Item[]> = await AppHttpHelper.post<Item[]>(
      { url, body: data },
    );
    const hasSuccess: boolean = response.statusCode === HttpStatusCode.OK;
    if (hasSuccess) dispatch({ type: 'set_items', items: response.body });
    await updateSpreasdheet();
    return hasSuccess;
  }, [updateSpreasdheet]);

  const update = useCallback(async (data: OptionalBaseItemModel) => {
    dispatch({ type: 'set_loading', isLoading: true });
    const url: string = mountUrl('/item');
    const response: HttpHelperResponse<Item[]> = await AppHttpHelper.patch<Item[]>(
      { url, body: { ...data } },
    );
    const hasSuccess: boolean =
      response.statusCode === HttpStatusCode.OK && !!Object.keys(response.body).length;
    if (hasSuccess) dispatch({ type: 'set_items', items: response.body });
    dispatch({ type: 'set_loading', isLoading: false });
    return hasSuccess;
  }, []);

  const deleteItem = useCallback(async (id: string, ownerId: string) => {
    dispatch({ type: 'set_loading', isLoading: true });
    const url: string = mountUrl(`/item/delete?id=${id}&ownerId=${ownerId}`);
    const response: HttpHelperResponse<Item[]> = await AppHttpHelper.delete<Item[]>({ url });
    const hasSuccess: boolean = response.statusCode === HttpStatusCode.OK;
    if (hasSuccess) dispatch({ type: 'set_items', items: response.body });
    dispatch({ type: 'set_loading', isLoading: false });
    await updateSpreasdheet();
    return hasSuccess;
  }, [updateSpreasdheet]);

  const clearData = useCallback(() => {
    dispatch({ type: 'clear_items_data' });
  }, []);

  useEffect(() => {
    updateSpreasdheet();
    if (hasUserData) {
      getItems();
    }
  }, [hasUserData, getItems]);

  return (
    <ItemsContext.Provider
      value={{
        isLoading,
        clearData,
        create,
        deleteItem,
        items,
        update,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export function useItems(): ItemContextData {
  const context: ItemContextData = useContext(ItemsContext);

  if (!context) {
    throw new Error('useItems must be used whithin an ItemsProvider');
  }

  return context;
}
