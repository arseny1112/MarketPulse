import { Iphone } from '../../components/Cards/Iphone/Iphone'
import { Filtering } from '../../components/Filtering/Filtering'
import { Sorting } from '../../components/Sorting/Sorting'
import globalStyles from '../../index.module.css'
import styles from './Phones.module.css'

export function Phones(){
    return(
        <main className={`${globalStyles.flex} ${globalStyles.container} ${styles.product}`}>
            <section>
                <h2 className={styles.productTitle}>Смартфоны</h2>

            
            <Filtering />

            </section>
            <section className={styles.cards}>
                    <Sorting />

                    <div className={`${globalStyles.flex} ${styles.cardsBlock}`}>
                   <Iphone extraClass={styles.specialMagicPad}/>
                   <Iphone extraClass={styles.specialMagicPad}/>
                   <Iphone extraClass={styles.specialMagicPad}/>
                   <Iphone extraClass={styles.specialMagicPad}/>
                   <Iphone extraClass={styles.specialMagicPad}/>
                   <Iphone extraClass={styles.specialMagicPad}/>
                   <Iphone extraClass={styles.specialMagicPad}/>
                   <Iphone extraClass={styles.specialMagicPad}/>
                   <Iphone extraClass={styles.specialMagicPad}/>
                   <Iphone extraClass={styles.specialMagicPad}/>
                   <Iphone extraClass={styles.specialMagicPad}/>
                   <Iphone extraClass={styles.specialMagicPad}/>
                   <Iphone extraClass={styles.specialMagicPad}/>
                   <Iphone extraClass={styles.specialMagicPad}/>
                   <Iphone extraClass={styles.specialMagicPad}/>
                    </div>
            </section>
        </main>
    )
}