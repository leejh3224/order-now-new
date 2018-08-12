import * as React from 'react'
import { FormikProps } from 'formik'

import StepperIOSField from 'components/base/StepperIOSField'
import SegmentedControlField from 'components/base/SegmentedControlField'
import { BaseTextInputField } from 'components/base/TextInputField'

import OptionsFormBuilder from 'components/form/formBuilders/OptionsFormBuilder'

import { IMenu } from 'store/types'

interface obj {
  [key: string]: any
}

export interface FormValues extends obj {
  coffee: number
  ice: number
  whipping_cream: number
  user_request: string
  // 시럽/드리즐의 경우 dynamic 하게 생성되므로 제외
}

interface Props {
  menu: IMenu
}

const MenuOptionsForm = ({ values, menu }: FormikProps<FormValues> & Props) => {
  const fieldData = [
    {
      key: '1',
      optionName: '커피',
      children: [
        {
          key: menu.options.coffee.name,
          optionName: menu.options.coffee.name,
          formValueKey: menu.options.coffee.name,
          fieldComponent: StepperIOSField,
          value:
            values[menu.options.coffee.name] ||
            menu.options.coffee.number_of_shots,
        },
      ],
    },
    {
      key: '3',
      optionName: '시럽',
      children: menu.options.syrup.map(syrup => ({
        key: syrup.name,
        optionName: syrup.name,
        formValueKey: syrup.name,
        fieldComponent: StepperIOSField,
        value: values[syrup.name] || syrup.number_of_shots,
      })),
    },
    {
      key: '6',
      optionName: '얼음',
      formValueKey: 'ice',
      fieldComponent: SegmentedControlField,
    },
    {
      key: '7',
      optionName: '휘핑크림',
      formValueKey: 'whipping_cream',
      fieldComponent: SegmentedControlField,
    },
    {
      key: '8',
      optionName: '드리즐',
      children: menu.options.drizzle.map(drizzle => ({
        key: drizzle.name,
        optionName: drizzle.name,
        formValueKey: drizzle.name,
        fieldComponent: SegmentedControlField,
      })),
    },
    {
      key: '11',
      optionName: '기타 요청',
      formValueKey: 'user_request',
      fieldComponent: BaseTextInputField,
      placeholder: '포크를 더 넣어주세요',
    },
  ]

  return <OptionsFormBuilder data={fieldData} />
}

export default MenuOptionsForm
