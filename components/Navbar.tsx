import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="bg-[#2419BE] shadow-md">
      <nav className="h-12 container flex items-center ">
        <Image
          src={'/sakneen-logo.svg'}
          width={25}
          height={25}
          alt="sakneen logo"
        />
      </nav>
    </div>
  );
};

export default Navbar;
