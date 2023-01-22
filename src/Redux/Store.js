import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import logger from "redux-logger-simple";
import { persistStore, persistReducer } from "redux-persist";
import storageLocal from "redux-persist/lib/storage";
import authReducer from "./Reducers/authReducer";
import settingReducer from "./Reducers/settingReducer";
import panierReducer from "./Reducers/panierReducer";
const persistConfig = {
  key: "root",
  timeout: null,
  storage: storageLocal,
  whitelist: ["auth","setting","panier"],
  blacklist: [],
};
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(logger));
const reducers = combineReducers({
    auth : authReducer,
    setting: settingReducer,
    panier: panierReducer,
});
const persistedReducers = persistReducer(persistConfig, reducers);
const STORE = createStore(persistedReducers, enhancer);
export default STORE;
export const PERSISTOR = persistStore(STORE);