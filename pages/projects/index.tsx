import Card from '@/components/Card';
import { projects } from '@/data/projects';
import Head from 'next/head';

const Projects = () => {
	return (
		<>
			<Head>
				<title>Projects - Dante Huillca Duran</title>
			</Head>
			<div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
				<div className='space-y-2 pt-6 pb-8 md:space-y-5'>
					<h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
						Projects
					</h1>
				</div>
				<div className='container py-12'>
					<div className='-m-4 flex flex-wrap'>
						{projects.map(({ slug, title, description, banner }) => (
							<Card
								key={slug}
								title={title}
								description={description}
								banner={banner}
								href={`/projects/${slug}`}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
