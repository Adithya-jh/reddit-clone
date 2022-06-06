import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import PostBox from '../components/PostBox'


const Home: NextPage = () => {

  
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostBox/>
   

    </div>
  )
}

export default Home
