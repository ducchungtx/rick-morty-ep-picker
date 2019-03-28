import React from 'react'
import { Store } from './Store'
import { IAction, IEpisode, IEpisodeProps } from './interfaces'

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'))

const HomePage = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store)

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })

  const fetchDataAction = async (): Promise<any> => {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(URL)
    const dataJSON = await data.json()
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes,
    })
  }

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav: Boolean = state.favorites.includes(episode)
    const favoritesWithoutEpisode: string[] = state.favorites.filter(
      (fav: any) => fav.id !== episode.id
    )

    const addFav = {
      type: 'ADD_FAV',
      payload: episode,
    }
    const removeFav = {
      type: 'REMOVE_FAV',
      payload: favoritesWithoutEpisode,
    }

    return episodeInFav ? dispatch(removeFav) : dispatch(addFav)
  }

  const props: IEpisodeProps = {
    episodes: state.episodes,
    toggleFavAction,
    favorites: state.favorites,
  }

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>...loading</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  )
}

export default HomePage
