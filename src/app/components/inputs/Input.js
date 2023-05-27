"use client";
import React from "react";

const Input = ({ id, label, type = "text", disabled, required, register, errors }) => {
	return (
		<div className="relative w-full">
			<input
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder=" "
				type={type}
				className={`peer w-full rounded-md border-2 bg-white p-4 pt-6 font-light outline-none transition disabled:cursor-not-allowed disabled:opacity-70 ${
					errors[id] ? "border-rose-500" : " border-neutral-300"
				} ${errors[id] ? "focus:border-rose-500" : " focus:border-black"}`}
			/>
			<label
				className={`text-md absolute left-4 top-5 z-10 origin-[0] -translate-y-3 transform duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 ${
					errors[id] ? "text-rose-500" : "text-zinc-400"
				}`}
			>
				{label}
			</label>
		</div>
	);
};

export default Input;
