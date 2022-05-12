import { memo } from 'react';

const Footer = () => {
	const year: number = new Date().getFullYear();

	return (
		<div className='mt-4 flex flex-col items-center py-8 font-light dark:text-white lg:py-8'>
			<span className='mt-4 text-xs font-light lg:mt-8'>
				&copy; {year} Dante Huillca Duran
			</span>
		</div>
	);
};

export default memo(Footer);
