const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=8169c06a4d1b58')
  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('Error getting location')
  }
}

const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('no get puzzle');
  }
}

const getCountryDetails = async (countryCode) => {
  const response = await fetch('https://restcountries.eu/rest/v2/all')
  if (response.status === 200) {
    const data = await response.json()
    return data.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error('no get country')
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  return getCountryDetails(location.country)
}

// const getCountryDetails = (countryCode) => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest()
//   request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       const country = data.find((country) => country.alpha2Code === countryCode)
//       resolve(country)
//     } else if (e.target.readyState === 4) {
//       reject('A coountry error')
//     }
//   })
//   request.open('GET', `https://restcountries.eu/rest/v2/all`)
//   request.send()
// })