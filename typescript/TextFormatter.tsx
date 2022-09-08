interface textFormat {
    text: any, // The input value you want to mask
    format: string //your input mask.
}

export default function TextFormatter(props: textFormat) {
    //0 = Only Digit Characters
    //* = Only Alphabetic Characters
    //? = Alphanumeric Characters

    let result = ""; //For Result
    let inputIndex = 0; //Input Value (props.text) Index Counter

    for (let i = 0; i < props.format.length; i++) {
        if (props.text[inputIndex]) {
            if ((props.format[i] != "0" && props.format[i] != "*" && props.format[i] != "?") && props.text[i] != props.format[i]) {
                result += props.format[i];
            } else {
                if (props.format[i] == "0") {
                    if (isNaN(props.text[inputIndex]) === false) {
                        result += props.text[inputIndex];
                    }
                } else if (props.format[i] == "*") {
                    if (isNaN(props.text[inputIndex]) === true) {
                        result += props.text[inputIndex];
                    }
                } else{
                    result += props.text[inputIndex];
                }

                inputIndex++;
            }
        }
    }

    return result;
}