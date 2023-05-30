import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        //baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        baseUrl:'https://shazam.p.rapidapi.com',
        prepareHeaders:(headers)=>{
            // headers.set('X-RapidAPI-Key','KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA');
            headers.set('X-RapidAPI-Key','3ec57520damshaddcdfeb3ff5d52p1bfb07jsn0ddc58751363');
            return headers
        }
    }),
    endpoints:(builder)=>({
        getTopCarts:builder.query({
            query:()=> 'charts/track'
        }),
        getSongDetails:builder.query({
            query:({songid})=> `/songs/get-details?key=${songid}`
        }),
        getSongRelated:builder.query({
            query:({songid})=>`artists/get-top-songs?id=${songid}`
        }),
    })
})

export const {
    useGetTopCartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;