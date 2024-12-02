'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 w-full h-24 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-primary text-primary-foreground shadow-lg'
					: 'bg-white/90 text-foreground'
			}`}>
			<div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
				{/* Logo */}
				<div className="flex items-center space-x-4 ">
					<Image
						src="/dessin.svg"
						alt="Logo de la Lyre de Limoux"
						width={100}
						height={100}
						priority={true}
						quality={100}
					/>
					<h1 className="text-lg font-semibold">LYRE DE LIMOUX</h1>
				</div>

				{/* Navigation */}
				<nav className="flex md:hidden space-x-6">
					<Link
						href="#"
						className="hover:underline hover:underline-offset-4 transition-colors">
						Accueil
					</Link>
					<Link
						href="#"
						className="hover:underline hover:underline-offset-4 transition-colors">
						Agenda
					</Link>
					<Link
						href="#"
						className="hover:underline hover:underline-offset-4 transition-colors">
						Boutique
					</Link>
					<Link
						href="#"
						className="hover:underline hover:underline-offset-4 transition-colors">
						Histoire
					</Link>
				</nav>

				{/* Hamburger Menu */}
				<button
					className="hidden md:block p-2 rounded bg-primary text-primary-foreground"
					aria-label="Open Menu">
					<span className="block w-6 h-0.5 bg-current mb-1"></span>
					<span className="block w-6 h-0.5 bg-current mb-1"></span>
					<span className="block w-6 h-0.5 bg-current"></span>
				</button>
			</div>
		</header>
	);
}
