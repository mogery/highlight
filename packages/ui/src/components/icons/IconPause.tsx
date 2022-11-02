import React from 'react'
import { IconProps } from './types'

type Props = IconProps & {
	color?: string
	size?: number | string
	width?: number | string
	height?: number | string
}

export const IconPause: React.FC<Props> = ({ size, color, width, height }) => {
	if (size) {
		width = size
		height = size
	}
	width = width ?? 20
	height = height ?? 20
	color = color ?? 'currentColor'
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 20 20`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 4C4 3.44772 4.44772 3 5 3H7C7.55228 3 8 3.44772 8 4V16C8 16.5523 7.55228 17 7 17H5C4.44772 17 4 16.5523 4 16V4Z"
				fill={color}
			/>
			<path
				d="M12 4C12 3.44772 12.4477 3 13 3H15C15.5523 3 16 3.44772 16 4V16C16 16.5523 15.5523 17 15 17H13C12.4477 17 12 16.5523 12 16V4Z"
				fill={color}
			/>
		</svg>
	)
}
