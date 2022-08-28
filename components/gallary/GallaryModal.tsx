import Modal from '@mui/material/Modal';
import { closeGallary } from '../../lib/features/gallarySlice';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';

const GallaryModal = () => {
  const dispatch = useAppDispatch();
  const params = useAppSelector(({ dashboard }) => dashboard);
  const { images, isOpen } = useAppSelector(({ gallary }) => gallary);

  return (
    <Modal
      open={isOpen}
      onClose={() => dispatch(closeGallary())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>Hello</div>
    </Modal>
  );
};
export default GallaryModal;
