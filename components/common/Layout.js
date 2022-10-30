import { useContext } from 'react';
import { NavContext } from '../../context/NavContext';
import MenuButton from './MenuButton';
import Nav from './Nav';

const Layout = ({ children }) => {
	const { isOpen } = useContext(NavContext);

	return (
		<div className='layout'>
			<div className={isOpen ? 'page-wrapper nav-open' : 'page-wrapper'}>{children}</div>
			<Nav />
			<MenuButton />
		</div>
	);
};

export default Layout;
