import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HomeIcon from './icons/HomeIcon';

const Breadcrumb = () => {
  const router = useRouter();
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
      className="text-xs text-gray-400 my-5 font-[500]"
    >
      <Link href={'/'}>
        <span
          className={`flex items-baseline gap-x-2 capitalize cursor-pointer ${
            router.pathname === '/'
              ? 'underline underline-offset-1 text-gray-500'
              : ''
          }`}
        >
          <HomeIcon />
          Home
        </span>
      </Link>
      <Link href={'/'}>Dashboard</Link>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
