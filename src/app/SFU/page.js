"use client";
import React, {useState} from 'react';
import Modal from 'react-modal';
import Link from 'next/link';

export default function SFU(){
  const [isOpen, setIsOpen] = useState(false)
  const customStyles = {
     overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
     },
     content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
     }
  }
  
  return(
  <main className="bg-zinc-900 flex flex-col mx-30 xl:px-80 py-10 sm:mx-1 items-center">
    <div className=" flex flex-col items-center px-10 sm:px-1 text-red-500 font-mono py-10 text-center text-4xl">
      <h1>Simon Fraser University (1965)</h1>
    </div>
    
    <div>

      <article className="font-mono text-neutral-50 bg-cyan-900 rounded-lg flex flex-col items-center text-start text-md">

        <div className="bg-red-900 rounded-lg p-10  m-10">

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

        </div>

        <h1 className="text-red-500 flex flex-lf justify-center font-bold text-3xl"> Campuses </h1>
        <div className="px-4 sm:px-20 py-5 sm:py-10 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 justify-center">
          <h1>
            <Link href="https://www.sfu.ca/~jnr2/SFU1/Burnaby.html" className="bg-zinc-900 hover:bg-red-900 text-white  font-bold items-center p-2 rounded-full block text-center"> Burnaby </Link>
          </h1>
          
          <h1> 
            <Link href="https://www.sfu.ca/~jnr2/SFU1/Vancouver.html" className="bg-zinc-900 hover:bg-red-900 text-white  font-bold items-center p-2 rounded-full block text-center"> Vancouver </Link>
          </h1>
          
          <h1> 
            <Link href="https://www.sfu.ca/~jnr2/SFU1/Surrey.html" className="bg-zinc-900 hover:bg-red-900 text-white  font-bold items-center p-2 rounded-full block text-center"> Surrey </Link>
          </h1>
        </div>

        <h1 className="text-red-500 flex flex-lf justify-center font-bold text-3xl"> Residences </h1>
        <div className="px-4 sm:px-20 py-5 sm:py-10 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 justify-center">
          <h1>
            <Link href="https://www.sfu.ca/~jnr2/SFU1/BNResidence.html" className="bg-zinc-900 hover:bg-red-900 text-white  font-bold items-center p-2 rounded-full block text-center"> Burnaby </Link>
          </h1>

          <h1>
            <Link href="https://www.sfu.ca/~jnr2/SFU1/VNResidence.html" className="bg-zinc-900 hover:bg-red-900 text-white  font-bold items-center p-2 rounded-full block text-center"> Vancouver </Link>
          </h1>
        </div>

      </article>

    </div>

    <div>
      <footer>
        <p className="text-cyan-500 font-mono text-lg flex flex-col items-center text-center  p-6">
          All information sourced from 
          <Link href="https://www.sfu.ca/" className='hover:bg-red-900 text-neutral-50 rounded-lg px-5'>sfu.ca </Link> and 
          <Link href="https://en.wikipedia.org/wiki/Simon_Fraser_University" className='hover:bg-red-900 text-neutral-50 rounded-lg px-5'> 
          wikipedia.org</Link><br></br><br></br>
          Created by <Link href="https://www.gunmack.dev/" className='hover:bg-red-900 text-neutral-50 rounded-lg px-5'>
          Julkar Naine Reedoy </Link>
        </p> <br></br><br></br>
      </footer>

    </div>

  </main>
  )
}

