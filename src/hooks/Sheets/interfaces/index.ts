/* eslint-disable no-unused-vars */
export interface WriteDataModel {
  position: number;
  key: PossibleKeys;
  value: string;
}

export interface ReadDataModel {
  position: number;
  key: PossibleKeys;
}

export enum PossibleKeys {
  name = 'A',
  login = 'B',
  role = 'C',
  creation = 'D',
  count = 'E'
}

export interface SheetsContextData {
  write: (data: WriteDataModel) => Promise<boolean>;
  read: (data: ReadDataModel) => Promise<Array<string[]>>;
}
