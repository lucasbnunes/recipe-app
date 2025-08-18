import type { Recipe } from '../types';

export interface BookmarksStorage {
	load(): Array<Recipe['id']>;
	save(ids: Array<Recipe['id']>): void;
}

export class LocalStorageBookmarksStorage implements BookmarksStorage {
	key = 'recipe-app:bookmarks';

	load(): Array<Recipe['id']> {
		if (typeof window === 'undefined') return [];
		return JSON.parse(localStorage.getItem(this.key) || '[]');
	}

	save(ids: Array<Recipe['id']>): void {
		if (typeof window === 'undefined') return;
		localStorage.setItem(this.key, JSON.stringify(ids));
	}
}
