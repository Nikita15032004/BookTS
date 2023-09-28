import React from 'react';
import { SeacrhSectionProps } from '../../utilities/Interfaces';
//////////////////////////////////

function SeacrhSection({ searchText, handleSearchTextChange, inputAnimation }: SeacrhSectionProps) {
	return (
		<>
			<section className='flex flex-col mt-4'>
				<label className='text-base inline-block shrink-0 self-start' htmlFor='searchInput'>
					Enter the text:
				</label>
				<input					
					className={`border-solid rounded border-2 border-sky-500 max-[460px]:w-72 w-96 h-12 focus:border-sky-700 shadow-xl mt-1 ${inputAnimation}`}
					id='searchInput'
					placeholder='Type the name'
					type='text'
					value={searchText}
					onChange={handleSearchTextChange}
				></input>
			</section>
		</>
	);
}
export default SeacrhSection;