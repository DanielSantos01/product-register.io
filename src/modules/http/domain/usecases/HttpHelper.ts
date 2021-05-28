import { IHttpClient } from '../../adapters/HttpClient';
import { IHttpHelper } from '../../data/usecases/IHttpHelper';
import {
  IHttpDataParams,
  IHttpHelperBodyParams,
  IHttpNoDataParams,
} from '../../data/protocols';

import { HttpResponse } from '../interfaces';

class HttpHelper implements IHttpHelper {
  httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient;
    this.create = this.create.bind(this);
    this.read = this.read.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create<T>(createParams: IHttpDataParams): Promise<HttpResponse<T>> {
    const { url, body } = createParams;
    const urlencoded: URLSearchParams = this.parse(body);
    const response: HttpResponse<T> = await this.httpClient.post<T>({ url, body: urlencoded });
    return response;
  }

  async read<T>(readParams: IHttpNoDataParams): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await this.httpClient.get<T>(readParams);
    return response;
  }

  async update<T>(updateParams: IHttpDataParams): Promise<HttpResponse<T>> {
    const { body, url } = updateParams;
    const urlencoded: URLSearchParams = this.parse(body);
    const response: HttpResponse<T> = await this.httpClient.patch<T>({ url, body: urlencoded });
    return response;
  }

  async delete<T>(deleteParams: IHttpNoDataParams): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await this.httpClient.delete<T>(deleteParams);
    return response;
  }

  private parse(valueToParse: IHttpHelperBodyParams): URLSearchParams {
    const urlencoded: URLSearchParams = new URLSearchParams();
    const objectKeys: string[] = Object.keys(valueToParse);
    objectKeys.forEach((key) => {
      urlencoded.append(key, valueToParse[key]);
    });
    return urlencoded;
  }
}

export default HttpHelper;
