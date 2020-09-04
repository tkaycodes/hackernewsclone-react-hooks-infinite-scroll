import React, {useEffect, useState, useMemo} from 'react';
import { getStoryIds } from '../services/api';
import {Story} from '../components/Story';
import {
    GlobalStyle, 
    StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {

    const { count } = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);
    const test = useInfiniteScroll();

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    return( 
        <>
            <GlobalStyle/>
            <StoriesContainerWrapper data-test-id="stories-container">
                <h1>Hacker News Stories</h1>
                {storyIds.slice(0, count).map(storyId => (
                    <Story key={storyId} storyId={storyId} />
                ))}
            </StoriesContainerWrapper>
        </>
    );
};