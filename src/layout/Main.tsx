import React from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import {API} from "../assets/config";

type props = {}

type movieType = {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

type state = {
  movies: movieType[]
  searchInput: string
  radioValue: string
  tempSearch: string
  loading: boolean
}

class Main extends React.Component<props, state> {
  state: state = {
    movies: [],
    searchInput: '',
    radioValue: '',
    tempSearch: 'matrix',
    loading: false
  }


  componentDidMount() {
    this.setState({loading: true})
    fetch(`https://www.omdbapi.com/?apikey=${API._KEY}&s=${this.state.tempSearch}&type=${this.state.radioValue}`)
      .then(res => res.json())
      .then(data => {
        this.setState({loading: false})
        this.setState({movies: data.Search})
      })
      .catch((e) => {
        console.error(e)
        this.setState({loading: false})
      })
  }

  handleSearch = (event: any) => {
    this.setState({searchInput: event.currentTarget.value})
  }

  handleRadio = (e: any) => {
    this.setState(() => ({radioValue: e.target.value}), () => {
      this.fetchMovies(this.state.tempSearch)
    })
  }

  fetchMovies = (search: string) => {
    this.setState({loading: true})
    this.setState({tempSearch: search})
    fetch(`https://www.omdbapi.com/?apikey=${API._KEY}&s=${search}&type=${this.state.radioValue}`)
      .then(res => res.json())
      .then(data => {
        this.setState({loading: false})
        this.setState({movies: data.Search})
      })
      .catch((e) => {
        console.error(e)
        this.setState({loading: false})
      })
  }

  render() {
    const {movies, searchInput,} = this.state

    return <main className='container content'>
      <Search
        {...this.state}
        handleSearch={this.handleSearch}
        fetchMovies={this.fetchMovies}
        handleRadio={this.handleRadio}
      />

      {!this.state.loading
        ? <>
          {
            movies?.length
              ? <div className='cards'>
                {movies.map(movie =>
                  <Card
                    key={movie.imdbID}
                    {...movie}
                  />
                )}
              </div>
              : <div className='cards'><h3>Movie not found!</h3></div>
          }

        </>
        : <div className="progress purple lighten-5">
          <div className="indeterminate purple darken-4"></div>
        </div>
      }

    </main>
  }
}

export default Main