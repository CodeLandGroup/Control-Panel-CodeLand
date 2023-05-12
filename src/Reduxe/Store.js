import { createReducer } from "@reduxjs/toolkit";

import reducers from './Reducers'

const store = createReducer(reducers);

export default store;