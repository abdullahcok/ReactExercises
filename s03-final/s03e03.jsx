

// building html from arrays

const navLinkItems = []
const content = <ul className="nav">{navLinkItems}</ul>

ReactDOM.render(content, document.querySelector("#links"))


// mapping array to li

const animals = ["cat", "dog", "rabbit"]

const animalsInHtml = animals.map((singleAnimal, i) => {
    return <li>hello </li>
})

ReactDOM.render(
    <ul>{animalsInHTML}</ul>, 
    document.querySelector("#animal-list")
)

// mapping array objects to li

const animals2 = [{label: "Cat"}, {label: "Dog"}]

const animalsInHtml2 = animals.map((singleAnimal, i) => {
    return <li>hello </li>
})

ReactDOM.render(
    <ul>{animalsInHTML}</ul>, 
    document.querySelector("#animal-list")
)

// mapping array of objects to li

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Neptune"]

const planetsInHtml = planets.map((singlePlanets, i) => {
    return <li>welcome </li>
})

const content2 = (<ul className="list-group m-5"></ul>)

ReactDOM.render(content, document.querySelector("#planets"))


