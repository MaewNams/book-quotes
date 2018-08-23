// @flow

import React from 'react'
import {storiesOf} from '@storybook/react'

import Card from '../view/card/Card'

storiesOf('Card', module)
  .add('initial', ()=> {
    return ( <Card/> )
   })
