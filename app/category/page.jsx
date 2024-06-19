"use client";
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import Tile from "../components/Tile";
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const searchParams = useSearchParams()
 
  const search = searchParams.get('search')
  const url=`https://newsdata.io/api/1/latest?apikey=pub_46749144a28cc2daca769aec4518b6613452f&category=${search}&language=en&image=1`
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data.results); // Assuming the data you need is in the `results` property
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error making the request:', error);
      });
  }, []); // Empty dependency array to run only once on component mount

  return (
    <>
      <h1>category:{search}</h1>
      {data.length > 0 && (
        <div className="grid md:grid-cols-4 grid-cols-2 p-3">
          {data.map((item) => (
            <Tile p={item} /> // Assuming `item.id` is the unique key
          ))}
        </div>
      )}
    </>
  );
}
