import { pages } from '../config/pages'

export function IndexPage() {
	return (
		<div className="min-h-dvh text-zinc-900 p-8 md:p-16 max-w-5xl mx-auto">
			<header className="mb-16">
				<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-zinc-900">SITCON</h1>
				<p className="text-xl text-zinc-500 max-w-xl leading-relaxed">SITCON 2026 製播工具</p>
				<p className="text-xl text-zinc-500 max-w-xl leading-relaxed">
					這個主要是{' '}
					<a href="https://www.getontime.no/" className="text-black underline" target="_blank">
						Ontime
					</a>{' '}
					的前端畫面，你還需要知道 Ontime 網址。進入頁面後滑鼠放在右上角會出現設定畫面，在這裡填入 ontime 的
					websocket 網址。滑鼠放在左上角可以切頁面。
				</p>
			</header>
			<nav className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{pages.map(page => (
					<a
						key={page.path}
						href={`${page.hash ? '#' : ''}${page.path}`}
						className="group relative bg-white border border-zinc-200 rounded-2xl p-8 transition-all duration-200 hover:border-zinc-300 hover:shadow-lg"
					>
						<div className="relative z-10">
							<h2 className="text-4xl font-semibold text-zinc-900 mb-2">{page.name}</h2>
							<p className="text-zinc-500 text-xl leading-relaxed">{page.description}</p>
						</div>
					</a>
				))}
			</nav>
		</div>
	)
}
