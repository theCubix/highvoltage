import React from 'react'
import Slider from 'react-slick'

import Container from '../../components/Container'
import { SectionTitle as Heading } from '../../components/Typography'
import Video from '../../components/Video'
import ButtonLink from '../../components/ButtonLink'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Videos extends React.Component {
  render() {
    let videos = this.props.videos

    //configuration for the slider
    var settings = {
      arrows: true,
      autoplay: false,
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
        <Container>
          <Heading>Videos</Heading>
        </Container>

        <Container isSlider marginBottom="narrower">

          <Slider {...settings}> 
            {videos.map((video) => (
              <Video
                key={video.id}
                video={video}
                isLink
                isSlider
              />
            ))}
          </Slider>
        </Container>

        <Container marginBottom="default">
          <ButtonLink dest="/videos/" right>Alle Videos ansehen</ButtonLink>
        </Container>
      </>
    )
  }
}

export default Videos
