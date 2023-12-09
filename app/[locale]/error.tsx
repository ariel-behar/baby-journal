"use client"
import Image from 'next/image'
import { useTranslations } from 'next-intl';

import LinkButton from '@/components/Buttons/LinkButton';
import IconHome from '@/components/Icons/IconHome';
import IconRefresh from '@/components/Icons/IconRefresh';

interface Props {
    error: Error;
    reset: () => void;
}

function Error({
	error,
	reset
}:Props) {
	const t = useTranslations('NotFoundPage')

	return (
		<section className="flex-grow section-height flex flex-col justify-center items-center px-5">
			<div className='flex flex-col gap-7 min-w-full md:min-w-[800px]'>
				<h3 className="text-2xl md:text-4xl text-center">ERROR: <i>{error.message}</i></h3>

				<div className="flex flex-row gap-y-5 justify-around items-center w-full">

					<button className='btn btn-secondary btn-md md:btn-lg' onClick={reset}>
						Reset
						<IconRefresh />
					</button>

					<figure className="relative w-[200px] h-[150px] md:h-[300px] flex flex-row items-center">
						<Image src="/img/baby-crying.png" alt="Not Found" priority fill className="object-contain" sizes="20vw" />
					</figure>

					<LinkButton href='/' className="btn-md md:btn-lg btn-primary">{t('go-home')} <IconHome /></LinkButton>
				</div>
			</div>
		</section>
	)
}

export default Error