import Logo from './asset/name_logo_hover.svg'
import bg1 from './asset/bg1.jpg'
import bg2 from './asset/bg2.jpg'
import bg3 from './asset/bg3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay])

const Portfoilo = () => {
    return(
        <>
            <header id="hd">
            <div id="tab" className="fixed-top">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1><a href="#none"><img src={Logo} alt="로고" /></a></h1>
                    <ul id="gnb" className="d-flex">
                        <li><a href="#slide">나의 소개</a></li>
                        <li><a href="#review">나의 작업</a></li>
                        <li><a href="#form-box">나의 연락처</a></li>
                    </ul>
                    <ul id="sns" className="d-flex">
                        <li><a href="https://github.com/kcy230426" target='_blank'>Git</a></li>
                        <li><a href="https://www.notion.so" target='_blank'>Notion</a></li>
                    </ul>
                </div>
            </div>
            </header>

            <div id="slide" className='container'>
                    <Swiper className='sbox'
                    spaceBetween={0}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    >
                    <SwiperSlide><img src={bg1}></img></SwiperSlide>
                    <SwiperSlide><img src={bg2}></img></SwiperSlide>
                    <SwiperSlide><img src={bg3}></img></SwiperSlide>
                    </Swiper>
            </div>
            <div id="review" className='my-5'>
                <div className="container">
                    <div className="row d-lg-flex justify-content-center d-sm-block">
                        <div className="col-3 col-sm-12 cbox1 d-flex justify-content-center align-items-center">Thumbnails 1</div>
                        <div className="col-3 col-sm-12 cbox2 d-flex justify-content-center align-items-center">Thumbnails 2</div>
                        <div className="col-3 col-sm-12 cbox3 d-flex justify-content-center align-items-center">Thumbnails 3</div>
                        <div className="col-3 col-sm-12 cbox4 d-flex justify-content-center align-items-center">Thumbnails 4</div>
                        <div className="col-3 col-sm-12 cbox5 d-flex justify-content-center align-items-center">Thumbnails 5</div>
                        <div className="col-3 col-sm-12 cbox6 d-flex justify-content-center align-items-center">Thumbnails 6</div>
                    </div>
                    {/* <div className="row">
                       
                    </div> */}
                </div>
            </div>
            <div id="form-box" className='mb-5'>
                <div id='wrap' className="container d-flex justify-content-between align-items-center">
                    <div className='txt'>CONTACT<br/>NOW </div>
                    <form action="https://www.naver.com" target='_blank' className='d-flex align-items-center'>
                        <div className='name d-flex align-items-center me-5'>
                            <label htmlFor="name" className='l-title me-3' >회사명</label>
                            <input type="text" placeholder='회사명을 입력해주세요'/>
                        </div>
                        <div className="work me-5">
                            <div className='d-inline-block me-3 l-title'>채용분야</div>
                            <input type="radio" name="work" id='develop' />
                            <label htmlFor="develop">프론트엔드</label>
                            <input type="radio" name="work" id='designer' />
                            <label htmlFor="designer">퍼블리셔</label>
                            <input type="radio" name="work" id='multi' />
                            <label htmlFor="multi">멀티포지션</label>
                            <input type="radio" name="work" id='Acc' />
                            <label htmlFor="acc" className='me-0'>협의</label>
                        </div>
                        <div className="phone me-5">
                            <label htmlFor="number" className='l-title me-3'>연락처</label>
                            <input type="phone" placeholder='연락처를 입력해주세요' />
                        </div>
                        <div className='s-btn'>
                            <input type="submit" value="면접 신청"/>
                            <label htmlFor="btn"></label>
                        </div>
                        
                    </form>
                </div>
            </div>
            <footer id="ft">@김채연 2023-06-27</footer>
        </>
        
    )
}

export default Portfoilo;