import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// type Props = {};

function Nav() {
  return (
    <>
      <Typography variant="h5" component="h1">
        Dashboard
      </Typography>

      <AppBar
        position="static"
        sx={{
          backgroundColor: 'white',
          flexGrow: 1,
          marginBlockEnd: '1.5em',
          marginBlockStart: '0.5em',
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            minHeight: 'unset',
            paddingBlock: '0.5em',
            paddingInline: '0.7em',
          }}
          disableGutters={true}
          variant="dense"
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            //   sx={{ mr: 2 }}
          >
            <Image
              src="/homeicon.svg"
              alt="home icon"
              style={{ height: 'auto' }}
              width={12.67}
              height={12}
              priority
            />
          </IconButton>
          <Typography
            variant="caption"
            component="div"
            sx={{ textDecoration: 'underline', color: '#616161' }}
          >
            Home
          </Typography>
          <ChevronRightIcon
            fontSize="small"
            sx={{ color: '#9E9E9E' }}
            style={{ maxWidth: 60, maxHeight: 60 }}
          />
          <Typography
            variant="caption"
            component="div"
            sx={{ color: '#9E9E9E' }}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Nav;
