import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function ShowBanner(props) {
	if (props.time > 45) {
		return (
			<div className="rest_block"> Отдых </div>
		)
	} else {
		return (
			<div className="work_block"> Время работать над собой! </div>
		)
	}
}

class Clock extends React.Component { // реакт создает новый экземпляр Clock
	constructor(props) {
		super(props);
		this.state = {date: new Date()} // инициализируется положение с датой
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		)
	} // после появления таймера на странице вызывается метод componentDidMount и наш таймер говорит браузеру вызывать метод tick каждую секунду

	componentWillUnmount() {
		clearInterval(this.timerID) // если таймер исчезнет, то вызовется этот метод и таймер прекратит свое существование
	}

	tick() {
		this.setState({
			date: new Date()
		})
	} // при вызове этого метода наше положение сдатой обновляется

	render(){
		return (
			<div>
				<ShowBanner time={this.state.date.getSeconds()}/>
				<h1> Текущее время {this.state.date.toLocaleTimeString()}</h1>
			</div>
		)
	} // происходит вызов метода render и таймер с текущим временем появляется на странице

}

export default Clock;
