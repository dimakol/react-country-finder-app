import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import countrySlice from "./slices/countrySlice";
import countrySaga from "./sagas/countrySaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: { countries: countrySlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(countrySaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {dictionary: DictionaryState}
export type AppDispatch = typeof store.dispatch;

export default store;
