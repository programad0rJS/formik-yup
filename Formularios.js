import { View, Text, ScrollView, TextInput } from 'react-native'
import React, { Fragment, useState } from 'react'
import { estilos } from '../components/theme/appTheme';
import * as yup from 'yup';
import { Formik } from 'formik';


const formulario = yup.object().shape({
  email: yup.string().email('Por favor ingrese un correo electrónico válido').required('Se requiere correo electrónico '),
  password: yup.string().min(8, ({ mins }) => `La contraseña debe ser al menos ${mins} charcahet`).required('Se require contraseña').matches(
    "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
    "Debe contener 8 caracteres, uno en mayúscula, uno en minúscula, un número y un carácter de caso especial  "
  ),
})

export default function Formularios() {

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validateOnMount={true}
      onSubmit={value => console.log(value)}
      validationSchema={formulario}

    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
        <ScrollView>

          <Text></Text>
          <Text></Text>
          <Text></Text>

          <TextInput
            style={estilos.input}
            placeholder="email"
            // placeholderTextColor=''
            keyboardType='email-address'
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            multiline
            keyboardAppearance='light'

          />
          {(errors.email && touched.email) &&
            <Text style={estilos.errors}>{errors.email}</Text>
          }
          <TextInput
            style={estilos.input}
            placeholder="password"
            // placeholderTextColor=''

            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            multiline


          />
          {(errors.password && touched.password) &&
            <Text style={estilos.errors}>{errors.password}</Text>
          }


          <Text style={estilos.GrandeText}>Formulario De Validación</Text>

        </ScrollView>

      )}


    </Formik>

  );

};