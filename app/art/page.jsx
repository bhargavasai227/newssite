"use client";
import { Loading } from '../components/Loading';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
 function Ho() {
  const [data, setData] = useState();
  const searchParams = useSearchParams()
 
  const id = searchParams.get('id')
  const url=`https://newsdata.io/api/1/latest?apikey=pub_46749144a28cc2daca769aec4518b6613452f&qInTitle=${id}`
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
      
      {data && (
          
        <div className="m-5 p-3  flex flex-col bg-zinc-950  rounded-md"  >
        <h1 className='w-[90vw]'>{data.title}</h1>
        <img src={data.image_url} alt="image"/>
        <p className='w-[80vw]'>{data.description}</p>
        
        <u><Link href={data.link} target="_blank">Click here</Link></u>
    </div>
       
      )}
      
    </>
    
  );
}
export default function Home(){
    return(
        <Suspense  fallback={<div><Loading/></div>}>
        <Ho/>
        </Suspense>
    )
}
 