export interface IHttpParams {
  url: string,
  body?: URLSearchParams;
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
