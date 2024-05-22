import React from 'react'

const ProductDescription = () => {
  return (
    <div className='max-padd-container mt-20'>

        <div className='flex gap-3 mb-4'>
            <button className='btn-dark rounded-sm !itext-xs !py-[6px] w-36'>Description</button>
            <button className='btn-dark-outline rounded-sm !itext-xs !py-[6px] w-36'>Care Guide</button>
            <button className='btn-dark-outline rounded-sm !itext-xs !py-[6px] w-36'>Size Guide</button>
        </div>

        <div className='flex flex-col pb-16'>
            <p className='text-sem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum sit, reiciendis nesciunt adipisci iure quod. Eius cumque, fuga deleniti illum qui aperiam reiciendis. Fuga, maxime? Inventore iste voluptatum nam.</p>
            <p className='text-sem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum quae labore harum omnis.</p>
        </div>

    </div>
  )
}

export default ProductDescription