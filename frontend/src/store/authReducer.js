const initialState = {
  user: {
    id: null,
    username: '',
    isAdmin: false,
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "AUTH_USER":
    return { ...state, ...payload }

  default:
    return state
  }
}
