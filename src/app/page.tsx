"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
	const [code, setCode] = useState<string>();

	const router = useRouter();

	const handleSubmit = async () => {
		if (!code) {
			return;
		}
		const res = await fetch("/api/login", {
			method: "POST",
			body: JSON.stringify({
				code: code,
			}),
		});

		const succ = res.status;

		if (succ == 200) {
			router.push("/profile");
		}
	};

	return (
		<>
			<div className='w-full flex justify-center'>
				<div className='py-32 flex flex-col items-center'>
					<div className='text-3xl'>Please enter your roblox code below:</div>
					<input
						value={code}
						onChange={(e) => {
							setCode(e.target.value);
						}}
						className='text-black rounded w-3/4 my-5'
					/>
					<button
						onClick={handleSubmit}
						className='bg-blue-300 px-4 py-1 rounded border-blue-200 border-2'
					>
						Log in
					</button>
				</div>
			</div>
		</>
	);
}
