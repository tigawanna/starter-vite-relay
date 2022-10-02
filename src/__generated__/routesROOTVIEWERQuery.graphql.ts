/**
 * @generated SignedSource<<a047724b892daa69186e3e2127e75840>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type routesROOTVIEWERQuery$variables = {};
export type routesROOTVIEWERQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"ProfileInfo_user">;
  };
};
export type routesROOTVIEWERQuery = {
  response: routesROOTVIEWERQuery$data;
  variables: routesROOTVIEWERQuery$variables;
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routesROOTVIEWERQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ProfileInfo_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "routesROOTVIEWERQuery",
    "selections": [
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
    ]
  },
  "params": {
    "cacheID": "9f5c3f1ecabc8e24c177881685bffea1",
    "id": null,
    "metadata": {},
    "name": "routesROOTVIEWERQuery",
    "operationKind": "query",
    "text": "query routesROOTVIEWERQuery {\n  viewer {\n    ...ProfileInfo_user\n    id\n  }\n}\n\nfragment ProfileInfo_user on User {\n  id\n  name\n  login\n  email\n  bio\n  avatarUrl\n  company\n  twitterUsername\n  createdAt\n  isFollowingViewer\n  viewerIsFollowing\n  isViewer\n  location\n  url\n  followers(first: 1) {\n    totalCount\n    nodes {\n      id\n    }\n  }\n  following(first: 1) {\n    totalCount\n    nodes {\n      id\n    }\n  }\n  repositories(first: 1) {\n    totalCount\n    nodes {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "763979d3b2fb69f5058658cba3d14f00";

export default node;
