import globalStyles from '../../../../index.module.css'
import { Sorting } from '../../Sorting/Sorting'
import styles from './AccountFavorites.module.css'
import { useFavorites } from '../../../../contexts/FavoritesContext';
import { useCart } from '../../../../contexts/CartContext';
import { useState } from 'react';

export function AccountFavorites() {
  const { favorites, removeFromFavorites } = useFavorites(); 
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<number[]>([]); 

  const handleAddToCart = (product: typeof favorites[number]) => {
    addToCart({ ...product, quantity: 1 });
    setAddedItems([...addedItems, product.id]); 
  };

  const favoriteRemove = (productId: number) => {
    removeFromFavorites(productId);
  };

  return (
    <div className={`${globalStyles.flex} ${styles.accountInfo}`}>
            

      <Sorting />
      <div className={`${globalStyles.flex} ${styles.accountCards}`}>
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <div key={product.id} className={styles.accountCardItem}>
              <img src={product.image} className={styles.cardItemImg} alt={product.name} />
              <button onClick={() => favoriteRemove(product.id)} className={styles.accountCardBtn}></button>
              <h3 className={styles.cardItemTitle}>{product.name}</h3>
              <p className={styles.cardItemText}>{product.description}</p>
              <div className={globalStyles.flex}>
                <p className={styles.cardItemNewPrice}>{product.newPrice.toLocaleString('ru-RU')} ₽</p>
                <p className={styles.cardItemPrice}>{product.price.toLocaleString('ru-RU')} ₽</p>
              </div>
              <div className={globalStyles.flex}>
                {addedItems.includes(product.id) ? (
                  <span className={styles.inCart}>В корзине</span>
                ) : (
                  <button onClick={() => handleAddToCart(product)} className={styles.addToCart}>
                    В корзину
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Избранное пусто</p>
        )}
      </div>
      </div>
  );
}
