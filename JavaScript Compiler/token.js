const fs = require("fs");
const { Regex } = require("./punctuators");
const { KW } = require("./keyword");
const { opr } = require("./operator");

const breaker = {
    whiteSpace: "/\s/gi",
    lineBreaker: "\\n"
}

var singleCommentFlag = false
var multiCommentFlag = false
var stringFlag = false
var operatorFlag = false
var floatFlag = false
var whitspaceFlag = false

var temp = ""
var classPart = ""
var valuPart = ""
var tokens = []


var source = fs.readFileSync("./mytext.txt").toString().toLowerCase()
var lineNo = 0
var line
var newline = []
var source1 = source.split("\n")
console.log(source1)
for(line in source1){
    console.log("loop")
    lineNo +=1
    newline = source1[line].toString().split(" ")
    console.log(newline)
var i
   for(i in newline){
    //     match = newline[i].match(/[^\w\s\d]/gi)
    //    console.log(match + "---match variable ---")
     for(var j=0;j<=newline[i];j++){   
    //     console.log("--------punctuator Loop=---------") 
    //     console.log(newline[i].length + newline[j] + " Punctuators") 
            switch(newline[j]){
                case '.':
                    valuPart = newline[j]
                    classPart = KW.punctuator.dot
                    tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    //newline[i].replace(newline[j],'')
                    break;
                case ',':
                    valuPart= newline[j]
                    classPart = KW.punctuator.coma
                    tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    //newline[i].replace(newline[j],'')
                    break;  
                case '(':
                    valuPart= newline[j]
                    classPart = KW.punctuator.parenOpen
                    tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    //newline[i].replace(newline[j],'')
                    break;
                case ')':
                    valuPart= newline[j]
                    classPart = KW.punctuator.parenClose
                    tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    //newline[i].replace(newline[j],'')
                    break;
                case '{':
                    valuPart= newline[j]
                    classPart = KW.punctuator.BracesOpen
                    tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    break;
                                
                case '}':
                    valuPart= newline[j]
                    classPart = KW.punctuator.BracesClose
                    tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    break;
                case '[':
                    valuPart= newline[j]
                    classPart = KW.punctuator.BracketOpen
                    tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
                    break;
                case ']':
                    valuPart= newline[j]
                    classPart = KW.punctuator.BracketClose
                    tokens.push(valuPart,classPart,lineNo)
                    break;
                case ':':
                    valuPart= newline[j]
                    classPart = KW.punctuator.Colon
                    tokens.push(valuPart,classPart,lineNo)
                    break;
                case ';':
                    valuPart= newline[j]
                    classPart = KW.punctuator.semiColon
                    tokens.push(valuPart,classPart,lineNo)
                    break;
                default:
                    continue;
            }
        }
    temp = newline[i]
        console.log(temp)
        switch(true){
            case Regex.stringRegex.test(temp):
                valuPart = temp
                classPart = KW.stringConstant
                break;
            case Regex.idRegex.test(temp):
                valuPart = temp
                classPart = KW.identifer
                break;
            case Regex.floatRegex.test(temp):
                valuPart = temp
                classPart = KW.floatConstant
                break;
            // case Regex.punct:
            //     valuPart = temp
            //     classPart = KW.punctuator
            //     break;
            case Regex.intRegex.test(temp):
                valuPart = temp
                classPart = KW.intConstant
                break;
            // case Regex.comments.single.test(temp):
            //     valuPart = temp
            //     classPart = KW.comments
            //     break;
            // case Regex.comments.multi.test(temp):
            //     valuPart = temp
            //     classPart = KW.comments
         // case Regex.oprRegex.test(temp):
            //     valuPart = temp
            //     classPart = KW.operator
                // if(temp==opr.plusMinus[0|1]){
                // valuPart = temp
                // classPart = opr.plusMinus
                // }
                // else if (temp == opr.compound[0|1|2|3]){
                //     valuPart = temp
                //     classPart = opr.compound
                // }
                // else if (temp == opr.equal){
                //     valuPart = temp
                //     classPart = opr.equal
                // }
                // else if (temp == opr.incdec[0|1]){
                //     valuPart = temp
                //     classPart = opr.incdec
                // }
                // else if (temp == opr.mdm[0|1|2]){
                //     valuPart = temp
                //     classPart = opr.mdm
                // }
                // else if (temp == opr.rational[0|1|2|3|4|5]){
                //     valuPart = temp
                //     classPart = opr.rational
                // }
                // else if (temp == opr.logical[0|1|2]){
                //     valuPart = temp
                //     classPart = opr.logical
                // }
            //break;
            default:
                valuPart = temp
                classPart = "Invalid Lexene"
        
        
        }
       console.log(classPart + valuPart + lineNo)
        tokens.push(`(${classPart}, ${valuPart}, ${lineNo}) \n`)
   }
}
fs.writeFile("./tokens.txt",tokens,function(err){
    if(err) console.log(err)
})