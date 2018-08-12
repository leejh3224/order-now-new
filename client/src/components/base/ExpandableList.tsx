import * as React from 'react'
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
  LayoutChangeEvent,
  TouchableOpacity,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { ItemTitle } from 'components/base/Fonts'

import { colors } from 'config/theme'

interface State {
  isExpanded: boolean
  animation: any
  bodyHeight: number
}

class ExpandableList extends React.Component<any, State> {
  // React native Animated.Value needs static value to work naturally
  HEADER_HEIGHT = 50

  state = {
    isExpanded: false,
    animation: new Animated.Value(this.HEADER_HEIGHT),
    bodyHeight: 0,
  }

  private style = StyleSheet.create({
    container: {
      overflow: 'hidden',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 12,
    },
    title: {
      color: colors.secondary,
    },
    body: {
      paddingHorizontal: 12,
      paddingBottom: 12,
    },
  })

  icons = {
    up: <Ionicons name="ios-arrow-up" color="grey" size={28} />,
    down: <Ionicons name="ios-arrow-down" color="grey" size={28} />,
  }

  toggle = () => {
    const { isExpanded, animation, bodyHeight } = this.state

    this.setState({ isExpanded: !isExpanded })

    const initialHeight = isExpanded
      ? this.HEADER_HEIGHT + bodyHeight
      : this.HEADER_HEIGHT
    const finalHeight = isExpanded
      ? this.HEADER_HEIGHT
      : this.HEADER_HEIGHT + bodyHeight

    animation.setValue(initialHeight)

    Animated.spring(animation, {
      toValue: finalHeight,
    }).start()
  }

  setBodyHeight = (event: LayoutChangeEvent) => {
    this.setState({
      bodyHeight: event.nativeEvent.layout.height,
    })
  }

  render() {
    return (
      <Animated.View
        style={[this.style.container, { height: this.state.animation }]}
      >
        <TouchableOpacity onPress={this.toggle}>
          <View style={this.style.header}>
            <ItemTitle style={this.style.title}>{this.props.title}</ItemTitle>
            <TouchableHighlight underlayColor="white" onPress={this.toggle}>
              {this.state.isExpanded ? this.icons.up : this.icons.down}
            </TouchableHighlight>
          </View>
        </TouchableOpacity>

        <View style={this.style.body} onLayout={this.setBodyHeight}>
          {this.props.children}
        </View>
      </Animated.View>
    )
  }
}

export default ExpandableList
