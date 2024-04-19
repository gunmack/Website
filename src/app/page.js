import Image from "next/image";

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
  <main className="bg-zinc-900">
    {/* <Head>
      <link rel="icon" href="/favicon.ico/" sizes="any" />
    </Head> */}
    <div className=" flex flex-col items-center justify-between px-40">
      <h1 className="text-blue-500 font-mono px-50 py-40 text-6xl ">Julkar Naine Reedoy</h1>
    </div>
    <div className="px-60">
      <article className="font-serif text-neutral-50 bg-green-900 px-40 py-10 rounded-lg flex flex-col items-center justify-between text-xl">
        <p>
          Hi, my name is Julkar ( Juul-car ). I am a 2nd year Computing Science Student at Simon Fraser University. <br></br>
            My preferred languages are:<br></br> 
                -English<br></br>  -C<br></br>  -Python<br></br><br></br>
            I enjoy working with abstract data structures in C and C++.
            I have also worked with CSS frameworks such as bootstrap and tailwind to create static html directories.
        </p>
      </article>
    </div>
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-between py-10 px-30 text-lg rounded-lg">
        <h1><br></br><br></br>
          <Link href="/SFU" target="_blank" className="bg-red-900 hover:bg-red-400 text-white font-bold py-2 px-10 rounded-full">Website about SFU campuses</Link>
        </h1><br></br>
      </div>
      <div className="flex flex-col items-center justify-between py-10 px-30 text-lg rounded-lg">
        <h1>
          <Link href="https://www.linkedin.com/in/julkar-naine-reedoy-211015217/" target="_blank" className="bg-red-900 hover:bg-red-400 text-white font-bold py-2 px-10 rounded-full"> LinkedIn</Link>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-between py-10 px-30 text-lg rounded-lg">
        <h1> <br></br>
          <Link href="https://github.com/gunmack" target="_blank" className="bg-red-900 hover:bg-red-400 text-white font-bold py-2 px-10 rounded-full"> LinkedIn</Link>
        </h1>
      </div>
    </div>

  </main>
  );
}
