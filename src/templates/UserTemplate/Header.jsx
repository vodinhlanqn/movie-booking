import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Drawer, Space, Tooltip } from 'antd';
import { getLocalStorage, removeLocalStorage, SwalConfig } from '../../utils/config'
import { useDispatch, useSelector } from 'react-redux'
import { setStatusLogin } from '../../redux/reducers/UserReducer'
import { LOCALSTORAGE_USER } from '../../utils/constant'

import logoNetflix from '../../assets/img/logoNetflix.png'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const isLogin = useSelector(state => state.UserReducer.isLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);

    useEffect(() => {

        if (getLocalStorage(LOCALSTORAGE_USER)) {
            dispatch(setStatusLogin(true))
        }

        document.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                document.getElementById('navBarHeader').style.background = 'rgb(0 0 0 / 70%)'
            } else {
                document.getElementById('navBarHeader').style.background = '#000'
            }
        })

    }, [])

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const text = <span>Đăng xuất</span>;

    return (
        <>
            <Drawer
                title="NEXTFLIX"
                placement='left'
                closable={false}
                onClose={onClose}
                open={open}
                width='300px'
                key='left'
                extra={
                    <Space>
                        <FontAwesomeIcon className='cursor-pointer' onClick={onClose} icon={faXmark} />
                    </Space>
                }
            >
                <div>
                    {isLogin ? <>
                        <NavLink to='/inforUser' className="flex flex-col items-center justify-center">
                            <div className="relative">
                                <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full border-gray-50" />
                                <img src={`https://i.pravatar.cc/150?u=${getLocalStorage(LOCALSTORAGE_USER).taiKhoan}`} className="w-10 h-10 border rounded-full" />
                            </div>
                            <div>
                                <h5 className='pl-2 m-0 text-center'>{getLocalStorage(LOCALSTORAGE_USER).taiKhoan}</h5>
                            </div>
                        </NavLink>
                        <Tooltip placement="bottom" title={text}>
                            <NavLink onClick={() => {
                                Swal.fire({
                                    title: 'Bạn có muốn đăng xuất không ?',
                                    showDenyButton: true,
                                    confirmButtonText: 'Đồng ý',
                                    denyButtonText: 'Hủy',
                                    icon: 'question',
                                    iconColor: 'rgb(104 217 254)',
                                    confirmButtonColor: '#f97316'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        SwalConfig('Đã đăng xuất', 'success', false)
                                        removeLocalStorage(LOCALSTORAGE_USER)
                                        dispatch(setStatusLogin(false))
                                        navigate('/')
                                    }
                                })
                            }} className='flex items-center justify-center mt-2 ml-2 border-none'>
                                <FontAwesomeIcon className='w-8 h-8' icon={faArrowRightFromBracket} />
                            </NavLink>
                        </Tooltip>
                    </> : <>
                        <div className='flex items-center mb-4 text-gray-500 hover:text-red-600'>
                            <FontAwesomeIcon className='w-5 h-5 mr-1' icon={faCircleUser} />
                            <NavLink to='login' className='text-base font-semibold text-gray-500 hover:text-red-600'>Đăng Nhập</NavLink>
                        </div>
                        <div className='flex items-center mb-4 text-gray-500 hover:text-red-600'>
                            <FontAwesomeIcon className='w-5 h-5 mr-1' icon={faCircleUser} />
                            <NavLink to='register' className='text-base font-semibold text-gray-500 hover:text-red-600'>Đăng Ký</NavLink>
                        </div>
                    </>}
                </div>
                <hr />
                <ul className="items-center justify-center flex-1 mt-2 list-reset">
                    <li className="mr-3">
                        <NavLink to='/' className="block px-4 py-2 text-base font-medium text-black no-underline hover:text-red-600" >Danh sách phim</NavLink>
                    </li>
                    <li className="mr-3">
                        <NavLink className="block px-4 py-2 text-base font-medium text-black no-underline hover:text-red-600 hover:text-underline"
                            to='/'>Cụm rạp</NavLink>
                    </li>
                    <li className="mr-3">
                        <NavLink className="block px-4 py-2 text-base font-medium text-black no-underline hover:text-red-600 hover:text-underline"
                            to='/'>Tin tức</NavLink>
                    </li>

                </ul>
            </Drawer>

            <header className="font-sans leading-normal tracking-normal bg-gray-400">
                <nav style={{ borderBottom: '1px solid #c1c0c04a' }} id='navBarHeader' className="fixed top-0 z-10 flex flex-wrap items-center justify-between w-full px-4 py-2 transition-all duration-500 bg-white">
                    <div className="flex items-center flex-shrink-0 mr-4 text-white">
                        <NavLink to='/' aria-label="Back to homepage" className="flex items-center">

                            <img src={logoNetflix} width={150} />
                        </NavLink>
                    </div>
                    <div className="block lg:hidden">
                        <button onClick={showDrawer} id="nav-toggle"
                            className="flex items-center px-3 py-2 text-gray-500 border border-orange-500 rounded">
                            <svg className="w-4 h-4 text-orange-500 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-grow hidden w-full pt-3 lg:flex lg:items-center lg:w-auto lg:pt-0"
                        id="nav-content">
                        <ul className="items-center justify-center flex-1 mb-0 list-reset lg:flex">
                            <li className="mr-3">
                                <Link to='/#movie-list' className="inline-block px-4 py-2 font-medium text-black no-underline md:text-base hover:text-red-600" >Phim</Link>
                            </li>
                            <li className="mr-3">
                                <Link className="inline-block px-4 py-2 font-medium text-black no-underline md:text-base hover:text-red-600 hover:text-underline"
                                    to="/#menuCinema">Cụm rạp</Link>
                            </li>
                            <li className="mr-3">
                                <NavLink className="inline-block px-4 py-2 font-medium text-black no-underline md:text-base hover:text-red-600 hover:text-underline"
                                    to='/#news'>Tin tức</NavLink>
                            </li>
                            <li className="mr-3">
                                <NavLink className="inline-block px-4 py-2 font-medium text-black no-underline md:text-base hover:text-red-600 hover:text-underline"
                                    to='/#aboutapp'>Ứng dụng</NavLink>
                            </li>
                        </ul>
                        <div className='flex text-gray-500'>
                            {isLogin ? <>
                                <NavLink to='/inforUser' className="flex flex-row items-center justify-center pr-2 border-r-2 border-gray-300">
                                    <div className="relative">
                                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full border-gray-50" />
                                        <img src={`https://i.pravatar.cc/150?u=${getLocalStorage(LOCALSTORAGE_USER).taiKhoan}`} className="w-10 h-10 border rounded-full" />
                                    </div>
                                    <div>
                                        <h5 className='pl-2 m-0 text-center'>{getLocalStorage(LOCALSTORAGE_USER).taiKhoan}</h5>
                                    </div>
                                </NavLink>
                                <Tooltip placement="bottomRight" title={text}>
                                    <NavLink onClick={() => {
                                        Swal.fire({
                                            title: 'Bạn có muốn đăng xuất không ?',
                                            showDenyButton: true,
                                            confirmButtonText: 'Đồng ý',
                                            denyButtonText: 'Hủy',
                                            icon: 'question',
                                            iconColor: 'rgb(104 217 254)',
                                            confirmButtonColor: '#f97316'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                SwalConfig('Đã đăng xuất', 'success', false)
                                                removeLocalStorage(LOCALSTORAGE_USER)
                                                dispatch(setStatusLogin(false))
                                                navigate('/')
                                            }
                                        })

                                    }} className='flex items-center ml-2 border border-none'>
                                        <FontAwesomeIcon className='w-8 h-8' icon={faArrowRightFromBracket} />
                                    </NavLink>
                                </Tooltip>
                            </> : <>
                                <NavLink to='login' className='px-3 py-2 mr-2 text-sm font-semibold text-gray-500 border-2 border-orange-500 rounded-lg hover:text-red-600'>Đăng Nhập</NavLink>
                                <NavLink to='register' className='px-3 py-2 text-sm font-semibold text-gray-500 border-2 border-orange-500 rounded-lg hover:text-red-600'>Đăng Ký</NavLink>
                            </>}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}




