import React from 'react'
import style from '../Stylecomponent/style.module.css'

const Gallery = () => {
  return (
    <div className='container mt-4'>
      <div className="row gx-lg-5">
        <div className="col-4 mb-5">
          <div className="item text-center bg-light p-5 h-100">
            <div className="item_icon bg-primary text-white">
            <i class="fa-solid fa-ethernet"></i>
              </div>
            <h2 className='fs-4 fw-bold'>Fresh new layout</h2>
            <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
          </div>
        </div>
        <div className="col-4 mb-5">
           <div className="item text-center bg-light p-5 h-100">
            <div className="item_icon bg-primary text-white">
            <i class="fa-solid fa-ethernet"></i>
              </div>
            <h2 className='fs-4 fw-bold'>Free to download</h2>
            <p className='mb-0'>As always, Start Bootstrap has a powerful collectin of free templates.</p>
          </div>
        </div>
        <div className="col-4 mb-5">
           <div className="item text-center bg-light p-5 h-100">
            <div className="item_icon bg-primary text-white">
            <i class="fa-solid fa-ethernet"></i>
              </div>
            <h2 className='fs-4 fw-bold'>Jumbotron hero header</h2>
            <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
          </div>
        </div>
        <div className="col-4 mb-5">
           <div className="item text-center bg-light p-5 h-100">
            <div className="item_icon bg-primary text-white">
            <i class="fa-solid fa-ethernet"></i>
              </div>
            <h2 className='fs-4 fw-bold'>Feature boxes</h2>
            <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
          </div>
        </div>
        <div className="col-4 mb-5">
           <div className="item text-center bg-light p-5 h-100">
            <div className="item_icon bg-primary text-white">
            <i class="fa-solid fa-ethernet"></i>
              </div>
            <h2 className='fs-4 fw-bold'>Simple clean code</h2>
            <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
          </div>
        </div>
        <div className="col-4 mb-5">
           <div className="item text-center bg-light p-5 h-100">
            <div className="item_icon bg-primary text-white">
            <i class="fa-solid fa-ethernet"></i>
              </div>
            <h2 className='fs-4 fw-bold'>A name you trust</h2>
            <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery