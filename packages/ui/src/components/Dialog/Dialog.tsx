import * as Ariakit from '@ariakit/react'
import React from 'react'

type Props = React.PropsWithChildren & Ariakit.DialogProps

type DialogComponent = React.FC<Props> & {
	useStore: typeof Ariakit.useDialogStore
	Provider: typeof Ariakit.DialogProvider
}

export const Dialog: DialogComponent = ({ children, ...props }: Props) => {
	return <Ariakit.Dialog {...props}>{children}</Ariakit.Dialog>
}

Dialog.useStore = Ariakit.useDialogStore
Dialog.Provider = Ariakit.DialogProvider
