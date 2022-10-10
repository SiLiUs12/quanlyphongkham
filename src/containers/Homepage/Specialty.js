import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'
import {FormattedMessage} from 'react-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Specialty extends Component {

    render() {

        let setting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidestoScroll: 1
        }
        
        return (
            <div className='sectiton-specialty'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...setting}>
                            <div className='specialty-customize'>
                                <div className='bg-image'></div>
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image'></div>
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image'></div>
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image'></div>
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image'></div>
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image'></div>
                                <div>Cơ xương khớp</div>
                            </div>
                    </Slider>
                    </div> 
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.lang,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
