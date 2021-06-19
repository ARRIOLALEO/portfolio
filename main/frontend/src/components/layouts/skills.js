import React,  {Component}  from 'react';

export class Skill extends Component{
  render(){
    return(
      <>
        <div class="row row-cols-lg-6 row-cols-sm-3 row-cols-2 g-3 g-xl-4">
          <div class="col"><a class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" href="real-estate-catalog-rent.html">
              <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"><i class="fi-real-estate-house"></i></div>
              <h3 class="icon-box-title fs-base mb-0">Houses</h3></a></div>
          <div class="col"><a class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" href="real-estate-catalog-sale.html">
              <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"><i class="fi-apartment"></i></div>
              <h3 class="icon-box-title fs-base mb-0">Apartments</h3></a></div>
          <div class="col"><a class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" href="real-estate-catalog-rent.html">
              <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"><i class="fi-shop"></i></div>
              <h3 class="icon-box-title fs-base mb-0">Commercial</h3></a></div>
          <div class="col"><a class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" href="real-estate-catalog-sale.html">
              <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"><i class="fi-rent"></i></div>
              <h3 class="icon-box-title fs-base mb-0">Daily rental</h3></a></div>
          <div class="col"><a class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" href="real-estate-catalog-rent.html">
              <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"><i class="fi-house-chosen"></i></div>
              <h3 class="icon-box-title fs-base mb-0">New buildings</h3></a></div>
          <div class="col">
            <div class="dropdown h-100"><a class="icon-box card card-body h-100 border-0 shadow-sm card-hover text-center" href="#" data-bs-toggle="dropdown">
                <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto"><i class="fi-dots-horisontal"></i></div>
                <h3 class="icon-box-title fs-base mb-0">More</h3></a>
              <div class="dropdown-menu dropdown-menu-end my-1"><a class="dropdown-item fw-bold" href="real-estate-catalog-sale.html"><i class="fi-single-bed fs-base opacity-60 me-2"></i>Room</a><a class="dropdown-item fw-bold" href="real-estate-catalog-rent.html"><i class="fi-computer fs-base opacity-60 me-2"></i>Office</a><a class="dropdown-item fw-bold" href="real-estate-catalog-sale.html"><i class="fi-real-estate-buy fs-base opacity-60 me-2"></i>Land</a><a class="dropdown-item fw-bold" href="real-estate-catalog-rent.html"><i class="fi-parking fs-base opacity-60 me-2"></i>Parking lot</a></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Skill