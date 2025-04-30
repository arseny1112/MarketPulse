import globalStyles from '../../index.module.css'
import styles from './FAQ.module.css'
import faqSvg from '../../assets/imgs/faq.svg'

export function FAQ(){
    return(
        <main>
           <section>
            <div className={`${globalStyles.flex} ${globalStyles.container} ${styles.faqSection}`}>
                <h2>F.A.Q</h2>
                <p>популярные вопросы и ответы</p>
            </div>
           </section>

           <section>
            <div className={`${globalStyles.container} ${styles.mainBlock} ${globalStyles.flex}`}>

                <div className={styles.questions}>
                    <button className={`${globalStyles.flex} ${styles.questionsItem}`}>
                        <p>Есть ли ограничения в покупках?</p>
                        <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.5827 20.5801H21.0827V30.0801H17.916V20.5801H8.41602V17.4135H17.916V7.91345H21.0827V17.4135H30.5827V20.5801Z" fill="#4B4B4B"/>
                    </svg>

                    </button>
                    <button className={`${globalStyles.flex} ${styles.questionsItem}`}>
                        <p>Я могу дать скидку своему знакомому?</p>
                        <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5827 20.5801H21.0827V30.0801H17.916V20.5801H8.41602V17.4135H17.916V7.91345H21.0827V17.4135H30.5827V20.5801Z" fill="#4B4B4B"/>
                        </svg>

                    </button>
                    <button className={`${globalStyles.flex} ${styles.questionsItem}`}>
                        <p>Что делать после регистрации?</p>
                        <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5827 20.5801H21.0827V30.0801H17.916V20.5801H8.41602V17.4135H17.916V7.91345H21.0827V17.4135H30.5827V20.5801Z" fill="#4B4B4B"/>
                        </svg>

                    </button>
                    <button className={`${globalStyles.flex} ${styles.questionsItem}`}>
                        <p>Что делать, если промокод не приняли?</p>
                        <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5827 20.5801H21.0827V30.0801H17.916V20.5801H8.41602V17.4135H17.916V7.91345H21.0827V17.4135H30.5827V20.5801Z" fill="#4B4B4B"/>
                        </svg>

                    </button>
                    <button className={`${globalStyles.flex} ${styles.questionsItem}`}>
                        <p>Есть ли срок действия прмоокода?</p>
                        <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5827 20.5801H21.0827V30.0801H17.916V20.5801H8.41602V17.4135H17.916V7.91345H21.0827V17.4135H30.5827V20.5801Z" fill="#4B4B4B"/>
                        </svg>

                    </button>
                </div>

                <div className={styles.faqSection2}>
                    <h3>Остались вопросы? Задай их в чате!</h3>
                    <p>Напиши на в телеграм. Наш специалист ответит Вам через несколько минут</p>
                    <img src={faqSvg} alt="" />
                </div>

            </div>
           </section>
        </main>
    )
}