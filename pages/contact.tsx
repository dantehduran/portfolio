import { RoughNotation } from 'react-rough-notation';
import { useRandomColorPair } from '@/hooks/useRandomColor';
const Contact = () => {
	const [emailcolor] = useRandomColorPair();
	return (
		<>
			<div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
				<div className='space-y-2 pt-6 pb-8 md:space-y-5'>
					<h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
						Contact
					</h1>
				</div>
				<div className='pt-16'>
					Do you have a project in mind? Want to hire me? Feel free to send a
					email at{' '}
					<RoughNotation
						show
						type='underline'
						animationDelay={250}
						animationDuration={2000}
						strokeWidth={2}
						color={emailcolor}
					>
						dantehduran@gmail.com
					</RoughNotation>
				</div>
			</div>
		</>
	);
};

export default Contact;
