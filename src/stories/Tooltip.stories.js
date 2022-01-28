import React from 'react'
import Tooltip from '../components/tooltip/Tooltip'

export default {
    title: 'Example/Tooltip',
    component: Tooltip
}

const Template = args => (
    <Tooltip content='Tooltip' direction='bottom' {...args}>
        <span>
            tooltip
        </span>
    </Tooltip>
    
)

export const customTooltip = Template.bind({})
customTooltip.args = {
    label: 'Tooltip'
}
