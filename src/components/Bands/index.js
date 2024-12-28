import React, { useState } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'


const Bands = (props) => {
  const {activeBandIndex,changeBandId,activeCaseUrl,bandsList} = props;
  
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
    const settings = {
      className: "center",
      centerMode: true,
        dots: false,
        infinite: true,
        focusOnSelect:true,
        speed: 500,
        slidesToShow: 3,
        centerPadding: "0px",
        slidesToScroll: 1,
        swipeToSlide:true,
        initialSlide:activeBandIndex,
        adaptiveHeight:true,
        afterChange: () => {
          setUpdateCount(updateCount + 1);
          
        },
        beforeChange: (current, next) => {
          setSlideIndex(next);
          changeBandId(next);
        },
    };
  

      
    return (
              <div className='bands-bg'>
          
          <Slider {...settings} className='bands-slider'>

        {bandsList.map(eachElement => <div key={eachElement.id} className='slide'><img src={eachElement.imgUrl} className='img'/></div>)}

        </Slider>
        <img src={activeCaseUrl} className="bands-watch-case" alt="case"/>
        </div>
    )
    }

export default Bands

/*export default function SimpleSlider() {
  
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}*/