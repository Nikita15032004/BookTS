import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadSingleBook } from '../store/searchSlice';
import BackIcon from '../assets/BackIcon';
import Spinner from '../UI/Spinner';
import NotFoundPageSpinner from '../UI/NotFoundPageSpinner';
//////////////////////////////////
function SingleBookPage() {
	const { bookId } = useParams() as any;
	const navigate = useNavigate() as any;
	const dispatch = useDispatch() as any;
	const book: any = useSelector((state: any) => state.search.singleBook);

	const isFetching: boolean = useSelector((state: any) => state.search.isFetching);
	const isSingleBookFetchError: boolean = useSelector((state: any) => state.search.isSingleBookFetchError);
	useEffect(() => {
		dispatch(loadSingleBook(bookId))
	}, [])

	const backHandler = () => {
		navigate(-1);
	}
	return (
		<>
			{isSingleBookFetchError && <>
				<div className='text-4xl text-red-400 text-center mt-16'>Server does not responds!</div>
				<div className='text-center text-base mt-2'>Try to reload the page or go to Home Page</div>
				<div onClick={backHandler} className='flex justify-center mt-5'><button className='py-3 px-4 bg-teal-800 hover:bg-teal-600 transition duration-300 ease-linear rounded-md text-base text-white'>Go Home</button></div>
				<NotFoundPageSpinner />
			</>}
			{isFetching ? <Spinner /> :
				<>
					{book && !isSingleBookFetchError &&
						<>
							<div className='mx-9 mt-9 mb-8'>
								<div className=' mx-auto max-w-6xl'>
									<button onClick={backHandler} className='inline-flex cursor-pointer '>
										<BackIcon></BackIcon>
										<div className='text-base'>Back</div>
									</button>
									<div className='flex flex-wrap sm:flex-nowrap  mx-[-1.3rem] mt-2'>
										<div className='self-start mx-[1.3rem] grow-0 shrink basis-[100%] overflow-hidden sm:basis-[50%] md:basis-[40%] lg:basis-[30%]  flex-nowrap bg-slate-100 shadow-3xl rounded-lg border-solid border border-slate-300  '>
											<div className=' mx-auto w-52 h-72  relative pt-[36.25%] flex overflow-hidden p-1 md:pt-[56.25%] border-solid border-2 border-sky-500 rounded-lg my-8 '>
												<img className='absolute left-0 top-0 w-full h-auto min-h-full max-h-full shadow-2xl' src={book?.volumeInfo?.imageLinks?.thumbnail} alt=''></img>
											</div>
										</div>
										<div className='mx-[1.3rem] grow-0 shrink flex-nowrap mt-8 sm:mt-0 basis-[100%] sm:basis-[50%] md:basis-[60%] lg:basis-[70%] overflow-hidden '>
											<div className='text-center'>
												<div className='text-4xl text-center'>{book?.volumeInfo?.title}</div>
												<div className='text-lg mt-10 '>{book?.volumeInfo?.description?.replace(/<[^>]*>/g)}</div>
												<div className='text-center text-lg mt-7'>{book?.volumeInfo?.authors?.map((author: any) => author + ', ')}</div>
												<div className='text-center mt-1 text-lg'>{book?.volumeInfo?.publishedDate}</div>
											</div>
										</div>
									</div>
								</div>
							</div>

						</>
					}
				</>
			}
		</>
	);
}
export default SingleBookPage;