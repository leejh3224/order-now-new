import * as React from 'react'
import { ScrollView } from 'react-native'
import { withFormik, FormikProps } from 'formik'
import { withNavigation, NavigationScreenProps } from 'react-navigation'

import ScreenTemplate from 'screens/ScreenTemplate'
import MenuProfile from 'components/menuDetail/MenuProfile'
import PriceRow from 'components/menuDetail/PriceRow'
import OptionRow from 'components/menuDetail/OptionRow'
import MenuDetailForm, { FormValues } from 'components/form/MenuDetailForm'
import TotalPrice from 'components/base/TotalPrice'
import ButtonGroup from 'components/base/ButtonGroup'
import Divider from 'components/base/ListDivider'
import style from 'components/menuDetail/style'

import { IMenu } from 'store/types'

interface Props {
  menu: IMenu
  submit: (values: any) => void
  initialFormValues: any
  addToCart: (store: string, menuId: string, quantity: number) => any
}

const MenuDetail: React.SFC<
  FormikProps<FormValues> & NavigationScreenProps & Props
> = ({ menu, navigation, addToCart, ...props }) => {
  const buttonGroupConfig = [
    {
      title: '장바구니 담기',
      onPress: () => {
        addToCart(
          navigation.getParam('storeName'),
          menu._id,
          props.values.quantity,
        )
        navigation.navigate('cart')
      },
    },
    {
      title: '바로 주문하기',
      onPress: () => {
        props.submitForm()
        navigation.navigate('orderConfirmation')
      },
    },
  ]

  return (
    <ScreenTemplate
      footerContent={<ButtonGroup config={buttonGroupConfig} />}
      footerStyle={style.footerContainer}
    >
      <ScrollView>
        <MenuProfile image={menu.image} name={menu.name} />
        <PriceRow price={menu.price} />
        <Divider theme="secondary" />
        <MenuDetailForm {...props} />
        <OptionRow onPress={() => navigation.navigate('menuOptions')} />
      </ScrollView>

      <TotalPrice price={menu.price} quantity={props.values.quantity} />
    </ScreenTemplate>
  )
}

export default withFormik<Props, FormValues>({
  mapPropsToValues: ({ initialFormValues }) => initialFormValues,
  handleSubmit: (values, { props }) => props.submit(values),
})(withNavigation(MenuDetail as any))
