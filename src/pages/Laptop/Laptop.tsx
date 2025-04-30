import { MacBook } from '../../components/Cards/MacBook/MacBook'
import { Filtering } from '../../components/Filtering/Filtering'
import { Sorting } from '../../components/Sorting/Sorting'
import globalStyles from '../../index.module.css'
import styles from './Laptop.module.css'

export function Laptop(){
    return(
        <main className={`${globalStyles.flex} ${globalStyles.container} ${styles.product}`}>
            <section>
                <h2 className={styles.productTitle}>Ноутбуки</h2>

            
            <Filtering />

            </section>
            <section className={styles.cards}>
                    <Sorting />

                    <div className={`${globalStyles.flex} ${styles.cardsBlock}`}>
                    <MacBook extraClass={styles.specialMagicPad} />
                    <MacBook extraClass={styles.specialMagicPad} />
                    <MacBook extraClass={styles.specialMagicPad} />

                    <MacBook extraClass={styles.specialMagicPad} />

                    <MacBook extraClass={styles.specialMagicPad} />

                    <MacBook extraClass={styles.specialMagicPad} />

                    <MacBook extraClass={styles.specialMagicPad} />

                    <MacBook extraClass={styles.specialMagicPad} />

                    <MacBook extraClass={styles.specialMagicPad} />

                    <MacBook extraClass={styles.specialMagicPad} />

                    <MacBook extraClass={styles.specialMagicPad} />

                    <MacBook extraClass={styles.specialMagicPad} />

                    <MacBook extraClass={styles.specialMagicPad} />

                    <MacBook extraClass={styles.specialMagicPad} />

                    <MacBook extraClass={styles.specialMagicPad} />

                    </div>
            </section>
        </main>
    )
}