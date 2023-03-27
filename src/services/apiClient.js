import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://be-wedding.herokuapp.com",
});

export default apiClient;
