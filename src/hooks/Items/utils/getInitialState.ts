import { ItemStateData } from '../interfaces';

export const getInitialState = (): ItemStateData => {
  const initialState: ItemStateData = {
    isLoading: false,
    items: [],
  };
  return initialState;
};
