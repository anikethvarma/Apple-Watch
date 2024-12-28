import React, { useState } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

    
const Cases = (props) => {
  const {activeCaseIndex,changeCaseId,activeBandUrl,caseList} = props;
  
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
        initialSlide:activeCaseIndex,
        adaptiveHeight:true,
        afterChange: () => {
          setUpdateCount(updateCount + 1);
          
        },
        beforeChange: (current, next) => {
          setSlideIndex(next);
          changeCaseId(next);
        },
    };
  

      
    return (
        <div className='cases-bg'>
          
          <Slider {...settings} className='cases-slider'>

        {caseList.map(eachElement => <div key={eachElement.id} className='slide'><img src={eachElement.imgUrl} className='img' alt="case"/></div>)}

        </Slider>
        <img src={activeBandUrl} className="cases-watch-band" alt="band"/>
        </div>
    )
    }

export default Cases