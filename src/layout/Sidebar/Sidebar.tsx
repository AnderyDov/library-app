import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import Home from './home.svg';
import News from './news.svg';
import Events from './events.svg';
import Employy from './employy.svg';
import { Link } from 'react-router-dom';

export default function Sidebar({ className, ...props }: SidebarProps) {
    return (
        <div className={cn(className, styles.sidebar, {})} {...props}>
            <Link to='/'>
                <Home />
                <span>Главная</span>
            </Link>
            <Link to='/news'>
                <News />
                <span>Новости</span>
            </Link>
            <Link to='/employy'>
                <Employy />
                <span>Сотрудники</span>
            </Link>
            <Link to='/events'>
                <Events />
                <span>Мероприятия</span>
            </Link>
        </div>
    );
}
