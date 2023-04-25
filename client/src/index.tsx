import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import linksReducer from "./reducers/linksReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import linkOneReducer from "./reducers/linkOneReducer";
import CityReducer from "./reducers/CityReducer";
import DistReducer from "./reducers/DistReducer";
import NeighborReducer from "./reducers/NeighborReducer";

const reducer = combineReducers({
  links: linksReducer,
  linkOne: linkOneReducer,
  cities: CityReducer,
  districts: DistReducer,
  neighborhoods: NeighborReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
