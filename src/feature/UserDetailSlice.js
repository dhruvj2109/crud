import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./UserDetailAction";

const INITIAL_VALUE = {
	userData: null,
	userLoading: false,
	usereError: false
};

export const userDetails = createSlice({
    name: "userDetails",
    initialState: INITIAL_VALUE,
    reducers: {
        userProfile: state => {
            state.userData = null;
            state.userLoading = false;
            state.usereError = null
        }

    },
    extraReducers: builder => {
        builder.addCase(createUser.pending, state => {
            state.userData = null;
				state.loading = true;
				state.error = false;
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.userData = action.payload;
				state.loading = false;
				state.error = false;
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.userData = null;
				state.loading = false;
				state.error = true;
        })
    }
})

export const {userProfile} = userDetails.actions
export default userDetails.reducer