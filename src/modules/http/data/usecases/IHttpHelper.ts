/* eslint-disable no-unused-vars */
import { HttpHelperResponse, IHttpDataParams, IHttpNoDataParams } from '../protocols';

export interface IHttpHelper {
  create: <T>(postParams: IHttpDataParams) => Promise<HttpHelperResponse<T>>;
  read: <T>(hetParams: IHttpNoDataParams) => Promise<HttpHelperResponse<T>>;
  update: <T>(patchParams: IHttpDataParams) => Promise<HttpHelperResponse<T>>;
  delete: <T>(deleteParams: IHttpNoDataParams) => Promise<HttpHelperResponse<T>>;
}
