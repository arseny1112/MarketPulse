import styles from './Cart.module.css';
import globalStyles from '../../index.module.css';
import { useCart } from '../../contexts/CartContext';
import { Thunderobot } from '../../components/Cards/Thunderobot/ThunderBoot';
import { MagicPad } from '../../components/Cards/MagicPad/MagicPad';
import { Iphone } from '../../components/Cards/Iphone/Iphone';
import { Raskat } from '../../components/Cards/Raskat/Raskat';
import { Link } from 'react-router-dom';

export function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleRemove = (productId: number) => {
    removeFromCart(productId); 
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    if (quantity < 1) return; 
    updateQuantity(productId, quantity);
  };

  const totalPrice = cart.reduce((total, item) => total + (item.newPrice * (item.quantity || 1)), 0);

  return (
    <main>
      <section className={`${globalStyles.container} ${globalStyles.flex} ${styles.cart}`}>
        <div className={styles.cartGoods}>
        <h2 className={styles.cartTitle}>Ваша корзина заказов</h2>

        <ul>
          {cart.map((item) => (
            <li key={item.id} className={`${styles.cartElement} ${globalStyles.flex}`}>
              <button onClick={() => handleRemove(item.id)}>
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.2038 7.0625H23.4375C24.1835 7.0625 24.8988 7.35882 25.4263 7.88626C25.9537 8.41371 26.25 9.12908 26.25 9.875V21.125C26.25 21.8709 25.9537 22.5863 25.4263 23.1137C24.8988 23.6412 24.1835 23.9375 23.4375 23.9375H10.2038C9.78208 23.9374 9.3658 23.8425 8.98574 23.6598C8.60569 23.477 8.27158 23.2112 8.00816 22.8819L3.36754 17.0825C3.00785 16.6335 2.81187 16.0753 2.81187 15.5C2.81187 14.9247 3.00785 14.3665 3.36754 13.9175L8.00816 8.11813C8.27119 7.78932 8.60469 7.52376 8.98405 7.34106C9.36342 7.15835 9.77897 7.06316 10.2 7.0625M5.80691 6.36125C6.33435 5.7019 7.00346 5.16975 7.76461 4.80427C8.52577 4.43879 9.35943 4.24935 10.2038 4.25H23.4375C24.9294 4.25 26.3601 4.84263 27.415 5.89753C28.4699 6.95242 29.0625 8.38316 29.0625 9.875V21.125C29.0625 22.6168 28.4699 24.0476 27.415 25.1025C26.3601 26.1574 24.9294 26.75 23.4375 26.75H10.2038C9.36007 26.7501 8.52713 26.5604 7.76667 26.1949C7.00621 25.8295 6.33771 25.2976 5.81066 24.6388L1.17191 18.8394C0.413316 17.8917 0 16.7139 0 15.5C0 14.2861 0.413316 13.1083 1.17191 12.1606L5.80691 6.36125ZM13.65 10.7563C13.3835 10.5079 13.0309 10.3726 12.6666 10.379C12.3022 10.3855 11.9546 10.5331 11.697 10.7907C11.4393 11.0484 11.2918 11.396 11.2853 11.7603C11.2789 12.1246 11.4141 12.4772 11.6625 12.7438L14.4188 15.5L11.6625 18.2563C11.5244 18.385 11.4136 18.5402 11.3367 18.7127C11.2598 18.8852 11.2185 19.0715 11.2152 19.2603C11.2118 19.4491 11.2466 19.6366 11.3173 19.8117C11.388 19.9869 11.4933 20.1459 11.6268 20.2794C11.7604 20.413 11.9194 20.5183 12.0945 20.589C12.2696 20.6597 12.4572 20.6944 12.646 20.6911C12.8348 20.6878 13.021 20.6465 13.1935 20.5696C13.366 20.4927 13.5213 20.3819 13.65 20.2438L16.4063 17.4875L19.1625 20.2438C19.2913 20.3819 19.4465 20.4927 19.619 20.5696C19.7915 20.6465 19.9777 20.6878 20.1666 20.6911C20.3554 20.6944 20.5429 20.6597 20.718 20.589C20.8931 20.5183 21.0522 20.413 21.1857 20.2794C21.3193 20.1459 21.4245 19.9869 21.4953 19.8117C21.566 19.6366 21.6007 19.4491 21.5974 19.2603C21.5941 19.0715 21.5527 18.8852 21.4759 18.7127C21.399 18.5402 21.2882 18.385 21.15 18.2563L18.3938 15.5L21.15 12.7438C21.3984 12.4772 21.5337 12.1246 21.5272 11.7603C21.5208 11.396 21.3732 11.0484 21.1156 10.7907C20.8579 10.5331 20.5103 10.3855 20.146 10.379C19.7817 10.3726 19.4291 10.5079 19.1625 10.7563L16.4063 13.5125L13.65 10.7563Z" fill="#476CFF"/>
                </svg>      
              </button>

              <img src={item.image} alt="" className={styles.cartElementImg}/>
              <div className={styles.cardItem}>
                <p className={styles.cardItemText}>{item.name}</p>
                <div className={globalStyles.flex}>
                  <p className={styles.cardItemNewPrice}>
                    {(item.newPrice ? item.newPrice.toLocaleString("ru-RU") : "Цена не указана")} ₽
                  </p>
                  <p className={styles.cardItemPrice}>
                    {(item.price ? item.price.toLocaleString("ru-RU") : "Цена не указана")} ₽
                  </p>
                </div>
              </div>

              <div className={`${styles.quantityControls} ${globalStyles.flex}`}>
                <div className={styles.flex}>

              <button 
                className={styles.controls} 
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                +
              </button>
              <span className={styles.count}>{item.quantity}</span>
              <button 
                className={`${styles.controls} ${styles.controlsSecond}`} 
                onClick={() => handleQuantityChange(item.id, Math.max(item.quantity - 1, 1))}>
                -
              </button>
                  </div>
              <p className={styles.totalPrice}>
                {(item.newPrice * (item.quantity || 1)).toLocaleString("ru-RU")} ₽</p>
            </div>

            </li>
          ))}

        </ul>
        <form action="" className={`${styles.coupons} ${globalStyles.flex}`} >
            <input type="text" placeholder='Код купона' className={styles.couponsInput} name="" id="" />
            <button type='submit' className={styles.couponsBtn}>Применить купон</button>
            <button className={styles.couponsUpd}>Обновить корзину</button>
        </form>
        </div>

       <div className={styles.result}>
        <h4 className={styles.resultTitle}>Сумма заказов</h4>

        <div className={styles.resultTable}>
            <div className={`${globalStyles.flex} ${styles.resultTablePrice}`}>
            <p>Подытог</p>
            <p className={styles.price1}>{totalPrice.toLocaleString("ru-RU")} ₽</p>
            </div>

            <div className={`${globalStyles.flex} ${styles.resultTablePrice}`}>
                <p>Итого </p>
                <p className={styles.price2}>{totalPrice.toLocaleString("ru-RU")} ₽</p>
            </div>

        </div>
            <Link to={'/order'}
            style={{pointerEvents: cart.length ? 'auto' : 'none'}}
            aria-disabled={!cart.length}
             className={styles.resultBtn}>Оформить заказ</Link>
       </div>
      </section>

      <section>
        <div  className={`${globalStyles.container} ${globalStyles.flex} ${styles.rec}`}>
            <h2 className={styles.recTitle}>Рекомендуем</h2>
            <div className={`${globalStyles.flex} ${styles.recList}`}>
            <Thunderobot />
            <MagicPad />
            <Iphone />
            <Raskat />
            </div>
        </div>
      </section>
    </main>
  );
}
