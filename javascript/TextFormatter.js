const exports = {};
"use strict";
exports.__esModule = true;
exports.TextFormatter = void 0;
function TextFormatter(props) {
    //0 = Only Digit Characters
    //* = Only Alphabetic Characters
    //? = Alphanumeric Characters
    var result = ""; //For Result
    var inputIndex = 0; //Input Value (props.text) Index Counter
    for (var i = 0; i < props.format.length; i++) {
        if (props.text[inputIndex]) {
            if ((props.format[i] != "0" && props.format[i] != "*" && props.format[i] != "?") && props.text[i] != props.format[i]) {
                result += props.format[i];
            }
            else {
                if (props.format[i] == "0") {
                    if (isNaN(props.text[inputIndex]) === false) {
                        result += props.text[inputIndex];
                    }
                }
                else if (props.format[i] == "*") {
                    if (isNaN(props.text[inputIndex]) === true) {
                        result += props.text[inputIndex];
                    }
                }
                else {
                    result += props.text[inputIndex];
                }
                inputIndex++;
            }
        }
    }
    return result;
}
exports.TextFormatter = TextFormatter;
