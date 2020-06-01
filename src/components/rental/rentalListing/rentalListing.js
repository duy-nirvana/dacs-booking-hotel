import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actions from '../../../actions';
import  RentalList  from './RentalList';
import RentalSearchInput from '../RentalSearchInput';
import TopCities from '../top-cities/TopCities';
import Footer from '../../shared/Footer';

class RentalListing extends Component {

    componentWillMount() {
        this.props.dispatch(actions.fetchRentals());
    }

    render() {
        return (
                <div>
                    <RentalSearchInput />
                    <section id="rentalListing">
                        <h1 className="page-title text-center">KHÁCH SẠN, KHU NGHỈ DƯỠNG, NHÀ TRỌ & HƠN THẾ NỮA</h1>
                        {
                            this.props.rentals ? 
                            <div>
                                <RentalList rentals={this.props.rentals}/> 
                                <TopCities />
                            </div>
                                
                            : 
                                "Loading ..."
                        }
                    
                    </section>
                </div>
                
        )
    }
}

function mapStateToProps(state) {
    return {
        rentals: state.rentals.data
    }
}


export default connect(mapStateToProps)(RentalListing);
