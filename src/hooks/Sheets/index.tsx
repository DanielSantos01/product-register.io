import React, {
  createContext,
  useContext,
  useCallback,
} from 'react';

import AppHttpHelper from '@services/httpService';
import { HttpHelperResponse } from '@/modules/http/data/protocols';
import { APP_CONSTANTS } from '../../constants';
import { HttpStatusCode } from '../../modules/http/domain/interfaces';
import { mountUrl } from './utils';
import { ReadDataModel, SheetsContextData, WriteDataModel } from './interfaces';

const { SPREADSHEET_ID } = APP_CONSTANTS;
const SheetsContext = createContext<SheetsContextData>({} as SheetsContextData);

export const SheetsProvider: React.FC = ({ children }) => {
  const write = useCallback(async (data: WriteDataModel) => {
    const { key, position, value } = data;
    const url: string = mountUrl('put');
    const range: string = `DATA!${key}${position}`;
    const response: HttpHelperResponse<Array<string[]>> = await AppHttpHelper.post({
      url,
      body: { range, value, spreadsheetId: SPREADSHEET_ID },
    });
    return response.statusCode === HttpStatusCode.OK;
  }, []);

  const read = useCallback(async (data: ReadDataModel) => {
    const { key, position } = data;
    const range: string = `DATA!${key}${position}`;
    const url: string = `${mountUrl('query')}?spreadsheetId=${SPREADSHEET_ID}&range=${range}`;
    const response: HttpHelperResponse<Array<string[]>> = await AppHttpHelper.get({ url });
    const hasSuccess: boolean = response.statusCode === HttpStatusCode.OK;
    return hasSuccess ? response.body : [];
  }, []);

  return (
    <SheetsContext.Provider
      value={{
        write,
        read,
      }}
    >
      {children}
    </SheetsContext.Provider>
  );
};

export function useSheets(): SheetsContextData {
  const context: SheetsContextData = useContext(SheetsContext);

  if (!context) {
    throw new Error('useSheets must be used whithin an SheetsProvider');
  }

  return context;
}
