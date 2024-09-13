"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Home() {
  return (
  <main className="bg-zinc-900 flex flex-col items-center justify-between py-10">
    <div className=" flex flex-col items-center justify-between px-10">
      <h1 className="text-blue-500 font-mono py-10 text-5xl ">Julkar Naine Reedoy</h1>
    </div>

    <div className="px-20">
      
      <article className="font-serif text-neutral-50 bg-green-900 px-10 py-10 rounded-lg flex flex-col items-center text-start justify-between text-md">

        <div className="bg-blue-900 mx-20 p-20 rounded-lg">
        
          <p>
            Hi, my name is Julkar ( Juul-car ) and welcome to my page :)<br></br> 
            I am a 2nd year Computing Science Student at Simon Fraser University. <br></br>
            My preferred languages are:<br></br><br></br> 
              <li>C</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>Python</li>
              <br></br>
            I enjoy working with abstract data structures in C and C++.<br></br>
            I have also created webpages using JavaScript such as the one you are viewing right now.
            <br></br><br></br>**This page was created using Next.js***
          </p>

        </div>

        <div>
          <div className="flex flex-col items-center justify-between px-2 text-lg rounded-lg">
            <h1><br></br><br></br>
              <Link href="/SFU"  className="block  rounded-lg p-4 hover:bg-blue-900 hover:shadow-lg ">
                <Image src="/images/SFU.png" alt="SFU" width={200} height={10} className="w-auto h-auto mb-4 rounded-lg px-5" />
                
                <p className="text-center justify-between px-6">SFU Campus Timeline<br></br>
                - Made with Bootstrap<br></br>
                </p>

              </Link>
            </h1><br></br>
          </div>

          <div className='grid grid-cols-2  bg-green-900 rounded-lg'>
            
            <div className=" flex items-center  px-10 text-md rounded-lg">
              <h1>
                <Link href="https://www.linkedin.com/in/julkar-naine-reedoy-211015217/" target="_blank"  className="block   bg-green-900  rounded-lg p-4 hover:bg-red-900 hover:shadow-lg">
                  <Image src="/images/linkedIn.png" alt="LinkedIn" width={50} height={10} className=" w-auto h-auto  rounded-lg"></Image>
                  LinkedIn
                </Link>
              </h1>
            </div>

            <div className="  flex items-center  px-10 text-lg rounded-lg">
              <h1> 
                <Link href="https://github.com/gunmack" target="_blank"  className="block  bg-green-900  rounded-lg p-4 hover:bg-red-900 hover:shadow-lg">
                  <Image src="/images/gitHub.png" alt="GitHub" width={50} height={10} className=" w-auto h-auto  rounded-lg"></Image>
                  GitHub
                </Link>
              </h1>
            </div>

          </div>

        </div>

      </article>

    </div> 
        
  </main>
  );
}

