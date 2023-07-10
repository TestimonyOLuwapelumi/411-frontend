import React, {useState} from 'react'
import { BottomNav, Footer, Landing, Modal, Navbar } from '../component'

const LandingPage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
    <Navbar searchTerm={searchTerm} allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
    <Modal/>
    <Landing searchTerm={searchTerm} setSearchTerm={setSearchTerm} allData={allData}/>
    <Footer/>
    <BottomNav/>
    
    
    </>
  )
}

export default LandingPage