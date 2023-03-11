import Header from './Header';
import { ReactNode } from 'react';
import Nav from './Nav';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Header />
      <Box
        sx={{
          paddingInline: isSmallScreen ? '2.8125em' : '6.8125em',
          paddingBlockStart: '4em',
          paddingBlockEnd: '24em',
        }}
      >
        <Nav />
        <main>{children}</main>
      </Box>
    </div>
  );
}

export default Layout;
