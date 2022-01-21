import React from 'react';
import { useQuery } from 'react-query';

const rqueryConfig = {
    enabled: true,
    cacheTime:900000,
    staleTime:300000,
    refetchOnMount:false
}

export const ImagesQuery = () => {
    return useQuery('images', ()=> {
        return fetch('images?limit=10')
                .then(res => res.json())
    }, rqueryConfig);
}