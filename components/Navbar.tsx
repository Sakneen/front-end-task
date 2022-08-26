import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="bg-[#2419BE]">
      <nav className="h-12 container flex items-center shadow-md">
        <Image src={'/sakneen-logo.svg'} width={25} height={25} />
      </nav>
    </div>
  );
};

export default Navbar;
