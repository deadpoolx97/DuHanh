import counterReducer from "../Layout/Counter/counterSlice";
import cartReducer from "../Layout/Cart/cartSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  count: counterReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
