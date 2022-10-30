import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const BaseImage = ({ src, alt, priority }) => {
	const imageRef = useRef(null);

	useEffect(() => {
		if (imageRef.current) {
			const image = imageRef.current.querySelector('img');

			let tl = gsap.timeline({
				// scrollTrigger: {
				// 	trigger: image,
				// 	markers: true,
				// },
			});

			tl.set(image, { autoAlpha: 1 });
			tl.fromTo(
				image,
				1.5,
				{
					xPercent: -100,
				},
				{
					xPercent: 0,
					ease: 'power3.out',
				}
			);
			tl.fromTo(
				image,
				1.5,
				{
					scale: 1.3,
				},
				{
					scale: 1,
					delay: -1.5,
					ease: 'power3.out',
				}
			);
		}
	}, []);

	return (
		<div className='base-image' ref={imageRef}>
			<Image src={src} alt={alt} fill priority={priority} style={{ objectFit: 'cover' }} />
		</div>
	);
};

export default BaseImage;
