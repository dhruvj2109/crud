import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createUser = createAsyncThunk('createuser', async (data, { rejectWithValue }) => {
    
	try {
        const response = await axios.post('https://65d448e73f1ab8c63434cb18.mockapi.io/crud', data);
        return response.data


	} catch (error) {
		return rejectWithValue(error);
	}
});

// export const userData = createAsyncThunk('createuser', async (data, { rejectWithValue }) => {
    
// 	try {
//         const response = await axios.get('https://65d448e73f1ab8c63434cb18.mockapi.io/crud', data);
//         return response.data


// 	} catch (error) {
// 		return rejectWithValue(error);
// 	}
// });
