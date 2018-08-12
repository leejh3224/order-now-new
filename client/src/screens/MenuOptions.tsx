import * as React from 'react'
import { withFormik, FormikProps } from 'formik'
import { withNavigation, NavigationScreenProps } from 'react-navigation'

import ScreenTemplate from 'screens/ScreenTemplate'

import { IMenu } from 'store/types'

import Divider from 'components/base/ListDivider'
import MenuProfile from 'components/menuDetail/MenuProfile'
import MenuOptionsForm, { FormValues } from 'components/form/MenuOptionsForm'
import ButtonGroup from 'components/base/ButtonGroup'

interface Props {
  menu: IMenu
  initialFormValue: any
  submit: (values: any) => void
}

const MenuOptions: React.SFC<
  FormikProps<FormValues> & NavigationScreenProps & Props
> = props => {
  const buttonGroupConfig = [
    {
      title: '옵션 초기화',
      onPress: () => props.resetForm(),
    },
    {
      title: '확인',
      onPress: () => {
        props.submitForm()
        props.navigation.goBack()
      },
    },
  ]

  return (
    <ScreenTemplate
      footerContent={<ButtonGroup config={buttonGroupConfig} />}
    >
      <MenuProfile image={props.menu.image} size={80} name={props.menu.name} />
      <Divider theme="primary" />
      <MenuOptionsForm {...props} />
    </ScreenTemplate>
  )
}

export default withFormik<any, any>({
  mapPropsToValues: ({ initialFormValue }: Props) => initialFormValue,
  handleSubmit: (values, { props }) => props.submit(values),
})(withNavigation(MenuOptions as any))
