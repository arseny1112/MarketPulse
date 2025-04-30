import { Link } from 'react-router-dom'
import  styles from './Header.module.css'
import globalStyles from '../../index.module.css'
import LogoIcon from '../../assets/imgs/logo-header.svg'
import { useState } from 'react'
import { Search } from '../Search/Search'
import { Burger } from '../Burger/Burger'

export const Header = () => {
    const [showSearch, setShowSearch] = useState(false)

   

    return(
        <header className={globalStyles.container}>
            <div className={` ${globalStyles.flex} ${styles.header}`}>

           <Link to={'/'}>
           <img src={LogoIcon} alt="" />
           </Link>

            <Burger />
           <nav className={` ${globalStyles.flex} ${styles.headerItems}`}>
                <Link to={"/catalog"} className={styles.headerItem}>Каталог</Link>
                <Link to={'/about-us'} className={styles.headerItem}>О нас</Link>
                <Link to={'/contacts'} className={styles.headerItem}>Контакты</Link>
                <Link to={'/faq'} className={styles.headerItem}>Faq</Link>
           </nav>

           <div className={styles.headerElems}>
            <button onClick={() => setShowSearch(true) } className={styles.headerLink} >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#476CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.9999 20.9999L16.6499 16.6499" stroke="#476CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </button> 

            <Link to={'/cart'} className={styles.headerLink}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#476CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#476CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#476CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </Link>

            <Link to={'/account'} className={styles.headerLink}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 10.5C16.5 12.99 14.49 15 12 15C9.51 15 7.5 12.99 7.5 10.5C7.5 8.01 9.51 6 12 6C14.49 6 16.5 8.01 16.5 10.5Z" fill="#476CFF"/>
<path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 18.63 18.63 24 12 24C5.37 24 0 18.63 0 12C0 5.37 5.37 0 12 0C18.63 0 24 5.37 24 12ZM6 20.625C6.24 20.226 8.565 16.5 11.985 16.5C15.39 16.5 17.73 20.235 17.97 20.625C19.3648 19.6605 20.5044 18.3716 21.2909 16.8692C22.0774 15.3668 22.4872 13.6958 22.485 12C22.485 6.195 17.79 1.5 11.985 1.5C6.18 1.5 1.485 6.195 1.485 12C1.485 15.57 3.27 18.735 6 20.625Z" fill="#476CFF"/>
</svg>
            </Link>

           </div>
            </div>
            {showSearch && <Search isOpen={showSearch}/>}
        </header>
    )
}