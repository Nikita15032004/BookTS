import React from 'react';
import { useSelector } from 'react-redux';
import BookPage from './BookPage';
import Spinner from '../UI/Spinner';
import { useLocation } from 'react-router-dom';
import { GoogleBook } from '../utilities/Interfaces';


function BooksPage() {
	const location = useLocation() as any;
	const searchParams: any = new URLSearchParams(location.search);
	const isSearch: string | null = searchParams.get('search') || null;

	const books: any = useSelector((state: any) => state.search.books);
	const totalBooks: number | null = useSelector((state: any) => state.search.totalBooks);
	const isFetchError: boolean = useSelector((state: any) => state.search.isFetchError);
	const isFetching: boolean = useSelector((state: any) => state.search.isFetching);



	return (
		<>
			<div className='flex-auto'>
				{isFetching ? <Spinner></Spinner>
					:
					<>
						{books?.length ?
							<>
								<div className='text-center mt-12 text-xl'>Books found: {totalBooks}</div>
								<div className='flex justify-center mx-6 min-[600px]:mx-10 md:mx-5 flex-auto mt-3'>
									<ul className='flex flex-wrap max-w-[1280px] mx-[-1.25rem]'>
										{books?.map((book: GoogleBook) => (
											<BookPage
												key={book?.id}
												img={book?.volumeInfo?.imageLinks?.thumbnail ? book?.volumeInfo?.imageLinks?.thumbnail : ''}
												title={book?.volumeInfo?.title}
												authors={book?.volumeInfo?.authors}
												date={book?.volumeInfo?.publishedDate}
												id={book?.id}
											></BookPage>
										))
										}
									</ul>
								</div>
							</>
							: <>{isSearch && !isFetchError ?
								<>
									<div className=' max-w-sm mx-auto mt-12'>
										<div className='text-center text-xl text-red-400 mx-5'>Books not found!</div>
										<p className='text-center text-base mt-2 mx-5'>Change your search request, or decrease a page number you want to visit, because google books api has a restriction, and not always responds to requests with big values of 'startIndex' param.</p>
									</div>
								</>
								: ''}
							</>
						}
						{isFetchError && <>
							<div className=' max-w-sm mx-auto mt-12'>
								<div className='text-center text-xl text-red-400 mx-5'>Server does not responds!</div>
								<p className='text-center text-base mt-2 mx-5'>Reload the page, or change the search request, or try to visit the aplication later.</p>
							</div>
						</>}


					</>
				}
			</div>
		</>
	);
}

export default BooksPage;