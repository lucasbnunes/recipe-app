import { PUBLIC_API_URL } from '$env/static/public';
import { KyHttpClient } from './ky-http-client';
import ky from 'ky';

export const httpClient = new KyHttpClient(
	ky.create({
		prefixUrl: PUBLIC_API_URL
	})
);
