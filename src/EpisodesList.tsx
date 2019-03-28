import React from 'react'
import { IEpisode, IEpisodeProps } from './interfaces'

function EpisodesList(props: IEpisodeProps): Array<JSX.Element> {
  const { episodes, store, toggleFavAction, favorites } = props
  const { state, dispatch } = store

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img src={episode.image.medium} alt={`Rick & Mort ${episode.name}`} />
        <div>{episode.name}</div>
        <section className="episode-info">
          Season: {episode.season} Number: {episode.number}
          <button
            type="button"
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {favorites.find((fav: any) => fav.id === episode.id)
              ? 'Unfav'
              : 'Fav'}
          </button>
        </section>
      </section>
    )
  })
}

export default EpisodesList
