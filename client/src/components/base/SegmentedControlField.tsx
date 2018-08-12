import * as React from 'react'
import { SegmentedControlIOS } from 'react-native'
import { FieldProps } from 'formik'

import { colors } from 'config/theme'
import { quantityNames } from 'utils/constants'

interface Props {
  options: string[]
}

const DEFAULT_CONTROL_SIZE = 60

const SegmentedControlField: React.SFC<FieldProps<any> & Props> = ({
  options = quantityNames,
  field,
  form,
}) => {
  return (
    <SegmentedControlIOS
      values={options}
      selectedIndex={field.value}
      onChange={event =>
        form.setFieldValue(field.name, event.nativeEvent.selectedSegmentIndex)
      }
      tintColor={colors.secondary}
      style={{
        width: options.length * DEFAULT_CONTROL_SIZE,
      }}
    />
  )
}

export default SegmentedControlField
