import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import Logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function Header({ className, ...props }: HeaderProps) {
    return (
        <header className={cn(className, styles.header)} {...props}>
            <Link to='/' className={styles.logo}>
                <Logo />
            </Link>
            <span className={styles.title}>Корпоративная библиотека</span>
        </header>
    );
}
