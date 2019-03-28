import { IState, IAction, IEpisode, Dispatch } from './interfaces'

export const fetchDataAction = async (dispatch: Dispatch): Promise<any> => {
  try {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const response = await fetch(URL)
    if (response.ok) {
      const data = await response.json()
      return dispatch({
        type: 'FETCH_DATA',
        payload: data._embedded.episodes,
      })
    } else {
      throw new Error('Network response was not ok.')
    }
  } catch (error) {
    console.log(error)
  }
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
