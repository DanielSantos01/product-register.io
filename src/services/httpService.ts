import AxiosClient from '../modules/http/infra/usecases/AxiosClient';
import HttpHelper from '../modules/http/domain/usecases/HttpHelper';
import { IHttpHelper } from '../modules/http/data/usecases/IHttpHelper';
import { IHttpClient } from '../modules/http/adapters/HttpClient';

const AppAxiosClient: IHttpClient = new AxiosClient();
const AppHttpHelper: IHttpHelper = new HttpHelper(AppAxiosClient);

export default AppHttpHelper;
