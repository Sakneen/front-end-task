import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = () => {
  const router = useRouter();
  const asPath = router.asPath.substring(1);

  const acitveLink = (path: string) =>
    path == asPath ? 'underline underline-offset-1 text-gray-500' : '';

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
      className="text-xs text-gray-400 my-5 font-[500] bg-white p-2 shadow rounded"
    >
      <Link href={'/'}>
        <a
          className={`flex items-center gap-x-2 capitalize ${acitveLink(
            ''
          )} transition-all hover:underline`}
        >
          <Image src={'/homeIcon.svg'} alt="home" width={13} height={13} />
          Home
        </a>
      </Link>
      <Link href={'/dashboard'}>
        <a
          className={`${acitveLink(
            'dashboard'
          )} transition-all hover:underline`}
        >
          Dashboard
        </a>
      </Link>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
