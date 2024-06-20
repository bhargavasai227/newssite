"use client"
import axios from "axios";
import { useState,useEffect ,Suspense} from "react";
import Link from "next/link";
import Tile from "./components/Tile";
import Cat from "./components/Cat";
import { Loading } from "./components/Loading";
export default function Home() {
  const [data, setData] = useState([]);

  const url=`https://newsdata.io/api/1/latest?apikey=pub_46749144a28cc2daca769aec4518b6613452f&language=en`
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data.results); 
        
      })
      .catch(error => {
        console.error('Error making the request:', error);
      });
  }, []); 
  return (
    
<div className="p-2">
<Cat/>
top articles

{data.length > 0 && (
        <div className="grid md:grid-cols-4 grid-cols-2 p-3">
          {data.map((item) => (
            <Suspense fallback={<div><Loading /></div>} key={item.article_id}>
              <Tile p={item} />
            </Suspense>
          ))}
        </div>
      )}
      
</div>

  );
}
