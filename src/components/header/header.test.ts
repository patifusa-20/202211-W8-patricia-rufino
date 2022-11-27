/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/dom';
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given "Header" component', () => {
    document.body.innerHTML = `<slot></slot>`;
    new Header('slot');
    const elements = [
        screen.getByRole('banner'), // <header />
        screen.getByRole('heading', { name: 'My Series' }), // <h1>
    ];
    describe.each(elements)(
        'When it is instantiate with a DOM selector',
        (element: HTMLElement) => {
            test(`Then ${element.tagName} should be render`, () => {
                expect(element).toBeInstanceOf(HTMLElement);
                expect(element).toBeInTheDocument();
            });
        }
    );
});
