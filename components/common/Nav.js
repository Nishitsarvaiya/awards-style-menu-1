import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';
import { NavContext } from '../../context/NavContext';

const Nav = () => {
	const { isOpen } = useContext(NavContext);
	const listRef = useRef(null);
	const groupRef = useRef(null);

	useEffect(() => {
		const controller = listRef.current;
		const group = groupRef.current;

		const onMouseMove = (e) => {
			const cursorX = e.clientX;
			const width = controller.offsetWidth;
			const currentX = (width / 6 - cursorX) / 4;
			group.style.transform = `translateX(${currentX}px)`;
		};

		const onMouseLeave = (e) => {
			group.style.transform = `none`;
		};

		controller.addEventListener('mousemove', onMouseMove);
		controller.addEventListener('mouseleave', onMouseLeave);

		return () => {
			controller.removeEventListener('mousemove', null);
			controller.removeEventListener('mouseleave', null);
		};
	}, []);

	return (
		<nav className={isOpen ? 'nav open' : 'nav'}>
			<div className='nav-wrapper'>
				<div ref={listRef}>
					<div className='nav-group' ref={groupRef}>
						<Link href='/'>
							<div className='nav-link'>
								<h3 className='nav-link-label'>Home</h3>
								<div className='nav-link-image'>
									<Image
										src='https://images.unsplash.com/photo-1666892939134-8b3242502d98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
										alt=''
										fill
										style={{ objectFit: 'cover' }}
									/>
								</div>
							</div>
						</Link>
						<Link href='/'>
							<div className='nav-link'>
								<h3 className='nav-link-label'>About</h3>
								<div className='nav-link-image'>
									<Image
										src='https://images.unsplash.com/photo-1666720191400-0b9900930ba7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
										alt=''
										fill
										style={{ objectFit: 'cover' }}
									/>
								</div>
							</div>
						</Link>
						<Link href='/'>
							<div className='nav-link'>
								<h3 className='nav-link-label'>Work</h3>
								<div className='nav-link-image'>
									<Image
										src='https://images.unsplash.com/photo-1666845523875-a819efe78321?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=647&q=80'
										alt=''
										fill
										style={{ objectFit: 'cover' }}
									/>
								</div>
							</div>
						</Link>
						<Link href='/'>
							<div className='nav-link'>
								<h3 className='nav-link-label'>Contact</h3>
								<div className='nav-link-image'>
									<Image
										src='https://images.unsplash.com/photo-1665871019567-04c9209f475d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
										alt=''
										fill
										style={{ objectFit: 'cover' }}
									/>
								</div>
							</div>
						</Link>
						<Link href='/'>
							<div className='nav-link'>
								<h3 className='nav-link-label'>Jobs</h3>
								<div className='nav-link-image'>
									<Image
										src='https://images.unsplash.com/photo-1666099278999-1c39e79bb164?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
										alt=''
										fill
										style={{ objectFit: 'cover' }}
									/>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
