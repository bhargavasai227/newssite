"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Tile({p}){
    const router = useRouter()
    const url=`/art?id=${p.article_id}`
    return(
    
    <div className="m-3 p-1  flex flex-col bg-zinc-950 hover:bg-zinc-900 hover:scale-110 duration-100 ease-in-out  rounded-md"  >
     <h1>{p.title}</h1>
        <Image src={p.image_url} alt="image" onClick={()=>router.push(url)}/>
            {p.description && <p>{p.description.slice(0,100)}...</p>}
        <u><Link href={p.link} target="_blank">Click here</Link></u>
    </div>
)
}