import * as React from 'react'
import { View } from 'react-native'
import { Field } from 'formik'

import { ItemTitle } from 'components/base/Fonts'
import SwitchField from 'components/base/SwitchField'
import ListRow from 'components/base/ListRow'

import style from 'components/orderConfirmation/style'

interface Props {
  name: string
}

const OrderConfirmationForm: React.SFC<Props> = ({ name }) => (
  <React.Fragment>
    <View style={style.headerContainer}>
      <ItemTitle style={style.header}>주문 옵션</ItemTitle>
    </View>
    <ListRow>
      {{
        left: ['포장옵션', '전체 포장 (음료는 캐리어, 푸드는 종이백)'],
        right: <Field name={name} component={SwitchField} />,
      }}
    </ListRow>
  </React.Fragment>
)

export default OrderConfirmationForm
