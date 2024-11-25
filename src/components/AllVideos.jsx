import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideoApi, updateCategoryApi } from '../services/allApi'

function AllVideos({addStatus,setcategoryVDStatus}) {

    const [video, setVideo] = useState([])
    const [deleteStatus, setDeleteStatus] = useState({})

    const getAllVideo = async () => {
        const result = await getVideoApi()
        // console.log(result);
        setVideo(result.data)
    }

    console.log(video);


    const dragOver = (e) => {
        e.preventDefault()
    }

    const videoDrop = async (e) => {
        const { videoDetails, categoryDetails } = JSON.parse(e.dataTransfer.getData("Details"))
        console.log(videoDetails, categoryDetails);

        let result = categoryDetails.allvideo.filter((item) => item.id != videoDetails.id)

        const reqBody = {
            Category: categoryDetails.Category,
            allvideo: result,
            id: categoryDetails.id
        }

        const response = await updateCategoryApi(categoryDetails.id, reqBody)
        console.log(response);
        if(response.status>=200 && response.status<300){
            setcategoryVDStatus(result)
        }
    }

    useEffect(() => {
        getAllVideo()
    }, [addStatus, deleteStatus])

    return (
        <>
            <h4 className='mt-5'>All videos</h4>

            {video?.length > 0 ?
                <div className="container-fluid mt-5" droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e)}>

                    <div className="row">
                        {video?.map((item) => (
                            <div className="col-md-3 p-3">
                                <Videocard videoDetails={item} setDeleteStatus={setDeleteStatus} />
                            </div>
                        ))
                        }
                    </div>
                </div>
                :
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png" className='w-100' alt="" />
                            <h5 className='text-center text-danger'>No videos Added yet...</h5>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>}
        </>
    )
}

export default AllVideos