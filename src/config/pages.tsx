import type { ReactNode } from 'react'
import { IndexPage } from '../pages'
import Card from '../pages/card/Card'
import { ThemePage } from '../pages/theme'
import Timer from '../pages/Timer'
import WebSocketDebugPage from '../pages/WebSocketDebugPage'

export interface Page {
	name: string
	path: string
	hash?: boolean
	element?: ReactNode
	description: string
}

export const pages: Page[] = [
	{ name: 'Home', hash: true, path: '/', element: <IndexPage />, description: '就是首頁' },
	{
		name: 'Timer',
		path: '/timer',
		hash: true,
		element: <Timer />,
		description: 'Ontime 的小計時器，可選 aux 1~3',
	},
	{
		name: 'Card',
		path: '/card',
		hash: true,
		element: <Card />,
		description: '資訊字卡',
	},
	{
		name: 'Theme',
		path: '/theme',
		hash: true,
		element: <ThemePage />,
		description: '會動的主視覺',
	},
	{
		name: 'Ontime Config',
		path: '/sitcon2026.json',
		description: 'Ontime 的 config，寫好了今年的議程。在 Ontime 設定 > Project > Manage Project > Import 匯入',
	},
	{
		name: 'WebSocket Debug',
		path: '/debug',
		hash: true,
		element: <WebSocketDebugPage />,
		description: '你用不到，debugger',
	},
]
