import React from 'react';
import { BooksOnPageSectionProps } from '../../utilities/Interfaces';
//////////////////////////////////


function BooksOnPageSection({ booksOnPage, handleBooksOnPageChanger }: BooksOnPageSectionProps) {
	return (
		<>
			<section className='mt-2'>
				<label className='text-base cursor-default'>Books on page:</label>
				<select className='cursor-pointer hover:underline border-solid rounded border border-slate-400 w-12 h-7 ml-2' value={booksOnPage} onChange={handleBooksOnPageChanger} >
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="15">15</option>
					<option value="20">20</option>
				</select>
			</section>
		</>
	);
}
export default BooksOnPageSection;