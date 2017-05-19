import React from 'react';

const Lyrics = (props) => {
  const artistChange = e => {
    props.setArtist(e.target.value)
  }
  const songChange = e => {
    props.setSong(e.target.value);
  }

  return (
    <div id="lyrics">
    <form onSubmit={props.handleSubmit}>
      <input
        value={props.artistQuery}
        placeholder="Artist"
        onChange={artistChange}
        type= "text" />
        <input
          value={props.songQuery}
          placeholder="Song"
          onChange={songChange}
          type= "text" />
      <pre>{props.text || 'Search above!'}</pre>
      <button
        type="submit"
        className="btn btn-success">Find
      </button>
    </form>
    </div>
  )
}

export default Lyrics;