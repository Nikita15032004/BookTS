import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';


export const searchSlice = createSlice({
	name: 'search',
	initialState: {
		books: [],
		totalBooks: null,
		singleBook: {},
		currentPage: 1,
		isFetching: false,
		isFetchError: false,
		isSingleBookFetchError: false,

	},
	reducers: {
		setBooks: (state: any, action: PayloadAction<any>) => {
			state.books = action.payload;
		},
		setTotalBooks: (state: any, action: PayloadAction<number | null>) => {
			state.totalBooks = action.payload;
		},
		setSingleBook: (state: any, action: PayloadAction<any>) => {
			state.singleBook = action.payload
		},
		setCurrentPage: (state: any, action: PayloadAction<number>) => {
			state.currentPage = action.payload
		},
		setIsFetching: (state: any, action: PayloadAction<boolean>) => {
			state.isFetching = action.payload
		},
		setIsFetchError: (state: any, action: PayloadAction<boolean>) => {
			state.isFetchError = action.payload
		},
		setIsSingleBookFetchError: (state: any, action: PayloadAction<boolean>) => {
			state.isSingleBookFetchError = action.payload
		},
	},
});

export const searchActions = searchSlice.actions;

export const fetchBooks = (searchText: string, category: string, booksLimit: number, booksStartIndex: number, currentPage: number) => async (dispatch: any) => {
	if (searchText.trim() === '') {
		dispatch(searchActions.setBooks(null));
		dispatch(searchActions.setTotalBooks(null));
		return;
	}

	try {
		dispatch(searchActions.setIsFetching(true));
		const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
			params: {
				q: searchText + category,
				key: 'AIzaSyAgqcBKr0fPJCrr5Fy9Lx3Sqr7SU-gh4FQ',
				maxResults: booksLimit,
				startIndex: booksStartIndex,
			},
		});
		dispatch(searchActions.setIsFetching(false));

		if (response?.data?.items) {
			if (booksStartIndex === 0) dispatch(searchActions.setTotalBooks(response.data.totalItems));
			dispatch(searchActions.setBooks(response.data.items));
		} else {
			dispatch(searchActions.setBooks(null));
			if (currentPage === 1) dispatch(searchActions.setTotalBooks(null));
		}

	} catch (error) {
		dispatch(searchActions.setIsFetching(false));
		dispatch(searchActions.setIsFetchError(true));
		console.error(error);
	}
};


export const loadSingleBook = (bookId: string) => async (dispatch: any) => {
	try {
		dispatch(searchActions.setIsFetching(true));
		const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`, {
			params: {
				key: 'AIzaSyAgqcBKr0fPJCrr5Fy9Lx3Sqr7SU-gh4FQ',
			},
		});
		dispatch(searchActions.setSingleBook(response.data));
		dispatch(searchActions.setIsFetching(false));
	} catch (error) {
		dispatch(searchActions.setIsFetching(false));
		dispatch(searchActions.setIsSingleBookFetchError(true));
		console.error(error);
	}
};

export default searchSlice.reducer;