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
import { useDB } from "./Components/Hooks/useDB";


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
  const orders = useOrders();
  const database = firebase.database();
  useTitle(openItem.openItem);
  const dbMenu = useDB(database);
  console.log(dbMenu);

  return (
    <React.Fragment>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order
        {...orders}
        {...openItem}
        {...auth}
        database={database}
        />
      <Menu {...openItem} dbMenu={dbMenu}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders}/> }
    </React.Fragment>
  );
}

export default App;
