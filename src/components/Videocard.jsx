import React, { useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addHistoryApi, removeVideo } from '../services/allApi';

function Videocard({ videoDetails, setDeleteStatus, present }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    let Caption = videoDetails?.caption
    let url = videoDetails?.embedLink
    const time = new Date()
    console.log(time);
    const timeStamp = new Intl.DateTimeFormat("en-GB", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(time);
    console.log(timeStamp);


    const reqBody = {
      Caption,
      url,
      timeStamp
    }
    const result = await addHistoryApi(reqBody)
    console.log(result);

  }


  const handleDelete = async (id) => {
    const result = await removeVideo(id)
    console.log(result);

    if (result.status >= 200 && result.status < 300) {
      setDeleteStatus(result)
    }
  }

  const videoDrag = (e, vDetails) => {
    console.log(e);
    console.log(vDetails);

    e.dataTransfer.setData("vdetails", JSON.stringify(vDetails))
  }


  return (
    <>
      <Card style={{ width: '100%' }} className='mt-3' draggable onDragStart={(e) => videoDrag(e, videoDetails)}>
        {!present && <Card.Img onClick={handleShow} variant="top" src={videoDetails?.imgurl} className='w-100' style={{ height: '300px' }} />}

        <Card.Body className='d-flex justify-content-between'>
          <Card.Title>{videoDetails?.caption}</Card.Title>
          {!present && <Button onClick={() => handleDelete(videoDetails.id)} variant="primary" className='h-50'><FontAwesomeIcon icon={faTrash} /></Button>}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="397" src={`${videoDetails?.embedLink}?autoplay=1`} title="This is why Battlefield 1 makes you hate war..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Videocard;
