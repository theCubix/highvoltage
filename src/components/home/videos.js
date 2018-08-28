import React from 'react'
import Slider from 'react-slick'

import Heading from '../../components/heading'
import Video from '../../components/video'


class Videos extends React.Component {
  render() {
    let videos = this.props.videos

    //configuration for the slider
    var settings = {
      arrows: true,
      autoplay: true,
      centerMode: false,
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 800,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return(
      <>
        <Heading title="Videos" letter="V" className="container" />
        <div className="container container--slider">
          <Slider {...settings}> 
            {videos.map((video) => (
              <Video
                key={video.id}
                video={video}
                paddingTop={56.25}
              />
            ))}
          </Slider>
        </div>
      </>
    )
  }
}

export default Videos
