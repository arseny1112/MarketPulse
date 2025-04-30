import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { MainPage } from "./pages/MainPage/MainPage";
import { Cart } from "./pages/Cart/Cart";
import { CartProvider } from "./contexts/CartContext";
import { Catalog } from "./pages/Catalog/Catalog";
import { Phones } from "./pages/Phones/Phones";
import { Laptop } from "./pages/Laptop/Laptop";
import { Computers } from "./pages/Computers/Computers";
import { Tabs } from "./pages/Tabs/Tabs";
import { MacCard } from "./pages/MacCard/MacCard";
import { Order } from "./pages/Order/Order";
import { Account } from "./pages/Account/Account";
import { AccountSettings } from "./pages/Account/pagesAccount/AccountSettings/AccountSettings";
import { AccountFavorites } from "./pages/Account/pagesAccount/AccountFavorites/AccountFavorites";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { AccountOrder } from "./pages/Account/pagesAccount/AccountOrder/AccountOrder";
import { OrdersProvider } from "./contexts/OrdersContext";
import { AboutUs } from "./pages/About-us/AboutUs";
import { Contacts } from "./pages/Contacts/Contacts";
import { FAQ } from "./pages/FAQ/FAQ";

export default function App() {
  return (
    <FavoritesProvider>
      <OrdersProvider>
    <CartProvider>
   <BrowserRouter>
      <Header />
        <Routes>
        <Route path='/' element={<MainPage />}/>
  <Route path='/cart' element={<Cart />}/>
  
  <Route path='/catalog' element={<Catalog />} />
  <Route path="/catalog/phones" element={<Phones />} />
  <Route path="/catalog/laptop" element={<Laptop />} />
  <Route path="/catalog/computers" element={<Computers />} />
  <Route path="/catalog/tabs" element={<Tabs />}/>

  <Route path="/macCard" element={<MacCard />} />
  <Route path="/order" element={<Order />} />
  <Route path="/about-us" element={<AboutUs />}/>
  <Route path="/contacts" element={<Contacts />} />
  <Route path="/faq" element={<FAQ />} />

  <Route path="/account" element={<Account />}>
  <Route index element={<AccountSettings />} />
  <Route path="favorites" element={<AccountFavorites />} />
  <Route path="orders" element={<AccountOrder />} />
</Route>


        </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
      </OrdersProvider>
    </FavoritesProvider>
  )
}

