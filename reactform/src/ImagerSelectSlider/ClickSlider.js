import React, { useEffect, useState } from 'react'
import "../style/table.css";
import Button from 'react-bootstrap/Button';
import SliderZoomPage from "../ImagerSelectSlider/ZoomSlider"

const ClickSlider = () => {



  const sliderImages = [
    {
      id: 0,
      image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg',

    },
    {
      id: 1,
      image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg',

    },
    {
      id: 2,
      image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg',

    },

  ];

  const [imageSlider, setImageSlider] = useState(sliderImages[0])
  const sliderHandler = (i) => {
    setImageSlider(sliderImages[i])
  }


  return (
    <>
      <div className='container px-5'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row mainBox_slider d-flex align-items-center'>
              <div className='col-md-6'>
                <div className='customSlider'>
                 <SliderZoomPage  imagesForSlider={imageSlider.image} alt="img " height={300} className='w-100' />
                  <div className='small_images d-flex pt-3'>
                    {
                      sliderImages.map((data, i) => {
                        return (
                          <div className=' w-100 ' key={i} >
                            <img src={data.image} alt="images" onClick={() => sliderHandler(i)} height={70} width={90} />
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div>
                  <h1 className=''>Custom Slider</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                  <div className='d-flex align-items-center gap-4'>
                    <Button variant="outline-success">Add cart</Button>
                    <Button variant="outline-danger">Remove</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default ClickSlider
