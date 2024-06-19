import Link from 'next/link';

export default function Cat() {
    const cat = ["sports", "business", "science","entertainment","food","environment"];
    return (
        <div className="p-2">
            category
            <div className="w-full h-6 flex gap-5 px-5 text-white justify-center items-center">
                {
                    cat.map((e) => (
                        <Link key={e} href={`/category?search=${e}`} className='bg-zinc-800 rounded-lg p-2'>
                            {e}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}
