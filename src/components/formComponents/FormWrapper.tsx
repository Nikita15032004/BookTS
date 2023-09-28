import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchActions } from '../../store/searchSlice';
import SeacrhSection from './SeacrhSection';
import CategorySection from './CategorySection';
import BooksOnPageSection from './BooksOnPageSection';
//////////////////////////////////
function FormWrapper() {
    const dispatch = useDispatch() as any;
    const navigate = useNavigate() as any;
    const location = useLocation() as any;
    const searchParams: any = new URLSearchParams(location.search);

    const [isFrirstRender, setIsFrirstRender] = useState<boolean>(true);
    const [searchText, setSearchText] = useState<string>(searchParams.get('search') || '');
    const [category, setCategory] = useState<string>(searchParams.get('category') || 'all');
    const [booksLimit, setBooksLimit] = useState<string>(searchParams.get('booksLimit') || '20');



    const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue: string = e.target.value;
        setSearchText((prevValue: string) => searchValue);
        dispatch(searchActions.setCurrentPage(1));
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const categoryValue: string = e.target.value;
        setCategory((prevValue: string) => categoryValue);
        dispatch(searchActions.setCurrentPage(1));
    };

    const handleBooksOnPageChanger = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const stringValue: string = e.target.value;
        setBooksLimit((prevValue: string) => stringValue);
        dispatch(searchActions.setCurrentPage(1));

    }

    useEffect(() => {
        if (searchText.trim() === '') {
            if (isFrirstRender) {
                setIsFrirstRender((prevValue: boolean) => false);
                return;
            }
        }
        navigate(`/?search=${searchText}&category=${category}&booksLimit=${booksLimit}`);
    }, [searchText, category, booksLimit])

    const inputAnimation: string = !searchText ? 'animate-pulse' : '';
    return (
        <>
            <div className='min-h-full flex flex-col'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <fieldset className='flex flex-col items-center mt-9 '>
                        <div className='text-4xl font-sans sm:text-5xl'>Find Your Book</div>
                        <SeacrhSection searchText={searchText} handleSearchTextChange={handleSearchTextChange} inputAnimation={inputAnimation} />
                        <CategorySection category={category} handleCategoryChange={handleCategoryChange} />
                        <BooksOnPageSection booksOnPage={booksLimit} handleBooksOnPageChanger={handleBooksOnPageChanger} />
                    </fieldset>
                </form >
                <Outlet></Outlet>
            </div>
        </>
    );
}
export default FormWrapper;