
import axios from "axios";
import Config from "../Config/config";

const http = Config.env.requestType ? "https" : "http";


const onUserLogin = (email, password)  => {
	let body = {
		email: email,
		password: password
	}
	const postSignOInDetails = `${http}://${Config.env.beServerHost}:${Config.env.beServerPort}/${Config.env.enironment}/login`;

	return axios.post(postSignOInDetails,body);

}




const Api = {
	onUserLogin,
};

export default Api;