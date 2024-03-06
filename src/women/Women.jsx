import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
export default function Women(data) {
  return (
    <div className=' w-[240px] h-[350px] shadow-xl p-3 bg-white '>
        <div>
            <img  className=' h-[135px]  w-full' src={`./image/${data.data.image}`} alt="" />
        </div>
        <div className=' text-center mt-2'>
            <h1 className=' font-bold text-xl text-[#fac031] '>name</h1>
            <p className=' text-center py-1'>Lorem ipsum, dolor sit  adipisicing elit. Voluptas, dicta!</p>
            <h3 className=' text-lg font-medium'>$20.00</h3>
            <div className=' text-sm text-[#fac031] '>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarHalfIcon/>
            </div>
            <div className=' pt-1 flex justify-center'>
            <button className=' bg-black text-white py-1 w-28 text-center flex justify-center'>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}
