import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import userServices from "../api/userServices";

const UpdatePassword = () => {
	const userNameRef = useRef<HTMLInputElement>(null);
	const oldPasswordRef = useRef<HTMLInputElement>(null);
	const newPasswordRef = useRef<HTMLInputElement>(null);
	const [buttonText, setButtonText] = useState("Change Password");
	const [error, setError] = useState(false);
	const navigate = useNavigate();
	return (
		<div className="flex h-screen w-screen items-center justify-center bg-[#1c1c1c]">
			<div className="fixed -top-20 left-20 z-0 rotate-180 -scale-x-100 font-inter text-[150px] font-bold tracking-widest text-[#f1f1f1]">
				reflections
			</div>
			<div className="fixed -bottom-20 right-20 z-0 font-inter text-[150px] font-bold tracking-widest text-[#f1f1f1]">
				reflections
			</div>
			<div className="z-10 flex w-3/4 flex-col items-center justify-center sm:w-1/2 md:w-[45%] lg:w-1/4">
				<form
					name="updatepasswordform"
					onSubmit={(e) => {
						setButtonText("Loading...");
						e.preventDefault();
						userServices
							.put("/updatePassword", {
								userName: userNameRef.current?.value,
								oldPassword: oldPasswordRef.current?.value,
								newPassword: newPasswordRef.current?.value,
							})
							.then(() => {
								setButtonText("Change Password");
								navigate("/login");
							})
							.catch((err) => {
								console.log(err.response.data.message);
								setError(true);
								setButtonText("Change Password");
							});
					}}
				>
					<div className="mb-8 text-center font-serif text-xl font-bold tracking-tight text-white md:text-2xl lg:text-3xl">
						Update your password
					</div>

					<input
						type="text"
						className="text-md mb-2 w-full rounded-lg bg-[#2e2e2e] p-2 font-serif text-[#f0f8ff] focus:bg-[#2e2e2e] focus:outline-none"
						placeholder="Username"
						autoComplete="off"
						ref={userNameRef}
						required
						spellCheck={false}
					/>
					<input
						type="password"
						className="text-md mb-2 w-full rounded-lg bg-[#2e2e2e] p-2 font-serif text-[#f0f8ff] focus:bg-[#2e2e2e] focus:outline-none"
						placeholder="Old Password"
						autoComplete="off"
						ref={oldPasswordRef}
						required
						spellCheck={false}
					/>
					<input
						type="password"
						className="text-md w-full rounded-lg bg-[#2e2e2e] p-2 font-serif text-[#f0f8ff] focus:bg-[#2e2e2e] focus:outline-none"
						placeholder="New Password"
						autoComplete="off"
						ref={newPasswordRef}
						required
						spellCheck={false}
					/>
					<button
						className={`mt-6 w-full rounded-md bg-[#61a7ec] px-3 py-2 font-serif font-bold ${
							!error
								? "bg-[#61a7ec] text-black"
								: "bg-[#89375f] text-white"
						}`}
						type="submit"
					>
						{buttonText}
					</button>
				</form>
			</div>
		</div>
	);
};
export default UpdatePassword;
