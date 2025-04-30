import styles from './Search.module.css'
import globalStyles from '../../index.module.css'
import { useState } from 'react'

import {IPad} from "../../components/Cards/IPad/IPad"
import { MacBook } from '../Cards/MacBook/MacBook';
import { MagicBook } from '../Cards/MagicBook/MagicBook';
import { Watch } from '../Cards/Watch/Watch';
import { Iphone } from '../Cards/Iphone/Iphone';
import { IRU } from '../Cards/IRU/IRU';
import { Keyboard } from '../Cards/Keyboard/Keyboard';
import { MagicPad } from '../Cards/MagicPad/MagicPad';
import { MSI } from '../Cards/MSI/MSI';
import { Raskat } from '../Cards/Raskat/Raskat';
import { RTX } from '../Cards/RTX/RTX';
import { Thunderobot } from '../Cards/Thunderobot/ThunderBoot';


const products = [
    { name: "Планшет Apple iPad Mini", component: IPad },
    {  name: "MacBook Air M3", component: MacBook },
    {  name: "Ноутбук HONOR Magicbook", component: MagicBook },
    {  name: "Смарт-часы HUAWEI Watch Fit 3 Green", component: Watch },
    { name: "Apple iPhone 15", component: Iphone},
    {name: "iRU Game 313 MT", component: IRU}, 
    { name: "Red Square Keyrox TKL", component: Keyboard},
    { name: "Планшет HONOR MagicPad 2", component: MagicPad},
    { name: "Материнская плата MSI B760", component: MSI},
    { name: "Raskat STRIKE 520", component: Raskat},
    { name: "Palit RTX 4070 SUPER", component: RTX},
    { name: "Монитор Thunderobot", component: Thunderobot},
];

export function Search({ isOpen}: {isOpen: boolean}) {
  const [search, setSearch] = useState("");

  const [activeButton, setActiveButton] = useState<number | null>(null); 

  const handleClick = (index: number) => {
    setActiveButton(index); 
  };

  const filteredProducts = products.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className={` ${globalStyles.flex} ${styles.search} ${isOpen ? styles.fullWidthSearch : ""}`}>

      <input
      className={`${styles.inputSearch} `}
        type="text"
        placeholder="Найти"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <ul className={styles.searchResults}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(({ name, component: ProductComponent }) => (
              <li key={name} className={styles.searchItem}>
                <ProductComponent />
              </li>
            ))
          ) : (
            <li className={styles.searchItem}>Товар не найден</li>
          )}
        </ul>
      )}

      <div className={`${styles.goods} ${globalStyles.flex}`}>
      <button
        className={`${styles.button} ${activeButton === 0 ? styles.active : ''}`}
        onClick={() => handleClick(0)}
      >
        iPhone
      </button>
      <button
        className={`${styles.button} ${activeButton === 1 ? styles.active : ''}`}
        onClick={() => handleClick(1)}
      >
        Зарядка
      </button>
      <button
        className={`${styles.button} ${activeButton === 2 ? styles.active : ''}`}
        onClick={() => handleClick(2)}
      >
        Подарки
      </button>
      <button
        className={`${styles.button} ${activeButton === 3 ? styles.active : ''}`}
        onClick={() => handleClick(3)}
      >
        Google Pixel 3
      </button>
      <button
        className={`${styles.button} ${activeButton === 4 ? styles.active : ''}`}
        onClick={() => handleClick(4)}
      >
        Клавиатуры
      </button>
      <button
        className={`${styles.button} ${activeButton === 5 ? styles.active : ''}`}
        onClick={() => handleClick(5)}
      >
        13 Pro Max
      </button>
      <button
        className={`${styles.button} ${activeButton === 6 ? styles.active : ''}`}
        onClick={() => handleClick(6)}
      >
        iPhone 12
      </button>
      <button
        className={`${styles.button} ${activeButton === 7 ? styles.active : ''}`}
        onClick={() => handleClick(7)}
      >
        Ноутбуки
      </button>
      <button
        className={`${styles.button} ${activeButton === 8 ? styles.active : ''}`}
        onClick={() => handleClick(8)}
      >
        Телефоны
      </button>
      </div>
    </div>

  );
}