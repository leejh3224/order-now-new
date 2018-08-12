import * as React from 'react'
import { withFormik, FormikProps } from 'formik'

import SignInForm, { FormValues } from 'components/form/SignInForm'

interface Props {
  initialFormValues: any
  submit: (values: any, formikProps: any) => void
  goToSignUp: () => void
}

const SignIn: React.SFC<FormikProps<FormValues> & Props> = ({
  handleSubmit,
  goToSignUp,
}) => <SignInForm handleSubmit={handleSubmit} goToSignUp={goToSignUp} />

export default withFormik<any, FormValues>({
  mapPropsToValues: ({ initialFormValues }) => initialFormValues,
  handleSubmit: (values, { props, resetForm }) =>
    props.submit(values, { resetForm }),
})(SignIn)
