import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AllVideos from '../components/AllVideos';
import Category from '../components/Category';

function Home() {

  const [addStatus,setAddStatus] = useState({})
  const [categoryVDStatus,setcategoryVDStatus]=useState({})



  return (
    <>
     <div className='container d-flex justify-content-between mt-5'>

      <Add setAddStatus={setAddStatus}/>

      <Link to={'/Watchhistory'} style={{textDecoration:'none'}}><h5><FontAwesomeIcon icon={faClockRotateLeft} /> <span className='d-md-inline d-none'>Watch history</span></h5></Link>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <AllVideos addStatus={addStatus} setcategoryVDStatus={setcategoryVDStatus} />
          </div>
          <div className="col-md-3">
            <Category categoryVDStatus={categoryVDStatus}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
