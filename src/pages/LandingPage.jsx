import React, {useState} from 'react'
import { BottomNav, Footer, Landing, Navbar } from '../component'

const LandingPage = ({allData}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
    <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} allData={allData}/>
    <Landing searchTerm={searchTerm} setSearchTerm={setSearchTerm} allData={allData}/>
    <Footer/>
    <BottomNav/>
    
    
    </>
  )
}

export default LandingPage