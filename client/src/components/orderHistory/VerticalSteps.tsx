import * as React from 'react'
import { StyleSheet } from 'react-native'
import StepIndicator from 'react-native-step-indicator'

import { ItemDesc, Caption } from 'components/base/Fonts'

import formatDate from 'utils/formatDate'
import { colors } from 'config/theme'

// react-native-step-indicator has typing error so cast any to fix it
const TypeFixedStepIndicator = StepIndicator as any

const VerticalSteps = () => (
  <TypeFixedStepIndicator
    labels={[
      <ItemDesc style={style.stepLabel}>
        주문 요청{' '}
        <Caption style={style.stepLabel}>{formatDate(Date.now())}</Caption>
      </ItemDesc>,
      <ItemDesc style={style.stepLabel}>
        주문 승인{' '}
        <Caption style={style.stepLabel}>{formatDate(Date.now())}</Caption>
      </ItemDesc>,
      <ItemDesc style={style.stepLabelUnfinished}>
        주문 완료{' '}
        <Caption style={{ color: 'transparent' }}>
          {formatDate(Date.now())}
        </Caption>
      </ItemDesc>,
    ]}
    currentPosition={1}
    direction="vertical"
    stepCount={3}
    customStyles={{
      stepIndicatorSize: 15,
      currentStepIndicatorSize: 20,
      separatorStrokeWidth: 2,
      currentStepStrokeWidth: 3,
      stepStrokeCurrentColor: colors.secondary,
      stepStrokeWidth: 3,
      stepStrokeFinishedColor: colors.secondary,
      stepStrokeUnFinishedColor: colors.beige,
      separatorFinishedColor: colors.secondary,
      separatorUnFinishedColor: colors.beige,
      stepIndicatorFinishedColor: colors.secondary,
      stepIndicatorUnFinishedColor: colors.beige,
      stepIndicatorCurrentColor: colors.secondary,
      stepIndicatorLabelFontSize: 0,
      currentStepIndicatorLabelFontSize: 0,
      stepIndicatorLabelCurrentColor: 'transparent',
      stepIndicatorLabelFinishedColor: 'transparent',
      stepIndicatorLabelUnFinishedColor: 'transparent',
      labelColor: colors.lightBorder,
      labelSize: 15,
      currentStepLabelColor: colors.secondary,
    }}
  />
)

const style = StyleSheet.create({
  stepLabel: {
    color: colors.secondary,
  },
  stepLabelUnfinished: {
    color: colors.lightBorder,
  },
})

export default VerticalSteps
