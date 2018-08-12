import * as React from 'react'
import Main from 'screens'
import configureStore from 'store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import Amplify from 'aws-amplify'

import awsExports from 'config/aws-exports'

const store = configureStore()

class App extends React.Component {
  componentDidMount() {
    Amplify.configure(awsExports)
  }

  render() {
    const persistor = persistStore(store)

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    )
  }
}

export default App
