import "./App.css";
import Card from "./pages/Card";
// import Home from "./pages/Home";
import Couple from "./pages/Couple";
import Event from "./pages/Event";
import Greeting from "./pages/Greeting";
import {
	Routes,
	Route,
	BrowserRouter,
	useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
	// let [searchParams, setSearchParams] = useSearchParams();
	// const to = searchParams.get("to");
	// console.log(to);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Pages />} />
			</Routes>
		</BrowserRouter>
	);
}

const Pages = () => {
	let [searchParams, setSearchParams] = useSearchParams();
	const [data, setData] = useState([]);
	const submitData = (comment) => {
		setData([
			...data,
			{
				id: (Math.random() + 1).toString(36).substring(7),
				name: to,
				comment,
			},
		]);
	};
	const to = searchParams.get("to");
	useEffect(() => {
		console.log(data);
	}, [to, data]);
	return (
		<div className="min-h-screen overflow-x-auto bg-invitation bg-fixed bg-contain overflow-auto bg-center">
			<Card to={to} />
			{/* <Home /> */}
			<Couple />
			<Event />
			<Greeting submitData={submitData} data={data} to={to} />
		</div>
	);
};

export default App;
