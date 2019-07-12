import axios from 'axios/index';
import ApiDevConfig from '../config/api-development';
import ApiProdConfig from '../config/api-production';

let ApiConfig;

switch (window.location.hostname) {
  case 'production':
    ApiConfig = ApiProdConfig;
    break;
  default:
    ApiConfig = ApiDevConfig;
}

export {ApiConfig};

export class ApiService {

  setPath(apiPath) {
    this.apiPath = apiPath;
    return this;
  }

  setEndpoint(apiEndpoint) {
    this.apiEndpoint = apiEndpoint;
    return this;
  }

  setParams(params)
  {
    this.params = params;
    return this;
  }

  getUri() {
    return this.apiPath + this.apiEndpoint;
  }

  checkRequestData() {
    if (!this.apiPath) {
      throw new Error('apiPath is not set');
    }
    if (!this.apiEndpoint) {
      throw new Error('apiEndpoint is not set');
    }
  }

  checkResponseData(res) {
    const uri = this.getUri();

    if (typeof res.data !== 'object') {
      throw new Error(`Incorrect response. Expected object, got ${typeof res.data}`)
    }

    if (!res.data.data) {
      throw new Error(`Incorrect response format. Root object should be "data", but none present in response of ${uri}`)
    }
  }

  get() {

    this.checkRequestData();

    const uri = this.getUri();

    return axios
      .get(uri, {
        params: this.params,
        withCredentials: true,
        onDownloadProgress: (e) => {
          const totalLength = e.lengthComputable ? e.total : e.target.getResponseHeader('content-length') || e.target.getResponseHeader('x-decompressed-content-length');
          console.log("onDownloadProgress", totalLength);
        }
      })
      .then(res => {
        this.checkResponseData(res);
        return res.data.data;
      })

  }

}