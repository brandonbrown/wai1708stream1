import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  orderByName,
  orderByStanding,
  selectClub,
  showClubsList
} from '../core-module/actions'

import App from '../components/app'

const mapStateToProps = (state) => {
  let clubs = state.eplclubs.clubs
  return {
    clubs,
    showClub: state.eplclubs.showClub,
    club: state.eplclubs.club
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    orderByName,
    orderByStanding,
    selectClub,
    showClubsList
  }, dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(App)
