import headerNavLinks from '@/data/headerNavLinks';
import Link from '@/components/Link';
import { ReactNode } from 'react';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';

interface Props {
	children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
	return (
		<div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
			<div className='flex h-screen flex-col justify-between'>
				<header className='flex items-center justify-end py-8'>
					<div className='flex items-center text-base leading-5'>
						<div className='hidden sm:block'>
							{headerNavLinks.map(link => (
								<Link
									key={link.title}
									href={link.href}
									className='p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4'
								>
									{link.title}
								</Link>
							))}
						</div>
						<ThemeSwitch />
						<MobileNav />
					</div>
				</header>
				<main className='mb-auto'>{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default LayoutWrapper;
