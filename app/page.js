"use client"
import axios from "axios";
import { useState,useEffect ,Suspense} from "react";
import Link from "next/link";
import Tile from "./components/Tile";
import Cat from "./components/Cat";
import { Loading } from "./components/Loading";
export default function Home() {
  const [data, setData] = useState([]);

  const url=`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9f9d0c6cb6a14e4784ade75dab7e45f5`
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data.articles); 
        console.log(response.data);
        
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
