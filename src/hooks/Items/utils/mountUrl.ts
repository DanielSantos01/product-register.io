import { APP_CONSTANTS } from '../../../constants';

const { REGISTER_BASE_URL } = APP_CONSTANTS;

export const mountUrl = (complement: string): string => {
  const url: string = `${REGISTER_BASE_URL}/${complement}`;
  return url;
};
