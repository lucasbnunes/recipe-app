import type { Recipe } from '../types';

class BookmarksState {
	private bookmarks = $state<Array<Recipe['id']>>([]);

	get() {
		return this.bookmarks;
	}

	add(id: Recipe['id']) {
		if (this.hasBookmark(id)) {
			return;
		}

		this.bookmarks.push(id);

		return this.bookmarks;
	}

	remove(id: Recipe['id']) {
		this.bookmarks = this.bookmarks.filter((currentBookmarks) => currentBookmarks !== id);
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
