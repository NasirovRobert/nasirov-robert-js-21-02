const regexp = /^\d\d-\d\d-\d\d\d\d \d\d:\d\d$/;
const secondRegexp = new RegExp('^\\d\\d-\\d\\d-\\d\\d\\d\\d \\d\\d:\\d\\d$', 'gi');

const firstString = '12-12-1993 12:35';
const secondString = '11:12:1993 12 35';

alert(regexp.test(firstString));
alert(regexp.test(secondString));
