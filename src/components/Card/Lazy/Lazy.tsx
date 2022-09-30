import React, { Fragment } from 'react'


export interface LazyInterface { }

const Lazy: React.FC<LazyInterface> = () => {
	return (
		<Fragment>
			<section className="bg-white border rounded-md w-full h-[410px] overflow-hidden sm:w-[470px]">
				<div className="animate-pulse">
					<header className="bg-gray-200 flex items-center w-full h-[300px] overflow-hidden"></header>
					<footer className="flex flex-col justify-center gap-1 p-2  h-[110px]">
						<div className="h-2 bg-gray-200 rounded"></div>
						<div className="h-2 bg-gray-200 rounded mt-1"></div>
						<div className="h-2 w-20 bg-gray-200 rounded mt-4"></div>
					</footer>
				</div>
			</section>
		</Fragment>
	)
}

export default Lazy;

