const { DateTime } = require('luxon')

const now = DateTime.local()

console.log('(system default):', now.toLocaleString(DateTime.DATETIME_FULL))
console.log()

console.log('de:', now.setLocale('de').toLocaleString(DateTime.DATETIME_FULL))
console.log('fr:', now.setLocale('fr').toLocaleString(DateTime.DATETIME_FULL))


console.log()
console.log('fixed date format in french:', DateTime.fromISO('2014-08-06T13:07:04.054').setLocale('fr').toFormat('yyyy LLL dd'))