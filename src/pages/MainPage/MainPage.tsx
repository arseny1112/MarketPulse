import globalStyles from '../../index.module.css'
import styles from './MainPage.module.css'
import { Link } from 'react-router-dom'
import { MacBook } from '../../components/Cards/MacBook/MacBook'
import { MagicBook } from '../../components/Cards/MagicBook/MagicBook'
import { Watch } from '../../components/Cards/Watch/Watch'
import { IPad } from '../../components/Cards/IPad/IPad'
import TheBestImg1 from '../../assets/imgs/TheBest-1.png'
import TheBestImg2 from '../../assets/imgs/TheBest-2.png'
import TheBestImg3 from '../../assets/imgs/TheBest-3.png'
import  Ideas from '../../assets/imgs/ideas.png'
import {Search} from '../../components/Search/Search'
import subscribeImg from '../../assets/imgs/subscribe.png'

export function MainPage(){
    return(
        <main className={styles.main}>
            <section className={`${globalStyles.container}`}>
                <div className={`${styles.swiper} `}>

                <div className={`  ${globalStyles.flex}`}>
                    <button className={styles.arrow}>
                    <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 25L1 13L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    </button>
                    <div className={styles.swiperContent}>
                        <h1 className={styles.swiperContentTitle}>Превосходный цвет, лучшая покупка</h1>
                        <p className={styles.swiperContentText}>Посмотрите выпущенные новинки только от лучший производителей!</p>
                        <Link to={'/'} className={styles.swiperBtn}>Посмотреть</Link>
                    </div>
                    <button className={styles.arrow}>
                        <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13L1 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
                </div>
                <div className={`${globalStyles.flex} ${styles.swiperLines}`}>
                    <span className={styles.swiperLine}></span>
                    <span className={styles.swiperLine}></span>
                    <span className={styles.swiperLine}></span>
                </div>
                </div>
            </section>

            <section>
            <div className={`${globalStyles.container} ${globalStyles.flex} ${styles.offers}`}>
  <h2 className={styles.offersTitle}>Наши последние предложения и акции</h2>
  <p className={styles.offersText}>Не упустите шанс! В нашем магазине действуют 
    последние предложения и акции, которые помогут вам 
    сэкономить и получить больше за ваши деньги!</p>

  <div className={`${styles.offersBlocks} ${globalStyles.flex}`}>
  <div className="">
    
    <div className={styles.offersBlock}>
      <span>Ноутбуки</span>
      <p>Решение для ноутбуков</p>
    </div>

    <div className={styles.offersBlock}>
      <span>Часы</span>
      <p>Стильно модно</p>
    </div>
    </div>

    <div className={` ${styles.offersPhone}`}>
      <span>Телефоны</span>
      <p>Повседневные решения</p>
    </div>

    <div className={styles.offersBlock}>
      <span>Планшеты</span>
      <p>Расширь возможность работы</p>
    </div>
  </div>
</div>
            </section>

            <section>
                <div className={`${globalStyles.container} ${styles.products} ${globalStyles.flex}`}>
                    <h2 className={styles.productsTitle}>Экономьте на наших самых продаваемых товарах.</h2>
                    <p className={styles.productsText}>Только сейчас вы можете приобрести товары по 
                        невероятно низким ценам. Спешите, количество ограничено!</p>

                <div className={`${styles.cards} ${globalStyles.flex}`}>
              <MacBook extraClass={styles.specialMagicPad}/> 
                <MagicBook />
                    <Watch />
                    <IPad />
                </div>

                <button className={styles.productsBtn}>Смотреть больше</button>
                </div>
            </section>

            <section>
              <div className={`${globalStyles.container} ${styles.TheBest} ${globalStyles.flex}`}>
                <h2 className={styles.TheBestTitle}>Лучшие из лучших</h2>
                <p className={styles.TheBestText}>Лучшие решения и лимитированные версии</p>

                <div className={`${styles.TheBestCards} ${globalStyles.flex}`}>

                  <div className={styles.TheBestCard}>
                    <span>новости</span>
                    <p>Последние и лучшие</p>
                    <Link to={'#'} className={styles.TheBestBtn}>Перейти</Link>
                    <img src={TheBestImg1} alt="" />
                  </div>

                  <div className={styles.TheBestCard}>
                    <span>предложения</span>
                    <p>Лучшая покупка</p>
                    <Link to={'#'} className={styles.TheBestBtn}>Перейти</Link>
                    <img src={TheBestImg2} alt="" />
                  </div>

                  <div className={styles.TheBestCard}>
                    <span>товары</span>
                    <p>Новинки</p>
                    <Link to={'#'} className={styles.TheBestBtn}>Перейти</Link>
                    <img src={TheBestImg3} alt="" />
                  </div>
                </div>
              </div>
            </section>
            
            <section>
            <div className={`${globalStyles.container} ${styles.ideas} ${globalStyles.flex}`}>

            <h2 className={styles.ideasTitle}>Идеи появляются здесь</h2>
            <p className={styles.ideasText}>Идеи и предложения для нашего магазина</p>

              <div className={`${styles.ideasContent} ${globalStyles.flex}`}>
                <img src={Ideas} alt="" />
                <div className={styles.ideasContentText}>
                <p>Персонализированные рекомендации...</p>
                <p>Программа лояльности...</p>
                <p>Отзывы и рейтинги...</p>
                <p>Упрощенный процесс возврата...</p>
                <p>Виртуальные примерочные...</p>
                </div>
              </div>
              <Link to={'#'} className={`${styles.ideasLink} ${globalStyles.flex}`}>
              Все идеи
              <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.31458 20.9816L21.9443 7.32715" stroke="#151A1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.31458 7.32715H21.9443V20.9816" stroke="#151A1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

              </Link>
              </div>
            </section>

            <section>
              <div className={`${globalStyles.container} ${styles.find} ${globalStyles.flex}`}>
              <h2 className={styles.fintTitle}>Ищете что-нибудь еще?</h2>
                <Search isOpen/>
              </div>
            </section>

            <section>
              <div className={` ${globalStyles.container} ${globalStyles.flex} ${styles.sb}`}>
                <div className={`${styles.subscribe}  ${globalStyles.flex}`}>

                <h3 className={styles.subscribeTitle}>Никогда ничего не пропустите</h3>
                <p className={styles.subscribeText}>Подпишитесь на текстовые сообщения, чтобы получать уведомления 
                  о наших лучших предложениях на идеальные подарки.</p>
                  <img src={subscribeImg} className={styles.subscribeImg} alt="" />
                  <form className="">
                    <input className={styles.subscribeInput} type="email" name="" id="" placeholder='Почта'/>
                    <button className={styles.subscribeBtn} type='submit' >Подписаться</button>
                  </form>
                </div>
              </div>
            </section>
        </main>
    )
}