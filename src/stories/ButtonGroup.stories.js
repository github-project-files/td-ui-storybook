import React from 'react'

import { ButtonGroup } from '../components/button-group/ButtonGroup'

export default {
    title: 'Example/ButtonGroup',
    component: ButtonGroup,
    argTypes: {
        backgroundColor: { control: "color" }
    }
}

const Template = args => {
    const printButtonLabel = event => {
        console.log(event.target.name)
        //do some stuff here
    }
    return (
        <div className='App'>
            <ButtonGroup {...args}
                buttons={['All', 'Open', 'Closed']}
                doSomethingAfterClick={printButtonLabel}
            />
        </div>
    )
}

export const Small = Template.bind({})
Small.args = {
    size: "small",
}
export const Medium = Template.bind({})
Medium.args = {
    size: "medium",
}

export const Large = Template.bind({})
Large.args = {
    size: "large",
}
