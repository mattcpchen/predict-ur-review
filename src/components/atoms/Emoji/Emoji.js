import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledImage = styled.img`
  opacity: ${props => props.icon===0? 0.3 : 1};
`

const Emoji = ({icon, size}) => {
  return (
    <StyledImage
      icon={icon}
      // src={require('./assets/icon_'+icon+'.png')}
      src={'./assets/emojis/icon_'+icon+'.png'}
      width={size} height={size}
    />
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
