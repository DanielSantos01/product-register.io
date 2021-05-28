import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IHttpClient } from '../../../adapters/HttpClient';
import { HeaderModel, IHttpParams, HttpResponse } from '../../../domain/interfaces';

class AxiosClient implements IHttpClient {
  axiosInstance: AxiosInstance;

  headers: HeaderModel;

  constructor() {
    this.axiosInstance = axios.create();
    this.headers = {
      validateStatus: () => true,
      timeout: 25000,
    };
  }

  async post<T>(postParams: IHttpParams): Promise<HttpResponse<T>> {
    const { url, body } = postParams;
    const received: AxiosResponse<T> = await this.axiosInstance.post<T>(url, body, this.headers);
    const response: HttpResponse<T> = {
      statusCode: received.status,
      body: received.data,
    };
    return response;
  }

  async get<T>(getParams: IHttpParams): Promise<HttpResponse<T>> {
    const { url } = getParams;
    const received: AxiosResponse<T> = await this.axiosInstance.get<T>(url, this.headers);
    const response: HttpResponse<T> = {
      statusCode: received.status,
      body: received.data,
    };
    return response;
  }

  async patch<T>(patchParams: IHttpParams): Promise<HttpResponse<T>> {
    const { url, body } = patchParams;
    const received: AxiosResponse<T> = await this.axiosInstance.patch<T>(url, body, this.headers);
    const response: HttpResponse<T> = {
      statusCode: received.status,
      body: received.data,
    };
    return response;
  }

  async delete<T>(deleteParams: IHttpParams): Promise<HttpResponse<T>> {
    const { url } = deleteParams;
    const received: AxiosResponse<T> = await this.axiosInstance.delete<T>(url, this.headers);
    const response: HttpResponse<T> = {
      statusCode: received.status,
      body: received.data,
    };
    return response;
  }
}

export default AxiosClient;
