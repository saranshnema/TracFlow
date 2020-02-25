import React, { Componenet } from 'react';
import logo from "../../assests/image.png"
import Avatar from 'react-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactTable from 'react-table'
import "./react-table.css";
import "./ChangeOrders.css"


export default class ChangeOrders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showContentFalg: true,
			showPmFlag: true
		}

	}

	contentShow = () => {
		if (this.state.showContentFalg === false) {
			this.setState({ showContentFalg: true });
		}
		else {
			this.setState({ showContentFalg: false });

		}
	}
	showPmEmployees = () => {
		if (this.state.showPmFlag === false) {
			this.setState({ showPmFlag: true });
		}
		else {
			this.setState({ showPmFlag: false });

		}
	}

	routeToTickets = () => {
		this.props.history.push('/tickets')
	}
	render() {
		const columns = [
			{
				Header: null,
				columns: [
					{
						Header: "STATUS",
						accessor: "name",
						width:150,
						Cell: row =>(<div className="statusCell"><h3 className={(row.value === "OPEN")?"statusCellText":"statusCellClosedText"}>{row.value}</h3></div>)
					},
					{
						Header: "ISSUE DATE",
						accessor: "age",
						Cell: row =>((<div className="dateCell"><h3 className="dateCellText">{row.value}</h3></div>))
					},
					{
						Header: "SUBJECT",
						accessor: "friend.name",
						width: 250,
						Cell: row => (<div className="subjectCell"><h3 className="dateCellText">{row.value}</h3></div>)
					},
					{
						Header: "BALANCE",
						accessor: "friend.age",
						Cell: row =>((<div className="statusCell"><h3 className="moneyCellText">{row.value}</h3></div>))
					},
					{
						Header: "COMPLETE",
						accessor: "name",
						width: 100,
						Cell: row => (<div className="">
						<FontAwesomeIcon icon= {!(row.value === "OPEN") ? "times-circle" : "check-circle"} 
															className={(row.value === "OPEN") ? "checkIcon": "checkIconCross"} 
														/>
					</div>)
					},
				]
			}
		];

		const data = [
			{
				name: 'OPEN',
				age: '11/23/2017',
				friend: {
					name: 'Infuse Text Change',
					age: '$1300',
				}
			},
			{
				name: 'OPEN',
				age: '11/23/2017',
				friend: {
					name: 'Infuse Text Change',
					age: '$1300',
				}
			},
			{
				name: 'CLOSED',
				age: '11/23/2017',
				friend: {
					name: 'Infuse Text Change Order',
					age: '$1300',
				}
			},
			{
				name: 'OPEN',
				age: '11/23/2017',
				friend: {
					name: 'Infuse Text Change',
					age: '$1300',
				}
			},
			{
				name: 'CLOSED',
				age: '11/23/2017',
				friend: {
					name: 'Infuse Text Change',
					age: '$1300',
				}
			},
			{
				name: 'CLOSED',
				age: '11/23/2017',
				friend: {
					name: 'Infuse Text Change',
					age: '$1300',
				}
			},
			{
				name: 'OPEN',
				age: '11/23/2017',
				friend: {
					name: 'Infuse Text Change',
					age: '$1300',
				}
			},
			{
				name: 'OPEN',
				age: '11/23/2017',
				friend: {
					name: 'Infuse Text Change',
					age: '$1300',
				}
			},
			{
				name: 'CLOSED',
				age: '11/23/2017',
				friend: {
					name: 'Infuse Text Change',
					age: '$1300',
				}
			},
			{
				name: 'OPEN',
				age: '11/23/2017',
				friend: {
					name: 'Infuse Text Change Order',
					age: '$1300',
				}
			},

		]

		return (
			<div className="ticketsContainer">
				<div className="headerContainerTickets">
					<img className="AppLogo" alt="noImageFound" src={logo} />
					<ul className="ticketsNav">
						<li><a className="FirstLi" href="">Our Team</a></li>
						<li><a className="ticketNavItems" href="">How it Works</a></li>
						<li><a className="ticketNavItems" href="">Schedule Demo</a></li>
						<li><a className="ticketNavItems" href="">My Account</a></li>
					</ul>
				</div>
				<div className="sidebar">
					<a><FontAwesomeIcon style={{ fontSize: '34px', paddingTop: "35px", cursor: "pointer" }} icon="layer-group" /></a>
					<a><FontAwesomeIcon style={{ fontSize: '34px', paddingTop: "10px", cursor: "pointer", color: "#3371EB" }} icon="th-large" /></a>
				</div>
				<div style={{ display: "inline-flex", justifyContent: "center" }}>
					<div style={{ width: "90%" }}>
						<div className="ticketHeader">
							<h1>Timesheets </h1>
						</div>
						<div className="tickectTabContainer">
							<div style={{ backgroundColor: "aliceblue", padding: "40px 20px 7vw 20px" }}>
								<div className="ticketTab">
									<FontAwesomeIcon icon="file-invoice" style={{ fontSize: '34px', marginLeft: "20px", cursor: "pointer" }} />
									<h3 className="ticketTabText">Timesheets</h3>
								</div>
								<div className="ticketTab" onClick={this.routeToTickets} style={{cursor:"pointer"}}>
									<FontAwesomeIcon icon="file-invoice" style={{ fontSize: '34px', marginLeft: "20px", cursor: "pointer" }} />
									<h3 className="ticketTabText">Tickets</h3>
								</div>
								<div className="ticketTab"  style={{ backgroundColor: "#3371EB", color: "white",  cursor: "pointer"  }} >
									<FontAwesomeIcon icon="file-invoice" style={{ fontSize: '34px', marginLeft: "20px", cursor: "pointer" }} />
									<h3 className="ticketTabText" style={{color:"white"}}>Change Orders</h3>
								</div>
								<div className="ticketTab">
									<FontAwesomeIcon icon="file-invoice" style={{ fontSize: '34px', marginLeft: "20px", cursor: "pointer" }} />
									<h3 className="ticketTabText">Projects</h3>
								</div>
								<div className="ticketTab">
									<FontAwesomeIcon icon="file-invoice" style={{ fontSize: '34px', marginLeft: "20px", cursor: "pointer" }} />
									<h3 className="ticketTabText">DRC</h3>
								</div>
								<div className="ticketTab">
									<FontAwesomeIcon icon="file-invoice" style={{ fontSize: '34px', marginLeft: "20px", cursor: "pointer" }} />
									<h3 className="ticketTabText">SFI</h3>
								</div>

							</div>
							<div style={{ backgroundColor: "aliceblue", marginLeft: "20px", marginRight: "20px" }}>
								<ReactTable
									data={data}
									columns={columns}
									defaultPageSize={6}
									className="-striped -highlight"
								/>
							</div>

						</div>
					</div>

					<div className="ticketRightSidebar">
						<div className="searchBarContainer">
							<input className="searchBar" value="Search" />
							<Avatar round={true} size={44} color="#3371EB" name="Trac Flow" />
						</div>
						<div className="rightTab">
							<FontAwesomeIcon icon="robot" style={{ fontSize: '38px', paddingTop: '23px', marginLeft: "1px", cursor: "pointer" }} />
							<div style={{ textAlign: "center", textAlign: "center", display: 'flow-root', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
								<h3 className="progressBarHeader">Top Rock Building</h3>
								<div className="bar">
									<div className="in"></div>
								</div>
							</div>
						</div>
						<div style={{ paddingLeft: "27%", justifyContent: "center", alignItems: "center" }}>
							<div style={{ display: "inline-flex" }}>
								<div style={{ height: "7vw", width: "7vw" }}> hello</div>
								<div style={{ height: "7vw", width: "7vw" }}> hello</div>
							</div>
							<div style={{ display: "flex" }}>
								<div style={{ height: "7vw", width: "7vw" }}> hello</div>
								<div style={{ height: "7vw", width: "7vw" }}> hello</div>
							</div>
						</div>
						<button class="collapsible" onClick={this.contentShow}>LOCATION</button>
						<div className={!this.state.showContentFalg ? "content" : "contentShow"}>
							<h4> Building</h4>
							<p>Data Center 45, Irvine <br /> California </p>
						</div>
						<button class="collapsible" onClick={this.showPmEmployees}>NO OF EMPLOYEES</button>
						<div className={!this.state.showPmFlag ? "content" : "contentShow"}>
							<h4> 15 Employees</h4>
							<p>Project Manager: Jack Ryder</p>
						</div>
					</div>
				</div>

			</div>
		);
	}
}