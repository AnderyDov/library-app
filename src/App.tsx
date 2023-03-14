import withLayout from './layout/Layout';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { booksState, currentBooksState } from './store/atoms';
import { handlerFetch } from './api/handlerFetch';
import { IBook } from './interfaces/Book.interface';
import Books from './pages/Books/Books';

function App(): JSX.Element {
    // @ts-ignore
    const [books, setBooks] = useRecoilState<IBook[]>(booksState);
    const [currentBooks, setCurrentBooks] =
        // @ts-ignore
        useRecoilState<IBook[]>(currentBooksState);

    useEffect(() => {
        if (!books.length) {
            console.log(books.length);

            console.log('FETCH');
            handlerFetch(setBooks, setCurrentBooks);
        }
    }, []);

    return <Books />;
}

export default withLayout(App);
