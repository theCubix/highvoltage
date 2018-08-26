import React from 'react'
import Slider from 'react-slick'

import Video from '../../components/video'


class Videos extends React.Component {
  render() {
    let videos = this.props.videos

    //configuration for the slider
    let settings = {
      arrows: true,
      autoplay: true,
      centerMode: false,
      dots: true,
      infinite: true,
      mobilefirst: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 500,
      variableWidth: false,
      responsive: [
        {
          breakpoint: 450,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    }
    return(
      <div className="container container--video">
        <Slider {...settings}> 
          {videos.map((video) => (
            <Video
              key={video.id}
              video={video}
            />
          ))}
        </Slider>
      </div>
    )
  }
}

export default Videos
