import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import Home from './home.svg';
import News from './news.svg';
import Events from './events.svg';
import Employy from './employy.svg';

export default function Sidebar({ className, ...props }: SidebarProps) {
    return (
        <div className={cn(className, styles.sidebar, {})} {...props}>
            <a href='/'>
                <Home />
                <span>Главная</span>
            </a>
            <a href='/news'>
                <News />
                <span>Новости</span>
            </a>
            <a href='/employees'>
                <Employy />
                <span>Сотрудники</span>
            </a>
            <a href='/events'>
                <Events />
                <span>Мероприятия</span>
            </a>
        </div>
    );
}
