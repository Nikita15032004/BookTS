import React from 'react';
import { MutatingDots } from 'react-loader-spinner'
//////////////////////////////////
function NotFoundPageSpinner() {
    return (
        <>
            <div className='flex justify-center mt-3'>
                <MutatingDots
                    height="100"
                    width="100"
                    color="#4fa94d"
                    secondaryColor='#4fa94d'
                    radius='12.5'
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </>
    );
}
export default NotFoundPageSpinner;