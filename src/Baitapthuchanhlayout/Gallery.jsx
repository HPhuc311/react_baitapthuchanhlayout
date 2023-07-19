import React from 'react'

const Gallery = () => {
  return (
    <div className='container mt-4'>
      <div className="row gx-lg-5">
        <div className="col-4">
          <div className="item text-center bg-light p-4">
            <div className="item_icon"><i class="bi bi-collection"></i></div>
            <h2 className='fs-4 fw-bold'>Fresh new layout</h2>
            <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
          </div>
        </div>
        <div className="col-4">M</div>
        <div className="col-4">M</div>
        <div className="col-4">M</div>
        <div className="col-4">M</div>
        <div className="col-4">M</div>
      </div>
    </div>
  )
}

export default Gallery