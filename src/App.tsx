import withLayout from './layout/Layout';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { booksState, currentBooksState } from './store/atoms';
import { handlerFetch } from './api/handlerFetch';
import { Book } from './components';
import { IBook } from './interfaces/Book.interface';
import styles from './app.module.css';

function App(): JSX.Element {
    // @ts-ignore
    const [, setBooks] = useRecoilState<IBook[]>(booksState);
    const [currentBooks, setCurrentBooks] =
        // @ts-ignore
        useRecoilState<IBook[]>(currentBooksState);

    useEffect(() => {
        handlerFetch(setBooks, setCurrentBooks);
    }, []);

    return (
        <div className={styles.app}>
            {currentBooks.map((el) => {
                return (
                    <Book
                        key={el.id}
                        author={el.author}
                        book={el.book}
                        rating={el.rating}
                    />
                );
            })}
        </div>
    );
}

export default withLayout(App);
