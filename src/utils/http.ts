import { Rxios } from 'rxios';

export class Http {
  
  private httpClient = new Rxios();
  private static staticHttpClient = new Rxios(); 

  public static get<T>(url: string) {
    return this.staticHttpClient.get<T>(url);
  }

  public static delete(url: string, queryParams?: object) {
    return this.staticHttpClient.delete(url, queryParams);
  }

  public static post<T>(url: string, body: object, queryParams?: object) {
    return this.staticHttpClient.post<T>(url, body, queryParams);
  }

  public static patch<T>(url: string, body: object, queryParams?: object) {
    return this.staticHttpClient.patch<T>(url, body, queryParams);
  }

  public static put<T>(url: string, body: object, queryParams?: object) {
    return this.staticHttpClient.put<T>(url, body, queryParams)
  }

  public get<T>(url: string) {
    return this.httpClient.get<T>(url);
  }

  public delete(url: string, queryParams?: object) {
    return this.httpClient.delete(url, queryParams);
  }

  public post<T>(url: string, body: object, queryParams?: object) {
    return this.httpClient.post<T>(url, body, queryParams);
  }

  public patch<T>(url: string, body: object, queryParams?: object) {
    return this.httpClient.patch<T>(url, body, queryParams);
  }

  public put<T>(url: string, body: object, queryParams?: object) {
    return this.httpClient.put<T>(url, body, queryParams);
  }
}