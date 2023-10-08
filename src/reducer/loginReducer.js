export const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: false,
  user: {},
}

export const loginReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return {
        ...state,
        [action.key]: action.value,
        loading: false,
        error: false,
        user: {},
      }
    case 'AUTH_SUCCESS':
      return {
        ...state,
        email: '',
        password: '',
        loading: false,
        user: action.payload,
      }
    case 'AUTH_FAILED':
      return {
        ...state,
        error: true,
      }

    default:
      break
  }
}
