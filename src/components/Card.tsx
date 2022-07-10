import React from "react"

type props = {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID?: string
}

type state = {

}

class Card extends React.Component<props, state> {
  constructor(props: props) {
    super(props)

    this.state = {

    }
  }


  render() {
    const {Poster, Type, Year, Title} = this.props

    return <div className="card">
      <div className="card-image">
        <img src={Poster}/>
        <span className="card-title">{Title}</span>
      </div>
      <div className="card-content">
        <p>{Type}</p>
        <p>{Year}</p>
      </div>
      <div className="card-action">
        <a href="!#"></a>
      </div>
    </div>
  }
}

export default Card