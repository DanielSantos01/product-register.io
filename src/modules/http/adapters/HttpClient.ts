/* eslint-disable no-unused-vars */
import { IHttpParams, HttpResponse } from '../domain/interfaces';

export interface IHttpClient {
  post: <T>(postParams: IHttpParams) => Promise<HttpResponse<T>>;
  get: <T>(hetParams: IHttpParams) => Promise<HttpResponse<T>>;
  patch: <T>(patchParams: IHttpParams) => Promise<HttpResponse<T>>;
  delete: <T>(deleteParams: IHttpParams) => Promise<HttpResponse<T>>;
}
