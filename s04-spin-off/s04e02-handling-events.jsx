// in html 
<button onclick="running()">
  Activate Lasers
</button> 


// to react 


<button onClick={running}>
  Run Forrest Run
</button>


// click button for flying

<form onsubmit="console.log('You clicked button. now you can fly...'); return false">
  <button type="submit">Fly</button>
</form> 



// in react you can make this over

function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked button. Now you can fly...');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Fly</button>
      </form>
    );
  }



// we can bind also with callbacks

class LogginButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    handleClick = () => {
      console.log('this is:', this);
    };
    render() {
      return (
        <button onClick={this.handleClick}>
          Fire me
        </button>
      );
    }
  }

  // passing event handlers 

<button onClick={(e) => this.deleteRow(id, e)}> Delete Row  </button>
<button onClick={this.deleteRow.bind(this, id)}>    Delete Row  </button>