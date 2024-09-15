import React, {useState} from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem,
  Link,} from "@nextui-org/react";
import Image from 'next/image';

export default function Navigation() {

  const [isOpen, setIsOpen] = useState(false); 

  return (
    <Navbar className="w-full">

      <NavbarBrand>
        <Image src="/images/j_Logo.png" alt="logo" width={25} height={2} className="rounded-lg"></Image>
      </NavbarBrand>
     
      {/* <div className="sm:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none"> */}
          {/* Hamburger icon */}
          {/* <Image src="/images/burger-menu-icon-vector.jpg" width={25} height={25} className="rounded-lg"></Image>
        </button>
      </div> */}

      {/* Centered Links */}
      <NavbarContent className="flex w-full md:w-auto justify-center items-center sm:justify-between ">

        <NavbarItem>
          <Link href="/" className=" font-mono font-bold text-white hover:bg-zinc-900 rounded-full p-2" >
            gunmack.dev
          </Link>
        </NavbarItem>
        
        <NavbarItem>
          <Link href="/SFU" className=" font-mono font-bold text-white hover:bg-zinc-900 rounded-full p-2" >
            gunmack.dev/SFU
          </Link>
        </NavbarItem>
      </NavbarContent>

      {isOpen && (
        <NavbarContent className="sm:hidden flex flex-col w-full bg-zinc-900 rounded-lg p-2">
          <NavbarItem>
            <Link href="/" className="font-mono font-bold text-white hover:bg-cyan-900 p-2 rounded-lg">
              gunmack.dev
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/SFU" className="font-mono font-bold text-white hover:bg-cyan-900 p-2 rounded-lg">
              gunmack.dev/SFU
            </Link>
          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
}

