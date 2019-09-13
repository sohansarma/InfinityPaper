import React from "react";
import Dashboard from './components/dashboard/dashboard.component'
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import "./styles.css";
import 'antd/dist/antd.css';
import Routes from './components/routes/routes'


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
				<Routes />
	</BrowserRouter>
, rootElement);
