import React from 'react'

export default async function ProductDetails({params}) {
const {productId} = await params;
  return (
    <div>
        ProductDetails page {productId}
    </div>
  )
}
