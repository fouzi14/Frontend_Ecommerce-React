import React from 'react'
import Men from './Men'

export default function Mens() {
  const data =[{image : 'acc.jpg',name : 'MEN'},{image : 'img_10.jpg',name : 'MEN'},{image : 'costum1.jpg',name : 'MEN'},{image : 'costum.jpg',name : 'MEN'},{image : 'pul1.jpg',name : 'MEN'},{image : 'pul2.jpg',name : 'MEN'},{image : 'short.jpg',name : 'MEN'},{image : 'short1.jpg',name : 'MEN'}]
  return (
    <div className= ' w-full m-auto p-20'>
      <h1 className=' text-center font-bold text-3xl '>Clouths <span style={{fontFamily:'mv boli'}} className=' text-[#fac031] ' >Men</span></h1>
       <div className=' grid place-content-center md:m-auto pb-4 lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-2'>
       {
          data.map(
            data=><div className=' pb-5 md:p-0'><Men data={data} /></div>
          )
        }
       </div>
       <div className=' w-full text-center'>
        <button className=' mt-8 text-white bg-orange-900 px-3 rounded-lg font-medium text-xl '>See More</button>
        </div>
    </div>
  )
}
