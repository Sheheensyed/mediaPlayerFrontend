import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { Link } from 'react-router-dom'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Watchhistory() {

const[allHisVideo,setAllHisVideo]=useState([])
const[deleteStatus,setDeleteStatus]=useState({})

  const getAllVideo = async () => {
    const result = await getAllVideoHistoryApi()
    setAllHisVideo(result.data)

  }
  console.log(allHisVideo);
  
  const handleDelete=async(id)=>{
    const result = await deleteHistoryVideoApi(id)
    console.log(result);

    if(result.status>=200 && result.status<300){
      setDeleteStatus(result)
    }else{
      toast.error('Something went wrong')
    }
  }
  

  useEffect(() => {
    getAllVideo()
  }, [deleteStatus])

  return (
    <>
      <div className='d-flex justify-content-between px-5'>
        <h4>Watch History</h4>
        <Link to={'/home'} style={{ textDecoration: 'none' }}><h4> <FontAwesomeIcon icon={faHouse} />  <span className='d-md-inline d-none'>Back Home</span></h4></Link>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 table-responsive">
            <table className='table table-bordered mt-5'>
              <thead>
                <tr>
                  <th className='text-center'>#</th>
                  <th className='text-center'>Caption</th>
                  <th className='text-center'>url</th>
                  <th className='text-center'>Time stamp</th>
                  <th className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {allHisVideo?.map((item,index)=>(
                <tr>
                  <td className='text-center'>{index+1}</td>
                  <td className='text-center'>{item?.Caption}</td>
                  <td className='text-center'><Link to={item?.url}target='_blank'>{item?.url}</Link></td>
                  <td className='text-center'>{item?.timeStamp}</td>
                  <td className='text-center'>
                    <button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button></td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <h3 className='text-center text-danger'>No watch History</h3>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Watchhistory
