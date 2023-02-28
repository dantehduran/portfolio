import { useRandomColorPair } from '@/hooks/useRandomColor';
import Image from 'next/image';
import { RoughNotation } from 'react-rough-notation';

const skills = [
	'React',
	'Next JS',
	'TypeScript',
	'Tailwind CSS',
	'JavaScript',
	'Node JS',
	'Express',
	'Nest JS',
	'Vue',
	'SvelteKit',
	'Mongo DB',
	'Firebase',
];

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
						<p>
							A software engineer who values learning and growing with people,
							teams, and technologies.
						</p>
						<p>
							I am a person used to solving problems and unforeseen events
							autonomously, without need for constant supervision. I am a
							programmer with a taste for new technologies. Within my
							experience,
						</p>
						<p>
							I have developed different apps and web systems of different types
							of clients occupying the position of front end and back end
							developer.
						</p>
						<div className='mt-8'>
							<a
								className='!font-normal !text-black !no-underline dark:!text-white'
								href='https://drive.google.com/uc?export=download&id=1N3vcnI0H9xMBOwGy2wUQIDIVnbYG9EA8'
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
							<div className='flex flex-row flex-wrap gap-2'>
								{skills.map((skillName: string, index: number) => (
									<span
										key={index}
										className='mr-2 mb-2 rounded-sm bg-gray-600 px-2 py-1 text-xs font-medium text-white'
									>
										{skillName}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
