import React from 'react';
import { pretifyDate, toUpperCase } from './../../helpers/index';
import { Link } from 'react-router-dom';

const BookingManageCard = (props) => {

    const { booking } = props;

    return (
        <div className='col-md-4'>
        <div className='card text-center'>
            <div className='card-header'>
                {booking.rental ? booking.rental.category : 'Phòng đã bị xóa'}
            </div>
            <div className='card-block'>
            {
                booking.rental && 
                <div>
                    <h4 className='card-title'> {booking.rental.title} - {toUpperCase(booking.rental.city)}</h4>
                    <p className='card-text booking-desc'>{booking.rental.description}</p>
                </div>
            }
                <p className='card-text booking-days'>{pretifyDate(booking.startAt)} - {pretifyDate(booking.endAt)} | {booking.days} ngày</p>
                <p className='card-text booking-price'><span>Giá: </span><span className='booking-price-value'>{booking.totalPrice} đ̲</span></p>
                {
                    booking.rental && 
                    <Link className='btn btn-bwm' to={`/rentals/${booking.rental._id}`}>Đi đến phòng này</Link>
                } 
            </div>
            <div className='card-footer text-muted'>
                Đã tạo vào ngày {pretifyDate(booking.createdAt)}
            </div>
        </div>
    </div>
    )
}

export default BookingManageCard;