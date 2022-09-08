import React,{useEffect,useState} from 'react';
import { getAllCoins } from '../Api/api';
import Card from './Card';
import "./Card.css"

export default function CryptoCards() {
const [allCoins, setallCoins] = useState([])
const fetchAllCoins = async()=>{
    const res = await fetch(getAllCoins('pkr'));
    const data= await res.json()
    console.log(data);
    setallCoins(data)
}

useEffect(() => {
  fetchAllCoins()
}, [])

  return (
    <div className="cards">
      
        {allCoins?.map(coin=>{
            return(
                <Card data={coin}/>
            )
        })}
      
    </div>
  );
}
