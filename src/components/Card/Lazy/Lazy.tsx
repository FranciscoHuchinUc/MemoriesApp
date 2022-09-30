import React, { Fragment } from 'react'


export interface LazyInterface { }

const Lazy: React.FC<LazyInterface> = () => {
	return (
		<Fragment>
			<section className="bg-white border rounded-md w-full h-[410px] overflow-hidden shadow-xl">
				<div className="animate-pulse">
					<header className="bg-gray-200 flex items-center w-full h-[300px] overflow-hidden"></header>
					<footer className="py-2 px-1">
						<div className="space-y-3">
							<div className="h-2 bg-gray-200 rounded"></div>
							<div className="h-2 bg-gray-200 rounded"></div>
							<div className="h-2 bg-gray-200 rounded"></div>
						</div>
					</footer>
				</div>
			</section>
		</Fragment>
	)
}

export default Lazy;

