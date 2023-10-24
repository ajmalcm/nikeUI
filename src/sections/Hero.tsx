import React,{useState} from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/assets/icons'
import { shoes, statistics } from '../constants/config'
import { bigShoe1 } from '../assets/assets/images'
import ShoeCard from '../components/ShoeCard'
const Hero = () => {
  const [heroShoe,setHeroShoe]=useState(bigShoe1)
  return (
    <section
    id="home"
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
      <p className='text-xl text-coral-red font-montserrat'>Our Summer Collection</p>
      <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
        <br/>
        <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
      </h1>
      <p className='font-montserrat text-slate-gray leading-8 text-lg mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
      <Button label="Shop now" iconUrl={arrowRight}/>
      <div className='flex justify-start items-start w-full flex-wrap mt-20 gap-16'>
    {
      statistics.map((stat,i)=>(
        <div key={i}>
          <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
          <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
        </div>
      ))
    }
      </div>
      </div>
      <div className='flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={heroShoe} alt="bigshoe1" width={610} height={500} className='object-contain relative z-10'/>
        <div  className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {
            shoes.map((shoe,i)=>(
              <div key={i}>
                <ShoeCard
                imageUrl={shoe}
                changeBigShoeImage={(shoe)=>setHeroShoe(shoe)}
                bigShoeImage={heroShoe}
                />
                </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Hero