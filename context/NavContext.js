import { createContext, useState } from 'react';

export const NavContext = createContext(null);

const NavContextProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return <NavContext.Provider value={{ isOpen, setIsOpen }}>{children}</NavContext.Provider>;
};

export default NavContextProvider;
