"use client";

import React from "react";
import Container from "../Container";
import ButtonsComponent from "./ButtonsComponent";
import Logo from "./Logo";
import Posts from "./Posts";
import Search from "./Search";

const Navbar = (props) => {
	console.log(props);

	return (
		<div className="fixed z-10 w-full bg-white shadow-sm">
			<div className="border-b-[1px] py-4">
				<Container>
					<div className="flex flex-row items-center justify-between gap-3 md:gap-0">
						<Logo />
						<Search />
						<ButtonsComponent />
					</div>
				</Container>
			</div>
			<Posts />
		</div>
	);
};

export default Navbar;
