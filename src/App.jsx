import React, { Component } from 'react'
import './App.scss';
import Header from "./components/header/header.component";
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			items: [],
			isLoaded: false
		}
	}
	componentDidMount(){
		fetch('https://gorest.co.in/public-api/posts?access-token=XXXXXXXXXXX')
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded:true,
					items: json
				})
			});

	}
	render(){
		const { isLoaded, items } = this.state;
		if(!isLoaded){
			return <div className="App"><CircularProgress/></div>
		}
		else{	
			return(
				<div className="App">
					<Header/>
					<ul className="App-list">
						{items.result.map(item => (
							<li key={item.id}>
								{item.title} | {item.user_id}
							</li>
						))}
					</ul>
				</div>
			)
		}
	}
}

export default App;