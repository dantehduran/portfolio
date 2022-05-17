import { projects } from '@/data/projects';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { AiOutlineLink } from 'react-icons/ai';

export async function getStaticPaths() {
	return {
		paths: projects.map(({ slug }) => ({ params: { slug } })),
		fallback: false,
	};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const project = projects.find(project => project.slug === params?.slug);

	return {
		props: {
			project,
		},
	};
};

const Project = ({
	project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { title, description, shortDescription, stack, repository } = project;

	return (
		<>
			<Head>
				<title>{title} - Dante Huillca Duran</title>
				<meta name='description' content={shortDescription || description} />
			</Head>
			<h1 className='lg:text-5x lg:text-5x mb-4 text-3xl font-bold dark:text-white'>
				{title}
			</h1>
			<p className='mb-4 font-light'>{description}</p>
			<h2 className='mb-4 text-2xl font-semibold dark:text-white'>Stack</h2>
			{stack.map((stackName: string, index: number) => (
				<span
					key={index}
					className='mr-2 mb-2 rounded-sm bg-gray-600 px-2 py-1 text-xs font-medium text-white'
				>
					{stackName}
				</span>
			))}
			{repository && (
				<div className='flex'>
					<a
						href={repository}
						className='mt-4 mr-2 flex items-center rounded-sm  px-2 py-1 text-xs font-medium dark:text-white'
					>
						<AiOutlineLink className='mr-1' size={15} />
						repository
					</a>
				</div>
			)}
		</>
	);
};

export default Project;
