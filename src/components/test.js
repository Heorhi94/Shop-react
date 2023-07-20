import { db } from "./config/firebase"
import { getDoc, collection } from "firebase/firestore"
import { useState } from "react";


export const Test = () => {
    const [itemsList, setItemsList] = useState([])

    const itemsCollectionRef = collection(db, "items") 
    
    useEffect(() => {
      const getItemsList = async () => {
        try{
        const data = await getDoc(itemsCollectionRef)
        console.log(data)
        } catch (err) {
          console.error(err)
        }
      }
      getItemsList()
    }, [])
}

