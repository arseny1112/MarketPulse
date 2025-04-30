import { Outlet } from 'react-router-dom'
import globalStyles from '../../index.module.css'
import styles from './Account.module.css'
import { Nav } from './Nav/Nav'
import { useLocation } from 'react-router-dom'

export function Account(){
        const location = useLocation();
    
        const titles: Record<string, string> = {
            '/account/orders': 'Мои заказы',
            '/account/favorites': 'Избранное',
            '/account/settings': 'Настройки профиля',
        };
    
        const title = titles[location.pathname] || 'Настройки профиля';

    return(
        <main>
            <div className={`${globalStyles.container} ${styles.account}`}>
            <h2 className={styles.accountTitle}>{title}</h2>
            <div className={`${globalStyles.flex} ${styles.accountContent}`}>
                    <Nav />
                    <Outlet /> 
                    
                </div>
            </div>
        </main>
    )
}
