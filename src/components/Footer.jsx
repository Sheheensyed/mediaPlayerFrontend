import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='py-5 px-3'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">        
                <Link to={'/'} style={{textDecoration:'none'}}><h4 className='text-warning'><FontAwesomeIcon icon={faVideo} fade className='mt-2 me-1' /> Media player</h4></Link>
                <p style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed debitis laboriosam aspernatur, minus voluptatum necessitatibus? Iure tempora officia minus eveniet, nihil consequatur culpa earum quas vitae illum odio, repudiandae a? lor</p>
          </div>

          <div className="col-md-2 d-md-flex justify-content-center">
            <div>
              <h4>Links</h4>
             <Link to='/'> <p>Landing page</p></Link>
             <Link to='/home'> <p>Home page</p></Link>
              <Link to='/Watchhistory'><p>Watch history</p></Link>
            </div>
          </div>

          <div className="col-md-2 d-md-flex justify-content-center">
            <div>
              <h4>Guides</h4>
              <p className='mt-3'>React</p>
              <p>React bootstrap</p>
              <p>Bootswatch</p>
            </div>
          </div>
          <div className="col-md-4">
            <h4>Contact us</h4>
            <div className='d-flex mt-3'>
              <input type="text" placeholder='Email id' className='form-control' />
              <button className='btn btn-info ms-3'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-between'>
            <FontAwesomeIcon icon={faVideo} className='mt-3 fa-2x'/>
            <FontAwesomeIcon icon={faInstagram} className='mt-3 fa-2x' />
            <FontAwesomeIcon icon={faFacebook} className='mt-3 fa-2x' />
            <FontAwesomeIcon icon={faTwitter} className='mt-3 fa-2x' />
            <FontAwesomeIcon icon={faLinkedin} className='mt-3 fa-2x' />
            

          

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
