import React from 'react';
import PropTypes from 'prop-types';
import agoda from '../../styles/img/agoda.png';
import booking from '../../styles/img/booking.png';
import trivago from '../../styles/img/trivago.png';
import google from '../../styles/img/google.png';
import hutech from '../../styles/img/hutech.png';
import kayak from '../../styles/img/kayak.png';

Footer.propTypes = {
  
};

function Footer(props) {
  return (
    <div className="navbar nav navbar-dark" style={{marginTop: '150px'}}>

    <div className="container ">
      <div className="row  text-white text-center p-4">
          <p className="small">Mọi nội dung tại đây © 2005 – 2020 Công Ty TNHH TN Hotels Bảo Lưu Mọi Quyền.
            Hotels.com là thành viên của Tập đoàn Booking Holdings, nhà cung cấp dịch vụ du lịch trực tuyến & các dịch vụ có liên quan hàng đầu thế giới.
          </p>
      </div>
      <div className="row  text-white d-flex align-items-center">
          <div className="col-md-2 col-4 mb-2">
            <img src={booking} className="w-100" alt=""/>
          </div>
          <div className="col-md-2 col-4 mb-2">
            <img src={agoda} className="w-100" alt=""/>
          </div>
          <div className="col-md-2 col-4 mb-2">
            <img src={trivago} className="w-100" alt=""/>
          </div>
          <div className="col-md-2 col-4 mb-2">
            <img src={google} className="w-100" alt=""/>
          </div>
          <div className="col-md-2 col-4 mb-2 text-center">
            <img src={hutech} className="w-50" alt=""/>
          </div>
          <div className="col-md-2 col-4 mb-2">
            <img src={kayak} className="w-100" alt=""/>
          </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;