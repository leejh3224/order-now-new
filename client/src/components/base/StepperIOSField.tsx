import * as React from 'react'
import Stepper from 'react-native-simple-stepper'
import { FieldProps } from 'formik'

import { colors } from 'config/theme'

interface Props {
  minimumValue?: number
  maximumValue?: number
}

// FieldProps needs FormValues as argument but to keep it dynamic, give any
const StepperIOSField: React.SFC<FieldProps<any> & Props> = ({
  field,
  form,
  minimumValue = 0,
  maximumValue = Infinity,
}) => {
  return (
    <Stepper
      initialValue={field.value}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      valueChanged={(value: number) => form.setFieldValue(field.name, value)}
      tintColor={colors.secondary}
      padding={0} // default 4
    />
  )
}

export default StepperIOSField
