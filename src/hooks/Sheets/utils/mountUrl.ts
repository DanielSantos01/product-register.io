import { APP_CONSTANTS } from '../../../constants';

const { SHEETS_BASE_URL } = APP_CONSTANTS;

export const mountUrl = (complement: string): string => {
  const url: string = `${SHEETS_BASE_URL}/${complement}`;
  return url;
};
