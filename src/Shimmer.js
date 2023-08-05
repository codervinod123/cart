import React from 'react'

const Shimmer = () => {

    const emprtyArray=Array.from({length:10});
  return (
    <div className='flex flex-wrap gap-4'>
        {
           emprtyArray.map((item,index)=>{
            return(
                <div key={index}>
                  <div className='flex flex-col gap-3'>
                    <div className='w-[300px] h-[180px] bg-gray-300 rounded'></div>
                    <div className='w-[240px] h-[40px] bg-gray-300 rounded'></div>
                    <div className='w-[280px] h-[40px] bg-gray-300 rounded'></div>
                  </div>
                </div>
            )
           }) 
        }
    </div>
  )
}

export default Shimmer
