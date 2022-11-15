import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    danhSachPhim: []
}

const quanLyPhimReducer = createSlice({
    name: "quanLyPhimReducer",
    initialState,
    reducers: {
        layDanhSachPhim: (state, { type, payload }) => {
            state.danhSachPhim = payload;
        }
    }
});

export const { layDanhSachPhim } = quanLyPhimReducer.actions

export default quanLyPhimReducer.reducer


//lấy danh sách phim

