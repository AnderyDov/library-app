import styles from './User.module.css';
import { useRef } from 'react';
import { UserProps } from './User.props';
import cn from 'classnames';
import Search from './search.svg';
import Avatar from './avatar.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    // searchStringState,
    typeSearchState,
    currentBooksState,
    booksState,
} from '../../store/atoms';
import { IBook } from '../../interfaces/Book.interface';

export default function User({ className, ...props }: UserProps) {
    const [typeSearch, setTypeSearch] = useRecoilState(typeSearchState);
    // const [searchString, setSearchString] = useRecoilState(searchStringState);
    const [currentBooks, setCurrentBooks] = useRecoilState(currentBooksState);
    const books = useRecoilValue(booksState);
    const debounceRef = useRef<number>();

    function handlerChangeSearch(e: any) {
        // setSearchString(e.currentTarget.value);
        debunceSearch(e.currentTarget.value);
        if (e.target.value.length === 0) {
            setCurrentBooks(books);
        }
    }

    function handlerChangeType(e: any) {
        setTypeSearch(e.target.value);
    }

    function debunceSearch(value: string) {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }
        debounceRef.current = setTimeout(() => {
            if (value.length > 2) {
                console.log(value);
                showResultsSearch(typeSearch, value);
            }
        }, 500);
    }

    function showResultsSearch(type: string, searchString: string) {
        let rex = new RegExp(searchString, 'i');
        let result: IBook[] = [];
        currentBooks.forEach((el) => {
            if (rex.test(el[type])) {
                result.push(el);
            }
        });
        // @ts-ignore
        setCurrentBooks(result);
    }

    return (
        <div className={cn(className, styles.user)} {...props}>
            <div className={styles.search}>
                <Search />
                <input
                    className={styles.searchText}
                    type='text'
                    onChange={handlerChangeSearch}
                />
                <label>
                    <input
                        name='radio'
                        type='radio'
                        value='author'
                        checked={typeSearch === 'author' ? true : false}
                        onChange={(e) => handlerChangeType(e)}
                    />{' '}
                    поиск по автору
                </label>
                <label>
                    <input
                        name='radio'
                        type='radio'
                        value='book'
                        checked={typeSearch === 'book' ? true : false}
                        onChange={(e) => handlerChangeType(e)}
                    />{' '}
                    поиск по названию
                </label>
            </div>
            <span className={styles.avatar}>
                <Avatar />
            </span>
        </div>
    );
}
