import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Box } from "pcln-design-system";
import allReviews from '../../../data/reviews';
import styled from 'styled-components'


const loadReview = (reviewType, preloadReview) => {
  // Randomly choose either negative or positive review
  if(!reviewType) {
    var reviewTypeMap = {
      0: 'positive',
      1: 'negative',
      2: 'neutral'
    }
    reviewType = reviewTypeMap[ Math.floor(Math.random()*3) ];
  }
  const reviews = allReviews[reviewType];
  const reviewIndex = Math.floor(Math.random()*reviews.length);
  const review = reviews[reviewIndex];
  preloadReview(review);
};

const IconAsButton = styled(Icon)`
  cursor: pointer;
`

// TODO: this setup is because DS's IconButton has PropTypes errors
// so create our own icon with some dummy props for bypassing the warning
// update to IconButton once it is fixed
const IconDummyProps = {
  title: 'title',
  titleId: 'titleId',
  desc: 'desc',
  descId: 'descId'
};

const PreloadHolder = ({preloadReview}) => {
  return (
    <Box>
      <IconAsButton
        name='ThumbsUp'
        size={24}
        color='text'
        {...IconDummyProps}
        onClick={loadReview.bind(null,'positive', preloadReview)}
      />
      <IconAsButton
        name='Swap'
        size={24}
        color='text'
        {...IconDummyProps}
        onClick={loadReview.bind(null,'neutral', preloadReview)}
      />
      <IconAsButton
        name='ThumbsDown'
        size={24}
        color='text'
        {...IconDummyProps}
        onClick={loadReview.bind(null,'negative', preloadReview)}
      />
    </Box>
  )
}

PreloadHolder.propTypes = {
  preloadReview: PropTypes.func
};
PreloadHolder.defaultProps = {}


export default PreloadHolder;
