const axios = require('axios')

const HOSTNAME = 'https://api.github.com'
const USERNAME = 'google'
const path = `/users/${USERNAME}/repos`

axios.get(`${HOSTNAME}${path}`)
  .then((res) => {
    console.log(res.data)
    // res.data.sort()
    // res.data.split(0, 10)
    //console.log(res.data)

  })
  .catch((err) => {
    console.log(err)
  })