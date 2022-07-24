import React from 'react'
import Gallary from '../Gallary/Gallary'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function MyModal({show,handleClose,images}) {
    return (
        <Modal  show={show} onHide={handleClose}>
            <Modal.Header  style={{ backgroundColor:"#242424",color:"white" ,border:"2px solid #ffa300",borderBottom:"none"}} ></Modal.Header>
            <Modal.Body style={{ backgroundColor:"#242424",color:"white" ,border:"2px solid #ffa300",borderTop:"none",borderBottom:"none"}}>
                <Gallary images={images} />
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor:"#242424",color:"white" ,border:"2px solid #ffa300",borderTop:"none"}}>
                <div style={{ backgroundColor:"#ffa300b3" ,borderRadius:".3em" ,width:"4em",textAlign:"center",margin:"auto",fontSize:"1.1em" ,cursor:"pointer"}}  onClick={handleClose}>
                    Close
                </div>
            </Modal.Footer>
        </Modal>
    )
}
export default React.memo(MyModal);