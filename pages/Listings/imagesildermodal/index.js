import * as React from 'react';
import ImageArrow from '../../../assets/svgicons/ImageArrow';
import ClosseButton from '../../../assets/svgicons/ClosseButton';

import styles from './ImageSilder.module.css';
import { Modal } from '@mui/material'

const ImageSliderModal = (props) => {

    const {
        images = [],
        isOpen = true,
        onClose
    } = props

    const [currentImageIdx, setCurrentImageIdx] = React.useState(0)

    return (

        <Modal
            open={isOpen}
        >


            <div
                className={styles.contentWarper}
            >


                <ImageArrow
                    onClick={() => {
                        if (currentImageIdx > 0) {
                            setCurrentImageIdx(currentImageIdx - 1)
                        }
                    }}
                />



                <span className={styles.span} contentEditable={false}  >
                    <img
                        src={images[currentImageIdx]}
                        className={styles.image}
                    />
                    <ClosseButton
                        onClick={() => { onClose && onClose() }}
                        className={styles.closeButton}
                    />
                </span>



                <ImageArrow
                    right
                    onClick={() => {
                        if (currentImageIdx < images.length) {
                            setCurrentImageIdx(prev => prev + 1)
                        }
                    }}
                />

            </div>

        </Modal>
    )
}

export default ImageSliderModal