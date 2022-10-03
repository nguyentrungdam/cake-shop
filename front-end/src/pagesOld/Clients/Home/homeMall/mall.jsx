import React from 'react'
import Slider from '../slider'
import './mall.css'


export default function Mall() {

    const sliderImage = [
        {
            link: "https://shopee.vn/thuong-hieu-dien-tu",
            urls: "https://cf.shopee.vn/file/0b466c821bcca6ef60a1842d44b06fac"
        },
        {
            link: "https://shopee.vn/pc",
            urls: "https://cf.shopee.vn/file/9211e4d882996581f39ad21cbdb011e9"
        },
        {
            link: "https://shopee.vn/onoff-chinh-hang-2022",
            urls: "https://cf.shopee.vn/file/6379f25614e19529d6c6d28d9382bf48"
        },
        {
            link: "https://shopee.vn/samsung-day",
            urls: "https://cf.shopee.vn/file/e838ef86df8389aef00c404a26689f2a"
        },
        {
            link: "https://shopee.vn/unilever-hb",
            urls: "https://cf.shopee.vn/file/2e00687e7c5481f6175fff9209d7963b"
        }
    ]

    const listMall = [
        {
            id: 1,
            url: "https://shopee.vn/m/enfa-chinhhang-fmcg2107",
            urlImg: "https://cf.shopee.vn/file/52a7b570802cc97f0e12efeefbb27113_xhdpi",
            title: "Voucher 100K"
        },
        {
            id: 2,
            url: "https://shopee.vn/m/samsung-day",
            urlImg: "https://cf.shopee.vn/file/5dad99b736e14f9da2303b42bb695377_xhdpi",
            title: "Đón sale cực sốc"
        },
        {
            id: 3,
            url: "https://shopee.vn/anlene_officialstore",
            urlImg: "https://cf.shopee.vn/file/cc3d39d70dffe50d6462d05a3c400528_xhdpi",
            title: "Sữa bầu không đường"
        },
        {
            id: 4,
            url: "https://shopee.vn/m/rohto-official",
            urlImg: "https://cf.shopee.vn/file/fbc36e59ad705a69422e5a6a047fa870_xhdpi",
            title: "Mua 2 tặng 1"
        },
        {
            id: 5,
            url: "https://shopee.vn/pg_officialstorevn",
            urlImg: "https://cf.shopee.vn/file/c7b843e477e90f2a0ead5675b457f71a_xhdpi",
            title: "Mua là có quà"
        },
        {
            id: 6,
            url: "https://shopee.vn/m/samsung-day",
            urlImg: "https://cf.shopee.vn/file/bf570b25d01bd70deab626c717437fbc_xhdpi",
            title: "Đón sale cực sốc"
        },
        {
            id: 7,
            url: "https://shopee.vn/paulaschoice_vietnam",
            urlImg: "https://cf.shopee.vn/file/02f70d1175411c5431a6cac000918176_xhdpi",
            title: "Siêu phẩm triệu deal"
        },
        {
            id: 8,
            url: "https://shopee.vn/wilmar_official_store",
            urlImg: "https://cf.shopee.vn/file/16f8ee23399a07d263be2c0a0f2407b5_xhdpi",
            title: "Dầu xịn giá hời"
        }
    ]

    return (
        <div className='homepage_mall'>
            <div className='main_mall'>
                <div className='mall_title'>
                    <div className='title'>
                        <a className='right_title' href='https://shopee.vn/mall' style={{color: "#d0011b"}}>SHOPEEMALL</a>
                        <div className='left_title'>
                            <div className='child_left'>
                                <img className='mall_img_title'
                                    alt=''
                                    src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/6c502a2641457578b0d5f5153b53dd5d.png'>
                                </img> 7 ngày miễn phí trả hàng
                            </div>
                            <div className='child_left'>
                                <img className='mall_img_title'
                                    alt=''
                                    src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/16ead7e0a68c3cff9f32910e4be08122.png'>
                                </img> Hàng Chính Hãng 100%
                            </div>
                            <div className='child_left'>
                                <img className='mall_img_title'
                                    alt=''
                                    src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/511aca04cc3ba9234ab0e4fcf20768a2.png'>
                                </img> Miễn Phí Vận Chuyển
                            </div>
                        </div>
                    </div>


                    <div className='mall_header_link right'>
                        <button className='shopee_button_no_outline'>
                            <a className='mall_button_show_all' href='https://shopee.vn/mall'>
                                <div className='mall_button_title'>
                                    Xem Tất Cả
                                    <div className='mall_button_img'>
                                        <span className='mall_arrow'>&#10095;</span>
                                    </div>
                                </div>
                            </a>
                        </button>
                    </div>
                </div>
                <div className='mall_content' style={{backgroundColor:'#fff', display: 'flex'}}>
                    <div className='mall_content_right'>
                        <div style={{ width: '100%', height: '100%' }}>
                            <Slider sliderImage={sliderImage} />
                        </div>
                    </div>
                    <div className='mall_content_left'>
                        <div className='content_left_list_wrapper'>
                            {
                                listMall.map((mall) => (
                                    <div className='left_item' key={mall.id}>
                                        <a className='left_item_link' href={mall.url}>
                                            <div className='left_item_frame'>
                                                <div className='left_item_img' 
                                                style={{backgroundImage: `url(${mall.urlImg})`}}>

                                                </div>
                                            </div>
                                        </a>
                                        <div className='left_item_title'>
                                            {mall.title}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
