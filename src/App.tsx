import React from 'react'
import NotFound from './NotFound'
import HomePage from './HomePage'
import FavsPage from './FavsPage'
import { Store } from './Store'
import { useRoutes, A } from 'hookrouter'

const routes = {
  '/rick-morty-ep-picker/': () => <HomePage />,
  '/rick-morty-ep-picker/favs': () => <FavsPage />,
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
        <nav>
          <A href="/rick-morty-ep-picker/">Home</A>
          <A href="/rick-morty-ep-picker/favs">
            Favorite(s): {state.favorites.length}
          </A>
        </nav>
      </header>
      {routeResult || <NotFound />}
      {props.children}
    </React.Fragment>
  )
}

export default App
