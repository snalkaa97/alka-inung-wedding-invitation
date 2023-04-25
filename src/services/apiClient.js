import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://be-invitation.onrender.com",
});

export default apiClient;
