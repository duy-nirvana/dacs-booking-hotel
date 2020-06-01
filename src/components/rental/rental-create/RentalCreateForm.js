import React from 'react'
import vnd from '../../../styles/img/vnd.png'
import { Field, reduxForm } from 'redux-form'
import { bwmInput } from './../../shared/form/bwm-input';
import { require } from '../../shared/form/validators';
import { BwmResError } from './../../shared/form/bwmResError';
import { bwmTextArea } from './../../shared/form/BwmTextArea';
import { bwmSelect } from './../../shared/form/bwmSelect';
import BwmFile from './../../shared/form/bwmFile';

const CreateRentalForm = props => {
    const { handleSubmit, pristine, submitting, valid, createRental ,errors, options } = props
    return (
        <form onSubmit={handleSubmit(createRental)}>
            <Field
                name="title"
                type="text"
                label="Tên khách sạn/ nhà nghỉ"
                className="form-control"
                component={bwmInput}
                validate={[require]}
            />

            <Field
                name="description"
                type="text"
                rows="6"            
                label="Mô tả"
                className="form-control"
                component={bwmTextArea}
                validate={[require]}
            />  

            <Field
                name="city"
                type="text"            
                label="Thành phố"
                className="form-control"
                component={bwmInput}
                validate={[require]}
            />

            <Field
                name="street"
                type="text"            
                label="Đường"
                className="form-control"
                component={bwmInput}
                validate={[require]}
            />

            <Field
                name="category"
                label="Danh mục"
                className="form-control"
                component={bwmSelect}
                options={options}
                validate={[require]}
            />
            
            <Field
                name="image"
                label="Hình ảnh"
                component={BwmFile}
                validate={[require]}
            />

            <Field
                name="bedrooms"
                type="number"            
                label="Số giường"
                className="form-control"
                component={bwmInput}
                validate={[require]}
            />

            <Field
                name="dailyRate"
                type="number"            
                label="Giá mỗi đêm"
                className="form-control"
                component={bwmInput}
                validate={[require]}
                symbol="đ̲"
            />          

            <button type="submit" className="btn btn-bwm btn-form w-100 bg-primary text-white" disabled={!valid || pristine || submitting}>
                Tạo phòng
            </button>
            <BwmResError errors={errors} />
        </form>
    )
}

export default reduxForm({
    form: 'createRentalForm',
    initialValues: {
        shared: false,
        category: 'apartment'
    }
})(CreateRentalForm)