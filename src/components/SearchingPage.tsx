import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../store/searchSlice';
import { useLocation } from 'react-router-dom';
import FormWrapper from './formComponents/FormWrapper';



function SearchingPage() {

	const location = useLocation() as any;
	const searchParams: any = new URLSearchParams(location.search);
	const dispatch = useDispatch() as any;
	const currentPage: number = useSelector((state: any) => state.search.currentPage);

	useEffect(() => {
		let timeoutId: any;
		const searchText: string = searchParams.get('search') || '';
		const category: string | null = searchParams.get('category') || null;
		const booksLimit: string | null = searchParams.get('booksLimit') || null;
		const booksLimitNum: number | null = parseInt(booksLimit ? booksLimit : '') || null;
		const booksStartIndex: number | null = booksLimitNum ? (currentPage === 1 ? 0 : booksLimitNum * (currentPage - 1)) : null;

		if (!category || !booksLimitNum || booksStartIndex === null) return;

		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			dispatch(fetchBooks(searchText, category, booksLimitNum, booksStartIndex, currentPage));
		}, 500);

		return () => clearTimeout(timeoutId);

	}, [location.search, currentPage, dispatch]);


	return (
		<FormWrapper></FormWrapper>
	);
}

export default SearchingPage;
