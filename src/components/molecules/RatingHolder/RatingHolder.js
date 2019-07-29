import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text } from "pcln-design-system";
import EmojiRating from '../../atoms/EmojiRating';


const RatingHolder = ({rating}) => {
  return (
    <Flex alignItems='flex-start'>
    {rating.tfScore !== -1 &&
      <>
        <Text fontSize={3} bold mr={1}>{rating.tfScore}:</Text>
        <EmojiRating rating={rating.emojiScore} />
      </>
    }
    </Flex>
  )
}

RatingHolder.propTypes = {
  rating: PropTypes.shape({
    tfScore: PropTypes.number,
    emojiScore: PropTypes.number
  })
};
RatingHolder.defaultProps = {
  rating: {
    tfScore: -1,
    emojiScore: -1
  }
}


export default RatingHolder;
