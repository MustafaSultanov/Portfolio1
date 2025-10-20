"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import foto from '../../public/assets/musa.jpg'

const ProfileShape = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event: any) => {
		const rect = event.target.getBoundingClientRect();
		setPosition({
			x: event.clientX - rect.left - rect.width / 2,
			y: event.clientY - rect.top - rect.height / 2,
		});
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className="container">
			<div className="right max-[1150px]:mb-6">
				<div
					className="shape relative w-[410px] h-[400px] 
          border-[3px] border-solid border-[rgb(239, 239, 244)] shadow-[0_0_10px_rgb(233, 230, 233)] 
          transition-all duration-1000 ease-in-out overflow-hidden
          max-[500px]:w-[300px] max-[500px]:h-[300px] 
          max-[400px]:w-[250px] max-[400px]:h-[250px] 
          max-[767px]:backdrop-filter-none max-[767px]:webkit-backdrop-filter-none max-[767px]:shadow-none"
					style={{
						transform: `translate(${position.x}px, ${position.y}px)`,
					}}>
					<Image
						src={foto}
						alt="Profile"
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProfileShape;