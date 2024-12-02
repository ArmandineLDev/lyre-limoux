import Link from 'next/link';

export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<section
				className="relative h-[500px] flex items-center justify-center text-center bg-cover bg-center"
				style={{ backgroundImage: 'url(/lyre.png)' }}>
				<div className="absolute inset-0 bg-black/50"></div>
				{/* Overlay pour lisibilité */}
				<div className="relative z-10 text-white">
					<h2 className="text-3xl font-bold mb-4">
						Bienvenue à la Lyre Intercommunale du Limouxin
					</h2>
					<p className="text-lg mb-6">
						Un orchestre dynamique et passionné par la musique.
					</p>
					<button className="px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary-foreground hover:text-primary">
						Découvrir notre orchestre
					</button>
				</div>
			</section>

			{/* Présentation Section */}
			<section className="py-16 px-4">
				<h3 className="text-2xl font-bold mb-4 text-center">
					Qui sommes-nous ?
				</h3>
				<p className="max-w-2xl mx-auto text-center">
					La Lyre Intercommunale du Limouxin réunit des musiciens passionnés
					pour des concerts, des animations et des événements culturels.
					Rejoignez-nous pour partager notre passion pour la musique et enrichir
					la scène musicale locale.
				</p>
			</section>

			{/* Mot du Président */}
			<section className="py-16 px-4 bg-muted text-muted-foreground">
				<h3 className="text-2xl font-bold mb-4 text-center">
					Le mot du Président
				</h3>
				<p className="max-w-2xl mx-auto text-center italic mt-2">
					Une harmonie en bonne santé est une Lyre qui grossit et se redessine
					pour envisager l’avenir.
				</p>
				<p className="max-w-2xl mx-auto text-center italic mt-2">
					Au sein de la Lyre, la structure évolue régulièrement et les
					responsabilités aussi.
				</p>
				<p className="max-w-2xl mx-auto text-center italic mt-2">
					La Lyre, forte de 70 musiciens, dirigée par l’incontournable chef Guy
					ROBERT pour la partie musicale, est actuellement présidée et ce depuis
					2015 par Jacques SALASAR, lui-même entouré d’un Conseil
					d’Administration d’une vingtaine de membres actifs.
				</p>
				<p className="max-w-2xl mx-auto text-center italic mt-2">
					L’association « Lyre Intercommunale du Limouxin » comprend aussi le
					Big Band de Limoux, la Chorale Les Polissons et peut être bientôt de
					nouvelles formations.
				</p>
				<p className="max-w-2xl mx-auto text-center italic mt-2">
					Son concept est de pratiquer l’art musical, de poursuivre l’éducation
					musicale des jeunes musiciens sortant de l’école de musique du
					Limouxin, de promouvoir la musique à travers des concerts, animations
					et manifestations locales sur Limoux, les villages aux alentours et
					bien au-delà. La Lyre et la Chorale assurent également des
					manifestations et cérémonies officielles (défilés et commémorations).
				</p>
				<p className="max-w-2xl mx-auto text-center italic mt-2">
					Nous n’oublierons pas les bénévoles dévoués qui pour certains, ne
					taquinent jamais un instrument mais qui travaillent dans l’ombre toute
					l’année à la bonne marche de cette institution qu’est la Lyre et aux
					événements musicaux qu’elle a générés sur la ville depuis une
					quinzaine d’années, tels que le Limoux Brass Festival. Une petite
					armée de l’ombre qui ne rechigne jamais à digérer des tâches ingrates
					de la logistique pour que vive l’esprit de la musique en limouxin.
				</p>
				<p className="max-w-2xl mx-auto text-center italic mt-2">
					La Lyre Intercommunale du Limouxin est une association loi 1901.
				</p>
				<p className="max-w-2xl mx-auto text-center italic mt-2">
					Elle est également membre de la CMF (Confédération Musicale de
					France).
				</p>
				<p className="text-right mt-4">— Jacques SALASAR</p>
			</section>

			{/* Événements Section */}
			<section className="py-16 px-4 ">
				<h3 className="text-2xl font-bold mb-4 text-center">
					Prochains Événements
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="p-6 bg-card text-card-foreground rounded shadow hover:shadow-lg">
						<h4 className="text-lg font-semibold">Concert d'Été</h4>
						<p>Lieu : Place de la République</p>
						<p>Date : 15 Juin 2024</p>
					</div>
					<div className="p-6 bg-card text-card-foreground rounded shadow hover:shadow-lg">
						<h4 className="text-lg font-semibold">Animation au Marché</h4>
						<p>Lieu : Halle aux Grains</p>
						<p>Date : 22 Juin 2024</p>
					</div>
					<div className="p-6 bg-card text-card-foreground rounded shadow hover:shadow-lg">
						<h4 className="text-lg font-semibold">Fête de la Musique</h4>
						<p>Lieu : Centre Ville</p>
						<p>Date : 21 Juin 2024</p>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-16 px-4 text-center">
				<h3 className="text-2xl font-bold mb-4">Contactez-nous</h3>
				<p>
					Envoyez-nous un e-mail à{' '}
					<a
						href="mailto:contact@lyre-limouxin.fr"
						className="underline">
						contact@lyre-limouxin.fr
					</a>
				</p>
			</section>
		</>
	);
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
