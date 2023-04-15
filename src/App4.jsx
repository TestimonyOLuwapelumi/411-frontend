import React, {useEffect, useState} from 'react'
import axios from 'axios'

import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import {   Homepage, HumourPage, PersonalityPage, ImaginationPage, HumourContentPage, PersonalityContentPage, BloggPage, BloggContentPage, ImaginationContentPage, VideoContentPage, VideoPage, PodcastPage, PodcastContentPage, AboutPage, CoolStuffPage} from "./pages";
import NotFoundpage from "./pages/NotFoundpage";
import myImage from "./Asset 1.png"
import { About, Animate, AnimateContent, Loader } from "./component";
// import { Loader } from './component';
// import AboutPage from "./pages/AboutPage";
// import { Routes, Route } from "react-router-dom";

export default function App() {
  const [loading, setLoading] = useState(true);

      useEffect(() => {
        // Simulate loading data
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
      
  const [allData, setallData] = useState([])

  const [allDatai, setallDatai] = useState([])
  const [allDatap, setallDatap] = useState([])
  const [allDatab, setallDatab] = useState([])
  const [allDatav, setallDatav] = useState([])
  const [allDatapo, setallDatapo] = useState([])
  const [allDatac, setallDatac] = useState([])
  const [allAbout, setallAbout] = useState([])

  const url = 'https://whatisthx411-backrnd.onrender.com/api/blogs?populate=*';

    useEffect(() => {


      getData()
    }, [])
    const getData = () =>{
        axios.get(url).then(res =>setallData(res.data.data)).catch(err =>{console.log(err);})
    }
    console.log(allData);


  const url2 = 'https://whatisthx411-backrnd.onrender.com/api/videos?populate=*';

    useEffect(() => {


      getDat()
    }, [])
    const getDat = () =>{
        axios.get(url2).then(res =>setallDatav(res.data.data)).catch(err =>{console.log(err);})
    }
    console.log(allDatav);   
    
    
  const url3 = 'https://whatisthx411-backrnd.onrender.com/api/podcasts?populate=*';

    useEffect(() => {


      getDatt()
    }, [])
    const getDatt = () =>{
        axios.get(url3).then(res =>setallData(res.data.data)).catch(err =>{console.log(err);})
    }
    console.log(allDatap);  


  const url4 = 'https://whatisthx411-backrnd.onrender.com/api/videos?populate=*';

    useEffect(() => {


      getDatav()
    }, [])
    const getDatav = () =>{
        axios.get(url4).then(res =>setallDatav(res.data.data)).catch(err =>{console.log(err);})
    }
    console.log(allDatav);