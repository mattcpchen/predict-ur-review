import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledImage = styled.img`
  opacity: ${props => props.icon===0? 0.3 : 1};
`

const Emoji = ({icon, size}) => {
  const userUrl = window.location.href
  const isLocal = userUrl.indexOf('localhost') > -1
  const emojiUrl = isLocal
    ? `./assets/emojis/icon_${icon}.png` // local
    : require(`./assets/emojis/icon_${icon}.png`) // online
  return (
    <StyledImage icon={icon} src={emojiUrl} width={size} height={size} />
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
