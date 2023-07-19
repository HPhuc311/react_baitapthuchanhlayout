import React from 'react'
import style from './style.module.css'

const Gallery = () => {
  return (
    <div className='container mt-5'>
      <div className="row gx-lg-5">
        <div className="col-lg-6 col-xxl-4 mb-5">
          <div className={style.item}>
            <div className={style.feature}>
            <i class="bi bi-collection"></i>
              </div>
            <h2 className='fs-4 fw-bold'>Fresh new layout</h2>
            <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
          </div>
        </div>
        <div className="col-lg-6 col-xxl-4 mb-5">
           <div className={style.item}>
            <div className={style.feature}>
            <i class="bi bi-cloud-download"></i>
              </div>
            <h2 className='fs-4 fw-bold'>Fresh new layout</h2>
            <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
          </div>
        </div>
        <div className="col-lg-6 col-xxl-4 mb-5">
           <div className={style.item}>
            <div className={style.feature}>
            <i class="bi bi-card-heading"></i>
              </div>
            <h2 className='fs-4 fw-bold'>Fresh new layout</h2>
            <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
          </div>
        </div>
        <div className="col-lg-6 col-xxl-4 mb-5">
           <div className={style.item}>
            <div className={style.feature}>
            <i class="bi bi-bootstrap"></i>
              </div>
            <h2 className='fs-4 fw-bold'>Fresh new layout</h2>
            <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
          </div>
        </div>
        <div className="col-lg-6 col-xxl-4 mb-5">
           <div className={style.item}>
            <div className={style.feature}>
            <i class="bi bi-code"></i>
              </div>
            <h2 className='fs-4 fw-bold'>Fresh new layout</h2>
            <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
          </div>
        </div>
        <div className="col-lg-6 col-xxl-4 mb-5">
           <div className={style.item}>
            <div className={style.feature}>
            <i class="fa-solid fa-ethernet"></i>
              </div>
            <h2 className='fs-4 fw-bold'>Fresh new layout</h2>
            <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery