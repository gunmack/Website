import React from 'react';
// import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: "Origins",
};

export default function SFU(){
    return(
        <main className="bg-zinc-900 flex flex-col items-center justify-between">
      {/* <div>
        <link rel="icon" href="/favicon.ico/" sizes="any" />
      </div> */}
      <div className=" flex flex-col items-center justify-between px-2">
        <h1 className=" text-red-500 font-mono  py-20 text-6xl ">Simon Fraser University (1965)</h1>
      </div>
      <div className="px-10">
        <article className="font-serif text-neutral-50 bg-cyan-900 px-2 py-10 rounded-lg flex flex-col items-center justify-between text-xl">
          <p>
          Initial planning for the University began in 1962 and was approved by the Legislature of British Columbia in 1963. 
          It was named after the fur trader and explorer, Mr. Simon Fraser.<br></br><br></br>
          Gordon M. Shrum was appointed as the first chancellor of Simon Fraser University. 
          Shrum recommended that Burnaby Mountain be used as the location for the Burnaby campus. 
          It should be noted that the Burnaby Mountain is approximately 1200 foot high or 365 meters above sea level.<br></br><br></br>
          Vancouver based Architecture firm Erickson/Massey won the rights to design the overall campus. 
          All 4 runner-up architects were allowed to each design at least one building. 
          18 months of construction took place beginning in the spring of 1964. 
          The campus finally opened to 2500 students on September 9th, 1965.
          </p>
        </article>
        </div><br></br><br></br>
      <div className="min-h-screen">
      <h1 className="text-red-500 flex flex-lf justify-center font-bold text-xl"> Campuses </h1>
        <article className=" px-20 py-10 rounded-lg flex flex-lf justify-center">
          <h1>
            <Link href="https://www.sfu.ca/~jnr2/SFU1/Burnaby.html" className="bg-red-900 hover:bg-red-400 text-white font-bold px-5 py-2 rounded-full"> Burnaby Campus</Link>
          </h1>
          <h1> 
            <Link href="https://www.sfu.ca/~jnr2/SFU1/Vancouver.html"  className="bg-red-900 hover:bg-red-400 text-white font-bold px-5 py-2 rounded-full"> Vancouver Campus</Link>
          </h1>
          <h1> 
            {/* <Link href="/SFU/Surrey" target="_blank" className="bg-red-900 hover:bg-red-400 text-white font-bold py-2 px-10 rounded-full"> Surrey Campus</Link> */}
            <Link href="https://www.sfu.ca/~jnr2/SFU1/Surrey.html"  className="bg-red-900 hover:bg-red-400 text-white font-bold py-2 px-5 rounded-full"> Surrey Campus</Link>
          </h1>
        </article>
        <h1 className="text-red-500 flex flex-lf justify-center font-bold text-xl"> Residences </h1>
        <article className=" px-2 py-10 rounded-lg flex flex-lf justify-center">
          <h1>
            <Link href="https://www.sfu.ca/~jnr2/SFU1/BNResidence.html"  className="bg-red-900 hover:bg-red-400 text-white font-bold py-2 px-2 rounded-full"> Burnaby Residence</Link>
          </h1>
          <h1> 
            <Link href="https://www.sfu.ca/~jnr2/SFU1/VNResidence.html" className="bg-red-900 hover:bg-red-400 text-white font-bold py-2 px-2 rounded-full"> Vancouver Residence</Link>
          </h1>
        </article><br></br><br></br>
        <footer>
        <p className="text-cyan-500 font-serif text-lg flex flex-col items-center justify-between px-2">All information sourced from <a href="https://www.sfu.ca/">sfu.ca </a> and 
        <a href="https://en.wikipedia.org/wiki/Simon_Fraser_University"> wikipedia.org</a><br></br><br></br>
        Created by <a href="https://www.gunmack.dev/">Julkar Naine Reedoy </a></p> <br></br><br></br>
        </footer>
      </div>
    </main>
    )
}

