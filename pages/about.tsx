import { useRandomColorPair } from '@/hooks/useRandomColor';
import Image from 'next/image';
import { RoughNotation } from 'react-rough-notation';

const About = () => {
	const [resumeColor] = useRandomColorPair();
	return (
		<>
			<div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
				<div className='space-y-2 pt-6 pb-8 md:space-y-5'>
					<h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
						About
					</h1>
				</div>
				<div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
					<div className='flex flex-col items-center space-x-2 pt-8'>
						<Image
							src='/profile.svg'
							alt='avatar'
							width='192px'
							height='192px'
							className='h-48 w-48 rounded-full'
						/>
						<h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
							Dante Huillca Duran
						</h3>
						<div className='font-medium text-gray-500 dark:text-gray-400'>
							Software Engineer
						</div>
					</div>

					<div className='prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sunt
						cum commodi corrupti. Voluptatem ut fugit modi voluptates. Dolorem
						ipsa a iste repellat earum enim ad excepturi inventore voluptatem
						molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Odit in vel vero eum placeat dolor id blanditiis ipsum soluta
						facilis. Commodi illum blanditiis repudiandae voluptatem odio nobis
						quasi amet inventore!
						<div className='mt-8'>
							<a
								className='!font-normal !text-black !no-underline dark:!text-white'
								href='/about'
								target='_blank'
								rel='noreferrer'
							>
								<RoughNotation
									show
									type='box'
									animationDelay={250}
									animationDuration={2000}
									strokeWidth={2}
									color={resumeColor}
								>
									Resume
								</RoughNotation>
							</a>
							<h2 className='mt-8 mb-4 text-2xl font-semibold dark:text-white'>
								Skills
							</h2>
							<p className='text-gray-600'>stacks</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
