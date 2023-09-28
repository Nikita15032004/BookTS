import React from 'react';
//////////////////////////////////
export interface BooksOnPageSectionProps {
    booksOnPage: string,
    handleBooksOnPageChanger: React.ChangeEventHandler<HTMLSelectElement>,
}

export interface CategorySectionProps {
    category: string,
    handleCategoryChange: React.ChangeEventHandler<HTMLSelectElement>,
}

export interface SeacrhSectionProps {
    searchText: string,
    handleSearchTextChange: React.ChangeEventHandler<HTMLInputElement>,
    inputAnimation: string,
}

export interface GoogleBookProps {
    title: string;
    authors: string[];
    date: string;
    img: string,
    id: string;
}

export interface GoogleBook {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        publishedDate: string;
        imageLinks?: {
            thumbnail?: string;
        };
    };
}