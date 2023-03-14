import { BooksProps } from './Books.props';
import styles from './Books.module.css';
import { useRecoilValue } from 'recoil';
import { currentBooksState } from '../../store/atoms';
import { Book } from '../../components';
import { IBook } from '../../interfaces/Book.interface';

export default function Books({ ...props }: BooksProps): JSX.Element {
    const currentBooks = useRecoilValue<IBook[]>(currentBooksState);

    return (
        <div className={styles.books} {...props}>
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

// withLayout(Books);
