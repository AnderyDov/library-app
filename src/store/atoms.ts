import { atom } from 'recoil';

export const booksState = atom({
    key: 'booksState',
    default: [],
});

export const currentBooksState = atom({
    key: 'currentBooksState',
    default: [],
});

export const typeSearchState = atom({
    key: 'typeSearchState',
    default: 'author',
});

export const searchStringState = atom({
    key: 'searchStringState',
    default: '',
});
