import React from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { useOrderConfirm } from "./Components/Hooks/useOrderConfirm";
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { Context } from "./Components/Functions/context";

const firebaseConfig = {
  apiKey: "AIzaSyDhgkljvEG0cMV1vsl6Vzm0Gx8p3L-v_eM",
  authDomain: "mrdonalds-bf028.firebaseapp.com",
  projectId: "mrdonalds-bf028",
  storageBucket: "mrdonalds-bf028.appspot.com",
  messagingSenderId: "900039904049",
  appId: "1:900039904049:web:786fc78012dc8fdb227e10"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const ordersCard = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      ordersCard,
      orderConfirm,
      firebaseDatabase: firebase.database
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu/>
      { openItem.openItem && <ModalItem /> }
      {orderConfirm.openOrderConfirm && <OrderConfirm/>}
    </Context.Provider>
  );
}

export default App;
