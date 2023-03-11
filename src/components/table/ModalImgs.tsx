import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Image from 'next/image';
import { useState } from 'react';
import { Grid, useMediaQuery, useTheme, Button } from '@mui/material';
type ModalImgsProps = {
  openModal: boolean;
  handleCloseModal: DialogProps['onClose'];
  imgs: string[] | null;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const style = {
  //   position: 'absolute' as 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 'auto',
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  maxWidth: '100%',
  height: 'auto',
  //   //   p: 4,
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
};

function ModalImgs({
  openModal,
  handleCloseModal,
  imgs,
  setOpenModal,
}: ModalImgsProps) {
  const theme = useTheme();
  // const [fullWidth, setFullWidth] = useState(true);
  // const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('sm');
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  function disableNextBtn() {
    if (imgs) {
      if (currentImgIndex >= imgs.length - 1) return true;
      return false;
    }
  }
  function disablePrevBtn() {
    if (imgs) {
      if (currentImgIndex <= 0) return true;
      return false;
    }
  }
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const ismediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isXLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

  // const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
  //   setMaxWidth(
  //     // @ts-expect-error autofill of arbitrary value is not handled.
  //     event.target.value
  //   );
  // };
  // useEffect(() => {
  //   if (isLargeScreen) {
  //     console.log('small');
  //     setMaxWidth('xl');
  //   }
  // }, [isLargeScreen]);

  // const handleFullWidthChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setFullWidth(event.target.checked);
  // };

  if (isSmallScreen) console.log('small');
  if (ismediumScreen) console.log('medium');
  if (isXLargeScreen) console.log('Xlarge');
  return (
    <>
      {/* {openModal && (
        <Box sx={{ position: 'absolute', zIndex: '2000' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="backward"
            // onClick={() => setOpenModal(false)}
            sx={{
              position: 'absolute',
              color: 'white',
              zIndex: '2000',
              top: '50%',
              left: '5%',
              // '&.MuiButtonBase-root:hover': {
              //   bgcolor: 'white',
              // },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="forward"
            // onClick={() => setOpenModal(false)}
            sx={{
              position: 'absolute',
              zIndex: '2000',
              color: 'white',
              top: '50%',
              right: '5%',
              // '&.MuiButtonBase-root:hover': {
              //   bgcolor: 'n',
              // },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      )} */}

      <Dialog
        disableScrollLock={true}
        fullWidth={true}
        maxWidth={'sm'}
        // maxWidth={isXLargeScreen ? 'lg' : 'sm'}
        open={openModal}
        // style={{ maxWidth: '100%', maxHeight: '100%' }}
        onClose={handleCloseModal}
        PaperProps={{ sx: { overflowY: 'unset' } }}
        // scroll="paper"
        // PaperComponent={() => {
        //   return (
        //     <DialogContent
        //       sx={{
        //         position: 'relative',
        //         height: isSmallScreen
        //           ? '20em'
        //           : isXLargeScreen
        //           ? '30em'
        //           : '27em',
        //       }}
        //     >
        //       {imgs ? (
        //         <Image
        //           src={imgs[0]}
        //           alt="unit pic"
        //           fill
        //           style={{
        //             maxWidth: '100%',
        //             // height: 'auto',
        //             padding: '0',
        //             margin: '0',
        //           }}
        //           //   object-fit: "cover"
        //           // width={960}
        //           // height={600}
        //           priority
        //         />
        //       ) : (
        //         'No Pics Founds'
        //       )}
        //       <Box sx={{ position: 'absolute', zIndex: '2000' }}>
        //         <IconButton
        //           size="large"
        //           edge="start"
        //           color="inherit"
        //           aria-label="backward"
        //           // onClick={() => setOpenModal(false)}
        //           sx={{
        //             position: 'absolute',
        //             color: 'white',
        //             zIndex: '2000',
        //             top: '50%',
        //             left: '5%',
        //             // '&.MuiButtonBase-root:hover': {
        //             //   bgcolor: 'white',
        //             // },
        //           }}
        //         >
        //           <ChevronLeftIcon />
        //         </IconButton>
        //         <IconButton
        //           size="large"
        //           edge="start"
        //           color="inherit"
        //           aria-label="forward"
        //           // onClick={() => setOpenModal(false)}
        //           sx={{
        //             position: 'absolute',
        //             zIndex: '2000',
        //             color: 'white',
        //             top: '50%',
        //             right: '5%',
        //             // '&.MuiButtonBase-root:hover': {
        //             //   bgcolor: 'n',
        //             // },
        //           }}
        //         >
        //           <ChevronRightIcon />
        //         </IconButton>
        //       </Box>
        //     </DialogContent>
        //   );
        // }}
        // sx={{ width: '10em' }}
      >
        {/* <Box sx={style}> */}
        {/* <Grid item sm={12} xs={12}> */}

        <DialogContent
          sx={{
            position: 'relative',
            height: isSmallScreen ? '20em' : isXLargeScreen ? '30em' : '27em',
          }}
        >
          {imgs ? (
            <Image
              src={imgs[currentImgIndex]}
              alt="unit pic"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{
                maxWidth: '100%',
                // height: 'auto',
                padding: '0',
                margin: '0',
              }}
              //   object-fit: "cover"
              // width={960}
              // height={600}
              priority
            />
          ) : (
            'No Pics Founds'
          )}
        </DialogContent>
        <Box sx={{}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="forward"
            onClick={() => setCurrentImgIndex((prev) => prev + 1)}
            disabled={disableNextBtn()}
            sx={{
              position: 'absolute',
              zIndex: '2000',
              color: 'white',
              margin: '0',
              top: ismediumScreen ? '-17%' : '50%',
              right: ismediumScreen ? '50%' : '-12%',
              translate: ismediumScreen ? '50%' : 'unset',

              // '&.MuiButtonBase-root:hover': {
              //   bgcolor: 'n',
              // },
            }}
          >
            {ismediumScreen ? (
              <KeyboardArrowUpIcon
                fontSize="large"
                style={{ maxWidth: 60, maxHeight: 60 }}
              />
            ) : (
              <ChevronRightIcon
                fontSize="large"
                style={{ maxWidth: 60, maxHeight: 60 }}
              />
            )}
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="backward"
            onClick={() => setCurrentImgIndex((prev) => prev - 1)}
            disabled={disablePrevBtn()}
            sx={{
              position: 'absolute',
              color: 'white',
              zIndex: '2000',
              margin: '0',
              top: ismediumScreen ? 'unset' : '50%',
              left: ismediumScreen ? '50%' : '-13%',
              translate: ismediumScreen ? '-50%' : 'unset',
              // '&.MuiButtonBase-root:hover': {
              //   bgcolor: 'white',
              // },
            }}
          >
            {ismediumScreen ? (
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ maxWidth: 60, maxHeight: 60 }}
              />
            ) : (
              <ChevronLeftIcon
                fontSize="large"
                style={{ maxWidth: 60, maxHeight: 60 }}
              />
            )}
          </IconButton>
        </Box>
        <DialogActions sx={{ position: 'absolute', right: '2%' }}>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="close picture"
            onClick={() => setOpenModal(false)}
            sx={{
              backgroundColor: 'white',
              '&.MuiButtonBase-root:hover': {
                bgcolor: 'white',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogActions>

        {/* </Grid> */}
        {/* </Box> */}
      </Dialog>
    </>
  );
}

export default ModalImgs;
