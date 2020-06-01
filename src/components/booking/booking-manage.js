import React, { Component } from 'react'
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BookingManageCard from './booking-manage-card';

class BookingManage extends Component {

    componentWillMount() {
        this.props.dispatch(actions.fetchUserBookings());
    }

    renderBookingManageCard(bookings) {
        return bookings.map((booking,index) => {
            return <BookingManageCard key={index} booking={booking}/>
        })
    }

    isEmpty(isFetching,bookings) {        
        return !isFetching && bookings.length === 0 &&
        <div className='alert alert-warning'>
            Bạn chưa đặt phòng nào!
            <Link style={{'marginLeft': '10px'}} className='btn btn-primary w-100 p-4' to='/rentals'>Đặt phòng ngay!</Link> 
        </div>
    }

    render() {
        const { data: bookings, isFetching } = this.props.booking;
        return (
                <section id='userBookings'>
                    <h1 className='page-title'>Các phòng tôi đã đặt</h1>
                    <div className='row'>
                        {this.renderBookingManageCard(bookings)}
                    </div>
                        {this.isEmpty(isFetching,bookings)}
                </section>
            )
        }
}

function mapStateToProps(state) {
    return {
        booking: state.manager
    }
}

export default connect(mapStateToProps)(BookingManage);