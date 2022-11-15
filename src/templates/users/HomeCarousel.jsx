import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { USER_LOGIN } from "../../utils/constant.js";
import { callGetBanner } from '../../redux/reducers/carouselReducer.js';
import { useDispatch, useSelector } from 'react-redux';


const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function HomeCarousel() {
    let isLogin = localStorage.getItem(USER_LOGIN);

    // console.log("isLogin", isLogin);

    const dispatch = useDispatch();

    //lay du lieu tu Redux
    const arrBanner = useSelector(
        state => state.carouselReducer.listBanner
    )
    useEffect(() => {
        //redux thunk
        dispatch(callGetBanner());
    }, [])



    // hàm render banner
    // const renderCarousel = () => {
    //     return (
    //         arrBanner.map((bannerItem, index) => {
    //             return (
    //                 <div key={index}>
    //                     <h3 style={{ ...contentStyle, backgroundImage: `url('${bannerItem.hinhAnh}')` }}>
    //                         <img src={bannerItem.hinhAnh} className='w-full opacity-0' alt={bannerItem.hinhAnh} />
    //                     </h3>
    //                 </div >
    //             )
    //         })
    //     )
    // }

    return (
        // <>
        //     {isLogin ?
        //         <Carousel autoplay className='mt-20'>
        //             {arrBanner.map((bannerItem, index) => {
        //                 return (
        //                     <div key={index}>
        //                         <h3 style={{ ...contentStyle, backgroundImage: `url('${bannerItem.hinhAnh}')` }}>
        //                             <img src={bannerItem.hinhAnh} className='w-full opacity-0' alt={bannerItem.hinhAnh} />
        //                         </h3>
        //                     </div >
        //                 )
        //             })
        //             }
        //         </Carousel>
        //         :
        //         " "
        //     }
        // </>

        <Carousel autoplay className='mt-20'>
            {arrBanner.map((bannerItem, index) => {
                return (
                    <div key={index}>
                        <h3 style={{ ...contentStyle, backgroundImage: `url('${bannerItem.hinhAnh}')` }}>
                            <img src={bannerItem.hinhAnh} className='w-full opacity-0' alt={bannerItem.hinhAnh} />
                        </h3>
                    </div >
                )
            })
            }
        </Carousel>
    );
}
