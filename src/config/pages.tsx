import type { ReactNode } from 'react'
import Card from '../pages/card/Card'
import Timer from '../pages/Timer'
import WebSocketDebugPage from '../pages/WebSocketDebugPage'
import { ThemePage } from '../pages/theme'

export interface Page {
	name: string
	path: string
	element: ReactNode
}

export const pages: Page[] = [
	{ name: 'Timer', path: '/', element: <Timer /> },
	{ name: 'Card', path: '/card', element: <Card /> },
	{ name: 'Theme', path: '/theme', element: <ThemePage /> },
	{ name: 'WebSocket Debug', path: '/debug', element: <WebSocketDebugPage /> },
]
