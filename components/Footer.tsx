import { memo } from 'react';
import { SiGmail } from 'react-icons/si';
const Footer = () => {
	const year: number = new Date().getFullYear();

	return (
		<div className='mt-4 flex flex-col items-center py-8 font-light dark:text-white lg:py-8'>
			<div className='flex items-center justify-center gap-2'>
				<SiGmail className='h-5 w-5 text-red-500' />
				<span>dantehduran@gmail.com</span>
			</div>
			<span className='mt-2 text-xs font-light lg:mt-4'>
				&copy; {year} Dante Huillca Duran
			</span>
		</div>
	);
};

export default memo(Footer);
