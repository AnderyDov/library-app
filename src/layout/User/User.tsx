import styles from './User.module.css';
import { UserProps } from './User.props';
import cn from 'classnames';
import Search from './search.svg';
import Avatar from './avatar.svg';

export default function User({ className, ...props }: UserProps) {
    return (
        <div className={cn(className, styles.user)} {...props}>
            <div className={styles.search}>
                <input type='text' />
                <Search />
            </div>
            <span className={styles.avatar}>
                <Avatar />
            </span>
        </div>
    );
}
