import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import Logo from '../logo.svg';

export default function Header({ className, ...props }: HeaderProps) {
    return (
        <header className={cn(className, styles.header)} {...props}>
            <a href='/' className={styles.logo}>
                <Logo />
            </a>
            <span className={styles.title}>Корпоративная библиотека</span>
        </header>
    );
}
