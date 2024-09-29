"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Navigation from '@/components/navbar';

export default function Home() {
  return (
    <>
    <div className='bg-red-900 px-20 py-5 '>
      <Navigation />
    </div>
    <main className="bg-zinc-900 flex flex-col items-center mx-30 xl:px-80 py-10 sm:mx-1 rounded-sm">
      <div className=" flex flex-col items-center px-10 sm:px-1 text-blue-500 font-mono py-10 text-center text-4xl">
        <h1>Julkar Naine Reedoy</h1>
      </div>
      <div>
        <article className="font-mono text-neutral-50 bg-cyan-900 rounded-lg flex flex-col items-center text-start text-md">
          <div className="bg-red-900 rounded-lg p-10  m-10 ">
          <p>
            Hi, my name is Julkar and welcome to my page :)<br></br> 
            I am a 2nd year Computing Science Student at Simon Fraser University. <br></br>
            My preferred languages are:<br></br><br></br> 
          </p>
    
          <ul>
            <li>👉 Python</li>
            <li>👉 Java</li>
            <li>👉 JavaScript</li>
            <li>👉 C</li>
          </ul>
          <br></br>
    
          <p>   
            I mostly work on front-end applications with React and Python.<br></br>
            I have experience working with abstract data structures in C and C++.<br></br>
            Currently, I am learning Object Oriented Programming with Java.
            <br></br><br></br>Take a look at my resume <Link href="/files/Julkar_Reedoy_resume.pdf" target="_blank">📄</Link>
          </p>
          </div>

          <div>
            <div className="flex flex-col items-center px-2 text-lg rounded-lg">
              <h1><br></br><br></br>
                <Link href="/SFU"  className="block rounded-lg p-4 hover:bg-zinc-900 hover:shadow-lg ">
                  <Image src="/images/SFU.png" alt="SFU" width={200} height={10} className="w-auto h-auto mb-4  px-5" />
                  <p className="text-center justify-between px-6">SFU Campus Timeline<br></br>
                  👉 Made with Bootstrap<br></br>
                  </p>
                </Link>
              </h1><br></br>
            </div>

            <div className='grid grid-cols-2  bg-cyan-900 rounded-lg'>
              <div className=" flex items-center px-10 text-md rounded-lg">
                <h1>
                  <Link href="https://www.linkedin.com/in/julkar-naine-reedoy-211015217/" target="_blank"  className="block   bg-cyan-900  rounded-lg p-4 hover:bg-red-500 hover:shadow-lg">
                    <Image src="/images/linkedIn.png" alt="LinkedIn" width={50} height={10} className=" w-auto h-auto rounded-lg "></Image>
                    LinkedIn
                  </Link>
                </h1>
              </div>

              <div className="flex items-center  px-10 text-lg rounded-lg">
                <h1> 
                  <Link href="https://github.com/gunmack" target="_blank"  className="block  bg-cyan-900  rounded-lg p-4 hover:bg-red-500 hover:shadow-lg">
                    <Image src="/images/gitHub.png" alt="GitHub" width={50} height={10} className=" w-auto h-auto" ></Image>
                    GitHub
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </article>
      </div>
      <br></br><br></br> 
    </main>
    </>
  );
}

