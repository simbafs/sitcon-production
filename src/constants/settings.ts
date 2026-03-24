import type { CardSettings, TimerSettings } from '../types'

export const DEFAULT_WEBSOCKET_PATH = 'ws://localhost:4001/ws'

export const DEFAULT_TEXT_SHADOW = {
	enabled: true,
	offsetX: 0,
	offsetY: 0,
	blurRadius: 40,
	color: '#808080',
}

export const DEFAULT_TIMER_SETTINGS: TimerSettings = {
	showHours: false,
	websocketPath: DEFAULT_WEBSOCKET_PATH,
	textShadow: DEFAULT_TEXT_SHADOW,
	selectedTimer: 'auxtimer1',
}

export const DEFAULT_CARD_SETTINGS: CardSettings = {
	bg: false,
	forum: false,
	lightning: false,
	websocketPath: DEFAULT_WEBSOCKET_PATH,
}
