import React from "react";

const Stats = () => {
	return (
		<section className='p-6 dark:bg-gray-800 dark:text-gray-100'>
			<div className='container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3'>
				<div className='flex flex-col justify-start m-2 lg:m-6'>
					<p className='text-4xl font-bold leading-none lg:text-6xl'>
						50+
					</p>
					<p className='text-sm sm:text-base'>Members</p>
				</div>
				<div className='flex flex-col justify-start m-2 lg:m-6'>
					<p className='text-4xl font-bold leading-none lg:text-6xl'>
						89K
					</p>
					<p className='text-sm sm:text-base'>Workshops</p>
				</div>
				<div className='flex flex-col justify-start m-2 lg:m-6'>
					<p className='text-4xl font-bold leading-none lg:text-6xl'>
						3
					</p>
					<p className='text-sm sm:text-base'>Years Active</p>
				</div>
				<div className='flex flex-col justify-start m-2 lg:m-6'>
					<p className='text-4xl font-bold leading-none lg:text-6xl'>
						8
					</p>
					<p className='text-sm sm:text-base'>Alumni</p>
				</div>
				<div className='flex flex-col justify-start m-2 lg:m-6'>
					<p className='text-4xl font-bold leading-none lg:text-6xl'>
						22
					</p>
					<p className='text-sm sm:text-base'>Socials</p>
				</div>
				<div className='flex flex-col justify-start m-2 lg:m-6'>
					<p className='text-4xl font-bold leading-none lg:text-6xl'>
						10+
					</p>
					<p className='text-sm sm:text-base'>Projects</p>
				</div>
			</div>
		</section>
	);
};

export default Stats;
