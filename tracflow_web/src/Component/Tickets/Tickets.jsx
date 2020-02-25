import React, { Componenet } from 'react';
import "./Tickets.css";
import logo from "../../assests/image.png"
import Avatar from 'react-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Tickets extends React.Component {
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

	routeToChangeOrders = () => {
		this.props.history.push('/changeorders')
	}

	render() {
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
								<div className="ticketTab" style={{ backgroundColor: "#3371EB", color: "white", cursor:"pointer" }}>
									<FontAwesomeIcon icon="file-invoice" style={{ fontSize: '34px', marginLeft: "20px", cursor: "pointer" }} />
									<h3 className="ticketTabText" style={{ color: "white" }}>Tickets</h3>
								</div>
								<div className="ticketTab" onClick={this.routeToChangeOrders} style={{cursor:"pointer"}}>
									<FontAwesomeIcon icon="file-invoice" style={{ fontSize: '34px', marginLeft: "20px", cursor: "pointer" }} />
									<h3 className="ticketTabText">Change Orders</h3>
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
							<div style={{ backgroundColor: "aliceblue", marginLeft: "20px" }}>
								<div className="ticketBody">
									<h4 style={{ margin: "0px 0px 10px 0px", padding: '7px 7px 7px 30px', backgroundColor: "#3371EB", color: "white", width: "200px", borderRadius: "5px" }}> 101 Barclays st 5th floor</h4>
									<div style={{ display: "inline-flex", marginBottom: "10px" }}>
										<div className="emptyHead"></div>
										<div className="submitted"><h4 className="ticketHeaderText" >Submitted</h4></div>
										<div className="workDate"><h4 className="ticketHeaderText" >Work Date</h4></div>
										<div className="status"><h4 className="ticketHeaderText">Status</h4></div>
									</div>
									<div style={{ display: "inline-flex" }}>
										<div className="emptyHeadChild">4-path wall after electrical</div>
										<div className="submittedChild">November 7th 2019</div>
										<div className="workDateChild"> 11/7/2018</div>
										<div className="statusChild"><span class="dot"> </span> Approved</div>
									</div>
									<div style={{ display: "inline-flex" }}>
										<div className="emptyHeadChild">1-Replace electrical boxes</div>
										<div className="submittedChild">November 7th 2019</div>
										<div className="workDateChild"> 11/7/2018</div>
										<div className="statusChild"><span class="dot"> </span> Approved</div>
									</div>
									<div style={{ display: "inline-flex" }}>
										<div className="emptyHeadChild">5-Right corner Adjustment</div>
										<div className="submittedChild">November 7th 2019</div>
										<div className="workDateChild"> 11/7/2018</div>
										<div className="statusChild"><span class="dot"> </span> Approved</div>
									</div>
								</div>

								<div className="ticketBody">
									<h4 style={{ margin: "0px 0px 10px 0px", padding: '7px 7px 7px 30px', backgroundColor: "#3371EB", color: "white", width: "200px", borderRadius: "5px" }}> 249 5th Avenue</h4>
									<div style={{ display: "inline-flex" }}>
										<div className="emptyHeadChild">4-path wall after electrical</div>
										<div className="submittedChild">November 7th 2019</div>
										<div className="workDateChild"> 11/7/2018</div>
										<div className="statusChild"><span class="dot"> </span> Approved</div>
									</div>
									<div style={{ display: "inline-flex" }}>
										<div className="emptyHeadChild">1-Replace electrical boxes</div>
										<div className="submittedChild">November 7th 2019</div>
										<div className="workDateChild"> 11/7/2018</div>
										<div className="statusChild"><span class="dot"> </span> Approved</div>
									</div>
								</div>

								<div className="ticketBody">
									<h4 style={{ margin: "0px 0px 10px 0px", padding: '7px 7px 7px 30px', backgroundColor: "#3371EB", color: "white", width: "200px", borderRadius: "5px" }}> 24HR Fitness Scarsdale</h4>
									<div style={{ display: "inline-flex" }}>
										<div className="emptyHeadChild">4-path wall after electrical</div>
										<div className="submittedChild">November 7th 2019</div>
										<div className="workDateChild"> 11/7/2018</div>
										<div className="statusChild"><span class="dot"> </span> Approved</div>
									</div>
									<div style={{ display: "inline-flex" }}>
										<div className="emptyHeadChild">1-Replace electrical boxes</div>
										<div className="submittedChild">November 7th 2019</div>
										<div className="workDateChild"> 11/7/2018</div>
										<div className="statusChild">  <span class="dot"> </span> Approved</div>
									</div>
								</div>
								<div class="pagination">
									{/* <a href="#"> &laquo; PREVIOUS</a> */}
									<a class="active" href="#">1</a>
									<a  href="#">2</a>
									<a href="#">3</a>
									<a href="#">4</a>
									<a href="#">5</a>
									<a href="#">6</a>
									<a href="#">NEXT &raquo;</a>
								</div>
							</div>
						</div>
					</div>
					<div className="ticketRightSidebar">
						<div className="searchBarContainer">
							<input className="searchBar" value="Search" />
							<Avatar round={true} size={44} color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name="Trac Flow" />
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