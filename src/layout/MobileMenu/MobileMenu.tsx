import { MobileMenuProps } from './MobileMenu.props';
import styles from './MobileMenu.module.css';
import Arrow from './arrow.svg';
import Close from './close.svg';
import { useRecoilState } from 'recoil';
import { openMenuState } from '../../store/atoms';
import cn from 'classnames';
import Home from './home.svg';
import News from './news.svg';
import Events from './events.svg';
import Employy from './employy.svg';
import { Link, useLocation } from 'react-router-dom';

export default function MobileMenu({
    className,
    ...props
}: MobileMenuProps): JSX.Element {
    const [open, setOpen] = useRecoilState(openMenuState);
    const location = useLocation();

    function handlerOpenMenu() {
        setOpen(!open);
    }

    return (
        <div
            className={cn(styles.menu, {
                [styles.open]: open,
            })}
            {...props}
        >
            {open ? (
                <>
                    <div className={styles.icon} onClick={handlerOpenMenu}>
                        <Close />
                    </div>
                    <Link
                        className={cn(styles.icon, {
                            [styles.active]: location.pathname === '/',
                        })}
                        to='/'
                    >
                        <Home />
                    </Link>
                    <Link
                        className={cn(styles.icon, {
                            [styles.active]: location.pathname === '/news',
                        })}
                        to='/news'
                    >
                        <News />
                    </Link>
                    <Link
                        className={cn(styles.icon, {
                            [styles.active]: location.pathname === '/employy',
                        })}
                        to='/employy'
                    >
                        <Employy />
                    </Link>
                    <Link
                        className={cn(styles.icon, {
                            [styles.active]: location.pathname === '/events',
                        })}
                        to='/events'
                    >
                        <Events />
                    </Link>
                </>
            ) : (
                <div className={styles.icon} onClick={handlerOpenMenu}>
                    <Arrow />
                </div>
            )}
        </div>
    );
}
