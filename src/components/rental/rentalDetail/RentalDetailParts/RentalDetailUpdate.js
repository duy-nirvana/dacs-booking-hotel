import React, { Component } from 'react';
import { RentalAssets } from './RentalAssets';

import { EditableInput } from './../../../shared/editable/EditableInput';
import * as actions from './../../../../actions';
import { connect } from 'react-redux';
import { EditableText } from './../../../shared/editable/EditableText';
import { EditableSelect } from './../../../shared/editable/EditableSelect';
import { ToastContainer } from 'react-toastify';
import { toUpperCase } from './../../../../helpers';
import avatar from '../../../../styles/img/avatar.png';

class RentalDetailUpdate extends Component {

    constructor() {
        super();

        this.updateRental = this.updateRental.bind(this);
        this.resetRentalErrors = this.resetRentalErrors.bind(this);
    }

    updateRental(rentalData, rentalId) {
        this.props.dispatch(actions.updateRental(rentalData, rentalId));
    }

    resetRentalErrors() {
        this.props.dispatch(actions.resetRentalErrors());
    }

    render () {
        const { rental, errors} = this.props;
        return (
            <div className='rental'>
             
                <EditableSelect 
                    entity={rental} 
                    entityField={'category'} 
                    className={`rental-type ${rental.category} text-danger font-weight-bold`}
                    updateEntity={this.updateRental}
                    options={['hotel','motel','homestay']}
                    errors={errors}
                    resetErrorsFunc={this.resetRentalErrors}
                    />  
                <div className='rental-owner'>
                    <img src={avatar} alt='owner' />
                    <span>{rental.user && rental.user.username}</span>
                </div>
    
                <EditableInput 
                    entity={rental} 
                    entityField={'title'} 
                    className={'rental-title text-primary  font-weight-bold'}
                    updateEntity={this.updateRental}
                    errors={errors}
                    resetErrorsFunc={this.resetRentalErrors}
                    />
                <EditableInput 
                    entity={rental} 
                    entityField={'city'} 
                    className={'rental-city text-dark  font-weight-bold'}
                    updateEntity={this.updateRental}
                    errors={errors}
                    resetErrorsFunc={this.resetRentalErrors}
                    />
                <EditableInput 
                    entity={rental} 
                    entityField={'street'} 
                    className={'rental-street  font-weight-bold'}
                    updateEntity={this.updateRental}
                    errors={errors}
                    resetErrorsFunc={this.resetRentalErrors}
                    />
                    <div className='rental-room-info'>
                        <span><i className='fa fa-building'></i>
                            <EditableInput 
                                entity={rental} 
                                entityField={'bedrooms'} 
                                className={'rental-bedrooms'}
                                containerStyle={{'display':'inline-block'}}
                                updateEntity={this.updateRental}
                                errors={errors}
                                resetErrorsFunc={this.resetRentalErrors}
                            />
                        phòng
                        </span>
                        <span><i className='fa fa-user'></i>{rental.bedrooms + 2} khách</span>
                        <span><i className='fa fa-bed'></i>{rental.bedrooms + 1} giường</span>
                    </div>
                <EditableText
                    entity={rental} 
                    entityField={'description'} 
                    className={'rental-description'}
                    updateEntity={this.updateRental}
                    rows={6} cols={50}
                    errors={errors}
                    resetErrorsFunc={this.resetRentalErrors}
                />
                <hr></hr>
                    <RentalAssets/>
            </div>
        )
    }
}

export default connect()(RentalDetailUpdate);