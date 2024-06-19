"use client";
import Image from 'next/image';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
 function Ho() {
  const [data, setData] = useState();
  const searchParams = useSearchParams()
 
  const id = searchParams.get('id')
  const url=`https://newsdata.io/api/1/latest?apikey=pub_46749144a28cc2daca769aec4518b6613452f&id=${id}`
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data.results[0]); 
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error making the request:', error);
      });
  }, []); 

  return (
   
    <>
      <h1>hiii</h1>
      
      {data && (
        <div className="grid md:grid-cols-4 grid-cols-2 p-3 w-full">
          
        <div className="m-5 p-3  flex flex-col bg-zinc-950  rounded-md"  >
        <h1>{data.title}</h1>
        <img src={data.image_url} alt="image"/>
        <p>{data.description}</p>
        
        <u><Link href={data.link} target="_blank">Click here</Link></u>
    </div>
    
        </div>
       
      )}
      
    </>
    
  );
}
export default function Home(){
    return(
        <Suspense  fallback={<div>Loading...</div>}>
        <Ho/>
        </Suspense>
    )
}
 