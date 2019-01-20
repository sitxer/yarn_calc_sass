import React, { Component } from 'react'

export default class NewApp extends Component{
	
	render(){
		return(
			<div style={{display: 'block', backgroundColor: this.props.success ? 'green' : 'red'}} onClick={()=>{this.props.toggleSucessFunc()}}>Some {this.props.name}</div>
		)
	}
}