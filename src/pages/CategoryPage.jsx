import React from 'react'
import { BottomNav, Category, Footer, Navbar } from '../component'

const CategoryPage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
  return (
    <>
    <Navbar allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
    <Category/>
    <Footer/>
    <BottomNav/>
    </>
  )
}

export default CategoryPage