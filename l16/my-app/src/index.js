import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import Button from './button';
import registerServiceWorker from './registerServiceWorker';

// function Greet(props) {

// 	return(
// 		<h1>Hello {props.phrase}! My name is {props.name}</h1>
// 	)
// }

// function GreetAll(){
// 	return(
// 		<div>
// 			<Greet phrase='World!!' name='Alex'/>
// 			<Greet phrase='World!!' name='Ivan'/>
// 			<Greet phrase='World!!' name='Petr'/>
// 		</div>


// 	)
// }

class App extends React.Component {
	render(){
		return(
			<div className="wrapper">
				<Clock />
				<Button />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
