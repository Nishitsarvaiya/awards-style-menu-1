import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import BaseImage from '../components/utils/BaseImage';
import { SmoothScrollProvider } from '../context/SmoothScrollProvider';
import unsplashUrls from '../lib/imageData';

export async function getStaticProps() {
	return {
		props: {},
	};
}

export default function Home() {
	const getRandomImagesList = () => unsplashUrls.sort(() => Math.random() - 0.5).slice(0, 6);

	return (
		<SmoothScrollProvider options={{ smooth: true, inertia: 0.6 }}>
			<div className='page' data-scroll-container>
				<Head>
					<title>Awwwards style Menu | Nishit Sarvaiya</title>
					<meta name='description' content='Curtain Menu built in Nextjs' />
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<section className='grid' data-scroll-section>
					<div className='grid-item'>
						<div className='grid-item-wrapper'>
							<div className='list' data-scroll data-scroll-speed='2' data-scroll-position='top'>
								{getRandomImagesList().map((url, idx) => (
									<div className='list-item' key={idx}>
										<Link href='/'>
											<div className='list-item-content'>
												<BaseImage src={url} alt='' priority={true} />
												<div className='title'>
													<h2>Hello World</h2>
												</div>
											</div>
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='grid-item'>
						<div className='grid-item-wrapper'>
							<div className='list' data-scroll data-scroll-speed='3' data-scroll-position='top'>
								{getRandomImagesList().map((url, idx) => (
									<div className='list-item' key={idx}>
										<Link href='/'>
											<div className='list-item-content'>
												<BaseImage src={url} alt='' priority={true} />
												<div className='title'>
													<h2>Hello World</h2>
												</div>
											</div>
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='grid-item'>
						<div className='grid-item-wrapper'>
							<div className='list' data-scroll data-scroll-speed='1' data-scroll-position='top'>
								{getRandomImagesList().map((url, idx) => (
									<div className='list-item' key={idx}>
										<Link href='/'>
											<div className='list-item-content'>
												<BaseImage src={url} alt='' priority={true} />
												<div className='title'>
													<h2>Hello World</h2>
												</div>
											</div>
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='grid-item'>
						<div className='grid-item-wrapper'>
							<div className='list' data-scroll data-scroll-speed='2' data-scroll-position='top'>
								{getRandomImagesList().map((url, idx) => (
									<div className='list-item' key={idx}>
										<Link href='/'>
											<div className='list-item-content'>
												<BaseImage src={url} alt='' priority={true} />
												<div className='title'>
													<h2>Hello World</h2>
												</div>
											</div>
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</div>
		</SmoothScrollProvider>
	);
}
