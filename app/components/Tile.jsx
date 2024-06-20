"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import { Loading } from "./Loading";
export default function Tile({p}){
    const [load,setLoad]=useState(true);
    const router = useRouter()
    const url=`/art?id=${p.article_id}`
    if (p.image_url) return(
    
  
   
    <div className="m-3 p-1  flex flex-col bg-zinc-950 hover:bg-zinc-900 hover:scale-110 duration-100 ease-in-out  rounded-md"  >
     <h1>{p.title}</h1>
       {load&&<Loading/>}
        <Image width={200} height={200} className="h-[40vh] w-[20vw] object-contain" src={p.image_url} alt="image" onLoadingComplete={()=>setLoad(false)} onClick={()=>router.push(url)}/>
            {p.description && <p>{p.description.slice(0,100)}...</p>}
        <u><Link href={p.link} target="_blank">Click here</Link></u>
    </div>
)
}