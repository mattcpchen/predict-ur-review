import React from 'react'
import { storiesOf } from '@storybook/react'
import Emoji from './Emoji'


storiesOf('atoms/Emoji', module)
  .add('All Emojis', () => (
    <>
      <Emoji icon={0} />
      <Emoji icon={1} />
      <Emoji icon={2} />
      <Emoji icon={3} />
      <Emoji icon={4} />
      <Emoji icon={5} />
      <Emoji icon={6} />
      <Emoji icon={7} />
      <Emoji icon={8} />
      <Emoji icon={9} />
      <Emoji icon={10} />
    </>
  ));
