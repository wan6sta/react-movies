import React from "react";

type props = {
  searchInput: string
  handleSearch: (event: any) => void
  fetchMovies: (search: string) => void
  radioValue: string
  handleRadio: (e: any) => void
}

type state = {}

class Search extends React.Component<props, state> {
  constructor(props: props) {
    super(props);

    this.state = {}
  }

  render() {
    const {searchInput, handleSearch, fetchMovies, radioValue, handleRadio} = this.props
    return <div className="input-field col s6">
      <input
        placeholder="Search"
        onChange={handleSearch}
        value={searchInput}
        type="search"
        className="validate"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && searchInput)
            fetchMovies(searchInput)
        }}
          />
          <a

          onClick={() =>{
          if (searchInput)
          fetchMovies(searchInput)
        }}
          className="waves-effect waves-light btn purple darken-4"
          >Search</a>

          <div style={{marginTop: 20, display: 'flex', justifyContent: 'space-evenly'}}>
            <label
            onClick={e => handleRadio(e)}
            >
              <input
                onChange={e => handleRadio(e)}
                value=''
                name="group1"
                type="radio"
                checked={radioValue === '' ? true : false}/>
              <span>All</span>
            </label>

            <label
              onClick={e => handleRadio(e)}
            >
              <input
                onChange={e => handleRadio(e)}
                value='Movie'
                name="group1"
                type="radio"
                checked={radioValue === 'Movie' ? true : false}/>
              <span>Movie</span>
            </label>

            <label
              onClick={e => handleRadio(e)}
            >
              <input
                onChange={e => handleRadio(e)}
                value='Series'
                name="group1"
                type="radio"
                checked={radioValue === 'Series' ? true : false}/>
              <span>Series</span>
            </label>
          </div>
          </div>
        }
      }

      export default Search