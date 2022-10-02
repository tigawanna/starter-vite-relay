import { useMatch } from '@tanstack/react-location';
import React from 'react'
import { usePreloadedQuery, graphql, PreloadedQuery } from 'react-relay/hooks';




interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({}) => {
const stuff = useMatch()
 console.log("use match ",stuff)
return (
 <div className='w-full h-full min-h-screen '>
Home
</div>
);
}
