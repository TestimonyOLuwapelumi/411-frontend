import React from 'react'
import { BottomNav, CoolStuff } from '../component'

const CoolStuffPage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
  return (
    <>
    
        <CoolStuff  allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
    <BottomNav/>
    </>
  )
}

export default CoolStuffPage