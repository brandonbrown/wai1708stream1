export const getClubs = () => {
  return {
    type: "GET_CLUBS"
  }
}

export const selectClub = (club) => {
  return {
    type: 'SELECT_CLUB',
    club
  }
}

export const showClubsList = () => {
  return {
    type: 'SHOW_CLUBS_LIST'
  }
}

export const orderByName = () => {
  return {
    type: 'ORDER_BY_NAME'
  }
}

export const orderByStanding = (clubs) => {
  return {
    type: 'ORDER_BY_STANDING',
    clubs
  }
}
