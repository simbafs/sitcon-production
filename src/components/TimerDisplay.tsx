import { useRef } from 'react'
import { useDynamicTextSize } from '../hooks/useDynamicTextSize'
import type { TextShadow } from '../types'

interface TimerDisplayProps {
	text: string
	textShadow: TextShadow
}

export function TimerDisplay({ text, textShadow }: TimerDisplayProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	const { fontSize, elementRef } = useDynamicTextSize({
		text,
		containerRef,
	})

	const shadowStyle = textShadow.enabled
		? `${textShadow.offsetX}px ${textShadow.offsetY}px ${textShadow.blurRadius}px ${textShadow.color}`
		: 'none'

	return (
		<div
			ref={containerRef}
			className="text-[#E8E4DD] w-full h-full overflow-hidden flex items-center justify-center"
		>
			<h1
				ref={elementRef}
				className="font-kiwi-maru font-bold tabular-nums leading-none whitespace-nowrap text-center overflow-visible w-full max-h-screen text-ellipsis"
				style={{
					fontSize: `${fontSize}px`,
					textShadow: shadowStyle,
				}}
			>
				{text}
			</h1>
		</div>
	)
}
