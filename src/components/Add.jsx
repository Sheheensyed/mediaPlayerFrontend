import React, { useState } from 'react';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setAddStatus}) {
  const [show, setShow] = useState(false);

  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imgurl: "",
    embedLink: ""
  });
  console.log(videoDetails);

  const handleCancel = () => {
    setVideoDetails({
      caption: "",
      imgurl: "",
      embedLink: ""
    });
  }

  const handleClose = () => {
    setShow(false);
  }

  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    const { caption, imgurl, embedLink } = videoDetails;
    if (!caption || !imgurl || !embedLink) {
      toast.info('Please fill the form completely');
    } else {
      let link;
      if (embedLink.startsWith('http://youtu.be/')) {
        // https://youtu.be/9ZMWM9a-v0A?si=y1GDKLNsd8PER6ac
        link = `https://www.youtube.com/embed/${embedLink.slice(17, 28)}`;
        console.log(link);

        const result = await addVideoApi({ caption, imgurl, embedLink: link });
        console.log(result);

        if (result.status >= 200 && result.status < 300) {
          toast.success('video added succesfully')
          handleClose
          setAddStatus(result)
        } else {
          toast.error('Something went wrong')
          handleCancel
        }

      } else {
        // https://www.youtube.com/watch?v=9ZMWM9a-v0A
        link = `https://www.youtube.com/embed/${embedLink.slice(-11)}`;
        console.log(link);

        const result = await addVideoApi({ caption, imgurl, embedLink: link });
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          toast.success('video added succesfully')
          handleClose
          setAddStatus(result)
        } else {
          toast.error('Something went wrong')
          handleCancel
        }
      }
    }
  }

  return (
    <>
      <h5>
        <span className='d-md-inline d-none'>Upload new video</span>
        <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-1' />
      </h5>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className=''>
          <Modal.Title>
            <FontAwesomeIcon icon={faFilm} className='me-1' /> Upload videos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='ms-3'>Please fill the following details.</p>
          <form className='border border-light p-1 rounded'>
            <div className="mb-3 mt-2">
              <input type="text" value={videoDetails.caption} placeholder='Video Caption' className='form-control' onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} />
            </div>
            <div className="mb-3">
              <input type="text" value={videoDetails.imgurl} placeholder='Video Image' className='form-control' onChange={(e) => setVideoDetails({ ...videoDetails, imgurl: e.target.value })} />
            </div>
            <div className="mb-3">
              <input type="text" value={videoDetails.embedLink} placeholder='Embed Link' className='form-control' onChange={(e) => setVideoDetails({ ...videoDetails, embedLink: e.target.value })} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}


export default Add;