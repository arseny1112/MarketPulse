import { useState } from 'react';
import styles from './Burger.module.css'
import { Link } from 'react-router-dom';




export function Burger(){
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen((prev) => !prev)

    return(
        <div className={styles.burgerContainer}>
            <button className={styles.burgerButton} onClick={toggleMenu}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </button>

            <nav className={`${styles.menu} ${isOpen ? styles.show : ''}`}>
            <Link to={"/catalog"} onClick={toggleMenu} className={styles.headerItem}>Каталог</Link>
                <Link to={'/about-us'} onClick={toggleMenu} className={styles.headerItem}>О нас</Link>
                <Link to={'/contacts'} onClick={toggleMenu} className={styles.headerItem}>Контакты</Link>
                <Link to={'/faq'} onClick={toggleMenu} className={styles.headerItem}>Faq</Link>
            </nav>
        </div>  
    )
}