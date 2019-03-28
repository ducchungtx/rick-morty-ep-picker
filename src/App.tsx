import React from 'react'
import NotFound from './NotFound'
import HomePage from './HomePage'
import FavsPage from './FavsPage'
import { Store } from './Store'
import { useRoutes, A } from 'hookrouter'

const routes = {
  '/': () => <HomePage />,
  '/favs': () => <FavsPage />,
}

const App = (props: any): JSX.Element => {
  const routeResult = useRoutes(routes)

  const { state, _ } = React.useContext(Store)

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick & Morty</h1>
          <p>Pick your favorite episode!</p>
        </div>
        <div>
          <A href="/">Home</A>
          <A href="/favs">Favorite(s): {state.favorites.length}</A>
        </div>
      </header>
      {routeResult || <NotFound />}
      {props.children}
    </React.Fragment>
  )
}

export default App
