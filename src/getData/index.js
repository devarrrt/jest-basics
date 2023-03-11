const axios = require('axios')
const mapArrToString = require('../mapArrToString/index')

const getData = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const userIds = res?.data?.map(el => el?.id)
        return mapArrToString(userIds)
    } catch (err) {

    }
}
module.exports = getData
