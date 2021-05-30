export interface IHttpDataParams {
  url: string;
  body: IHttpHelperBodyParams;
}

export interface IHttpNoDataParams {
  url: string;
}

export type IHttpHelperBodyParams = any;

export interface HttpHelperResponse<T> {
  statusCode: number;
  body: T;
}
