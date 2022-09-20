import React, { Fragment } from 'react'


export interface LazyInterface { }

const Lazy: React.FC<LazyInterface> = () => {
	return (
		<Fragment>
			<section className="bg-white border rounded-md w-[340px] h-[240px] overflow-hidden shadow-xl">
				<div className="animate-pulse">
					<header className="bg-gray-200 flex items-center w-full h-[180px] overflow-hidden"></header>
					<footer className="flex-1 space-y-6 py-2 px-1">
						<div className="space-y-3">
							<div className="grid grid-cols-3 gap-4">
								<div className="h-2 bg-gray-200 rounded col-span-2"></div>
								<div className="h-2 bg-gray-200 rounded col-span-1"></div>
							</div>
							<div className="h-2 bg-gray-200 rounded"></div>
						</div>
					</footer>
				</div>
			</section>
		</Fragment>
	)
}

export default Lazy;

