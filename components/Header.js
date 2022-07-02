import Image from 'next/image';
import g from "../components/g.jpg"

function Header(){
    return(
        <header>
        <Image src={g}
          alt="Google logo"
          height={100}
          width={150}
          className="cursor-pointer"/>
        </header>
    );
}
export default Header;