import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { calculatorReducer } from './calculator/reducers';
import { authReducer } from './auth/reducers';

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  auth: authReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares: any[] = [];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
