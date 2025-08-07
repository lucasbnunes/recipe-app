import type { KyInstance } from 'ky';
import type { HttpClient, RequestOptions } from './http-client';

export class KyHttpClient implements HttpClient {
	constructor(private readonly kyInstance: KyInstance) {}

	get<T>(url: string, config?: RequestOptions): Promise<T> {
		return this.kyInstance.get(url, config).json();
	}

	post<T>(url: string, config?: RequestOptions): Promise<T> {
		return this.kyInstance.post(url, config).json();
	}

	put<T>(url: string, config?: RequestOptions): Promise<T> {
		return this.kyInstance.put(url, config).json();
	}

	delete<T>(url: string, config?: RequestOptions): Promise<T> {
		return this.kyInstance.delete(url, config).json();
	}
}
