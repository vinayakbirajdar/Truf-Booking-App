import { createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../utils/firebase/firebaseConfig";
import { createSlice } from "@reduxjs/toolkit";

export const actiontrufDetail = createAsyncThunk('truf/actiontrufDetail', async () => {
    const snapshot = await firestore().collection('trufs').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
})

const trufDetailStore = createSlice({
    name: 'trufDetail',
    initialState: {
        loading: false,
        trufsDetail: [],
        error: null
    },
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(actiontrufDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.trufsDetail = action.payload;
            })
    }
})

export default trufDetailStore.reducer