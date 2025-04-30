import { MagicPad } from '../../components/Cards/MagicPad/MagicPad'
import { Filtering } from '../../components/Filtering/Filtering'
import { Sorting } from '../../components/Sorting/Sorting'
import globalStyles from '../../index.module.css'
import styles from './Tabs.module.css'

export function Tabs(){
    return(
        <main className={`${globalStyles.flex} ${globalStyles.container} ${styles.product}`}>
            <section>
                <h2 className={styles.productTitle}>Планшеты</h2>

            
            <Filtering />

            </section>
            <section className={styles.cards}>
                    <Sorting />

                    <div className={`${globalStyles.flex} ${styles.cardsBlock}`}>
                    <MagicPad extraClass={styles.specialMagicPad} />
                    <MagicPad extraClass={styles.specialMagicPad} />
                    <MagicPad extraClass={styles.specialMagicPad} />
                    <MagicPad extraClass={styles.specialMagicPad} />
                    <MagicPad extraClass={styles.specialMagicPad} />
                    <MagicPad extraClass={styles.specialMagicPad} />
                    <MagicPad extraClass={styles.specialMagicPad} />
                    <MagicPad extraClass={styles.specialMagicPad} />
                    <MagicPad extraClass={styles.specialMagicPad} />
                    <MagicPad extraClass={styles.specialMagicPad} />
                    <MagicPad extraClass={styles.specialMagicPad} />
                    <MagicPad extraClass={styles.specialMagicPad} />
                    <MagicPad extraClass={styles.specialMagicPad} />
                    <MagicPad extraClass={styles.specialMagicPad} />
                    <MagicPad extraClass={styles.specialMagicPad} />
                    </div>
            </section>
        </main>
    )
}