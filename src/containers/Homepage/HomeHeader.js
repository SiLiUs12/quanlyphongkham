import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/images/wibu1.jpg'
import {FormattedMessage} from 'react-intl';
import {LANGUAGES} from '../../utils';
import {changeLanguageApp} from '../../store/actions';


class HomeHeader extends Component {

    changeLanguage = (language)=>{
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        return (
            <React.Fragment>
                <div className="home-header-container">
               <div className="home-header-content">
                <div className='left-content'>
                    <i className="fas fa-bars"></i>
                    <img className='header-logo' src={logo}/>
                    <div className="header-logo">
                    </div>
                </div>

                <div className='center-content'>
                    <div className='child-content'>
                        <div><b><FormattedMessage id="homeheader.speciality"/></b></div>
                        <div className='subs-title'> <FormattedMessage id="homeheader.searchdoctor"/></div>
                    </div>
                    <div className='child-content'>
                        <div><b><FormattedMessage id="homeheader.health-facility"/></b></div>
                        <div className='subs-title'><FormattedMessage id="homeheader.select-room"/></div>
                    </div>
                    <div className='child-content'>
                        <div><b><FormattedMessage id="homeheader.doctor"/></b></div>
                        <div className='subs-title'><FormattedMessage id="homeheader.select-doctor"/></div>
                    </div>
                    <div className='child-content'>
                        <div><b><FormattedMessage id="homeheader.fee"/></b></div>
                        <div className='subs-title'><FormattedMessage id="homeheader.check-health"/></div>
                    </div>
                </div>

                <div className='right-content'>
                    <div className='support'> <i class="fas fa-question-circle"></i><FormattedMessage id="homeheader.support" /></div>
                    <div className='language-vi'><span onClick={()=>this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                    <div className='language-en'><span onClick={()=>this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                </div>
               </div>
                </div>
                
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'>NỀN TẢNG Y YẾ</div>
                        <div className='title2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                        <div className='search'>
                            <i className='fas fa-search'></i>
                            <input type='text' placeholder='Tìm lý do khám'/>
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='option'>
                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-hospital'></i></div>
                                <div className='text-child'>Khám chuyên khoa</div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-mobile-alt'></i></div>
                                <div className='text-child'>Khám từ xa</div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-procedures'></i></div>
                                <div className='text-child'>Khám tổng quát</div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-flask'></i></div>
                                <div className='text-child'>Xét nghiệm y học</div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-user-md'></i></div>
                                <div className='text-child'>Sức khỏe tinh thần</div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-briefcase-medical'></i></div>
                                <div className='text-child'>Khám nha khoa</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
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
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
