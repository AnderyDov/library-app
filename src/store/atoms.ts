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
    default: '1',
});

export const searchStringState = atom({
    key: 'searchStringState',
    default: '',
});
