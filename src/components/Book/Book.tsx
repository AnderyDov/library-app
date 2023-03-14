import { BookProps } from './Book.props';
import styles from './Book.module.css';
import { getRandomInt } from '../../helpers/helpers';

export function Book({
    author,
    book,
    rating,
    ...props
}: BookProps): JSX.Element {
    return (
        <div className={styles.book} {...props}>
            <img src={`/public/img/book${getRandomInt(1, 15)}.png`} alt='' />
            <span>{author}</span>
            <h4>{book}</h4>
            <span>{rating}</span>
        </div>
    );
}
