import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faYoutube, faInstagram, faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

import logoNetflix from '../../assets/img/logoNetflix.png'


export default function Footer() {
    return (
        <footer className="px-4 text-gray-100 divide-y bg-neutral-900">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/4">
                    <NavLink to='/' aria-label="Back to homepage" className="flex items-center">
                        <img src={logoNetflix} width={200} />

                    </NavLink>
                </div>
                <div className="grid grid-cols-1 text-sm gap-x-3 gap-y-8 lg:w-3/4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="hidden space-y-3 sm:block">
                        <h3 className="text-sm font-medium tracking-wide text-zinc-200 title-widget sm:text-lg">GIỚI THIỆU</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} />  VỀ CHÚNG TÔI</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> THỎA THUẬN SỬ DỤNG</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> QUY CHẾ BẢO MẬT</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> CHÍNH SÁCH BẢO MẬT</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden space-y-3 sm:block">
                        <h3 className="text-sm font-medium tracking-wide text-zinc-200 title-widget sm:text-lg">HỖ TRỢ</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> GÓP Ý</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> SALE & SERVICE</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> RẠP / GIÁ VÉ</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> TUYỂN DỤNG</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium text-zinc-200 title-widget sm:text-lg">KẾT NỐI CAPSTONE MOVIE</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://www.facebook.com/dinhtrithuc01" target='_blank' className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 mr-3 md:w-11 md:h-11' icon={faSquareFacebook} /></a>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 mr-3 md:w-11 md:h-11' icon={faYoutube} /></a>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 mr-3 md:w-11 md:h-11' icon={faInstagram} /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium text-zinc-200 title-widget sm:text-lg">DOWNLOAD APP</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 mr-3 md:w-11 md:h-11' icon={faApple} /></a>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 mr-3 md:w-11 md:h-11' icon={faGooglePlay} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-400">© 1968 Company Co. All rights reserved.</div>
        </footer>
    )
}
