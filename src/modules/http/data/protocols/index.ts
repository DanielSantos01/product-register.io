export interface IHttpHelperParams {
  url: string,
  body: IHttpHelperBodyParams;
}

interface IHttpHelperBodyParams {
  [paramKey: string]: any;
}

export interface HttpHelperResponse<T> {
  statusCode: number;
  body: T;
}
