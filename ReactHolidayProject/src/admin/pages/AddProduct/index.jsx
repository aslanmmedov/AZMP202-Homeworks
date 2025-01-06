import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid'
import controller from '../../../services/functions';
import { endpoints } from '../../../services/constants';
const AddProduct = () => {
  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      price: Yup.string()
      .min(1, 'Too Short!')
      .required('Required'),
      rating: Yup.string()
      .min(0, 'Too Short!')
      .max(5, 'Too Long!')
      .required('Required'),
      image: Yup.string()
      .required('Required'),
    description: Yup.string().required('Required'),
  });
  return (
    <>
<div>
    <h1>Add Product</h1>
    <Formik
      initialValues={{
        id:nanoid(),
        title: '',
        description: '',
        price: '',
        image:'',
        rating:''
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        // same shape as initial values
        const addData = async () => {
          await controller.addNewData(endpoints.products,values)
          // console.log(data)
         }

        addData();
        
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="image" type = "url" placeholder = "Image"/>
          {errors.image && touched.image ? (
            <div>{errors.image}</div>
          ) : null}
          <Field name="title" type = "text" placeholder = "Title"/>
          {errors.title && touched.title ? (
            <div>{errors.title}</div>
          ) : null}
          <Field name="price" type = "number"placeholder = "Price" />
          {errors.price && touched.price ? (
            <div>{errors.price}</div>
          ) : null}
          <Field name="rating" type = "number" placeholder = "Rating" />
          {errors.rating && touched.rating ? (
            <div>{errors.rating}</div>
          ) : null}
          <Field name="description" type="text" placeholder = "Description"/>
          {errors.description && touched.description ? <div>{errors.description}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
    </>
  )
}

export default AddProduct