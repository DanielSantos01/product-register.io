/* eslint-disable no-unused-vars */
import { IHttpParams, HttpResponse } from '../domain/interfaces';

export interface IHttpClient {
  post: (postParams: IHttpParams) => Promise<HttpResponse<any>>;
  get: (hetParams: IHttpParams) => Promise<HttpResponse<any>>;
  patch: (patchParams: IHttpParams) => Promise<HttpResponse<any>>;
  delete: (deleteParams: IHttpParams) => Promise<HttpResponse<any>>;
}
