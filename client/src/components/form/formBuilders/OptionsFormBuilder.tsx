import * as React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { Field } from 'formik'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import ExpandableList from 'components/base/ExpandableList'
import { ItemDesc, ItemTitle } from 'components/base/Fonts'

import { colors } from 'config/theme'

const printValue = (value: number) => {
  return value! >= 0 && `(${value})`
}

interface OptionsItem {
  key: string
  optionName: string
  formValueKey?: string
  fieldComponent?: any
  value?: number
  options?: string[]
  placeholder?: string
  children?: OptionsItem[]
}

interface Props {
  data: OptionsItem[]
}

const OptionsFormBuilder: React.SFC<Props> = ({ data }) => {
  return (
    <KeyboardAwareScrollView>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const { fieldComponent: FieldComponent } = item

          return (
            <React.Fragment>
              {item.children && item.children.length > 0 ? (
                <ExpandableList title={item.optionName}>
                  {item.children.map(child => {
                    const { fieldComponent: FieldComponent } = child

                    return (
                      <View key={child.key} style={style.nestedField}>
                        <ItemDesc style={style.fieldTitle}>
                          {child.optionName} {printValue(child.value!)}
                        </ItemDesc>
                        <Field
                          name={child.formValueKey}
                          render={({ options, ...props }: any) => (
                            // options: required for segmentedControlField
                            <FieldComponent
                              {...props}
                              options={child.options}
                              placeholder={item.placeholder}
                            />
                          )}
                        />
                      </View>
                    )
                  })}
                </ExpandableList>
              ) : (
                <View style={style.field}>
                  <ItemTitle style={style.fieldTitle}>
                    {item.optionName} {printValue(item.value!)}
                  </ItemTitle>
                  <Field
                    name={item.formValueKey}
                    render={({ options, ...props }: any) => (
                      // options: required for segmentedControlField
                      <FieldComponent
                        {...props}
                        options={item.options}
                        placeholder={item.placeholder}
                      />
                    )}
                  />
                </View>
              )}
            </React.Fragment>
          )
        }}
      />
    </KeyboardAwareScrollView>
  )
}

const style = StyleSheet.create({
  field: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fieldTitle: {
    color: colors.secondary,
  },
  nestedField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    paddingTop: 12,
  },
})

export default OptionsFormBuilder
