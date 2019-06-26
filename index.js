const { DateTime } = require('luxon')

const now = DateTime.local()

console.log('de:', now.setLocale('de').toLocaleString(DateTime.DATETIME_FULL))
console.log('fr:', now.setLocale('fr').toLocaleString(DateTime.DATETIME_FULL))