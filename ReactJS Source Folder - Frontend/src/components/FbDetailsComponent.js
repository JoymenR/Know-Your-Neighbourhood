import React, { Component } from "react";

class FbDetailsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
		};
	}

	componentDidMount() {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			this.setState({ user: user });
		}
	}
	render() {
		const UserScreen = ({ user }) => (
			<>
				<div
					style={{
						justifyContent: "space-between",
						alignItems: "center"
					}}
				>
					<img
						src={user.picture.data.url}
						height="10%"
						width="10%"
						alt="avatar"
						style={{ borderRadius: "50%", marginBottom:"1%"}}
					/>
					<h1>Welcome, {user.name}!</h1>
                    <h3>You have Logged In Using Facebook</h3>
					<p>Yor Email Id is : {user.email}</p>
				</div>
			</>
		);
		return (
			<div>
				{this.state.user && (
					<div className="container p-5">
						<UserScreen user={this.state.user} />
					</div>
				)}
			</div>
		);
	}
}

export default FbDetailsComponent;