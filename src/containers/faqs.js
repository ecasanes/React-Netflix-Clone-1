import React from 'react'
import faqData from '../fixtures/faq.json';
import { Accordion } from '../components';
import { Item } from '../components/jumbotron/styles/jumbotron';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqData.map((item) => (
                <Accordion.Item key={Item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}
