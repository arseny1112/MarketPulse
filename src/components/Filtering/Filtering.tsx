import globalStyles from '../../index.module.css'
import styles from './Filtering.module.css'

export function Filtering(){
    return(
        <div className={``} >
                <div className={`${styles.productFilter}`}>
                <button className={`${globalStyles.flex} ${styles.productFilterSelect}`}>
                <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L12 12L2 2" stroke="#C5C5C5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Наличие в магазинах</p>
                </button>


                <div className={`${globalStyles.flex} ${styles.productFilterSelect}`}>
                <label className={styles.checkboxCustom}>
                    <input type="checkbox" />
                    <span className={styles.checkBox}></span>
                    <p>Рейтинг 4 и выше</p>
                </label>
                </div>


                    <div className={`${globalStyles.flex} ${styles.productFilterSelect}`}>
                   <label className={styles.checkboxCustom}>
                    <input type="checkbox" />
                    <span className={styles.checkBox}></span>
                        <p>Надежные модели</p>
                    </label>

                    </div>

                    <div className={`${globalStyles.flex} ${styles.productFilterSelect}`}>
                   <label className={styles.checkboxCustom}>
                    <input type="checkbox" />
                    <span className={styles.checkBox}></span>
                        <p>Есть обзор</p>
                    </label>

                    </div>

                    <button className={`${globalStyles.flex} ${styles.productFilterSelectors} ${styles.productFilterSelectorsEl}`}>
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L12 12L2 2" stroke="#C5C5C5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                        <p>Цена</p>
                    </button>

                    <button className={`${globalStyles.flex} ${styles.productFilterSelectors}`}>
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L12 12L2 2" stroke="#C5C5C5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                        <p>Акция</p>
                    </button>

                    <button className={`${globalStyles.flex} ${styles.productFilterSelectors}`}>
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L12 12L2 2" stroke="#C5C5C5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                        <p>Производитель</p>
                    </button>

                    <button className={`${globalStyles.flex} ${styles.productFilterSelectors}`}>
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L12 12L2 2" stroke="#C5C5C5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                        <p>Товар со скидкой</p>
                    </button>

                    <button className={`${globalStyles.flex} ${styles.productFilterSelectors}`}>
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L12 12L2 2" stroke="#C5C5C5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                        <p>Способ получения</p>
                    </button>

                    <button className={`${globalStyles.flex} ${styles.productFilterSelectors}`}>
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L12 12L2 2" stroke="#C5C5C5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                        <p>Рейтинг покупателей</p>
                    </button>

                    <button className={`${globalStyles.flex} ${styles.productFilterSelectors}`}>
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L12 12L2 2" stroke="#C5C5C5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                        <p>Способ получения</p>
                    </button>

                   <div className={`${globalStyles.flex} ${styles.productFilterBtns}`}>
                    <button className={styles.productFilterBtn1}>Применить</button>
                    <button className={styles.productFilterBtn2}>Сбросить</button>
                   </div>
                </div>
            </div>
    )
}