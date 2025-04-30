import globalStyles from '../../index.module.css'
import styles from './MacCard.module.css'
import macImg1 from '../../assets/imgs/MacBook.jpg'
import macImg2 from '../../assets/imgs/mac2.png'
import macImg3 from '../../assets/imgs/mac3.png'
import macImg4 from '../../assets/imgs/mac4.png'
import { useEffect, useState } from 'react'
import { useCart } from '../../contexts/CartContext'
import { IRU } from '../../components/Cards/IRU/IRU'
import { MSI } from '../../components/Cards/MSI/MSI'
import { Keyboard } from '../../components/Cards/Keyboard/Keyboard'
import { IPad } from '../../components/Cards/IPad/IPad'
import { useFavorites } from '../../contexts/FavoritesContext'
import { useOrders } from '../../contexts/OrdersContext'
import { useNavigate } from 'react-router-dom'

const images = [
    macImg1, macImg2, macImg3, macImg4
]

export function MacCard() {
    const [currentIndex, setCurrentIndex] = useState(images[0]);
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);
    const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
    const { addOrder } = useOrders();
    const navigate = useNavigate();

    const product = {
        id: 2,
        name: "MacBook Air M3",
        image: macImg1,
        description: 'Ноутбук Apple MacBook Air 15 M2 8/256Gb Silver (MQKR3)',
        newPrice: 184999,
        price: 194999
    };

    const isFavorite = favorites.some((item) => item.id === product.id);

    const handleAddToCart = () => {
        const productWithQuantity = {
            ...product,
            quantity: 1,
        };
        addToCart(productWithQuantity);
        setIsAdded(true);
        localStorage.setItem('macBookInCart', 'true');
    };

    useEffect(() => {
        const isProductInCart = localStorage.getItem('macBookInCart');
        if (isProductInCart === 'true') {
            setIsAdded(true);
        }
    }, []);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const handleQuickOrder = () => {
        const productWithQuantity = {
            ...product,
            quantity: 1
        };

        addOrder([productWithQuantity]);
        navigate('/account/orders');
    };

    return (
        <main>
            <div className={`${globalStyles.flex} ${globalStyles.container} ${styles.card}`}>
                <div className={`${globalStyles.flex} ${styles.cardGalleryImages}`}>
                    {images.map((img, index) => (
                        <img
                            className={styles.cardGalleryImage}
                            key={index}
                            src={img}
                            onClick={() => setCurrentIndex(img)}
                        />
                    ))}
                </div>
                <img className={styles.cardMainImage} src={currentIndex} alt="" />

                <div className={styles.cardInfo}>
                    <h4 className={styles.cardTitle}>{product.description}</h4>

                    <div className={`${globalStyles.flex} ${styles.cardRaiting}`}>
                        {/* Рейтинг и звездочки */}
                    </div>

                    <div className={globalStyles.flex}>
                        <p className={styles.cardItemNewPrice}>
                            {product.newPrice.toLocaleString("ru-RU")} ₽
                        </p>
                        <p className={styles.cardItemPrice}>
                            {product.price.toLocaleString("ru-RU")} ₽
                        </p>
                    </div>

                    <button className={styles.cardSelector}>
                        Нашли дешевле?<svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 2L9.5 10L2 2" stroke="#4B4B4B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <p className={styles.cardText}>
                        Ноутбук Apple MacBook Air 15 M2 Silver (MQKR3) с macOS — модель в алюминиевом корпусе, снабженная восьмиядерным чипом Apple M2. Высокая производительность позволяет выполнять на ноутбуке ресурсоемкие задачи, в том числе профессиональное редактирование фото и видео в 4К.
                    </p>

                    <div className={`${globalStyles.flex} ${styles.cardBtns}`}>
                        <button onClick={handleAddToCart} className={styles.addToCart}>
                            {isAdded ? 'Добавлено в корзину' : 'В корзину'}
                        </button>

                        <button onClick={handleQuickOrder} className={styles.makeOrder}>
                            Быстрый заказ
                        </button>

                        <button onClick={handleToggleFavorite} className={styles.cardAddToFav}>
                            {isFavorite ? (
                                <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 32.1125L14.9625 29.8025C5.95 21.63 0 16.2225 0 9.625C0 4.2175 4.235 0 9.625 0C12.67 0 15.5925 1.4175 17.5 3.64C19.4075 1.4175 22.33 0 25.375 0C30.765 0 35 4.2175 35 9.625C35 16.2225 29.05 21.63 20.0375 29.8025L17.5 32.1125Z" fill="#FF6363" />
                                </svg>
                            ) : (
                                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 37.3625L18.4625 35.0525C9.45 26.88 3.5 21.4725 3.5 14.875C3.5 9.4675 7.735 5.25 13.125 5.25C16.17 5.25 19.0925 6.6675 21 8.89C22.9075 6.6675 25.83 5.25 28.875 5.25C34.265 5.25 38.5 9.4675 38.5 14.875C38.5 21.4725 32.55 26.88 23.5375 35.0525L21 37.3625Z" fill="#BBBBBB" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${styles.cardAdditional} ${globalStyles.container}`}>
                <h5>Смотрите также</h5>
                <div className={`${globalStyles.flex} ${styles.cardAdditionalProducts}`}>
                    <IRU />
                    <MSI />
                    <Keyboard />
                    <IPad />
                </div>
            </div>
        </main>
    );
}
