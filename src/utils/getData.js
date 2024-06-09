async function getData(version) {
  try {
    const data = require(`../db/${version}.json`)
    return data
  } catch {
    return null
  }
}

module.exports = getData
