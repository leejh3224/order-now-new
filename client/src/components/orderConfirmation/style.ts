import { StyleSheet } from 'react-native'
import { colors } from 'config/theme'

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.beige,
    padding: 12,
  },
  flex: {
    flex: 1,
  },
  header: {
    color: colors.secondary,
  },
  priceContainer: {
    padding: 12,
    alignItems: 'flex-end',
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
