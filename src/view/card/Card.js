// @flow
import type {Quote} from '../../state/book/types'

import React, { PureComponent } from 'react'

type Props = {
  quote: Quote
}

class Card extends PureComponent<Props> {
  render() {
    const {quote} = this.props
    return (
      <div className="card">
      <div classNameName="card-header">
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                " {quote.sentence} "
              </h1>
              <h2 className="subtitle">
                {quote.character.name} {quote.character.surname}, {quote.character.nickName} 
              </h2>
              <h2 className="subtitle">
               - page {quote.page}, {quote.book.name}
              </h2>
            </div>
          </div>
        </section>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{quote.book.name}</p>
            <p className="subtitle is-6">by {quote.book.writer.name}</p>
          </div>
        </div>
    
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
    )
  }
}

export default Card
