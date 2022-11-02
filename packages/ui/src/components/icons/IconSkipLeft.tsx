import React from 'react'
import { IconProps } from './types'

type Props = IconProps & {
	color?: string
	size?: number | string
	width?: number | string
	height?: number | string
}

export const IconSkipLeft: React.FC<Props> = ({
	size,
	color,
	width,
	height,
}) => {
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
				d="M4.16667 17C4.811 17 5.33333 16.4777 5.33333 15.8333L5.33333 4.16667C5.33333 3.52234 4.811 3 4.16667 3C3.52234 3 3 3.52233 3 4.16667L3 15.8333C3 16.4777 3.52233 17 4.16667 17Z"
				fill={color}
			/>
			<path
				d="M7.51795 11.5292C6.45635 10.7861 6.45635 9.21388 7.51795 8.47076L14.0629 3.88931C15.3001 3.02329 17 3.90837 17 5.41855L17 14.5814C17 16.0916 15.3001 16.9767 14.0629 16.1107L7.51795 11.5292Z"
				fill={color}
			/>
		</svg>
	)
}
