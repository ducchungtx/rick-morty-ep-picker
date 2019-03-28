export interface IEpisode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: { medium: string; original: string }
  name: string
  number: number
  runtime: string
  season: number
  summary: string
  url: string
}

export interface IAction {
  type: string
  payload: any
}

export interface IState {
  episodes: IEpisode[]
  favorites: IEpisode[]
}

export interface IEpisodeProps {
  episodes: IEpisode[]
  store: { state: IState; dispatch: any }
  toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction
  favorites: IEpisode[]
}
