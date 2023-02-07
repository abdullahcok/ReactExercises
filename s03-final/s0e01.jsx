import {React, ReactDOM} from "react";


// hello guys

let output = <span>me is a 30 years old</span>
const me = document.querySelector('#me')
ReactDOM.render(output, me)


// redering from objects

const customer = {
    fname: "abdullah",
    lname: "çok"
}

const output2 = <div></div> // your customer inside Headers
ReactDOM.render(output2, document.querySelector('#customer)) // what o2, where c1
