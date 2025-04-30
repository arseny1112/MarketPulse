import globalStyles from '../../index.module.css'
import styles from './AboutUs.module.css'
import SubtractImg from '../../assets/imgs/Subtract.png'
import partnerImg1 from '../../assets/imgs/partner1.png'
import partnerImg2 from '../../assets/imgs/partner2.png'
import partnerImg3 from '../../assets/imgs/partner3.png'
import partnerImg4 from '../../assets/imgs/partner4.png'
import partnerImg5 from '../../assets/imgs/partner5.png'
import partnerImg6 from '../../assets/imgs/partner6.png'
import partnerImg7 from '../../assets/imgs/partner7.png'
import partnerImg8 from '../../assets/imgs/partner8.png'



export function AboutUs(){
    return(
        <main>
            <section className={` ${styles.main}`}>
                <div className={styles.mainInfo}>
                <h2>О компании &lt;MarketPulse&gt;</h2> 
                <div></div>

                <p>компания MarketPulse - современный маркетплейс, 
                    специализирующийся на продаже техники, который 
                    стремится сделать процесс покупок максимально 
                    удобным и эффективным как для покупателей, 
                    так и для продавцов.</p>

                    <button>Подробнее о компании</button>
                </div>
            </section>

            <section>
                <div className={`${globalStyles.container} ${styles.about}`}>
                    <div className={styles.aboutNumbers}>
                        
                        <div className={styles.aboutNumbersElement}>
                        <div></div>
                        <p className={styles.aboutNumbersElementText}>100 000</p>
                        <p>товаров</p>
                        </div>

                        <div className={styles.aboutNumbersElement}>
                        <div></div>
                        <p className={styles.aboutNumbersElementText}>500+</p>
                        <p>отзывов</p>
                        </div>

                        <div className={styles.aboutNumbersElement}>
                        <div></div>
                        <p className={styles.aboutNumbersElementText}>80</p>
                        <p>точек</p>
                        </div>

                        <div className={styles.aboutNumbersElement}>
                        <div></div>
                        <p className={styles.aboutNumbersElementText}>56 000</p>
                        <p>клиентов</p>
                        </div>
                    </div>


                    <div className={`${styles.aboutContent} ${globalStyles.flex}`}>
                        <div className={styles.marketPulse}>
                            <h3>MarketPulse:</h3>

                            <div className={styles.marketPulseBlock}>
                                <h4>О компании MarketPulse</h4>
                                <div></div>
                                <p>MarketPulse — это современный маркетплейс, специализирующийся 
                                    на продаже техники, который стремится сделать процесс покупок
                                     максимально удобным и эффективным как для покупателей, так и
                                      для продавцов. Наша миссия заключается в обеспечении 
                                      качественного сервиса, широкого ассортимента и доступных цен, 
                                      чтобы каждый клиент мог найти именно то, что ему нужно.</p>
                            </div>

                            <div className={styles.marketPulseBlock}>
                                <h4>Чем мы занимаемся</h4>
                                <div></div>
                                <p>MarketPulse — это площадка для продажи техники, где продавцы 
                                    могут легко размещать свои товары, а покупатели — находить 
                                    лучшие предложения. Мы не только предоставляем возможность 
                                    покупки, но и создаем сообщество, где все участники могут
                                     обмениваться опытом и находить полезные советы.</p>
                            </div>

                            <div className={styles.marketPulseBlock}>
                                <h4>MarketPulse — это Ваш надежный помощник в мире 
                                    технологий. Мы уверены, что с помощью нашего 
                                    маркетплейса каждая покупка станет приятным 
                                    и беспроблемным опытом.</h4>
                                <div></div>
                                </div>

                            <div className={styles.marketPulseBlock}>
                                <h4>Группы пользователей</h4>
                                <div></div>
                                <p>Мы ориентируемся на различные группы <br /> пользователей:</p>
                                <ul>
                                    <li>Частные покупатели: Ищущие качественную и доступную технику.</li>
                                    <li>Малый и средний бизнес: Необходимая электроника для работы и бизнеса.</li>
                                    <li>Технические энтузиасты: Ищущие новейшие модели и уникальные товары.</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.advantages}>
                        <h3>Преимущества MarketPulse:</h3>

                            <div className={`${styles.advantagesBlock} ${globalStyles.flex}`}>
                                <div className={styles.advantagesSubtract}>
                                <img src={SubtractImg} alt="" />
                                <p>01</p>
                                </div>
                                <div className={styles.advantagesBlockContent}>
                                    <h4>Широкий ассортимент</h4>
                                    <p>Мы предлагаем огромный выбор техники — от 
                                        смартфонов и ноутбуков до бытовой электроники 
                                        и аксессуаров. Каждый покупатель найдет то,
                                         что ему нужно.</p>
                                </div>
                            </div>

                            <div className={`${styles.advantagesBlock} ${globalStyles.flex}`}>
                            <div className={styles.advantagesSubtract}>
                            <img src={SubtractImg} alt="" />
                                <p>02</p>
                                </div>
                                <div className={styles.advantagesBlockContent}>
                                    <h4>Конкурентные цены</h4>
                                    <p>Благодаря сотрудничеству с ведущими производителями 
                                        и поставщиками, мы можем предложить нашим клиентам
                                         выгодные цены и регулярные акции.</p>
                                </div>
                            </div>

                            <div className={`${styles.advantagesBlock} ${globalStyles.flex}`}>
                            <div className={styles.advantagesSubtract}>
                            <img src={SubtractImg} alt="" />
                                <p>03</p>
                                </div>
                                <div className={styles.advantagesBlockContent}>
                                    <h4>Удобная платформа</h4>
                                    <p>Наш маркетплейс создан с учетом потребностей пользователей, 
                                        что делает процесс покупки быстрым и интуитивно понятным.
                                         Качественная навигация и подробные фильтры помогут легко 
                                         найти нужный товар.</p>
                                </div>
                            </div>

                            <div className={`${styles.advantagesBlock} ${globalStyles.flex}`}>
                            <div className={styles.advantagesSubtract}>
                            <img src={SubtractImg} alt="" />
                                <p>04</p>
                                </div>
                                <div className={styles.advantagesBlockContent}>
                                    <h4>Надежные партнеры</h4>
                                    <p>MarketPulse сотрудничает только с проверенными 
                                        брендами и надежными поставщиками, гарантируя
                                         высокое качество товаров и обслуживания.</p>
                                </div>
                            </div>

                            <div className={`${styles.advantagesBlock} ${globalStyles.flex}`}>
                            <div className={styles.advantagesSubtract}>
                            <img src={SubtractImg} alt="" />
                                <p>05</p>
                                </div>
                                <div className={styles.advantagesBlockContent}>
                                    <h4>Клиентская поддержка</h4>
                                    <p>Наша команда профессионалов всегда готова помочь клиентам с выбором товаров, ответить на вопросы и решить любые возникающие проблемы.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className={`${styles.partners} ${globalStyles.flex}`}>
                            <div className={`${styles.partnersSect} ${globalStyles.flex}`}>
                            <h3>Партнеры</h3>
                                <button>Подробнее
                                    <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.7071 8.7071C31.0976 8.31658 31.0976 7.68341 30.7071 7.29289L24.3431 0.92893C23.9526 0.538406 23.3195 0.538406 22.9289 0.92893C22.5384 1.31945 22.5384 1.95262 22.9289 2.34314L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.7071ZM8.74228e-08 9L30 9L30 7L-8.74228e-08 7L8.74228e-08 9Z" fill="#4B4B4B"/>
                                </svg>
                                </button>

                            </div>
                                <p>В числе наших партнеров — ведущие производители электроники и
                                     техники, такие как Samsung, Apple, Sony, LG и многие другие.
                                      Мы также сотрудничаем с локальными брендами, поддерживая их 
                                      развитие и предоставляя ассортимент товаров для нашего 
                                      маркетплейса.</p>

                                <ul className={`${globalStyles.flex} ${styles.partnersList}`}>
                                    <li className={styles.partnersListItem}><img src={partnerImg1} alt="" /></li>
                                    <li className={styles.partnersListItem}><img src={partnerImg2} alt="" /></li>
                                    <li className={styles.partnersListItem}><img src={partnerImg3} alt="" /></li>
                                    <li className={styles.partnersListItem}><img src={partnerImg4} alt="" /></li>
                                    <li className={styles.partnersListItem}><img src={partnerImg5} alt="" /></li>
                                    <li className={styles.partnersListItem}><img src={partnerImg6} alt="" /></li>
                                    <li className={styles.partnersListItem}><img src={partnerImg7} alt="" /></li>
                                    <li className={styles.partnersListItem}><img src={partnerImg8} alt="" /></li>
                                </ul>      
                        </div>
                    </div>
                </div>
            </section>
            </main>
    )
}