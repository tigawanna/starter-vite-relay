/**
 * @generated SignedSource<<90519e5dee7847e0e3da59357d2fcc01>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProfileVIEWERQuery$variables = {
  login: string;
};
export type ProfileVIEWERQuery$data = {
  readonly user: {
    readonly " $fragmentSpreads": FragmentRefs<"Followers_followers" | "Following_following" | "Repositories_repositories">;
  } | null;
};
export type ProfileVIEWERQuery = {
  response: ProfileVIEWERQuery$data;
  variables: ProfileVIEWERQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v2 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v3 = [
  (v2/*: any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "PUSHED_AT"
    }
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v7 = [
  (v2/*: any*/)
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasPreviousPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startCursor",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v12 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "UserEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
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
          (v6/*: any*/),
          (v8/*: any*/)
        ],
        "storageKey": null
      },
      (v9/*: any*/)
    ],
    "storageKey": null
  },
  (v10/*: any*/),
  (v11/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfileVIEWERQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Repositories_repositories"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Following_following"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Followers_followers"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProfileVIEWERQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RepositoryEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Repository",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "description",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "pushedAt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "diskUsage",
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "visibility",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "forkCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v7/*: any*/),
                        "concreteType": "LanguageConnection",
                        "kind": "LinkedField",
                        "name": "languages",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "LanguageEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Language",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v4/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "color",
                                    "storageKey": null
                                  },
                                  (v5/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "languages(first:10)"
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 2
                          },
                          {
                            "kind": "Literal",
                            "name": "orderBy",
                            "value": {
                              "direction": "DESC",
                              "field": "TAG_COMMIT_DATE"
                            }
                          },
                          {
                            "kind": "Literal",
                            "name": "refPrefix",
                            "value": "refs/heads/"
                          }
                        ],
                        "concreteType": "RefConnection",
                        "kind": "LinkedField",
                        "name": "refs",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "RefEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Ref",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v5/*: any*/),
                                  (v4/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "target",
                                    "plural": false,
                                    "selections": [
                                      (v8/*: any*/),
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": [
                                              {
                                                "kind": "Literal",
                                                "name": "first",
                                                "value": 1
                                              }
                                            ],
                                            "concreteType": "CommitHistoryConnection",
                                            "kind": "LinkedField",
                                            "name": "history",
                                            "plural": false,
                                            "selections": [
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "CommitEdge",
                                                "kind": "LinkedField",
                                                "name": "edges",
                                                "plural": true,
                                                "selections": [
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "Commit",
                                                    "kind": "LinkedField",
                                                    "name": "node",
                                                    "plural": false,
                                                    "selections": [
                                                      {
                                                        "alias": null,
                                                        "args": null,
                                                        "kind": "ScalarField",
                                                        "name": "committedDate",
                                                        "storageKey": null
                                                      },
                                                      {
                                                        "alias": null,
                                                        "args": null,
                                                        "concreteType": "GitActor",
                                                        "kind": "LinkedField",
                                                        "name": "author",
                                                        "plural": false,
                                                        "selections": [
                                                          (v5/*: any*/)
                                                        ],
                                                        "storageKey": null
                                                      },
                                                      {
                                                        "alias": null,
                                                        "args": null,
                                                        "kind": "ScalarField",
                                                        "name": "message",
                                                        "storageKey": null
                                                      },
                                                      (v4/*: any*/)
                                                    ],
                                                    "storageKey": null
                                                  }
                                                ],
                                                "storageKey": null
                                              }
                                            ],
                                            "storageKey": "history(first:1)"
                                          }
                                        ],
                                        "type": "Commit",
                                        "abstractKey": null
                                      },
                                      (v4/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "refs(first:2,orderBy:{\"direction\":\"DESC\",\"field\":\"TAG_COMMIT_DATE\"},refPrefix:\"refs/heads/\")"
                      },
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              (v10/*: any*/),
              (v11/*: any*/)
            ],
            "storageKey": "repositories(first:10,orderBy:{\"direction\":\"DESC\",\"field\":\"PUSHED_AT\"})"
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
            "filters": [
              "orderBy"
            ],
            "handle": "connection",
            "key": "Repositories_repositories",
            "kind": "LinkedHandle",
            "name": "repositories"
          },
          (v4/*: any*/),
          {
            "alias": null,
            "args": (v7/*: any*/),
            "concreteType": "FollowingConnection",
            "kind": "LinkedField",
            "name": "following",
            "plural": false,
            "selections": (v12/*: any*/),
            "storageKey": "following(first:10)"
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "Following_following",
            "kind": "LinkedHandle",
            "name": "following"
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
            "concreteType": "FollowerConnection",
            "kind": "LinkedField",
            "name": "followers",
            "plural": false,
            "selections": (v12/*: any*/),
            "storageKey": "followers(first:10)"
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "Followers_followers",
            "kind": "LinkedHandle",
            "name": "followers"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9b0d123056f41e18b5331dbf27b0da5e",
    "id": null,
    "metadata": {},
    "name": "ProfileVIEWERQuery",
    "operationKind": "query",
    "text": "query ProfileVIEWERQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    ...Repositories_repositories\n    ...Following_following\n    ...Followers_followers\n    id\n  }\n}\n\nfragment Followers_followers on User {\n  followers(first: 10) {\n    edges {\n      node {\n        ...PersonCard_user\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n    totalCount\n  }\n  id\n}\n\nfragment Following_following on User {\n  following(first: 10) {\n    edges {\n      node {\n        ...PersonCard_user\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n    totalCount\n  }\n  id\n}\n\nfragment PersonCard_user on User {\n  id\n  name\n  login\n  email\n  bio\n  avatarUrl\n  company\n  twitterUsername\n  createdAt\n  isFollowingViewer\n  viewerIsFollowing\n  isViewer\n  location\n  url\n}\n\nfragment Repositories_repositories on User {\n  repositories(first: 10, orderBy: {field: PUSHED_AT, direction: DESC}) {\n    edges {\n      node {\n        id\n        name\n        description\n        pushedAt\n        diskUsage\n        url\n        visibility\n        forkCount\n        languages(first: 10) {\n          edges {\n            node {\n              id\n              color\n              name\n            }\n          }\n        }\n        refs(refPrefix: \"refs/heads/\", orderBy: {direction: DESC, field: TAG_COMMIT_DATE}, first: 2) {\n          edges {\n            node {\n              name\n              id\n              target {\n                __typename\n                ... on Commit {\n                  history(first: 1) {\n                    edges {\n                      node {\n                        committedDate\n                        author {\n                          name\n                        }\n                        message\n                        id\n                      }\n                    }\n                  }\n                }\n                id\n              }\n            }\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n    totalCount\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "484f9c3d010a0a8aaedc4c848fe4a0aa";

export default node;
