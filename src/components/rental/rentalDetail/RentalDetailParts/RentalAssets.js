import React from 'react';

export const RentalAssets = (props) =>  {
    return (
    <div className='rental-assets'>
        <h3 className='title'>Dịch vụ và Tiện nghi</h3>
        <div className='row'>
            <div className='col-md-6'>
                <span><i className='fa fa-asterisk'></i> Bàn tiếp tân [24h]</span>
                <span><i className='fa fa-thermometer'></i> Giữ hành lý</span>
                <span><i className='fa fa-location-arrow'></i> Khu vục hút thuốc</span>
            </div>
            <div className='col-md-6'>
                <span><i className='fa fa-desktop'></i> Nhận phòng [24 giờ]</span>
                <span><i className='fa fa-cube'></i> Nhân viên chăm sóc khách hàng</span>
                <span><i className='fa fa-cube'></i> Dọn phòng hằng ngày</span>
            </div>
        </div>
    </div>
    )
}