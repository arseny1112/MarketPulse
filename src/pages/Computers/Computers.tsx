import { Raskat } from '../../components/Cards/Raskat/Raskat'
import { Filtering } from '../../components/Filtering/Filtering'
import { Sorting } from '../../components/Sorting/Sorting'
import globalStyles from '../../index.module.css'
import styles from './Computers.module.css'

export function Computers(){
    return(
        <main className={`${globalStyles.flex} ${globalStyles.container} ${styles.product}`}>
            <section>
                <h2 className={styles.productTitle}>Компьютеры</h2>

            
            <Filtering />

            </section>
            <section className={styles.cards}>
                    <Sorting />

                    <div className={`${globalStyles.flex} ${styles.cardsBlock}`}>
                   <Raskat extraClass={styles.specialMagicPad}/>
                   <Raskat extraClass={styles.specialMagicPad}/>
                   <Raskat extraClass={styles.specialMagicPad}/>
                   <Raskat extraClass={styles.specialMagicPad}/>
                   <Raskat extraClass={styles.specialMagicPad}/>
                   <Raskat extraClass={styles.specialMagicPad}/>
                   <Raskat extraClass={styles.specialMagicPad}/>
                   <Raskat extraClass={styles.specialMagicPad}/>
                   <Raskat extraClass={styles.specialMagicPad}/>
                   <Raskat extraClass={styles.specialMagicPad}/>
                   <Raskat extraClass={styles.specialMagicPad}/>
                   <Raskat extraClass={styles.specialMagicPad}/>
                   <Raskat extraClass={styles.specialMagicPad}/>
                   <Raskat extraClass={styles.specialMagicPad}/>
                   <Raskat extraClass={styles.specialMagicPad}/>
                    </div>
            </section>
        </main>
    )
}