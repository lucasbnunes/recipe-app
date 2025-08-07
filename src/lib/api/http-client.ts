export interface RequestOptions {
	json?: Record<string, unknown>;
	searchParams?: URLSearchParams;
}

export interface HttpClient {
	get<T>(url: string, config?: RequestOptions): Promise<T>;
	post<T>(url: string, config?: RequestOptions): Promise<T>;
	put<T>(url: string, config?: RequestOptions): Promise<T>;
	delete<T>(url: string, config?: RequestOptions): Promise<T>;
}
