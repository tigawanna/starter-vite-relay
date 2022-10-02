/**
 * @generated SignedSource<<27a8bb2bbd398656e4bbcfc3c129876b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppROOTVIEWERQuery$variables = {};
export type AppROOTVIEWERQuery$data = {
  readonly viewer: {
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
  };
};
export type AppROOTVIEWERQuery = {
  response: AppROOTVIEWERQuery$data;
  variables: AppROOTVIEWERQuery$variables;
};

const node: ConcreteRequest = (function(){
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
],
v5 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppROOTVIEWERQuery",
    "selections": (v5/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppROOTVIEWERQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "5489c0ae69a74630e93f6a7cb5c63f07",
    "id": null,
    "metadata": {},
    "name": "AppROOTVIEWERQuery",
    "operationKind": "query",
    "text": "query AppROOTVIEWERQuery {\n  viewer {\n    id\n    name\n    login\n    email\n    bio\n    avatarUrl\n    company\n    twitterUsername\n    createdAt\n    isFollowingViewer\n    viewerIsFollowing\n    isViewer\n    location\n    url\n    followers(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n    following(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n    repositories(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ae766cf35c35c6411bef18de804ecd91";

export default node;
