export interface IHttpDataParams {
  url: string;
  body: IHttpHelperBodyParams;
}

export interface IHttpNoDataParams {
  url: string;
}

export interface IHttpHelperBodyParams {
  [paramKey: string]: string;
}

export interface HttpHelperResponse<T> {
  statusCode: number;
  body: T;
}
