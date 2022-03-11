import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// user , page
const initialState = {
  user: [],
  page: "",
};

const changState = (state = initialState, { type, ...reset }) => {
  switch (type) {
    case "set":
      return { ...state, ...reset };
    case "set_user":
      return { ...state, ...reset };
    // case "page":
    //   return { ...state, ...reset };
    // case "set_page":
    //   return { ...state, ...reset };
    // case "config":
    //   return { ...state, ...reset };
    // case "set_config":
    //   return { ...state, ...reset };
    default:
      return state;
  }
};

// fix error for mac

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, changState);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
