/* eslint-disable no-unused-vars */
import { IHttpParams, HttpResponse } from '../../domain/interfaces';

export interface IHttpHelper {
  create: (postParams: IHttpParams) => Promise<HttpResponse<any>>;
  read: (hetParams: IHttpParams) => Promise<HttpResponse<any>>;
  update: (patchParams: IHttpParams) => Promise<HttpResponse<any>>;
  delete: (deleteParams: IHttpParams) => Promise<HttpResponse<any>>;
}
