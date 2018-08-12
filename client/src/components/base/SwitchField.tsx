import * as React from 'react'
import { Switch } from 'react-native'
import { FieldProps } from 'formik'

import { colors } from 'config/theme'

const SwitchField: React.SFC<FieldProps<any>> = ({ field, form }) => (
  <Switch
    tintColor={colors.lightFont}
    onTintColor={colors.secondary}
    value={field.value}
    onValueChange={(value: boolean) => form.setFieldValue(field.name, value)}
  />
)

export default SwitchField
