import * as React from 'react'

import SearchResultScreen from 'screens/SearchResult'

class SearchResult extends React.Component {
  static navigationOptions = {
    title: '검색 결과',
  }

  render() {
    return <SearchResultScreen />
  }
}

export default SearchResult
