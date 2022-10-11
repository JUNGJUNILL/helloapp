import Head from 'next/head'

import React , {useState,useEffect,useCallback}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useRouter} from 'next/router'; 

import 
    {TEMP_REQUEST,} 
from '../reducers/tempReducer'; 
import Link from 'next/link'


const Home =()=>{

  

  return (

    <div>
      <Link href={{pathname:'/cal/calculator001'}}><a>page1</a></Link>
      <Link href={{pathname:'/cal/calculator002'}}><a>page1</a></Link>

    </div>
   
  )

}

export default Home;
  

