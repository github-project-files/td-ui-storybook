import React from 'react'
import Accordion from '../components/accordion/Accordion'
import CheckBox from '../components/checkbox/CheckBox'
import { action } from "@storybook/addon-actions";

export default {
    title: 'Example/Accordion',
    component: Accordion
}

export const Default = () => (
    <>
        <Accordion title={<span>Accordion 1</span>}>content</Accordion>
        <Accordion title='Accordion 2'>content</Accordion>
        <Accordion title='Accordion 3' bodyMaxHeight='100vh'>
            content
        </Accordion>
    </>
)

export const AccordionWithCheckbox = () => (
    <>
        <Accordion title={<CheckBox checkBoxLabel="Accordion 1" onChange={action("Checkbox clicked")} />}>content</Accordion>
        <Accordion title={<CheckBox checkBoxLabel="Accordion 2" onChange={action("Checkbox clicked")} />}>content</Accordion>
        <Accordion title={<CheckBox checkBoxLabel="Accordion 3" onChange={action("Checkbox clicked")} />}>
            content
        </Accordion>
    </>
)
