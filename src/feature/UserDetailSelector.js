import { createSelector } from "@reduxjs/toolkit";

const userProfileData = state => state.data

createSelector(
    [userProfileData],
    (slice) => slice.userProfileData

)