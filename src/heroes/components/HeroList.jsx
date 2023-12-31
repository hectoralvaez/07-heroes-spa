import React from 'react'
import { getHeroesByPublisher } from '../helpers'

export const HeroList = ( { publisher } ) => {

    const heroes = getHeroesByPublisher(publisher);
  return (
    <div>HeroList</div>
  )
}
