import { useState } from "react";
import styles from "../styles/background.module.css";
import Navigator from "./Navigator";
import NotesCard from "./NotesCard";

const NotesPage = () => {
	const [fullScreen, setFullScreen] = useState(true);
	return (
		<div className={`flex items-center bg-[#161616]`}>
			<div
				className={`flex w-0 flex-col items-center ${
					fullScreen ? "" : "w-0 sm:w-1/4"
				}`}
			>
				<div className="w-4/5">
					<p
						className={`text-center font-inter text-3xl/[30px] font-extrabold tracking-tighter text-[#537EC5] opacity-0 sm:text-4xl/[40px] lg:text-5xl/[50px] ${
							fullScreen ? "" : "opacity-100"
						}`}
					>
						Journey through the Realm of Notes.
					</p>
				</div>
			</div>
			<div
				className={`relative flex h-screen w-full ${
					fullScreen ? "" : "w-full sm:w-3/4"
				} ${styles.bgi3} items-center justify-center`}
			>
				<div className="absolute left-0 top-0 h-full w-full border-l-4 border-stone-900"></div>
				<Navigator setFullScreen={setFullScreen} />
				<div className="z-10 flex h-5/6 w-11/12 items-center justify-center rounded-2xl bg-stone-600 text-center font-inter text-5xl/[46px] font-bold tracking-tighter text-white">
					<NotesCard />
				</div>
			</div>
		</div>
	);
};
export default NotesPage;
