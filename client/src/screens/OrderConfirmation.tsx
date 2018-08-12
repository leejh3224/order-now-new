import * as React from 'react'
import { View } from 'react-native'
import { withNavigation, NavigationScreenProps } from 'react-navigation'
import { withFormik, FormikProps } from 'formik'

import ScreenTemplate from 'screens/ScreenTemplate'

import { ItemTitle } from 'components/base/Fonts'
import Divider from 'components/base/ListDivider'
import TotalPrice from 'components/base/TotalPrice'
import ButtonGroup from 'components/base/ButtonGroup'
import style from 'components/orderConfirmation/style'
import StoreInfo from 'components/orderConfirmation/StoreInfo'
import OrderConfirmationForm from 'components/form/OrderConfirmationForm'
import OrderInfo from 'components/orderConfirmation/OrderInfo'

import { IStore, IMenu } from 'store/types'

import formatPrice from 'utils/formatPrice'

interface Props {
  store: IStore
  menu: IMenu
  overrideOptions: any
  initialFormValues: any
  submit: (values: any) => any
}

export interface FormValues {
  isPackaged: boolean
}

const OrderConfirmation: React.SFC<
  FormikProps<FormValues> & NavigationScreenProps & Props
> = ({ store, menu, overrideOptions, navigation, submitForm }) => {
  const buttonGroupConfig = [
    {
      title: '가게 변경하기',
      onPress: () => navigation.navigate('selectStore'),
    },
    {
      title: '주문하기',
      onPress: () => {
        submitForm()
        navigation.navigate('orderHistory')
      },
    },
  ]

  return (
    <ScreenTemplate
      footerContent={<ButtonGroup config={buttonGroupConfig} />}
      footerStyle={style.footerContainer}
    >
      <View style={style.flex}>
        <StoreInfo
          name={store.name}
          address={store.address}
          onPress={() => navigation.navigate('selectStore')}
        />

        <OrderConfirmationForm name="isPackaged" />

        <OrderInfo
          overrideOptions={overrideOptions}
          name={menu.name}
          price={menu.price}
        />
        <Divider theme="primary" />

        <View style={style.priceContainer}>
          <ItemTitle style={style.header}>{formatPrice(menu.price)}</ItemTitle>
        </View>
      </View>
      <TotalPrice price={menu.price} quantity={overrideOptions.quantity} />
    </ScreenTemplate>
  )
}

export default withFormik<Props, FormValues>({
  mapPropsToValues: ({ initialFormValues }) => initialFormValues,
  handleSubmit: (values, { props }) => props.submit(values),
})(withNavigation(OrderConfirmation as any))
