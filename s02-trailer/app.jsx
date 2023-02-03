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
ReactDOM.render(output2, document.querySelector('#customer1')) // what o2, where c1


// building html from arrays

const navLinkItems = []
const content = <ul className="nav">{navLinkItems}</ul>

ReactDOM.render(content, document.querySelector("#links"))


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



// functions

export const helloMan = () => {
    return <h1>hello man</h1>
}

ReactDOM.render(helloMan(), document.querySelector(#hello))



// jumbotron hey!

import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const Jumbotron = props => {
	
	return (
		<div className="card-top">
			<img src="../../jpg" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">Abdullah Çok here</p>
				<a href="https://www.abdullahcok.dev" className="btn btn-primary">
					His portfolio website
				</a>
			</div>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropType.string
};


// conditional rendering

const Alert = props => {
    const colorClasses = {
		red: "alert-danger",
		blue: "alert-not-bad",
        green: "alert-awesome"
	};
	if (colorClasses[props.color] === undefined) 
        alert(`The color ${props.color} is not in the possible list of colors`);

	return (
		<div className={`alert ${colorClasses[props.color]}`} role="alert">
			{props.text}

            <button style={colorClasses} type="button" className="btn alert-not-bad">
			{props.label}<span className="badge alert-awesome">{props.number}</span>
		</button>
		</div>
	);
}

Alert.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
}

        // you do not have to understand above then
ReactDOM.render(
    <div>
        <Alert text="Heeeyy! What are you doing here?" color="red" />
        <Alert text="Well, it is not bad after all!" color="blue" />
        <Alert text="That is awesome mannnn!" color="green" />
    </div>,
    document.querySelector("#alert-goes-around")
)


// listening to events

const clickHandler = e => {
    console.log("it was clicked!", e);
}

const Alert = props => {
    return
        <button className="btn btn-success btn-lg">Click for bombing!</button>
}

document.querySelector("#click-button")
