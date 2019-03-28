import { IState, IAction, IEpisode } from './interfaces'

export const fetchDataAction = async (dispatch: any): Promise<any> => {
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
  dispatch: any,
  episode: IEpisode
): IAction => {
  const episodeInFav: Boolean = state.favorites.includes(episode)
  const favoritesWithoutEpisode: IEpisode[] = state.favorites.filter(
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
