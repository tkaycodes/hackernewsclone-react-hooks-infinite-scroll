import axios from 'axios';
import {
    getStoryIds, 
    getStory, 
    newStoriesUrl, 
    storyUrl
} from '../services/api';
import {singularStory, storyIds, emptySingularStory} from '../fixtures';

jest.mock('axios');

describe('Hackernews api', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('getStory functionality', () => {
    it ('requests and gets a story from the hackernews api', async () => {
        axios.get.mockImplementation(() => 
            Promise.resolve({ data: singularStory })
        );
        const entity = await getStory(1);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
        expect(entity).toEqual(singularStory);
        })
    })
});