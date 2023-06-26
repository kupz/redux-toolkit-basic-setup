import { createSlice } from "@reduxjs/toolkit";

const otherReducerSlice = createSlice({
  name: "otherReducer",
  initialState: 0,
  reducers: {
    // Define other actions and reducers here
  },
});

// Export actions and reducer from otherReducerSlice

export default otherReducerSlice.reducer;
