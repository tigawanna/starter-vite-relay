
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { AppROOTVIEWERQuery } from '../__generated__/AppROOTVIEWERQuery.graphql';
import { ROOTVIEWER } from '../App';

export const useRelayHooks = (
  rootQueryRef: PreloadedQuery<AppROOTVIEWERQuery,{}>
) => {
  const viewerData =
    usePreloadedQuery<AppROOTVIEWERQuery>(
      ROOTVIEWER,
      rootQueryRef
    );
// console.log(viewerData)
if(!viewerData) return {error:"Bad things happened"}    

return viewerData
};
