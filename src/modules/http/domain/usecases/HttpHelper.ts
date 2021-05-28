import { IHttpClient } from '../../adapters/HttpClient';
import { IHttpHelper } from '../../data/usecases/IHttpHelper';

import { HttpResponse, IHttpParams } from '../interfaces';

class HttpHelper implements IHttpHelper {
  httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient;
    this.create = this.create.bind(this);
    this.read = this.read.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create<T>(createParams: IHttpParams): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await this.httpClient.post(createParams);
    return response;
  }

  async read<T>(readParams: IHttpParams): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await this.httpClient.patch(readParams);
    return response;
  }

  async update<T>(updateParams: IHttpParams): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await this.httpClient.patch(updateParams);
    return response;
  }

  async delete<T>(deleteParams: IHttpParams): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await this.httpClient.patch(deleteParams);
    return response;
  }
}

export default HttpHelper;
