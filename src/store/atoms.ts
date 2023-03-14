import { atom } from 'recoil';

export const booksState = atom({
    key: 'booksState',
    default: [],
});

export const currentBooksState = atom({
    key: 'currentBooksState',
    default: [],
});
