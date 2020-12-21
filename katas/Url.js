import _ from 'lodash';

export default class Url {
  constructor(url) {
    this.url = url;
    this.scheme = url.substring(0, url.indexOf(':'));
    this.hostName = url.substring(url.indexOf(':') + 3, url.indexOf('?'));
    this.params = url.substring(url.indexOf('?') + 1)
  }
  getScheme() {
    return this.scheme;
  }
  getHostName() {
    const [hostName, ...trash] = this.hostName.split(':');
    return hostName;
  }
  getQueryParams() {
    const params = this.params.split('&')
    return params.reduce((acc, param) => {
      const [key, value] = param.split('=');
      acc[key] = value;
      return acc;
    }, {})
  }
  getQueryParam(paramName, defaultReturn = null) {
    const params = this.getQueryParams(this.url);
    if(params[paramName]) {
      return params[paramName];
    }
    return defaultReturn;

  }
  equals(url) {
    if(url.url === this.url) {
      return true;
    }
    return false;
  }
}
