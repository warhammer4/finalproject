const daoCommon = require('./common/daoCommon')

const storeDao ={
    ...daoCommon,
    ...require('./api/storeDao')
}

module.exports ={
    storeDao  
}