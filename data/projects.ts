export interface Project {
	title: string;
	slug: string;
	website: string;
	banner: string;
	description: string;
	shortDescription?: string;
	repository: string | null;
	stack: string[];
	screenshot: string;
}

export const projects: Project[] = [
	{
		title: 'Store Control',
		slug: 'store-control',
		website: 'https://store-control.vercel.app/',
		banner: '/banners/store-control.png',
		description: `The web app is called "Store Control" and it is designed to help businesses or organizations keep track of the items that are coming in and going out of their premises. The app allows users to create an account and log in securely, ensuring that only authorized personnel can access the system.
		
		Once logged in, users can create categories of items, such as "office supplies," "equipment," or "merchandise." They can also create individual items within each category, specifying a name, description, quantity, and other relevant details. Users can then mark items as "in" when they are received or "out" when they are issued or taken away.

		The backend is built with NestJS, a powerful and scalable framework for building server-side applications in Node.js. It provides a secure API for communicating with the front-end interface and managing the data stored in a database.
		`,
		shortDescription:
			'The web app is called "Store Control" and it is designed to help businesses or organizations keep track of the items that are coming in and going out of their premises.',
		repository: 'https://github.com/dantehduran/front-store-control',
		stack: ['React', 'Next.js', 'NestJS', 'TypeScript', 'TailwindCSS'],
		screenshot: '/banners/store-control.png',
	},
	{
		title: 'Restaurant Point of Sale',
		slug: 'restaurantpos',
		banner: '/banners/respos.png',
		website: 'https://restaurant-pos-tau.vercel.app/',
		description: `A Restaurant POS is designed to help restaurants manage their orders, tables, and menus with ease. The app provides a user-friendly interface that can be used by both staff and customers.

			When a customer enters the restaurant, the staff can use the app to assign a table to the customer. Each table is represented on the app as an individual entity, and the staff can easily manage orders and bills for each table.
			
			The app also provides a detailed menu that lists all the dishes available in the restaurant. The menu can be customized to include images, descriptions, and prices for each dish. Customers can browse the menu on their mobile devices or tablets, and place orders directly from the app.
					
			The app provides real-time updates of the orders and tables, ensuring that the staff can quickly respond to any changes or requests. 
			
			Overall, the Restaurant POS web app provides a powerful and flexible solution for managing orders, tables, and menus in a restaurant setting. It streamlines the process of taking orders, ensuring that the staff can focus on providing excellent service to their customers.`,
		shortDescription: 'Ready to deploy restaurant POS',
		repository: 'https://github.com/dantehduran/restaurant-pos',
		stack: ['vue', 'nuxt', 'typescript', 'tailwindcss'],
		screenshot: '/banners/respos-cart.gif',
	},
	{
		title: 'TimeTracker',
		slug: 'timetracker',
		banner: '/banners/time.png',
		website: 'https://time-tracker-ebon.vercel.app/',
		description: `The web app is called "TimeTracker" and it is designed to help users manage their time more effectively, by tracking how much time they spend on different activities throughout the day. The app provides a user-friendly interface that can be used by anyone, regardless of their level of technical expertise.
	
		The app provides a interface that shows the user's time spent on each activity, both for the day and for the entire week and month. This allows users to see how much time they are devoting to each activity, and make adjustments to their schedule as needed.
		
		The app also allows users to set goals for each activity, such as spending a certain amount of time on studying or working each day.`,
		shortDescription: 'A simple time tracker.',
		repository: 'https://github.com/dantehduran/time-tracker',
		stack: ['vue', 'nuxt', 'typescript', 'tailwindcss'],
		screenshot: '/banners/time.png',
	},
	{
		title: 'Trello Clone',
		slug: 'trelloclone',
		banner: '/banners/trello.png',
		website: 'https://nuxt3-trello.vercel.app/',
		description:
			'A simple Trello clone with Vue, Nuxt, and TailwindCSS. Drag and drop functionality.',
		shortDescription: 'A simple Trello clone.',
		repository: 'https://github.com/dantehduran/nuxt3-trello',
		stack: ['vue', 'nuxt', 'typescript', 'tailwindcss'],
		screenshot: '/banners/trelloclone.gif',
	},
];
