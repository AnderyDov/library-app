import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import Home from './home.svg';
import News from './news.svg';
import Events from './events.svg';
import Employy from './employy.svg';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ className, ...props }: SidebarProps) {
    const location = useLocation();

    return (
        <div className={cn(className, styles.sidebar, {})} {...props}>
            <Link
                className={cn({
                    [styles.active]: location.pathname === '/',
                })}
                to='/'
            >
                <Home />
                <span>Главная</span>
            </Link>
            <Link
                className={cn({
                    [styles.active]: location.pathname === '/news',
                })}
                to='/news'
            >
                <News />
                <span>Новости</span>
            </Link>
            <Link
                className={cn({
                    [styles.active]: location.pathname === '/employy',
                })}
                to='/employy'
            >
                <Employy />
                <span>Сотрудники</span>
            </Link>
            <Link
                className={cn({
                    [styles.active]: location.pathname === '/events',
                })}
                to='/events'
            >
                <Events />
                <span>Мероприятия</span>
            </Link>
        </div>
    );
}
