import styles from './User.module.css';
import { useRef } from 'react';
import { UserProps } from './User.props';
import cn from 'classnames';
import Search from './search.svg';
import Avatar from './avatar.svg';
import { useRecoilState } from 'recoil';
import { searchStringState, typeSearchState } from '../../store/atoms';

export default function User({ className, ...props }: UserProps) {
    const [typeSearch, setTypeSearch] = useRecoilState(typeSearchState);
    const [searchString, setSearchString] = useRecoilState(searchStringState);
    const debounceRef = useRef<number>();

    function handlerChangeSearch(e: any) {
        setSearchString(e.currentTarget.value);
        debunceSearch(e.currentTarget.value);
    }

    function handlerChangeType(e: {
        target: { value: string | ((currVal: string) => string) };
    }) {
        setTypeSearch(e.target.value);
    }

    function debunceSearch(value: string) {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }
        debounceRef.current = setTimeout(() => {
            if (value.length > 2) {
                console.log(value);

                // dispatch(showSearchResult({ targetString: value }));
            }
        }, 500);
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
                <span>
                    <input
                        name='radio'
                        value='1'
                        checked={typeSearch === '1' ? true : false}
                        type='radio'
                        onChange={handlerChangeType}
                    />{' '}
                    поиск по автору
                </span>
                <span>
                    <input
                        name='radio'
                        value='2'
                        checked={typeSearch === '1' ? false : true}
                        type='radio'
                        onChange={handlerChangeType}
                    />{' '}
                    поиск по названию
                </span>
            </div>
            <span className={styles.avatar}>
                <Avatar />
            </span>
        </div>
    );
}
