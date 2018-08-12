import { StyleSheet } from 'react-native'
import { colors } from 'config/theme'

export default StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secondaryColor: {
    color: colors.secondary,
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
