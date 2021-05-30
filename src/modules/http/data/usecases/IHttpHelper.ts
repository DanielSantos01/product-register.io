/* eslint-disable no-unused-vars */
import { HttpHelperResponse, IHttpDataParams, IHttpNoDataParams } from '../protocols';

export interface IHttpHelper {
  post: <T>(postParams: IHttpDataParams) => Promise<HttpHelperResponse<T>>;
  get: <T>(hetParams: IHttpNoDataParams) => Promise<HttpHelperResponse<T>>;
  patch: <T>(patchParams: IHttpDataParams) => Promise<HttpHelperResponse<T>>;
  delete: <T>(deleteParams: IHttpNoDataParams) => Promise<HttpHelperResponse<T>>;
}
