import Modal from '@mui/material/Modal';
import { closeGallary } from '../../lib/features/gallarySlice';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import GallarySwiper from './GallarySwiper';

const GallaryModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector(({ gallary }) => gallary);

  return (
    <Modal
      open={isOpen}
      onClose={() => dispatch(closeGallary())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <section className="outline-none rounded relative">
        <GallarySwiper />
      </section>
    </Modal>
  );
};
export default GallaryModal;
