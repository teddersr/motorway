import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';

const Form = () => {
    return(
        <div className="d-flex justify-content-center my-5">
            <div className="w-75 text-center align-items-center ">
            <h4>Example Form!</h4>
                <Formik
                initialValues={{ name: '', email: '', dob: '', colour: '', salary:'' }}
                validate={values => {
                    const errors = {};
                    
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    alert('Fake submit');
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                        <div className='w-50'>
                            <div className='my-2'>
                                <input
                                    type="text"
                                    placeholder='name'
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                {errors.name && touched.name && errors.name}
                            </div>
                            <div className='my-2'>
                                <input
                                    type="email"
                                    placeholder='email'
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                            </div>
                            <div className='my-2'>
                                <input
                                    type="date"
                                    placeholder='date of birth'
                                    name="dob"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.dob}
                                />
                                {errors.dob && touched.dob && errors.dob}
                            </div>
                            <div className='my-2'>
                                <input
                                    type="color"
                                    name="colour"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.colour}
                                />
                                {errors.colour && touched.colour && errors.colour}
                            </div>
                            <div className='my-2'>
                                <input
                                    type="range"
                                    placeholder='salary'
                                    name="salary"
                                    step='250'
                                    min="0" 
                                    max="80000"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.salary}
                                />
                                <span>£{values.salary}</span>
                                {errors.salary && touched.salary && errors.salary}
                            </div>

                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </div>
                    </form>
                )}
                </Formik>
            </div>
      </div>
    );
};
export default Form;