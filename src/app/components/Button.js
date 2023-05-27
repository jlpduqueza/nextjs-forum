"use client";
import React from "react";

const Button = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`
	relative w-full
	rounded-lg
	transition
	hover:opacity-80
	disabled:cursor-not-allowed
	disabled:opacity-0
	${outline ? "bg-white" : "bg-rose-500"}
	${outline ? "border-black" : "bg-rose-500"}
	${outline ? "text-black" : "text-white"}
	${small ? "py-1" : "py-3"}
	${small ? "text-sm" : "text-md"}
	${small ? "font-light" : "font-semibold"}
	${small ? "border-[1px]" : "border-2"}
	`}
		>
			{Icon && <Icon size={24} className="absolute left-4 top-3" />}
			{label}
		</button>
	);
};

export default Button;
