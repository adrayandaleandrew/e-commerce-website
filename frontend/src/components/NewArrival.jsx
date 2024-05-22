import React from 'react'
import LATEST from '../assets/latest'
import Item from './Item'

const NewArrival = () => {
  return (
    <section className='max-padd-container bg-primary p-12 x1:py-28'>
    <div className='text-center max-w-x1 mx-auto'>
      <h3 className='h3'>New Arrivals</h3>
      <p>adjsojdasudahsasodjasiduhasldnasodjasduoasjdmausnciaxoncxkncozxmcnzjxcnlkznc ascoacn oasnc oanc oasnc oanc oasncjasncascnajs cjoasn coan o</p>

    </div>
    {/* container */}
    <div className='grid grid-cols-1 xs: grid-cols-2 md:grid-cols-3 x1:grid-cols-4 gap-6 gap-y-28 mt-32'>
      {LATEST.map((item) => (
        <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
      ))}
    </div>

  </section>
  )
}

export default NewArrival