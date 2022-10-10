import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutstandingDoctor.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class OutstandingDoctor extends Component {

    render() {
        let setting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidestoScroll: 1
        }
        return (
            <div className='sectiton-OutstandingDoctor'>
                <div className='OutstandingDoctor-container'>
                    <div className='OutstandingDoctor-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='OutstandingDoctor-body'>
                        <Slider {...setting}>
                            <div className='OutstandingDoctor-customize'>
                               <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image1 section-outstanding-doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>BS phẫu thuật BJack</div>
                                        <div>Khoa Nội</div>
                                    </div>
                               </div>
                            </div>
                            <div className='OutstandingDoctor-customize'>
                            <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image2 section-outstanding-doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Lang Băm</div>
                                        <div>Khoa ngoại chỉnh hình</div>
                                    </div>
                               </div>
                            </div>
                            <div className='OutstandingDoctor-customize'>
                                <div className='customize-border'>
                                        <div className='outer-bg'>
                                            <div className='bg-image3 section-outstanding-doctor'></div>
                                        </div>
                                        <div className='position text-center'>
                                            <div>Yosana</div>
                                            <div>Khoa ngoại lồng ngực</div>
                                        </div>
                                </div>
                            </div>


                            <div className='OutstandingDoctor-customize'>
                            <div className='customize-border'>
                                        <div className='outer-bg'>
                                            <div className='bg-image4 section-outstanding-doctor'></div>
                                        </div>
                                        <div className='position text-center'>
                                            <div>Senku Ishigami</div>
                                            <div>Khoa chẩn đoán</div>
                                        </div>
                                </div>
                            </div>
                            <div className='OutstandingDoctor-customize'>
                            <div className='customize-border'>
                                        <div className='outer-bg'>
                                            <div className='bg-image5 section-outstanding-doctor'></div>
                                        </div>
                                        <div className='position text-center'>
                                            <div>Tsunade</div>
                                            <div>Khoa cấp cứu</div>
                                        </div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
