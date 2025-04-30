import styles from './Footer.module.css'
import LogoIcon from '../../assets/imgs/logo-footer.svg'
import globalStyles from '../../index.module.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return(
        <footer className={styles.footer}>
           <div className={`${styles.footerSection} ${globalStyles.flex}`}>
            <div className="">
            <img src={LogoIcon} alt="" />
            <p className={styles.footerText}>Подпишитесь на текстовые сообщения,
                 чтобы получать уведомления о наших
                  лучших предложениях на идеальные подарки.</p>
            </div>

                <nav className={`${styles.footerNav} ${globalStyles.flex}`}>
                    <p className={styles.footerNavItem}>Все продукты</p>
                    <Link to={'/catalog/phones'} className={styles.footerNavItem}>Смартфоны</Link>
                    <a className={styles.footerNavItem}>Часы</a>
                    <Link to={'/catalog/laptop'} className={styles.footerNavItem}>Ноутбуки</Link>
                    <Link to={'/catalog/tabs'} className={styles.footerNavItem}>Планшеты</Link>
                    <Link to={'/catalog/computers'} className={styles.footerNavItem}>Компьютеры</Link>
                    <a className={styles.footerNavItem}>Периферия для пк</a>
                    <a className={styles.footerNavItem}>Комплектующие<br /> для пк</a>
                </nav>

                <nav className={`${styles.footerNav} ${globalStyles.flex}`}>
                    <p className={styles.footerNavItem}>Мы</p>
                    <Link to={'/about-us'} className={styles.footerNavItem}>О нас</Link>
                    <a className={styles.footerNavItem}>Поддержка</a>
                </nav>

                <nav className={`${styles.footerNav} ${globalStyles.flex}`}>
                    <p className={styles.footerNavItem}>Поддержка</p>
                    <a className={styles.footerNavItem}>Руководство</a>
                    <a className={styles.footerNavItem}>Лицензирование</a>
                    <a className={styles.footerNavItem}>Изменения</a>
                    <a className={styles.footerNavItem}>Контакты</a>
                </nav>

                <nav className={`${styles.footerNav} ${globalStyles.flex}`}>
                    <p className={styles.footerNavItem}>Подпишитесь на нас</p>
                    <a className={styles.footerNavItem}>Instagram</a>
                    <a className={styles.footerNavItem}>Facebook</a>
                    <a className={styles.footerNavItem}>LinkedIn</a>
                    <a className={styles.footerNavItem}>Youtube</a>
                </nav>

           </div>
           <span className={styles.footerSpan}>© 2024 MarketPulse & Co.GG</span>
        </footer>
    )
}