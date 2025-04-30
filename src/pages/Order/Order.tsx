import globalStyles from '../../index.module.css'
import styles from './Order.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { useOrders } from '../../contexts/OrdersContext'

export function Order(){
    const [active, setActive] = useState(1)
    const {totalPrice} = useCart()
 const {addOrder} = useOrders()
    const navigate = useNavigate()
    const {cart} = useCart()
    const [isChecked, setIsChecked] = useState(false)

    const handleConfirmOrder = () => {
        if (!isChecked) return

        const orders = cart.map((cartItem) => ({
          id: cartItem.id,
          name: cartItem.name,
          image: cartItem.image,
          description: cartItem.description, 
          newPrice: cartItem.newPrice,
          price: cartItem.price,
          quantity: cartItem.quantity,
        }));
    
        addOrder(orders);
        localStorage.setItem('orders', JSON.stringify(orders)); 
        
        navigate('/account/orders');
        localStorage.removeItem('cartItems')
      };

    return(

        <main>
            <div className={`${globalStyles.flex} ${styles.Orders}`}>

            <div className={` ${styles.order} `}>
                <Link to={'/cart'} className={`${styles.orderBackTo} ${globalStyles.flex}`}>
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 22L2.5 12L12.5 2" stroke="#C5C5C5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>  
                в корзину
                </Link>

                <h2 className={styles.orderTitle}>Оформление заказа</h2>

                <div className={`${styles.orderForm}`}>
                    <div className={`${styles.orderFormContent} ${globalStyles.flex}`}>
                    <h3>Покупатель</h3>
                    <p onClick={() => setActive(1)}
                        style={{borderBottom: active ===1 ? "1px solid rgba(71, 108, 255)" : "none"}}>Физическое лицо</p>
                    <p onClick={() => setActive(2)}
                        style={{borderBottom: active ===2 ? "1px solid rgba(71, 108, 255)" : "none"}}>Юридическое лицо</p>
                    </div>
                    <form action="" id='thisForm' className={`${globalStyles.flex} ${styles.orderFormInfo}`}>
                        <div className={` ${styles.orderFormInfoContent}`}>
                        <label htmlFor="">ФИО</label>
                        <input type="text" />
                        </div>

                        <div className={` ${styles.orderFormInfoContent}`}>
                        <label htmlFor="">Email</label>
                        <input type="email" />
                        </div>

                        <div className={` ${styles.orderFormInfoContent}`}>
                        <label htmlFor="">Телефон</label>
                        <input type="phone" name="" id="" />
                        </div>

                    </form>
                        <button form='thisForm' type='submit'>Сохранить</button>
                </div>

                <div  className={`${globalStyles.flex} ${styles.ordersDelivery}`}>
                    <div className={`${globalStyles.flex} ${styles.ordersDeliveryContent}`}>
                        <h3>Способ доставки</h3>
                        <button>Изменить</button>
                    </div>
                    <div>
                        <p className={styles.ordersDeliveryContentText}>Почта России (EMS)</p>

                        <div className={`${styles.ordersDeliveryInfo} ${globalStyles.flex}`}>
                        <div className={styles.ordersElement}>
                            <p>Индекс</p>
                            <p>Город</p>
                            <p>Стоимость доставки</p>
                            <p>Срок доставки</p>
                        </div>

                        <div className={styles.ordersElement}>
                            <p>4540000</p>
                            <p>Челябинск</p>
                            <p>692. 20 р.</p>
                            <p>от 1 до 2 раб. дней</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div className={`${globalStyles.flex} ${styles.ordersDelivery}`}>
                    <div className={`${globalStyles.flex} ${styles.ordersDeliveryContent}`}>
                    <h3>Способ оплаты</h3>
                    <button>Изменить</button>
                    </div>
                    <p className={styles.ordersDeliveryText}>Яндекс Деньги</p>
                </div>
            </div>


            <div className="">

            <div className={`${globalStyles.flex} ${styles.createOrder}`}>
              
                <div className={`${globalStyles.flex} ${styles.createOrderBlock}`}>
                <p>Покупатель</p>
                    <p>{totalPrice.toLocaleString("ru-RU")} р.</p>
                </div>

                <div className={styles.createOrderBlock2}>

                    <div className={styles.createOrderInput}>
                    <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.2071 8.70711C26.5976 8.31658 26.5976 7.68342 26.2071 7.29289L19.8431 0.928932C19.4526 0.538408 18.8195 0.538408 18.4289 0.928932C18.0384 1.31946 18.0384 1.95262 18.4289 2.34315L24.0858 8L18.4289 13.6569C18.0384 14.0474 18.0384 14.6805 18.4289 15.0711C18.8195 15.4616 19.4526 15.4616 19.8431 15.0711L26.2071 8.70711ZM0.5 9H25.5V7H0.5V9Z" fill="black"/>
                    </svg>
                    <input type="text" placeholder='Есть промокод?' name="" id="" />

                    </div>
                    
                    <div className={`${globalStyles.flex} ${styles.createOrderBlock3}`}>
                    <p>Доставка:</p>
                    <p>Почта России (EMS)</p>
                    </div>

                    <p className={styles.createOrderText}>от 1 до 2 раб. дней</p>

                    <div className={`${globalStyles.flex} ${styles.createOrderBlock3}`}>
                        <p>Оплата:</p>
                        <p>Яндекс Деньги</p>
                    </div>

                </div>
                <button disabled={!isChecked} onClick={handleConfirmOrder} type='submit' className={styles.createOrderBtn}>Оформить заказ</button>
            </div>

            <div className={`${globalStyles.flex} ${styles.orderAgreement}`}>
                <label className={`${styles.checkboxCustom} ${globalStyles.flex}`}>
                    <input checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} type="checkbox" required/>
                    <span className={styles.checkBox}></span>
                    <p>
            Нажимая на кнопку, вы соглашаетесь на 

            <span className={styles.colorized}> <br />
             обработку персональных данных
            </span> и <span className={styles.colorized}>

             с публичной офертой
             </span>
            </p>
                </label>
                </div>

            </div>
            </div>

        </main>
    )
}