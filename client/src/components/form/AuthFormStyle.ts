import { StyleSheet } from 'react-native'

import { colors } from 'config/theme'

const style = StyleSheet.create({
  background: {
    backgroundColor: colors.primary,
    flex: 1,
    padding: 30,
  },
  screenTitle: {
    marginTop: 40,
    marginBottom: 60,
    color: colors.secondary,
  },
  avatarContainer: {
    paddingVertical: 50,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: colors.secondary,
    padding: 16,
    marginTop: 8,
    alignItems: 'center',
  },
  submitText: {
    color: colors.white,
  },
  forgotPassword: {
    color: colors.secondary,
    textAlign: 'center',
    marginVertical: 16,
  },
  signupButton: {
    backgroundColor: colors.primary,
    padding: 16,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.floralWhite,
  },
  signupText: {
    color: colors.floralWhite,
  },
  goBackButton: {
    alignItems: 'center',
    marginVertical: 16,
  },
  goBackText: {
    color: colors.secondary,
  },
})

export default style
