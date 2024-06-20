"use client";
import Image from 'next/image';
import { Loading } from '../components/Loading';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
 function Ho() {
  const [data, setData] = useState();
  const searchParams = useSearchParams()
 
  const id = searchParams.get('id')
  const url=`https://newsapi.org/v2/everything?q=McDonalds&apiKey=9f9d0c6cb6a14e4784ade75dab7e45f5`
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data.articles[0]); 
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error making the request:', error);
      });
  }, []); 

  return (
   
    <>
      
      {data && (
          
        <div className="m-5 p-3  flex flex-col bg-zinc-950  rounded-md items-start"  >
        <h1 className='w-[90vw]'>{data.title}</h1>

        <Image width={400} height={400} className="h-[50vh] w-[75vw] object-contain" src={data.urlToImage} alt="image"/>

        <i><h1>Description :</h1></i>
        <p className='w-[80vw]'>{data.description}</p>
        <i><h1>Content :</h1></i>
        
        <p>{data.content}</p>
        <u><Link href={data.url} target="_blank">Click here</Link></u>
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
 