"use client";
import React from "react";
import { Provider } from "react-redux";
import Home from "@/components/Home";
import { defaultTheme } from "./theme";
import { ThemeProvider } from "styled-components";

const Page = () => {
	return <Home />;
};

export default Page;
