

// building a layout

const data = {
    name: "abdullah çok",
    image: "../../..jpg"
    description: "he is bla bla bla",
    website: {
        url: "http://abdullahcok.dev",
        label: "his portfolio things there"
    },
}

let content = (
    <img src={data.image}
)

ReactDOM.render(content, document.querySelector("#abouthim"))
