import React from 'react'
import Header from '../components/Header'
import TopDoctors from '../components/TopDoctors'
import SpecialityMenu from '../components/SpecialityMenu'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Header/>
      <TopDoctors/>
      <SpecialityMenu/>
      <Banner/>
   </div>
  )
}

export default Home
