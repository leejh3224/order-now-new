import * as React from 'react'
import { withNavigation, NavigationScreenProps } from 'react-navigation'
import { withFormik, FormikProps } from 'formik'
import { connect } from 'react-redux'

import { SearchBar } from 'react-native-elements'

import { colors } from 'config/theme'
import { RootState } from 'store/rootReducer'
import { getStores } from 'store/selectors'

interface FormValues {
  keyword: string
}

interface Props {
  stores: any
}

const TypeFixedSearchBar: any = SearchBar

const Search: React.SFC<FormikProps<FormValues>> = ({
  values,
  handleChange,
  submitForm,
}) => (
  <TypeFixedSearchBar
    placeholder="가게 이름을 입력해주세요."
    containerStyle={{
      flex: 1,
      backgroundColor: colors.primary,
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
    }}
    inputStyle={{ backgroundColor: colors.white, fontSize: 13 }}
    value={values.keyword}
    onChangeText={handleChange('keyword')}
    onSubmitEditing={submitForm}
  />
)

const mapStateToProps = (state: RootState) => ({
  stores: getStores(state),
})

export default connect(
  mapStateToProps,
  null,
)(
  withNavigation(withFormik<NavigationScreenProps & Props, FormValues>({
    mapPropsToValues: () => ({
      keyword: '',
    }),
    handleSubmit: (values, { props: { navigation, stores } }) => {
      let searchResults

      if (values.keyword.trim() === '') {
        searchResults = []
      } else {
        searchResults = Object.values(stores).filter((store: any) =>
          store.name.startsWith(values.keyword),
        )
      }

      navigation.navigate('searchResult', {
        searchResults,
        keyword: values.keyword,
      })
    },
  })(Search as any) as any),
) as any
