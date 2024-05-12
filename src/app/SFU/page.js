import React from 'react';

import Link from 'next/link';

export const metadata = {
  title: "Origins",
};

export default function SFU(){
    return(
        <main className="bg-zinc-900 flex flex-col items-center justify-between">
     
      <div className=" flex flex-col items-center justify-between px-10">
        <h1 className=" text-red-500 font-mono  py-20 text-3xl ">Simon Fraser University (1965)</h1>
      </div>
      <div className="px-20">
        <article className="font-serif text-neutral-50 bg-cyan-900 px-10 py-10 rounded-lg flex flex-col items-center justify-between text-md">
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
            <Link href="https://www.sfu.ca/~jnr2/SFU1/Burnaby.html" className="bg-red-900 hover:bg-red-400 text-white  font-bold px-5 py-2 rounded-full"> Burnaby </Link>
          </h1>
          <h1> 
            <Link href="https://www.sfu.ca/~jnr2/SFU1/Vancouver.html" className="bg-red-900 hover:bg-red-400 text-white  font-bold px-5 py-2 rounded-full"> Vancouver </Link>
          </h1>
          <h1> 
            <Link href="https://www.sfu.ca/~jnr2/SFU1/Surrey.html" className="bg-red-900 hover:bg-red-400 text-white  font-bold py-2 px-5 rounded-full"> Surrey </Link>
          </h1>
        </article>
        <h1 className="text-red-500 flex flex-lf justify-center font-bold text-xl"> Residences </h1>
        <article className=" px-2 py-10 rounded-lg flex flex-lf justify-center">
          <h1>
            <Link href="https://www.sfu.ca/~jnr2/SFU1/BNResidence.html"  className="bg-red-900 hover:bg-red-400 text-white font-bold py-2 px-2 rounded-full"> Burnaby</Link>
          </h1>
          <h1> 
            <Link href="https://www.sfu.ca/~jnr2/SFU1/VNResidence.html"  className="bg-red-900 hover:bg-red-400 text-white font-bold py-2 px-2 rounded-full"> Vancouver</Link>
          </h1>
        </article><br></br><br></br>
        <footer>
        <p className="text-cyan-500 font-serif text-lg flex flex-col items-center justify-between px-2">All information sourced from <Link href="https://www.sfu.ca/" className='hover:bg-red-900 text-neutral-50 rounded-lg px-5'>sfu.ca </Link> and 
        <Link href="https://en.wikipedia.org/wiki/Simon_Fraser_University" className='hover:bg-red-900 text-neutral-50 rounded-lg px-5'> wikipedia.org</Link><br></br><br></br>
        Created by <Link href="https://www.gunmack.dev/" className='hover:bg-red-900 text-neutral-50 rounded-lg px-5'>Julkar Naine Reedoy </Link></p> <br></br><br></br>
        </footer>
      </div>
    </main>
    )
}

