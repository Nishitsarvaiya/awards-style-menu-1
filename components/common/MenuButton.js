import { useContext } from 'react';
import { NavContext } from '../../context/NavContext';

const MenuButton = () => {
	const { isOpen, setIsOpen } = useContext(NavContext);
	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<div className='menu-btn-wrapper'>
			<button className={isOpen ? 'menu-btn open' : 'menu-btn'} onClick={toggleMenu}></button>
		</div>
	);
};

export default MenuButton;
