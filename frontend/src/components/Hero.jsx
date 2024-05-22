import React from 'react';
import {Link} from 'react-router-dom';
import RelatedProducts from './RelatedProducts'

const Hero = () => {
  return (
    <section >
        <div className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[744px] w-full'>
            <div className='relative top-24 xs:top-32' >
                <h4 className='uppercase medium-18 tracking-wider'>TRENDY MEASURES</h4>
                <h2 className='h1 capitalize max-w-[40rem]'>Elevate Your Look <span className='text-secondary'> with Every Click.</span> Shop Today!</h2>
                <p className='my-5 max-w-[33rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet excepturi possimus, quod omnis illo, nisi laboriosam fuga dolor optio sunt</p>

                {/* buttons */}
                <div className='inline-flex items-center justify-center gap-4 p-2 bg-white rounded-x1'>
                    <div className='text-center regular-14 leading-tight pl-5'>
                        <h5 className='uppercase font-bold'>30% Offer</h5>
                        <p className='regular-14'>On All Items</p>
                    </div>
                    <Link to={''} className='btn-dark rounded-x1 flexCenter !py-5'>Shop Now</Link>
                </div>

                {/* New Collections */}
                <div className='mt-16'>
                    <RelatedProducts />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero