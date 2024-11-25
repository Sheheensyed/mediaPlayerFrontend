import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import Videocard from './Videocard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddCategoryApi, deleteCategoryApi, getAllCategoryApi, updateCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category({categoryVDStatus}) {
  const [show, setShow] = useState(false);
  const [categoryname, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [categoryStatus, setCategoryStatus] = useState({})
  const [deleteStatus, setDeleteStatus] = useState({})
  const [categoryUpdateStatus, setCategoryUpdateStatus] = useState({})



  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  const handleCancel = () => {
    setCategoryName('')
  }

  // console.log(categoryname);

  const handleAdd = async () => {
    if (!categoryname) {
      alert('Please fill the category name')
    } else {
      const reqBody = {
        Category: categoryname,
        allvideo: []
      }
      const result = await AddCategoryApi(reqBody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setAllCategory(result.data)

        toast.success('Category added succesfull')
        handleClose()
        setCategoryStatus(result)
      } else {
        toast.error('Something went wrong')
      }
    }
  }

  const getCategory = async () => {
    const result = await getAllCategoryApi()
    console.log(result);

    if (result.status >= 200 && result.status < 300) {
      setAllCategory(result.data)
    }
  }
  console.log(allCategory);


  const deletecategory = async (id) => {
    const result = await deleteCategoryApi(id)
    if (result.status >= 200 && result.status < 300) {
      setDeleteStatus(result)
    } else {
      toast.error('something went wrong')
    }
  }


  const videoOver = (e) => {
    //reload
    e.preventDefault()
  }

  const videoDrop = async (e, categoryDetails) => {
    console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData("vDetails"))
    console.log(videoDetails);


    if (categoryDetails.allvideo.find((item) => item.id == videoDetails.id)) {
      toast.warn('video already in the same category')
    }
    else {
      toast.success
      categoryDetails.allvideo.push(videoDetails)
      console.log(categoryDetails);
      const result = await updateCategoryApi(categoryDetails.id, categoryDetails)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setCategoryUpdateStatus(result)
      }

    }


  }


  const videoDrag = (e, videoDetails, categoryDetails) => {
    console.log(videoDetails, categoryDetails);

    const details = {
      videoDetails,
      categoryDetails
    }
    e.dataTransfer.setData("Details",JSON.stringify(details))
  }

  useEffect(() => {
    getCategory()
  }, [categoryStatus, deleteStatus, categoryUpdateStatus,categoryVDStatus])

  return (
    <>
      <h4 className='mt-5'>category</h4>
      <button onClick={handleShow} className='btn btn-outline-warning mt-4 w-100'>Add Category</button>

      {allCategory?.length > 0 ?
        allCategory?.map((item) => (

          <div className="border border-secondary p-3 rounded mt-4" droppable onDragOver={(e) => videoOver(e)} onDrop={(e) => videoDrop(e, item)}>
            <div className='d-flex justify-content-between mb-3'>
              <h6 className='mt-2'>{item?.Category}</h6>
              <button className='btn btn-danger' onClick={() => { deletecategory(item.id) }}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
            {item?.allvideo?.length > 0 &&
              item?.allvideo?.map((video) => (

                <div draggable onDragStart={(e) => videoDrag(e, video, item)}>
                  <Videocard videoDetails={video} present={true} />
                </div>

              ))
            }
          </div>
        ))
        :
        <h5 className='text-center text-danger mt-4'>No category added yet</h5>
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-4 rounded border-dark border'>
            <input type="text" placeholder='Enter Category Name' className='form-control' onChange={(e) => setCategoryName(e.target.value)} value={categoryname} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />


    </>
  )
}

export default Category