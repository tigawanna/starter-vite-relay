/**
 * @generated SignedSource<<482b791224473c85f01e4f413e9e7cf5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type App_user$data = {
  readonly avatarUrl: any;
  readonly bio: string | null;
  readonly company: string | null;
  readonly createdAt: any;
  readonly email: string;
  readonly followers: {
    readonly nodes: ReadonlyArray<{
      readonly id: string;
    } | null> | null;
    readonly totalCount: number;
  };
  readonly following: {
    readonly nodes: ReadonlyArray<{
      readonly id: string;
    } | null> | null;
    readonly totalCount: number;
  };
  readonly id: string;
  readonly isFollowingViewer: boolean;
  readonly isViewer: boolean;
  readonly location: string | null;
  readonly login: string;
  readonly name: string | null;
  readonly repositories: {
    readonly nodes: ReadonlyArray<{
      readonly id: string;
    } | null> | null;
    readonly totalCount: number;
  };
  readonly twitterUsername: string | null;
  readonly url: any;
  readonly viewerIsFollowing: boolean;
  readonly " $fragmentType": "App_user";
};
export type App_user$key = {
  readonly " $data"?: App_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"App_user">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v3 = [
  (v0/*: any*/)
],
v4 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "nodes",
    "plural": true,
    "selections": (v3/*: any*/),
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "App_user",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "login",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bio",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "company",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "twitterUsername",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isFollowingViewer",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerIsFollowing",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isViewer",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "location",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    },
    {
      "alias": null,
      "args": (v1/*: any*/),
      "concreteType": "FollowerConnection",
      "kind": "LinkedField",
      "name": "followers",
      "plural": false,
      "selections": (v4/*: any*/),
      "storageKey": "followers(first:1)"
    },
    {
      "alias": null,
      "args": (v1/*: any*/),
      "concreteType": "FollowingConnection",
      "kind": "LinkedField",
      "name": "following",
      "plural": false,
      "selections": (v4/*: any*/),
      "storageKey": "following(first:1)"
    },
    {
      "alias": null,
      "args": (v1/*: any*/),
      "concreteType": "RepositoryConnection",
      "kind": "LinkedField",
      "name": "repositories",
      "plural": false,
      "selections": [
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Repository",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": (v3/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": "repositories(first:1)"
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "6056d32f667813cc6e35331661cc86de";

export default node;
