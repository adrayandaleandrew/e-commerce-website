import React from 'react'
import { TbTruckReturn } from 'react-icons/tb'
import about from '../assets/about.png'

const About = () => {
  return (
    <section className='max-padd-container py-12 x1:py-32'>
      {/* container */}
      <div className='flex flex-col gap-16 x1:gap-8 x1:flex-row'>

        {/* left */}
        <div className='flex-1'>
          <h3 className='h3 capitalize'>Unveiling Our Product's Key Features!</h3>
          <p className='py-5'>Lorem ipsum dolor sit amet, conseausdasjdhask dhasajksdashjkdahskdjahsdahsjdahjkajsjdasdlkashdl jjdjasdhsakdjhkjctetur adipisicing elit. Ea </p>
          <div className='flex flex-col items-start gap-y-4'>

            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md'>
                <TbTruckReturn  className='text-white text-2x1'/>
                
              </div>
              <div>
                <h4 className='medium-18'>Secure Payment Options</h4>
                <p>loremasdasdasdasdasdasdaadasd</p>
              </div>
            </div>

            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md'>
                <TbTruckReturn  className='text-white text-2x1'/>
                
              </div>
              <div>
                <h4 className='medium-18'>Live Customer Support</h4>
                <p>loremasdasdasdasdasdasdaadasd</p>
              </div>
            </div>

            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md'>
                <TbTruckReturn  className='text-white text-2x1'/>
                
              </div>
              <div>
                <h4 className='medium-18'>Easy Return Process</h4>
                <p>loremasdasdasdasdasdasdaadasd</p>
              </div>
            </div>

          </div>
        </div>

        {/* right */}
        <div className='flex-1 flexCenter '>
          <div>
            <img src={about} alt="" height={488} width={488}/>
          </div>
        </div>


      </div>
    </section>
  )
}

export default About