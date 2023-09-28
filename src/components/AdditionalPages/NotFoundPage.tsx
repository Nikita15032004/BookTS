import React from 'react';
import NotFoundPageSpinner from '../../UI/NotFoundPageSpinner';
import { useNavigate } from 'react-router-dom';
//////////////////////////////////
function NotFoundPage() {
    const navigate = useNavigate() as any;
    const backHandler = () => {
        navigate('/ ');
    }
    return (
        <>
            <div className='mx-5'>
                <div className='text-4xl text-red-400 text-center mt-16'>Page not found!</div>
                <div onClick={backHandler} className='flex justify-center mt-5'><button className='py-3 px-4 bg-teal-800 hover:bg-teal-600 transition duration-300 ease-linear rounded-md text-base text-white'>Go Home</button></div>
                <NotFoundPageSpinner />
            </div>
        </>
    );
}
export default NotFoundPage;