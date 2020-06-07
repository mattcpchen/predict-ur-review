import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Box, Heading, Image} from "pcln-design-system";
import allHotels from '../../../data/hotels';
import styled from 'styled-components'


const ImageHolder = styled.div`
    position: relative;
    width: 100%;
    height: 350px;
    overflow: hidden;
    cursor: pointer;
`

const CenterImage = styled(Image)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: auto;
  -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
`

const HotelHolder = () => {
  const [hotel, updateHotel] = useState(
    Math.floor(Math.random()*allHotels.length)
  );

  const pickRandomHotel = () => {
    let newHotel = hotel+1;
    if(newHotel === allHotels.length) {
      newHotel = 0;
    }
    updateHotel(newHotel);
  };

  const userUrl = window.location.href
  const isLocal = userUrl.indexOf('localhost') > -1
  const hotelName = allHotels[hotel]
  const hotelImage = hotelName ? hotelName.split(' ').join('-') : 'no-image'
  const hotelImageUrl = isLocal?
    `./assets/images/${hotelImage}.jpg` // local
    : require(`./assets/images/${hotelImage}.jpg`) // online
  return (
    <Box>
      <Heading mb={2}>{hotelName}</Heading>
      <ImageHolder onClick={pickRandomHotel}>
        <CenterImage src={hotelImageUrl} />
      </ImageHolder>
    </Box>
  )
}

HotelHolder.propTypes = {
  preloadReview: PropTypes.func
};
HotelHolder.defaultProps = {}


export default HotelHolder;
