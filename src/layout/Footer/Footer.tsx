import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import Git from '../git.svg';

export default function Footer({ className, ...props }: FooterProps) {
    return (
        <footer className={cn(styles.footer, className)} {...props}>
            <span className={styles.text}>Git репозиторий проекта</span>
            <a href='https://github.com/AnderyDov/library-app' target='_blank'>
                <Git />
            </a>
        </footer>
    );
}
