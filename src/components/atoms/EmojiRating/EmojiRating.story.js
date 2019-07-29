import React from 'react'
import { storiesOf } from '@storybook/react'
import EmojiRating from './EmojiRating'

storiesOf('atoms/EmojiRating', module)
.add('All EmojiRatings', () => (
  <>{
    [0,1,2,3,4,5,6,7,8,9,10]
    .map(rating => (
      <div>
        <EmojiRating rating={rating} />
      </div>
    ))
  }</>
));
