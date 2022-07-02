import Image from "next/image";
import cute from "../components/cute.png"

function Avatar({className}){
    return <Image
        src={cute}
        width="50px"
        height="50px"
        loading="lazy"
        className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover: scale-110 ${className}`}
        
        alt="profile pic"/>;
      
}

export default Avatar
