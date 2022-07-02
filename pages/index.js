import Head from 'next/head'
import Avatar from "../components/Avatar";
import g from "../components/g.jpg"
import {MicrophoneIcon,ViewGridIcon} from "@heroicons/react/solid";
import{SearchIcon,BadgeCheckIcon} from "@heroicons/react/outline";
import Image from 'next/image';
import Footer from "../components/Footer";
import {useRef} from "react";
import {useRouter} from "next/router";

export default function Home() {
  const router=useRouter();
  const searchInputRef=useRef(null);

  const search=(e)=>{
    e.preventDefault();
    const term=searchInputRef.current.value;
    if(!term) return;  
    router.push(`/search?term=${term}`);
  };
  return (
    <div className='flex flex-col items-centre justify-center h-screen'>
      <Head>
        <title>Google</title>
        {/* Header will have everything, and p-10, is padding, h-10 is height , lso in tailwindcss u can do anything with className */}
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>{/*flex makes the items in row, with space 4aand item centre on vertical axis*/}
        <div className="flex space-x-4 items-center">{/*left div  */}
          <p className="link">About</p>
          <p className="link">Store</p>

        </div>
        
          {/*right div */}
          <div className="flex space-x-4 items-center">
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          {/*icon */}
          <ViewGridIcon className='="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>
          <Avatar/>  
          </div>
        </header>  
        {/*Body*/}
            <form className='flex flex-col items-center mt-11 flex-grow w=4/5'>
          
          <Image src={g}
          alt="Google logo"
          height={140}
          width={300}/>

          <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-centre sm:max-w-xl lg:max-w-2xl'>
            <SearchIcon className='h-5 mr-3 text-gray-500'/>
            <input
            ref={searchInputRef} 
            type="text" className=' flex-grow
            focus:outline-none'/>
            <MicrophoneIcon className='h-5 ' />
          </div>

          <div className="flex flex-col w=1/2 space-y-2 justify-center mt-8
          sm:space-y-0 sm:flex-row sm:space-x-4">
            <button onClick={search} className="btn">
              Google Search
            </button>
            <button onClick={search} className="btn">
              I am Feeling Lucky
            </button>
          </div>

        
        </form>
        <Footer />
</div>
    
  )
}