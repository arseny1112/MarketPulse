import styles from './IPad.module.css'
import globalStyles from '../../../index.module.css'
import MacImg from '../../../assets/imgs/IPad.jpg'
import {useCart} from '../../../contexts/CartContext'
import { useState } from 'react';
import { useFavorites } from '../../../contexts/FavoritesContext';




export function IPad() {
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const product = {
    id: 1,
    name: 'Планшет Apple iPad Mini',
    image: MacImg,
    description: 'Планшет Apple iPad Mini 128GB WiFi (2024) Starlight',
    newPrice: 66999,
    price: 78999,
  };

  const isFavorite = favorites.some((item) => item.id === product.id); 

  const handleAddToCart = () => {
    const productWithQuantity = {
      ...product,
      quantity: 1,
    };
    addToCart(productWithQuantity);
    setIsAdded(true);
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };


  return (
    <div className={`${styles.cardItem} ${globalStyles.flex}`}>
      <img src={product.image} className={styles.cardItemImg} alt="" />
      <h3 className={styles.cardItemTitle}>{product.name}</h3>
      <p className={styles.cardItemText}>{product.description}</p>
      <div className={globalStyles.flex}>
        <p className={styles.cardItemNewPrice}>{product.newPrice.toLocaleString('ru-RU')} ₽</p>
        <p className={styles.cardItemPrice}>{product.price.toLocaleString('ru-RU')} ₽</p>
      </div>
      <div className={globalStyles.flex}>
        {isAdded ? (
          <span className={styles.inCart}>В корзине</span>
        ) : (
          <button onClick={handleAddToCart} className={styles.addToCart}>
            В корзину
          </button>
        )}
        <button
          onClick={handleToggleFavorite}
          className={isFavorite ?globalStyles.inFavorites : styles.addToFav}
        >
          {isFavorite ? 'В избранном' : 'В избранное'}
        </button>
      </div>
    </div>
  );
}