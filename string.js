let string = `.gyYetLFLBG{border-radius : 8px;background-color : #cce4ff ; border :  3px Solid #d6c9f1 ; padding-top : 0px ; padding-left : 0px; padding-right : 0px ;padding-bottom : 0px;}
.gyYetLFLBG:hover{background-color :#d6c9f1 }
.dDaxXaABkF{border-radius : 0px;background-color : #cce4ff ; border :  0px Solid #d6c9f1 ; padding-top : 0px ; padding-left : 0px; padding-right : 0px ;padding-bottom : 0px;}
.dDaxXaABkF:hover{background-color :#d6c9f1 }.NnwwmKXKMK{border-radius : 0px;background-color : #cce4ff ; border :  0px Solid #d6c9f1 ; padding-top : 0px ; padding-left : 0px; padding-right : 0px ;padding-bottom : 0px;}
.NnwwmKXKMK:hover{background-color :#d6c9f1 }.vbxERgkzDO{border-radius : 0px;background-color : #7fd9d1 ; border :  0px Solid #d6c9f1 ; padding-top : 8px ; padding-left : 31px; padding-right : 30px ;padding-bottom : 9px;}
.vbxERgkzDO:hover{background-color :#7fd9d1 }.HhVZYXdEzj{border-radius : 6px;background-color : #7fd9d1 ; border :  0px Solid #d6c9f1 ; padding-top : 8px ; padding-left : 24px; padding-right : 23px ;padding-bottom : 6px;}
.HhVZYXdEzj:hover{background-color :#7fd9d1 }.pYvqQLJuIa{border-radius : 20px;background-color : #7fd9d1 ; border :  0px Solid #d6c9f1 ; padding-top : 7px ; padding-left : 15px; padding-right : 16px ;padding-bottom : 5px;}
.pYvqQLJuIa:hover{background-color :#7fd9d1 }.rinnYrPMvt{border-radius : 7px;background-color : #cce4ff ; border :  1px Solid #7138e3 ; padding-top : 8px ; padding-left : 25px; padding-right : 31px ;padding-bottom : 7px;}
.rinnYrPMvt:hover{background-color :#d6c9f1 }.DgZqmXRCAK{border-radius : 13px;background-color : #cce4ff ; border :  1px Solid #020006 ; padding-top : 9px ; padding-left : 19px; padding-right : 15px ;padding-bottom : 8px;}
.DgZqmXRCAK:hover{background-color :#d6c9f1 }* {box-sizing: border-box}`
var checkArray = ["pYvqQLJuIa","rinnYrPMvt"]
var finalArray = [];
var firstIndex;
var nextIndex;
var i = 0
var substring
var addArray;
var letters;
function createArray(string) {
    for (let i = 0; i <checkArray.length; i++) {
        //we need content of i class
        function helper(string) {
            if(firstIndex===-1) return 
            firstIndex = string.indexOf(`.${checkArray[i]}`)
            if(firstIndex!==-1){
            nextIndex = string.indexOf('}', firstIndex)
            substring = string.slice(firstIndex, nextIndex + 1)
            finalArray.push(substring)
            substring = 0;
            return helper(string.slice(nextIndex,string.length))
            }
            else {return}
        }
        helper(string)
        firstIndex=0;
        nextIndex=0;
        substring=0
    }
    return finalArray
}
console.log(createArray(string))
