import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from './index'
import thunk from 'redux-thunk'

const middleware = [thunk]

export default function configureStore(){
    return createStore(
        rootReducer,
        compose( applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
   ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   : f => f,
    )
    )
}