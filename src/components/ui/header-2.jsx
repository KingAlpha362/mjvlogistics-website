import React from 'react';
import { Button, buttonVariants } from './button';
import { cn } from '../../lib/utils';
import { MenuToggleIcon } from './menu-toggle-icon';
import { useScroll } from './use-scroll';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{ label: 'About', href: '#about' },
		{ label: 'Courier services', href: '#services' },
		{ label: 'Team', href: '#leadership' },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'fixed top-0 z-50 mx-auto w-full border-b border-transparent md:transition-all md:ease-out left-0 right-0',
				{
					'bg-white/95 supports-[backdrop-filter]:bg-white/80 border-slate-200 backdrop-blur-lg md:top-4 md:max-w-6xl md:rounded-full md:border md:shadow-md':
						scrolled && !open,
					'bg-white/90': open,
                    'bg-transparent': !scrolled && !open,
				},
			)}
		>
			<nav
				className={cn(
					'flex h-16 w-full items-center justify-between px-page md:h-20 md:transition-all md:ease-out mx-auto max-w-page',
					{
						'md:h-16 px-6 md:px-8': scrolled,
					},
				)}
			>
				<a href="#home" className="shrink-0 flex items-center">
                   <img src="images-mjv/mjv_logistics-logo.png" alt="MJV Courier" className="h-8 w-auto md:h-12 transition-all duration-300" />
                </a>
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link, i) => (
						<a key={i} className={buttonVariants({ variant: 'ghost' }) + ' font-semibold text-courier-ink'} href={link.href}>
							{link.label}
						</a>
					))}
					<Button asChild className="ml-2 rounded-full px-6">
                       <a href="#contact">Book delivery</a>
                    </Button>
				</div>
				<Button size="icon" variant="ghost" onClick={() => setOpen(!open)} className="md:hidden">
					<MenuToggleIcon open={open} className="size-6 text-courier-ink" duration={300} />
				</Button>
			</nav>

			<div
				className={cn(
					'bg-white/95 fixed top-20 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y border-slate-200 md:hidden backdrop-blur-md',
					open ? 'block' : 'hidden',
				)}
			>
				<div
					data-slot={open ? 'open' : 'closed'}
					className={cn(
						'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
						'flex h-full w-full flex-col justify-between gap-y-2 p-6',
					)}
				>
					<div className="grid gap-y-4">
						{links.map((link) => (
							<a
								key={link.label}
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start text-lg font-semibold',
								})}
								href={link.href}
                                onClick={() => setOpen(false)}
							>
								{link.label}
							</a>
						))}
					</div>
					<div className="flex flex-col gap-4 mt-auto mb-10">
						<Button className="w-full h-12 text-lg rounded-full" asChild>
                            <a href="#contact" onClick={() => setOpen(false)}>Book delivery</a>
                        </Button>
					</div>
				</div>
			</div>
		</header>
	);
}
