import React from 'react';
import { RentalAssets } from './RentalAssets';
import { toUpperCase, rentalType } from '../../../../helpers';
import avatar from '../../../../styles/img/avatar.png';

export const RentalDetailInfo = (props) =>  {
    const rental  = props.rental;
    return (
        <div className='rental'>
            <h2 className={`rental-type font-weight-bold text-danger ${rental.category}`}>{rentalType(rental.shared)} {rental.category}</h2>

            <div className='rental-owner'>
                <img src={avatar} alt='owner' />
                <span>{rental.user && rental.user.username}</span>
            </div>

            <h1 className='rental-title my-2 text-primary'>{rental.title}</h1>
            <h2 className='rental-city font-weight-bold'>{rental.city.toUpperCase()}</h2>
                <div className='rental-room-info'>
                    <span className="font-weight-bold"><i className='fa fa-building'></i>{rental.bedrooms} phòng</span>
                    <span className="font-weight-bold"><i className='fa fa-user'></i>{rental.bedrooms + 1} khách</span>
                    <span className="font-weight-bold"><i className='fa fa-bed'></i>{rental.bedrooms} giường</span>
                </div>
            <p className='rental-description'>
                <span className="font-weight-bold">Mô tả: </span><br />
                {rental.description}
            </p>
            <hr></hr>
                <RentalAssets/>
        </div>
    )
}