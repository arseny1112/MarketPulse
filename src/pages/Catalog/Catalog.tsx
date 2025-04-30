import globalStyles from '../../index.module.css'
import styles from './Catalog.module.css'
import macBookImg from '../../assets/imgs/MacBook.jpg'
import IphoneImg from '../../assets/imgs/Iphone.png'
import computerImg from '../../assets/imgs/computer.png'
import tabImg from '../../assets/imgs/tab.png'
import { Link } from 'react-router-dom'

export function Catalog(){
    return(
        <main>
            <div className={`${globalStyles.flex} ${globalStyles.container} ${styles.catalog}`}>
                <h2 className={styles.catalogTitle}>Каталог товаров</h2>

                <section className={`${globalStyles.flex} ${styles.catalogSect}`}>
                    
                    <Link to={'/catalog/laptop'} className={styles.catalogFirstBlock}>
                        <img className={styles.catalogCardImg} src={macBookImg} alt="" />
                        <p className={styles.catalogCardText}>Ноутбуки</p>
                    </Link>

                    <Link to={'/catalog/phones'} className={styles.catalogFirstBlock}>
                        <img className={styles.catalogCardImg} src={IphoneImg} alt="" />
                        <p className={styles.catalogCardText}>Смартфоны</p>
                    </Link>

                </section>
                <section className={`${globalStyles.flex} ${styles.catalogSect}`}>

                    <Link to={'/catalog/computers'} className={styles.catalogCard}>
                        <img className={styles.catalogCardImg} src={computerImg} alt="" />
                        <p className={styles.catalogCardText}>Компьютеры</p>
                    </Link>

                    <Link to={'/catalog/tabs'} className={styles.catalogCard}>
                        <img className={styles.catalogCardImg} src={tabImg} alt="" />
                        <p className={styles.catalogCardText}>Планшеты</p>
                    </Link>
                </section>
            </div>
        </main>
    )
}