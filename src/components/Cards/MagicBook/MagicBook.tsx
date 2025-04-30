import styles from './MagicBook.module.css'
import globalStyles from '../../../index.module.css'
import MagicBookImg from '../../../assets/imgs/MagicBook.jpg'
import {useCart} from '../../../contexts/CartContext'
import { useState } from 'react';
import { useFavorites } from '../../../contexts/FavoritesContext';

export function MagicBook(){
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false)
    const { addToFavorites, removeFromFavorites, favorites } = useFavorites();

    const product = {
        id: 3, 
        name: "Ноутбук HONOR Magicbook", 
        description: 'Ноутбук HONOR Magicbook 15/15.6"/AMD Ryzen 5 5500U/16/512/NoOS/Space Gray',
        image: MagicBookImg,  
        newPrice: 46999,
        price: 59999
    }

    const isFavorite = favorites.some((item) => item.id === product.id); 


    const handleAddToCart = () => {
        const productWithQuantity = {
            ...product,
            quantity: 1, 
        };
        addToCart(productWithQuantity); 
        setIsAdded(true); 
    }

    const handleToggleFavorite = () => {
      if (isFavorite) {
        removeFromFavorites(product.id);
      } else {
        addToFavorites(product);
      }
    };
    

    return(
        <div className={`${styles.cardItem} ${globalStyles.flex}`}>
            <img src={product.image} className={styles.cardItemImg} alt="" />
            <h3 className={styles.cardItemTitle}>{product.name}</h3>
            <p className={styles.cardItemText}>{product.description}</p>
            <div className={globalStyles.flex}>
            <p className={styles.cardItemNewPrice}>
        {product.newPrice.toLocaleString("ru-RU")} ₽
      </p>
      <p className={styles.cardItemPrice}>
        {product.price.toLocaleString("ru-RU")} ₽
      </p>
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
    )
}