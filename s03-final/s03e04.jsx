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
