import * as React from 'react'
import { View } from 'react-native'
import { withFormik, Field } from 'formik'

import { ItemTitle, ItemDesc } from 'components/base/Fonts'
import { FullSizeTextInput } from 'components/base/TextInputField'
import ButtonGroup from 'components/base/ButtonGroup'
import Avatar from 'components/base/Avatar'

import { colors } from 'config/theme'

const AddCustomMenu = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 64,
      }}
    >
      <ItemTitle style={{ marginBottom: 24 }}>
        나만의 메뉴로 등록해보세요
      </ItemTitle>
      <View
        style={{
          paddingVertical: 36,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.beige,
        }}
      >
        <Avatar image={require('../../assets/menu_a.png')} size={120} />
        <ItemTitle style={{ marginTop: 12, marginBottom: 4 }}>
          수제 오렌지 샤베트
        </ItemTitle>
        <ItemDesc>Regular / 일회용컵</ItemDesc>
      </View>
      <View style={{ padding: 24, width: '100%' }}>
        <ItemDesc style={{ marginBottom: 12 }}>
          등록할 나만의 메뉴 이름을 지어주세요.
        </ItemDesc>
        <Field
          name="alias"
          component={FullSizeTextInput}
          placeholder="수제 오렌지 샤베트"
          placeholderTextColor={colors.lightBorder}
          style={{
            borderWidth: 0.5,
            borderColor: colors.black,
            padding: 8,
          }}
        />
      </View>
      <ButtonGroup
        config={[
          {
            title: '취소',
            onPress: () => null,
            backgroundColor: 'lightFont',
            color: 'white',
          },
          {
            title: '확인',
            onPress: () => null,
            backgroundColor: 'secondary',
            color: 'white',
          },
        ]}
      />
    </View>
  )
}

export default withFormik({
  mapPropsToValues: () => ({
    alias: '',
  }),
  handleSubmit: () => {},
})(AddCustomMenu)
