import { useRandomColorPair } from '@/hooks/useRandomColor';
import Link from 'next/link';
import { memo } from 'react';
import { RoughNotation } from 'react-rough-notation';

const Banner = () => {
	const [aboutColor, contactColor] = useRandomColorPair();
	return (
		<div className='flex min-h-[80vh] flex-1 flex-col justify-center px-6 py-10 dark:text-white lg:min-h-[60vh] lg:px-10'>
			<h1 className='text-3xl font-bold dark:text-white lg:text-5xl'>
				Hi, I am Dante
			</h1>
			<p className='my-2 text-lg lg:my-4 lg:text-2xl'>Software Engineer</p>
			<p className='font-light lg:text-xl'>
				Read more
				<Link href='/about'>
					<a className='ml-2 mr-2 font-normal text-black'>
						<RoughNotation
							show
							type='highlight'
							animationDelay={250}
							animationDuration={2000}
							color={aboutColor}
						>
							about me
						</RoughNotation>
					</a>
				</Link>
				or
				<Link href='/contact'>
					<a className='ml-2 font-normal text-black'>
						<RoughNotation
							show
							type='highlight'
							animationDelay={250}
							animationDuration={2000}
							color={contactColor}
						>
							contact me
						</RoughNotation>
					</a>
				</Link>
			</p>
		</div>
	);
};

export default memo(Banner);
