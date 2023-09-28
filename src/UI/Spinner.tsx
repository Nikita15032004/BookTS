import React from 'react';
import { Dna } from 'react-loader-spinner'
//////////////////////////////////
function Spinner() {
    return (
        <>
            <div className='flex justify-center mt-12 text-xl'>
                <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            </div>
        </>
    );
}
export default Spinner;