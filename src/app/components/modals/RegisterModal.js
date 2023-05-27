"use client";
import React, { useCallback, useState } from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";

const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: { name: "", email: "", password: "" } });

	const onSubmit = (data) => {
		setIsLoading(true);

		axios
			.post("/api/register", data)
			.then(() => {
				registerModal.onClose();
			})
			.catch((error) => {
				toast.error("Something went wrong.");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading title="Welcome to MedSurf Forum" subtitle={"Create an account!"} />
			<Input
				id="email"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
				label="Email"
			/>
			<Input
				id="name"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
				label="Name"
			/>
			<Input
				id="password"
				type="password"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
				label="Password"
			/>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Register"
			actionLabel={"Continue"}
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
		/>
	);
};

export default RegisterModal;
