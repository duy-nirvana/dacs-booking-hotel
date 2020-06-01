import React from 'react';
import Modal from 'react-responsive-modal';
import { BwmResError } from './../shared/form/bwmResError';

const BookingModal = (props) => {

    const { open, closeModal, booking, confirmModal, errors, rentalPrice, processing } = props;

    return (
        <Modal open={open} onClose={closeModal} little className='booking-modal'>
            <h4 className='modal-title title'>Xác nhận đặt phòng</h4>
            <p className='dates'>{booking.startAt} / {booking.endAt}</p>
            <div className='modal-body'>
                <em>{booking.days}</em> đêm /
                <em> {rentalPrice} đ̲</em> 
                <p>Số lượng khách: <em>{booking.guests}</em></p>
                <p>Tổng giá tiền: <em>{booking.totalPrice} đ̲ </em></p>
                <p>Bạn chắc chắn muốn đặt phòng này?</p>
            </div>
            <BwmResError errors={errors} />
            <div className='modal-footer'>
                <button onClick={confirmModal} disabled={processing} type='button' className='btn btn-bwm btn-primary'>Xác nhận</button>
                <button type='button' onClick={closeModal} className='btn btn-bwm btn-danger'>Hủy</button>
            </div>
        </Modal>
    )
}

export default BookingModal;