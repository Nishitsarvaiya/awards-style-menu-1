import '../styles/app.scss';
import Layout from '../components/common/Layout';
import NavContextProvider from '../context/NavContext';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }) {
	return (
		<NavContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</NavContextProvider>
	);
}

export default MyApp;
