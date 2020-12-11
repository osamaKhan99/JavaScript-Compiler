const Regex = {
// comments : { single: new RegExp('/^//'), multi: new RegExp('/^\/\*|\*\//')},
 idRegex : new RegExp('(([A-Za-z]+|(_[A-Za-z0-9]))+([A-Za-z0-9]*))'),
 intRegex : new RegExp('([+-]?[0-9]+)'),
 floatRegex : new RegExp('([+-]?([0-9]*)?[.][0-9]+)'),
 stringRegex : new RegExp('[\"]+([\\w]*|[\\W&&[^\\\\]]*|(\\\\[\\\\\"nt])*|(\\\\[\\\\])*)*[\"]+'),
 charRegex : new RegExp('[\']+[\\w]'),
 punct: [ ".",",","(",")","{","}","[","]",";",":" ],
 //oprRegex = new RegExp('/^(\+|-|\*|\/|=|\>|\<|\>=|\<=|\&&|\+=|\-=|\*=|\/=|\||\%|\!|\^|\(|\))$/')
 //oprRegex = new RegExp('(\+|\-|\*|\/|=|%|!|&)')
}
exports.Regex = Regex