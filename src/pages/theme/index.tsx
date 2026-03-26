import bg from './主視覺.png'
import logo from './Logo.png'
import title from './title.png'
import circle from './金_圓.png'
import star from './銅_星.png'

import lines2 from './線條.png'
import lines1 from './線條組合.png'

const floatKeyframes = `
  @keyframes title {
    0%, 100% { transform: translateY(20px)  }
    50% { transform: translateY(-20px)  }
  }

	@keyframes star {
		0%, 100% { transform: translateY(20px);  }
		50% { transform: translateY(100px); }
	}

	@keyframes circle {
		0%, 100% { transform: translateY(-20px);  }
		50% { transform: translateY(80px); }
	}

  @keyframes logo {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

export function ThemePage() {
	return (
		<div className="relative w-[1920px] h-[1080px] overflow-hidden">
			<style>{floatKeyframes}</style>
			{/* 底圖 */}
			<img
				src={bg}
				width={1920}
				height={1080}

				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '1920px',
					height: '1080px'
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
					scale: 0.3,
					right: -904,
					top: -1680,
					transformOrigin: '53% 65%',
					// animation: 'logo 20s linear infinite',
				}}
			/>

			<img
				src={logo}
				style={{
					position: 'absolute',
					scale: 0.4,
					left: -953,
					top: -539,
					transformOrigin: '53% 65%',
					transform: 'rotate(-10deg)',
					// animation: 'logo reverse 30s linear infinite',
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
					transformOrigin: '50% 50%',
					animation: 'star 5s ease-in-out infinite',
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
					animation: 'circle 6s ease-in-out infinite',
				}}
			/>

			{/* 大字 */}
			<img
				src={title}
				style={{
					position: 'absolute',
					// top: -62,
					scale: 0.9,
					animation: 'title 10s ease-in-out infinite',
				}}
			/>
		</div>
	)
}
