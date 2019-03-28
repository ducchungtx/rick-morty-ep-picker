import React from 'react'
import { toggleFavAction } from './Actions'
import { Store } from './Store'
import { IEpisodeProps } from './interfaces'

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'))

const FavsPage = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store)

  const props: IEpisodeProps = {
    episodes: state.favorites,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites,
  }

  return (
    <React.Suspense fallback={<div> ...loading</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  )
}

export default FavsPage
