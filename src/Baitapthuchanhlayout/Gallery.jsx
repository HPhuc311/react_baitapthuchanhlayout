import React from 'react'

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
        <div className="col-4 mb-5"></div>
        <div className="col-4 mb-5"></div>
        <div className="col-4 mb-5"></div>
        <div className="col-4 mb-5"></div>
        <div className="col-4 mb-5"></div>
      </div>
    </div>
  )
}

export default Gallery