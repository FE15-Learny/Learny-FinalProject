import { createStore } from "redux";

const initialState = {
    email: '',
    nama: ''
}

const authReducer = (initialState, action) => {
  switch (action.type) {
    case "add-user":
      return {
        ...initialState,
        ...action.payload
      };
    case "remove-user":
      // remove
      // [{}, {}] -> hilangkan item paling akhir
      return {};
  }
};

const store = createStore(authReducer);

export default store;