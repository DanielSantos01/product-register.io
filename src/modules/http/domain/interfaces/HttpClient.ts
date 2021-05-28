export interface IHttpParams {
  url: string,
  body?: IHttpBodyParams;
  query?: IHttpQueryParams;
}

interface IHttpBodyParams {
  [paramKey: string]: any;
}

interface IHttpQueryParams {
  [paramKey: string]: any;
}

export interface HttpResponse<T> {
  statusCode: number;
  body: T;
}

export interface HeaderModel {
  validateStatus: () => boolean;
  timeout?: number;
  headers?: IHttpHeader;
}

interface IHttpHeader {
  [paramKey: string]: any;
}
