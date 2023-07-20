import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import { Auth } from "./components/Auth";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";

function App() {
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [items, setItemsList] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  useEffect(() => {
    const getItemsList = async () => {
      try {
        const itemsCollectionRef = collection(db, "items");
        const data = await getDocs(itemsCollectionRef);
        setItemsList(data.docs.map((doc) => doc.data()));
      } catch (err) {
        console.error(err);
      }
    };
    getItemsList();
  }, []);

  useEffect(() => {
    setCurrentItems(items);
  }, [items]);

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id != id));
  };

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) setOrders([...orders, item]);
  };

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(items.filter((el) => el.category === category));
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  return (
    <div className="wrapper">
      {/* <Auth />  */}
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />
      {showFullItem && <ShowFullItem onAdd={addToOrder} onShowItem={onShowItem} item={fullItem} />}
      <Footer />
    </div>
  );
}

export default App;
