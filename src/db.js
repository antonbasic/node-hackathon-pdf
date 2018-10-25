module.exports = function () {
  const db = {}

  function store (key, value) {
    db[key] = value
  }

  function get (key) {
    return db[key]
  }

  return {
    store,
    get,
  }
}
