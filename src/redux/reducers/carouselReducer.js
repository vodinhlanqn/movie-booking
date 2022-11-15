import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../utils/baseUrl';

const initialState = {
    listBanner: [
        // {
        //     "maBanner": 1,
        //     "maPhim": 1282,
        //     "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
        // },
        // {
        //     "maBanner": 2,
        //     "maPhim": 1283,
        //     "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png"
        // },
        // {
        //     "maBanner": 3,
        //     "maPhim": 1284,
        //     "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png"
        // }

    ]
}

const carouselReducer = createSlice({
    name: "carouselReducer",
    initialState,
    reducers: {
        getBanner: (state = initialState, { type, payload }) => {
            state.listBanner = payload;
        },
    }
});
// console.log(carouselReducer.payload)
//Quản lý các Action
export const { getBanner } = carouselReducer.actions
export default carouselReducer.reducer;

//lấy danh sách Carousel
export const callGetBanner = () => async (dispatch) => {
    try {
        const apiGetBanner = await http.get('/api/QuanLyPhim/LayDanhSachBanner')
        // console.log("lay danh sach Bannner", apiGetBanner)
        dispatch(getBanner(apiGetBanner.data.content));
    } catch (error) {
        console.log("lay danh sach Bannner", error)
    }

}