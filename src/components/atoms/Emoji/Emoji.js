import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import emojiIcons from '../../../images/emojiIcons'


const StyledImage = styled.img`
  opacity: ${props => props.icon===0? 0.3 : 1};
`

const Emoji = ({icon, size}) => {
  const emojiIcon = `icon_${icon}`
  return (
    <StyledImage icon={icon} src={emojiIcons[emojiIcon]} width={size} height={size} />
  )
}

Emoji.propTypes = {
  icon: PropTypes.number,
  size: PropTypes.number
};
Emoji.defaultProps = {
  icon: 0,
  size: 22
}


export default Emoji;
