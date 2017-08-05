// reducer for eplclubs data
import sortBy from 'lodash/sortBy'

const eplData = require('../data/eplclubs.json')

// new reducer
// reducer takes in state
// reducer takes in actions

const eplclubs = (state = {clubs: eplData.clubs, showClub: false}, action) => {
  switch(action.type){
    case 'GET_CLUBS':
      return Object.assign({}, state, {
        clubs: eplData.clubs
      })
    case 'SELECT_CLUB':
      return Object.assign({}, state, {
        club: action.club,
        showClub: true
      })
    case 'SHOW_CLUBS_LIST':
      return Object.assign({}, state, {
        showClub: false
      })
    case 'ORDER_BY_NAME':
      return Object.assign({}, state, {
        clubs: sortBy(eplData.clubs, 'name')
      })
    case 'ORDER_BY_STANDING':
      return Object.assign({}, state, {
        clubs: sortBy(eplData.clubs, 'standing')
      })
    default:
      return state
  }
}

export default eplclubs
