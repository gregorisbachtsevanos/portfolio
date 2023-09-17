import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface userState {
  userData: string | null;
  userProjects: string | null;
}

const initialState = {
  userData: null,
  userProjects: null,
} as userState;

const userInfoSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
    setUserProjects(state, action) {
      state.userProjects = action.payload;
    },
  },
});

export const { setUserData, setUserProjects } = userInfoSlice.actions;

export default userInfoSlice.reducer;

export const selectUserInfo = (state: RootState) => state.user.userData;
export const selectUserProject = (state: RootState) => state.user.userProjects;
