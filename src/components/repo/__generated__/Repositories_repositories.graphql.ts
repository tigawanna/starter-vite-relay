/**
 * @generated SignedSource<<37be7d09f4ecc2af8dfa87487fa46439>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
export type RepositoryVisibility = "INTERNAL" | "PRIVATE" | "PUBLIC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type Repositories_repositories$data = {
  readonly id: string;
  readonly repositories: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly description: string | null;
        readonly diskUsage: number | null;
        readonly forkCount: number;
        readonly id: string;
        readonly languages: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly color: string | null;
              readonly id: string;
              readonly name: string;
            };
          } | null> | null;
        } | null;
        readonly name: string;
        readonly pushedAt: any | null;
        readonly refs: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly id: string;
              readonly name: string;
              readonly target: {
                readonly history?: {
                  readonly edges: ReadonlyArray<{
                    readonly node: {
                      readonly author: {
                        readonly name: string | null;
                      } | null;
                      readonly committedDate: any;
                      readonly message: string;
                    } | null;
                  } | null> | null;
                };
              } | null;
            } | null;
          } | null> | null;
        } | null;
        readonly url: any;
        readonly visibility: RepositoryVisibility;
      } | null;
    } | null> | null;
    readonly pageInfo: {
      readonly endCursor: string | null;
      readonly hasNextPage: boolean;
      readonly hasPreviousPage: boolean;
      readonly startCursor: string | null;
    };
    readonly totalCount: number;
  };
  readonly " $fragmentType": "Repositories_repositories";
};
export type Repositories_repositories$key = {
  readonly " $data"?: Repositories_repositories$data;
  readonly " $fragmentSpreads": FragmentRefs<"Repositories_repositories">;
};

import RepositoriesPaginationQuery_graphql from './RepositoriesPaginationQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "repositories"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": RepositoriesPaginationQuery_graphql,
      "identifierField": "id"
    }
  },
  "name": "Repositories_repositories",
  "selections": [
    {
      "alias": "repositories",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": {
            "direction": "DESC",
            "field": "PUSHED_AT"
          }
        }
      ],
      "concreteType": "RepositoryConnection",
      "kind": "LinkedField",
      "name": "__Repositories_repositories_connection",
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
                (v1/*: any*/),
                (v2/*: any*/),
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "url",
                  "storageKey": null
                },
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
                  "args": [
                    {
                      "kind": "Variable",
                      "name": "first",
                      "variableName": "first"
                    }
                  ],
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
                            (v1/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "color",
                              "storageKey": null
                            },
                            (v2/*: any*/)
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
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
                            (v2/*: any*/),
                            (v1/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": null,
                              "kind": "LinkedField",
                              "name": "target",
                              "plural": false,
                              "selections": [
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
                                                    (v2/*: any*/)
                                                  ],
                                                  "storageKey": null
                                                },
                                                {
                                                  "alias": null,
                                                  "args": null,
                                                  "kind": "ScalarField",
                                                  "name": "message",
                                                  "storageKey": null
                                                }
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
                                }
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": "__Repositories_repositories_connection(orderBy:{\"direction\":\"DESC\",\"field\":\"PUSHED_AT\"})"
    },
    (v1/*: any*/)
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "98d59085c1b71ce7465ccf4fa9375011";

export default node;
