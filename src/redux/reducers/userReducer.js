//rxslice

import { createSlice } from '@reduxjs/toolkit';
import { getStringLocal, removeLocal, saveStringLocal } from '../../utils/config';
import { history } from '../../utils/history';
import { http } from '../../utils/baseUrl';
import { USER_LOGIN } from '../../utils/constant';

const initialState = {
    infoUser: {}
}

const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        getProfile: (state, { type, payload }) => {
            state.infoUser = payload;
        }
    }
});

export const { getProfile } = userReducer.actions

export default userReducer.reducer


// lấy thông tin người dùng
export const callGetProfile = async (dispatch) => {
    try {


        // const apiGetProfile = await axios({
        //     method: "POST",
        //     url: "https://shop.cyberlearn.vn/api/Users/getProfile",
        //     headers: {
        //         "Authorization": `Bearer ${token}`
        //     }
        // })

        const apiGetProfile = await http.post("/api/QuanLyNguoiDung/LayThongTinNguoiDung")

        dispatch(getProfile(apiGetProfile.data.content));

    } catch (err) {
        //xóa localStorage
        removeLocal(USER_LOGIN);
    }
}

//closure function
export const callSignUp = (userSignUp) => async (dispatch) => {
    try {
        const apiSignUp = await http.post("/api/QuanLyNguoiDung/DangKy", userSignUp);

        console.log(apiSignUp);

        // alert("Đăng ký thành công");
        // đẩy qua trang login
        history.push("/login")

    } catch (err) {
        alert("Không đăng ký được !");
    }
}


export const callLogin = (userLogin) => async (dispatch) => {
    try {
        // const apiLogin = await axios({
        //     method: "POST",
        //     url: "https://shop.cyberlearn.vn/api/Users/signin",
        //     data: userLogin
        // })

        const apiLogin = await http.post("/api/QuanLyNguoiDung/DangNhap", userLogin)

        saveStringLocal(USER_LOGIN, apiLogin.data.content.accessToken)
        history.push("/home")

    } catch (err) {

        return new Promise((resolve, reject) =>
            resolve({ isError: true, message: err.response.data.message }));
    }
}