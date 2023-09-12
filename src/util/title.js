export const getAccountTypeTitle = (location) => {
    switch (location.pathname) {
      case '/account/estate':
        return 'Enter Estate Details'
      case '/account/estate/process':
        return 'Estate Verification'
      case '/account/individual':
        return 'Enter Individual Details'
      case '/account/individual/process':
        return 'Individual Verification'
      case '/account/company':
        return 'Enter Company Details'
      case '/account/company/process':
        return 'Company Verification'

      default:
        break
    }
}

export const getCurrentColor = (location, path) => {
  return location.pathname === path ? 'white' : '#303030'
}
