import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Image from 'next/image';
import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

type ModalImgsProps = {
  openModal: boolean;
  handleCloseModal: DialogProps['onClose'];
  imgs: string[] | null;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function ModalImgs({
  openModal,
  handleCloseModal,
  imgs,
  setOpenModal,
}: ModalImgsProps) {
  const theme = useTheme();

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

  return (
    <>
      <Dialog
        disableScrollLock={true}
        fullWidth={true}
        maxWidth={'sm'}
        open={openModal}
        onClose={handleCloseModal}
        PaperProps={{ sx: { overflowY: 'unset' } }}
      >
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

                padding: '0',
                margin: '0',
              }}
              priority
            />
          ) : (
            'No Pics Found'
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
      </Dialog>
    </>
  );
}

export default ModalImgs;
