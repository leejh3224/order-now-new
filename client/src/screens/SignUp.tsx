import * as React from 'react'
import { withFormik, FormikProps } from 'formik'

import SignUpForm, { FormValues } from 'components/form/SignUpForm'

interface Props {
  initialFormValues: any
  submit: (values: any, formikProps: any) => void
  goBack: () => void
}

const Signup: React.SFC<FormikProps<FormValues> & Props> = ({
  handleSubmit,
  goBack,
}) => <SignUpForm handleSubmit={handleSubmit} goBack={goBack} />

export default withFormik<any, FormValues>({
  mapPropsToValues: ({ initialFormValues }) => initialFormValues,
  handleSubmit: (values, { props, resetForm }) =>
    props.submit(values, { resetForm }),
})(Signup)
