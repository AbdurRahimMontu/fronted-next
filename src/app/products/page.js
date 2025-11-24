import Link from 'next/link'
import React from 'react'

export default  function Products() {
    // const res =await fetch("")
    // const data = await res.json();
    // console.log(data);
  return (
    <div className='flex flex-col'>
   
        <Link href="/products/1">Details1</Link>
        <Link href="/products/2">Details2</Link>
        <Link href="/products/3">Details3</Link>
        <Link href="/products/4">Details4</Link>

    </div>
  )
}
