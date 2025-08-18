import type { Recipe } from '../types';
import { LocalStorageBookmarksStorage, type BookmarksStorage } from './bookmarks-storage';

class BookmarksState {
	private bookmarks = $state<Array<Recipe['id']>>([]);
	private storage: BookmarksStorage;

	constructor(storage: BookmarksStorage = new LocalStorageBookmarksStorage()) {
		this.storage = storage;
		this.bookmarks = storage.load();
	}

	get() {
		return this.bookmarks;
	}

	add(id: Recipe['id']) {
		if (this.hasBookmark(id)) {
			return;
		}

		this.bookmarks.push(id);
		this.storage.save(this.bookmarks);
		return this.bookmarks;
	}

	remove(id: Recipe['id']) {
		this.bookmarks = this.bookmarks.filter((currentBookmarks) => currentBookmarks !== id);
		this.storage.save(this.bookmarks);
	}

	toggleBookmark(id: Recipe['id']) {
		if (this.hasBookmark(id)) {
			return this.remove(id);
		}
		return this.add(id);
	}

	hasBookmark(id: Recipe['id']) {
		return this.bookmarks.includes(id);
	}
}

export const bookmarks = new BookmarksState();
