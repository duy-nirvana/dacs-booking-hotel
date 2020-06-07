import React from 'react'
import {Link} from 'react-router-dom';
import { rentalType } from './../../../helpers';
import '../../../styles/rental/_rental-card.scss';

const RentalCard = (props) =>  {
    const rental = props.rental;

    return (
        <div className="col-md-3 col-6">
        <Link className='rental-detail-link rental-card'  to={`/rentals/${rental._id}`}>
                <div className='card bwm-card border p-4'>
                    <img className='card-img-top' src={rental.image} alt={rental.title}/>
                    <div className='card-block'>
                        <h6 className={`card-subtitle ${rental.category}`}>{rentalType(rental.shared)} {rental.category} &#183; {rental.city}</h6>
                        <h4 className='card-title'>{rental.title}</h4>
                        <p className='card-text font-weight-bold'><span className='text-danger'>{rental.dailyRate}</span> đ̲  &#183; Hủy miễn phí</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default RentalCard;