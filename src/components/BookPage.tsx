import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleBookProps } from '../utilities/Interfaces';





function BookPage({ title, authors, date, img, id }: GoogleBookProps) {
	const navigate = useNavigate() as any;
	const cardClickHandler = () => {
		navigate(`/books/${id}`)
	}

	return (
		<>
			<li className='flex grow-0 shrink basis-[100%] md:basis-[50%] lg:basis-[33.333333%] xl:basis-[25%] px-[1.25rem] flex-nowrap mb-10'>
				<div onClick={cardClickHandler} className='flex flex-col w-full justify-between bg-slate-100 shadow-3xl rounded-lg border-solid border border-slate-300 transform transition-all hover:scale-[1.03] hover:shadow-sm hover:border-slate-400 cursor-pointer'>
					<div className='grow-0 shrink-1 basis-auto'>
						<div className='mx-auto w-44 h-64  relative pt-[36.25%] flex justify-center overflow-hidden p-1 md:pt-[56.25%] border-solid border-2 border-sky-500 rounded-lg'>
							<img className='absolute left-0 top-0 w-full h-auto min-h-full max-h-full shadow-2xl' src={img} alt=''></img>
						</div>
						<div className=' text-2xl mt-2 line-clamp-2 px-5 text-center'>
							{title}
						</div>
					</div>
					<div className='mt-2'>
						<p className='text-center text-base line-clamp-2 px-5'>{authors?.map((author: any) => author + ', ')}</p>
						<p className='text-center text-sm mt-1 line-clamp-1 px-5'>{date}</p>
					</div>
				</div>
			</li>
		</>
	);
}

export default BookPage;