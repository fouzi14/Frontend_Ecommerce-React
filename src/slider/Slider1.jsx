import React from 'react'

export default function Slider1() {



  return (
    <div className=' shadow-lg pb-4 px-20 pt-5 w-full h-full flex flex-col lg:flex-row lg:items-center lg:justify-around'>
        <div className=' flex flex-col place-content-center'>
            <h3 className=' text-center lg:text-start lg:text-xl font-bold'>trade-in-offer</h3>
            <h1 className=' text-center lg:text-start text-lg lg:text-4xl font-bold'>Super Valeu deals</h1>
            <h1 className=' text-center lg:text-start text-lg lg:text-4xl font-bold text-green-600 py-2'>On All Products</h1>
            <button className=' mb-3 bg-amber-900 text-white text-lg px-3 rounded-full py-1'>Shop Now</button>
        </div>
        <img className=' mx-auto lg:mx-0 w-96 rounded -xl' src="./image/shopping-womens.jpg" alt="" />
    </div>
  )
}
