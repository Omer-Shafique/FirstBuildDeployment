import React from 'react'
import MainCarousel from '../../Component/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../Component/HomeSectionCarousel/HomeSectionCarousel'

export default function Homepage() {
  return (
    <>
    <div className='py-10 space-y-10 flex-col justify-center px-5 lg:px-10'  >
        <MainCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        

    </div>
    </>
  )
}
