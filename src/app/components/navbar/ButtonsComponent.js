"use client";
import React from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const ButtonsComponent = () => {
	const registerModal = useRegisterModal();
	const router = useRouter();
	const tempUserData = {
		name: "ggtalagasir",
		email: "ggnasir6@gmail.com",
		password: "test12623",
	};

	const onSignIn = () => {
		signIn("credentials", {
			...tempUserData,
			redirect: false,
		}).then((callback) => {
			console.log(callback);
			if (callback?.ok) {
				console.log("LOGGED IN");
				router.refresh();
			}
			if (callback?.error) {
				console.log("THERES A ERROR " + callback.error);
			}
		});
	};
	return (
		<>
			<button className="border p-2" onClick={onSignIn}>
				LOGIN
			</button>
			<button className="border p-2" onClick={registerModal.onOpen}>
				Sign up
			</button>
		</>
	);
};

export default ButtonsComponent;
