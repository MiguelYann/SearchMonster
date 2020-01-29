import React from 'react'

export const Search = ({placeHolder, changeHandler}) => {
    return (
        <input className='search'
               type='search'
               placeholder={placeHolder}
               onChange={changeHandler}
        />
    );
}


