import * as React from 'react'
import { View, ScrollView, TouchableOpacity, SectionList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { withFormik, Field } from 'formik'

import ScreenTemplate from 'screens/ScreenTemplate'

import StepperIOSField from 'components/base/StepperIOSField'
import { ItemTitle, ItemDesc } from 'components/base/Fonts'
import TotalPrice from 'components/base/TotalPrice'
import Avatar from 'components/base/Avatar'
import Divider from 'components/base/ListDivider'

import formatPrice from 'utils/formatPrice'
import { colors } from 'config/theme'
import imageMap from 'config/imageMap'

interface Props {
  initialFormValues: any
  data: any
  allMenus: any
  removeFromCart: any
}

const Cart: React.SFC<Props> = ({
  values,
  data = [],
  allMenus,
  removeFromCart,
}: any) => {
  const prices = data.map(item => item.data)[0].map(id => allMenus[id].price)
  const quantities = Object.values(Object.values(values)[0])

  return (
    <ScreenTemplate
      footerContent={
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
          onPress={() => console.log('hi!')}
        >
          <ItemTitle style={{ color: colors.secondary }}>주문하기</ItemTitle>
        </TouchableOpacity>
      }
    >
      <ScrollView>
        <SectionList
          renderSectionHeader={({ section }) => (
            <ItemTitle
              style={{
                paddingVertical: 8,
                paddingHorizontal: 12,
                backgroundColor: colors.beige,
              }}
            >
              {section.title} ({section.data.length})
            </ItemTitle>
          )}
          renderItem={({ item, section }: any) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  padding: 12,
                }}
              >
                <Avatar image={imageMap[allMenus[item].image]} size={80} />
                <View
                  style={{
                    padding: 12,
                    justifyContent: 'center',
                    position: 'relative',
                    flex: 1,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => removeFromCart(section.title, item)}
                    style={{ position: 'absolute', top: 0, right: 0 }}
                  >
                    <Ionicons
                      name="ios-close-circle-outline"
                      size={28}
                      color={colors.lightFont}
                    />
                  </TouchableOpacity>
                  <ItemTitle>{allMenus[item].name}</ItemTitle>
                  <ItemDesc>
                    {formatPrice(allMenus[item].price)} (합계{' '}
                    {formatPrice(
                      values[section.title][item] * allMenus[item].price,
                    )}
                    )
                  </ItemDesc>
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                    }}
                  >
                    <Field
                      name={`${section.title}.${item}`}
                      render={(props: any) => (
                        <StepperIOSField {...props} minimumValue={1} />
                      )}
                    />
                  </View>
                </View>
              </View>
            )
          }}
          sections={data}
          ItemSeparatorComponent={Divider}
          keyExtractor={item => item}
        />
        )}
      </ScrollView>
      <TotalPrice
        total={prices.reduce((acc, val, index) => {
          return acc + val * quantities[index]
        }, 0)}
      />
    </ScreenTemplate>
  )
}

export default withFormik<Props, any>({
  mapPropsToValues: ({ initialFormValues }) => initialFormValues || {},
  handleSubmit: () => {},
})(Cart as any)
