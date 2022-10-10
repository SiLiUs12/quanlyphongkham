import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class MedicalFacility extends Component {

    render() {
        let setting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidestoScroll: 1
        }
        return (
            <div className='sectiton-medicalfacility'>
                <div className='medicalfacility-container'>
                    <div className='medicalfacility-header'>
                        <span className='title-section'>Cơ sở y tế</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='medicalfacility-body'>
                        <Slider {...setting}>
                            <div className='medicalfacility-customize'>
                                <div className='bg-image'></div>
                                <div>Hệ thống y tế</div>
                            </div>
                            <div className='medicalfacility-customize'>
                                <div className='bg-image'></div>
                                <div>Hệ thống y tế</div>
                            </div>
                            <div className='medicalfacility-customize'>
                                <div className='bg-image'></div>
                                <div>Hệ thống y tế</div>
                            </div>
                            <div className='medicalfacility-customize'>
                                <div className='bg-image'></div>
                                <div>Hệ thống y tế</div>
                            </div>
                            <div className='medicalfacility-customize'>
                                <div className='bg-image'></div>
                                <div>Hệ thống y tế</div>
                            </div>
                            <div className='medicalfacility-customize'>
                                <div className='bg-image'></div>
                                <div>Hệ thống y tế</div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
