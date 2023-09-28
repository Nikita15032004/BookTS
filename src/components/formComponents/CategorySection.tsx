import React from 'react';
import { CategorySectionProps } from '../../utilities/Interfaces';
//////////////////////////////////

function CategorySection({ category, handleCategoryChange }: CategorySectionProps) {
	return (
		<>
			<section className='flex flex-col mt-2'>
				<label className='text-base inline-block shrink-0 self-start cursor-default' >
					Choose category:
				</label>
				<select
					className='border-solid rounded border-2 border-sky-500 max-[460px]:w-72 w-96 h-12 shadow-xl mt-1 hover:bg-slate-300 transition duration-300 ease-in-out hover:cursor-pointer'
					value={category}
					onChange={handleCategoryChange}
				>
					<option value='all'>All</option>
					<option value='computers'>Computers</option>
					<option value='history'>History</option>
					<option value='fiction'>Fiction</option>
				</select>
			</section>
		</>
	);
}
export default CategorySection;