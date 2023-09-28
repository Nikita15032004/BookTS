import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import '../../utilities/footer.scss'
import { searchActions } from '../../store/searchSlice';




function Footer() {
	const location = useLocation() as any;
	const dispatch = useDispatch() as any;

	const currentPage: number = useSelector((state: any) => state.search.currentPage);
	const searchParams = new URLSearchParams(location.search);
	const booksLimit: string | null = searchParams.get('booksLimit') || null;
	const booksLimitNum: number | null = booksLimit ? parseInt(booksLimit) : null;
	const booksCounts: number = useSelector((state: any) => state.search.totalBooks);


	let pageCounts = 0;
	if (booksLimitNum && booksCounts) {
		pageCounts = Math.ceil(booksCounts / booksLimitNum);
	}

	const handlePageClick = (data: any) => {
		const selectedPage = data.selected;
		dispatch(searchActions.setCurrentPage(selectedPage + 1));
	};


	return (
		<>
			<div className='bg-slate-500 py-9 text-white'>
				{pageCounts > 0 &&
					<ReactPaginate
						nextLabel="next >"
						onPageChange={handlePageClick}
						forcePage={currentPage - 1}
						pageRangeDisplayed={3}
						marginPagesDisplayed={2}
						pageCount={pageCounts}
						previousLabel="< prev"
						breakLabel="..."
						pageClassName=''
						pageLinkClassName='my-page'
						previousClassName=''
						previousLinkClassName='my-page'
						nextClassName=''
						nextLinkClassName='my-page'
						breakClassName=''
						breakLinkClassName=''
						containerClassName='my-container'
						activeClassName='my-active'
						renderOnZeroPageCount={null}
					/>
				}
			</div>
		</>
	);
};
export default Footer;