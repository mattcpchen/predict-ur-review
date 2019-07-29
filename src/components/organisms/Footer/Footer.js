import React from 'react'
import PropTypes from 'prop-types'
import {Flex} from "pcln-design-system";
import RatingHolder from '../../molecules/RatingHolder';
import PreloadHolder from '../../molecules/PreloadHolder';



const Footer = ({rating, handlePreloadReview}) => {
  return (
    <Flex justifyContent='space-between'>
      <RatingHolder rating={rating} />
      <PreloadHolder preloadReview={handlePreloadReview} />
    </Flex>
  )
}

Footer.propTypes = {
  rating: PropTypes.shape({
    tfScore: PropTypes.number,
    emojiScore: PropTypes.number
  }),
  handlePreloadReview: PropTypes.func
};
Footer.defaultProps = {}


export default Footer;
