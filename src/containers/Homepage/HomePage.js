import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader.js'
import Specialty from './Specialty.js'
import MedicalFacility from './MedicalFacility.js'
import OutstandingDoctor from './OutstandingDoctor.js'

class HomePage extends Component {

    render() {
        return (
           <div>
                <HomeHeader />
                <Specialty />
                <MedicalFacility/>
                <OutstandingDoctor/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
