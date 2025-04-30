import globalStyles from '../../../../index.module.css'
import styles from './AccountOrder.module.css'
import { Sorting } from '../../Sorting/Sorting';
import { useOrders } from '../../../../contexts/OrdersContext';

export function AccountOrder() {
  const {orders} = useOrders()
  
    return (
      <main className={styles.main}>
        <Sorting />
        <div className={`${globalStyles.flex} ${styles.accountCards}`}>
        {orders.length > 0 ? (
          orders.map((product) => (
            <div key={product.id} className={styles.accountCardItem}>
              <img src={product.image} className={styles.cardItemImg} alt={product.name} />
              <button  className={styles.accountCardBtn}></button>
              <h3 className={styles.cardItemTitle}>{product.name}</h3>
              <p className={styles.cardItemText}>{product.description}</p>
              <div className={globalStyles.flex}>
                <p className={styles.cardItemNewPrice}>{product.newPrice.toLocaleString('ru-RU')} ₽</p>
                <p className={styles.cardItemPrice}>{product.price.toLocaleString('ru-RU')} ₽</p>
              </div>
              <div className={globalStyles.flex}>
              </div>
            </div>
          ))
        ) : (
          <p>Список заказов пуст пусто</p>
        )}
      </div>
      </main>
    );
  }
  