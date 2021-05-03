import ActionPayload from 'interfaces/ActionPayload'
import LooseObject from 'interfaces/LooseObject'
import React from 'react'

export const DefaultStateContext = React.createContext<LooseObject>({})
export const DefaultDispatchContext = React.createContext<React.Dispatch<ActionPayload>>(() => { })