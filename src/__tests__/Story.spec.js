import React from 'react'
import { Story } from '../components/Story';
import {render, cleanup, waitForElement } from '@testing-library/react';
import { singularStory } from '../fixtures';
import { getStory } from '../services/api';

beforeEach(() => {
    cleanup();
    jest.resetAllMocks();
});

jest.mock('../services/api', () => ({
    getStory: jest.fn(),
}));

test('renders the story component with content', async() => {
    getStory.mockImplementation(() => Promise.resolve(singularStory));

    const { getByText, getByTestId } = render( <Story storyId="1" />);

    await waitForElement(() => [
        expect(getByTestId('story')).toBeTruthy(),
        expect(getByText('My First Story')).toBeTruthy(),
        expect(getByTestId('story-by').textContent).toEqual('By: Tabish Khan'),
    ]);
});