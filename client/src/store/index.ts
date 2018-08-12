import { createStore, applyMiddleware, compose } from 'redux'
import { persistReducer } from 'redux-persist'
import createSecureStore from 'redux-persist-expo-securestore'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'store/rootReducer'
import rootSaga from 'store/rootSaga'

const configureStore = (preloadedState?: any) => {
  const composeEnhancers =
    (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const sagaMiddleware = createSagaMiddleware()
  const middlewares: any[] = [sagaMiddleware]

  const persistConfig = {
    key: 'root',
    storage: createSecureStore(),
    blacklist: ['order'],
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
