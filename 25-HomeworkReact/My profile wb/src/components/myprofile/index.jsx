import React from 'react'
import HeroBanner from '../heroBanner'
import Navbar from '../navbar'
import Card from '../card'

const MyProfile = () => {
  return (
    <>
    <Navbar/>
    <HeroBanner/>
    <Card name = {"Html"}/>
    </>
  )
}

export default MyProfile