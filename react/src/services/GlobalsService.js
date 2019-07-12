import {ApiService, ApiConfig} from './Api';

export default class GlobalsService {

  static get() {

    let endpoint = ApiConfig.endpoints.globals;

    return (new ApiService())
      .setPath(ApiConfig.path)
      .setEndpoint(endpoint)
      .get();

  }

}