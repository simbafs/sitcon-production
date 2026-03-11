import bg from './主視覺.png'
import final from './final.png'
import logo from './Logo.png'
import title from './title.png'
import circle from './金_圓.png'
import star from './銅_星.png'

import lines2 from './線條.png'
import lines1 from './線條組合.png'

export function ThemePage() {
	return (
		<div className="relative w-[1920px] h-[1080px] overflow-hidden">
			<img
				src={final}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
				}}
			/>
			{/* 底圖 */}
			<img
				src={bg}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
				}}
			/>

			{/* lines */}

			<img
				src={lines2}
				style={{
					position: 'absolute',
					scale: 0.7,
					top: -575,
					left: 96,
				}}
			/>

			<img
				src={lines1}
				style={{
					position: 'absolute',
					scale: 1.5,
					top: -182,
					left: 0,
				}}
			/>

			{/* logo */}
			<img
				src={logo}
				style={{
					position: 'absolute',
					right: -780,
					scale: 0.3,
					top: -1269,
				}}
			/>

			<img
				src={logo}
				style={{
					position: 'absolute',
					scale: 0.4,
					left: -812,
					top: -126,
				}}
			/>

			{/* star */}
			<img
				src={star}
				style={{
					position: 'absolute',
					scale: 0.25,
					top: 355,
					left: 156,
				}}
			/>

			{/* circle */}
			<img
				src={circle}
				style={{
					position: 'absolute',
					scale: 0.25,
					top: 219,
					left: 742,
				}}
			/>

			{/* 大字 */}
			<img
				src={title}
				style={{
					position: 'absolute',
					top: -62,
					scale: 0.9,
				}}
			/>
		</div>
	)
}
