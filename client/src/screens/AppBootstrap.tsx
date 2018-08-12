import * as React from 'react'
import { Auth } from 'aws-amplify'
import { View, Image } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

class AppBootstrap extends React.Component<NavigationScreenProps> {
  async componentDidMount() {
    const user = await Auth.currentUserInfo()

    this.props.navigation.navigate(user ? 'app' : 'app')
  }

  // TODO: 다른 앱들처럼 로딩 스크린으로 활용
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={require('../../assets/splash.png')} />
      </View>
    )
  }
}

export default AppBootstrap
