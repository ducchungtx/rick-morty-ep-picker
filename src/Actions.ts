import { IState, IAction, IEpisode, Dispatch } from './interfaces'

export const fetchDataAction = async (dispatch: Dispatch): Promise<any> => {
  const URL =
    'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
  const data = await fetch(URL)
  const dataJSON = await data.json()
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes,
  })
}

export const toggleFavAction = (
  state: IState,
  dispatch: Dispatch,
  episode: IEpisode
): void => {
  const episodeInFav: Boolean = state.favorites.includes(episode)
  const favoritesWithoutEpisode: Array<IEpisode> = state.favorites.filter(
    (fav: any) => fav.id !== episode.id
  )

  const addFav = {
    type: 'ADD_FAV',
    payload: [episode],
  }
  const removeFav = {
    type: 'REMOVE_FAV',
    payload: favoritesWithoutEpisode,
  }

  return episodeInFav ? dispatch(removeFav) : dispatch(addFav)
}
