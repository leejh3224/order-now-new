import * as React from 'react'
import { FormikProps } from 'formik'

import StepperIOSField from 'components/base/StepperIOSField'
import SegmentedControlField from 'components/base/SegmentedControlField'

import { sizeNames, cupNames } from 'utils/constants'

import OptionsFormBuilder from 'components/form/formBuilders/OptionsFormBuilder'

export interface FormValues {
  quantity: number
  size: number
  cup: number
}

const MenuDetailForm = (props: FormikProps<FormValues>) => {
  const fieldData = [
    {
      key: '1',
      optionName: '수량',
      formValueKey: 'quantity',
      fieldComponent: StepperIOSField,
      value: props.values.quantity,
    },
    {
      key: '2',
      optionName: '사이즈',
      formValueKey: 'size',
      fieldComponent: SegmentedControlField,
      options: sizeNames,
    },
    {
      key: '3',
      optionName: '컵 선택',
      formValueKey: 'cup',
      fieldComponent: SegmentedControlField,
      options: cupNames,
    },
  ]

  return <OptionsFormBuilder data={fieldData} />
}

export default MenuDetailForm
