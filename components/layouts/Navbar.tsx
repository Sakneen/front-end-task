import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-[#2419BE] shadow-md">
      <nav className="h-12 container flex items-center ">
        <Image
          src={'/sakneen-logo.svg'}
          width={25}
          height={25}
          alt="sakneen logo"
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
      </nav>
    </div>
  );
};

export default Navbar;
