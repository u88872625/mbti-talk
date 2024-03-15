import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    roomInfo: {},
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setRoomInfo: (state, action) => {
      state.roomInfo = action.payload;
    },
  },
});

export const { setUserInfo, setRoomInfo } = userStore.actions;
export default userStore.reducer;
