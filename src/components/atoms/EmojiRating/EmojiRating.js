import React from 'react'
import PropTypes from 'prop-types'
import Emoji from '../Emoji';

const EmojiRating = ({iconSize, rating}) => (
  <div>{
    rating === 0
      ? <Emoji icon={0} size={iconSize}/>
      : Array.apply(null, new Array(rating)).map((item,index)=>{
        return <Emoji key={`EMOJI-${rating}-${index}`} icon={rating} size={iconSize}/>
      })
  }</div>
)

EmojiRating.propTypes = {
  rating: PropTypes.number,
  iconSize: PropTypes.number
};
EmojiRating.defaultProps = {
  rating: 6
}


export default EmojiRating;
