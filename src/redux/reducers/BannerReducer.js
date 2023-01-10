import { createSlice } from '@reduxjs/toolkit'
import wakanda from '../../assets/img/Chien-binh-ao-den.jpg'
import trotanrucro from '../../assets/img/tro-tan-ruc-ro.jpg'
import crocodile from '../../assets/img/crocodile.jpg'
import onepiece from '../../assets/img/onepiece.jpg'
import demhungtan from '../../assets/img/dem-hung-tan.jpg'
import hanhphucmau from '../../assets/img/hanh-phuc-mau.jpg'

const initialState = {
    data: [
        {
            maBanner: 1,
            title: "Chiến binh Báo Đen: Wakanda bất diệt",
            link: 'https://www.youtube.com/embed/QTHEmyoKUyA',
            img: wakanda,
        },
        {
            maBanner: 2,
            title: "Tro Tàn Rực Rỡ",
            link: 'https://www.youtube.com/embed/nAsKoWNgIWA',
            img: trotanrucro,
        },
        {
            maBanner: 3,
            title: "Lyle - Chú Cá Sấu Biết Hát",
            link: 'https://www.youtube.com/embed/J14BfxOUxIs',
            img: crocodile,
        },
        {
            maBanner: 4,
            title: "Đảo Hải Tặc",
            link: 'https://www.youtube.com/embed/L-aFL-bX1ao',
            img: onepiece,
        },
        {
            maBanner: 5,
            title: "Đêm Hung Tàn",
            link: 'https://www.youtube.com/embed/e1gwKLSRDCs',
            img: demhungtan,
        },
        {
            maBanner: 6,
            title: "Hạnh Phúc Máu",
            link: 'https://www.youtube.com/embed/_VQqMUKMBKQ',
            img: hanhphucmau,
        },
    ],
    modalData: ''
}

const BannerReducer = createSlice({
    name: "BannerReducer",
    initialState,
    reducers: {
        getBannerMovie: (state, { type, payload }) => {
            return { ...state }
        },
        getModalVideo: (state, { type, payload }) => {
            const videoId = getId(payload)
            return { ...state, modalData: videoId }
        }
    }
});

export const { getBannerMovie, getModalVideo } = BannerReducer.actions

export default BannerReducer.reducer

function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
        ? match[2]
        : null;
}