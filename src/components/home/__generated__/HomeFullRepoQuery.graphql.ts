/**
 * @generated SignedSource<<a7d139d5d0bbb05ed9e11ece20080bea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SecurityAdvisoryClassification = "GENERAL" | "MALWARE" | "%future added value";
export type SecurityAdvisoryEcosystem = "ACTIONS" | "COMPOSER" | "ERLANG" | "GO" | "MAVEN" | "NPM" | "NUGET" | "PIP" | "RUBYGEMS" | "RUST" | "%future added value";
export type SecurityAdvisorySeverity = "CRITICAL" | "HIGH" | "LOW" | "MODERATE" | "%future added value";
export type HomeFullRepoQuery$variables = {
  after?: string | null;
  first?: number | null;
  reponame: string;
  repoowner: string;
};
export type HomeFullRepoQuery$data = {
  readonly repository: {
    readonly collaborators: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly avatarUrl: any;
          readonly bio: string | null;
          readonly company: string | null;
          readonly email: string;
          readonly name: string | null;
        };
      } | null> | null;
      readonly pageInfo: {
        readonly endCursor: string | null;
        readonly hasNextPage: boolean;
        readonly hasPreviousPage: boolean;
        readonly startCursor: string | null;
      };
      readonly totalCount: number;
    } | null;
    readonly forkCount: number;
    readonly forks: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly createdAt: any;
          readonly description: string | null;
          readonly nameWithOwner: string;
          readonly owner: {
            readonly login: string;
            readonly url: any;
          };
          readonly parent: {
            readonly owner: {
              readonly login: string;
              readonly url: any;
            };
            readonly url: any;
          } | null;
          readonly url: any;
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
    readonly languages: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly color: string | null;
          readonly id: string;
          readonly name: string;
        };
      } | null> | null;
      readonly pageInfo: {
        readonly endCursor: string | null;
        readonly hasNextPage: boolean;
        readonly hasPreviousPage: boolean;
        readonly startCursor: string | null;
      };
      readonly totalCount: number;
    } | null;
    readonly nameWithOwner: string;
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
                    readonly email: string | null;
                    readonly name: string | null;
                  } | null;
                  readonly authoredDate: any;
                  readonly committedDate: any;
                  readonly message: string;
                  readonly pushedDate: any | null;
                  readonly url: any;
                } | null;
              } | null> | null;
            };
          } | null;
        } | null;
      } | null> | null;
      readonly nodes: ReadonlyArray<{
        readonly associatedPullRequests: {
          readonly pageInfo: {
            readonly endCursor: string | null;
            readonly hasNextPage: boolean;
            readonly hasPreviousPage: boolean;
            readonly startCursor: string | null;
          };
          readonly totalCount: number;
        };
      } | null> | null;
      readonly pageInfo: {
        readonly endCursor: string | null;
        readonly hasNextPage: boolean;
        readonly hasPreviousPage: boolean;
        readonly startCursor: string | null;
      };
      readonly totalCount: number;
    } | null;
    readonly stargazers: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly login: string;
          readonly url: any;
        };
      } | null> | null;
      readonly pageInfo: {
        readonly endCursor: string | null;
        readonly hasNextPage: boolean;
        readonly hasPreviousPage: boolean;
        readonly startCursor: string | null;
      };
      readonly totalCount: number;
    };
    readonly vulnerabilityAlerts: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly createdAt: any;
          readonly securityAdvisory: {
            readonly classification: SecurityAdvisoryClassification;
            readonly description: string;
            readonly vulnerabilities: {
              readonly edges: ReadonlyArray<{
                readonly node: {
                  readonly package: {
                    readonly ecosystem: SecurityAdvisoryEcosystem;
                    readonly name: string;
                  };
                  readonly severity: SecurityAdvisorySeverity;
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
          } | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};
export type HomeFullRepoQuery = {
  response: HomeFullRepoQuery$data;
  variables: HomeFullRepoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "reponame"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "repoowner"
},
v4 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "reponame"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "repoowner"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nameWithOwner",
  "storageKey": null
},
v6 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v7 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v8 = [
  (v6/*: any*/),
  (v7/*: any*/)
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "company",
  "storageKey": null
},
v14 = {
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
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "classification",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": (v8/*: any*/),
  "concreteType": "SecurityVulnerabilityConnection",
  "kind": "LinkedField",
  "name": "vulnerabilities",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SecurityVulnerabilityEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SecurityVulnerability",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "severity",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "SecurityAdvisoryPackage",
              "kind": "LinkedField",
              "name": "package",
              "plural": false,
              "selections": [
                (v11/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "ecosystem",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v14/*: any*/),
    (v15/*: any*/)
  ],
  "storageKey": null
},
v20 = [
  (v6/*: any*/),
  (v7/*: any*/),
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
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "committedDate",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "concreteType": "GitActor",
  "kind": "LinkedField",
  "name": "author",
  "plural": false,
  "selections": [
    (v11/*: any*/),
    (v10/*: any*/)
  ],
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "pushedDate",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "authoredDate",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": (v8/*: any*/),
  "concreteType": "PullRequestConnection",
  "kind": "LinkedField",
  "name": "associatedPullRequests",
  "plural": false,
  "selections": [
    (v14/*: any*/),
    (v15/*: any*/)
  ],
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": (v8/*: any*/),
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
            (v21/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "color",
              "storageKey": null
            },
            (v11/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v14/*: any*/),
    (v15/*: any*/)
  ],
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "forkCount",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v32 = [
  (v31/*: any*/),
  (v25/*: any*/)
],
v33 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "owner",
  "plural": false,
  "selections": (v32/*: any*/),
  "storageKey": null
},
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "owner",
  "plural": false,
  "selections": [
    (v34/*: any*/),
    (v31/*: any*/),
    (v25/*: any*/),
    (v21/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeFullRepoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "RepositoryCollaboratorConnection",
            "kind": "LinkedField",
            "name": "collaborators",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RepositoryCollaboratorEdge",
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
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v14/*: any*/),
              (v15/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "RepositoryVulnerabilityAlertConnection",
            "kind": "LinkedField",
            "name": "vulnerabilityAlerts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RepositoryVulnerabilityAlertEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "RepositoryVulnerabilityAlert",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v16/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SecurityAdvisory",
                        "kind": "LinkedField",
                        "name": "securityAdvisory",
                        "plural": false,
                        "selections": [
                          (v17/*: any*/),
                          (v18/*: any*/),
                          (v19/*: any*/)
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
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v20/*: any*/),
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
                      (v11/*: any*/),
                      (v21/*: any*/),
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
                                "args": (v8/*: any*/),
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
                                          (v22/*: any*/),
                                          (v23/*: any*/),
                                          (v24/*: any*/),
                                          (v25/*: any*/),
                                          (v26/*: any*/),
                                          (v27/*: any*/)
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
              },
              (v14/*: any*/),
              (v15/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Ref",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v28/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v29/*: any*/),
          (v30/*: any*/),
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "forks",
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
                      (v16/*: any*/),
                      (v5/*: any*/),
                      (v18/*: any*/),
                      (v25/*: any*/),
                      (v33/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Repository",
                        "kind": "LinkedField",
                        "name": "parent",
                        "plural": false,
                        "selections": [
                          (v25/*: any*/),
                          (v33/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v14/*: any*/),
              (v15/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "StargazerConnection",
            "kind": "LinkedField",
            "name": "stargazers",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "StargazerEdge",
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
                    "selections": (v32/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v14/*: any*/),
              (v15/*: any*/)
            ],
            "storageKey": null
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
    "argumentDefinitions": [
      (v3/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "HomeFullRepoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "RepositoryCollaboratorConnection",
            "kind": "LinkedField",
            "name": "collaborators",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RepositoryCollaboratorEdge",
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
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v21/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v14/*: any*/),
              (v15/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "RepositoryVulnerabilityAlertConnection",
            "kind": "LinkedField",
            "name": "vulnerabilityAlerts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RepositoryVulnerabilityAlertEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "RepositoryVulnerabilityAlert",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v16/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SecurityAdvisory",
                        "kind": "LinkedField",
                        "name": "securityAdvisory",
                        "plural": false,
                        "selections": [
                          (v17/*: any*/),
                          (v18/*: any*/),
                          (v19/*: any*/),
                          (v21/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v21/*: any*/)
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
            "args": (v20/*: any*/),
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
                      (v11/*: any*/),
                      (v21/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "target",
                        "plural": false,
                        "selections": [
                          (v34/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": (v8/*: any*/),
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
                                          (v22/*: any*/),
                                          (v23/*: any*/),
                                          (v24/*: any*/),
                                          (v25/*: any*/),
                                          (v26/*: any*/),
                                          (v27/*: any*/),
                                          (v21/*: any*/)
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
                            "type": "Commit",
                            "abstractKey": null
                          },
                          (v21/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v14/*: any*/),
              (v15/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Ref",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v28/*: any*/),
                  (v21/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v29/*: any*/),
          (v30/*: any*/),
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "forks",
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
                      (v16/*: any*/),
                      (v5/*: any*/),
                      (v18/*: any*/),
                      (v25/*: any*/),
                      (v35/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Repository",
                        "kind": "LinkedField",
                        "name": "parent",
                        "plural": false,
                        "selections": [
                          (v25/*: any*/),
                          (v35/*: any*/),
                          (v21/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v21/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v14/*: any*/),
              (v15/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "StargazerConnection",
            "kind": "LinkedField",
            "name": "stargazers",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "StargazerEdge",
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
                      (v31/*: any*/),
                      (v25/*: any*/),
                      (v21/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v14/*: any*/),
              (v15/*: any*/)
            ],
            "storageKey": null
          },
          (v21/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a067430ba9422616195bc789f090a831",
    "id": null,
    "metadata": {},
    "name": "HomeFullRepoQuery",
    "operationKind": "query",
    "text": "query HomeFullRepoQuery(\n  $repoowner: String!\n  $reponame: String!\n  $first: Int\n  $after: String\n) {\n  repository(owner: $repoowner, name: $reponame) {\n    nameWithOwner\n    collaborators(first: $first, after: $after) {\n      edges {\n        node {\n          avatarUrl\n          email\n          name\n          bio\n          company\n          id\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n      totalCount\n    }\n    vulnerabilityAlerts(first: $first, after: $after) {\n      edges {\n        node {\n          createdAt\n          securityAdvisory {\n            classification\n            description\n            vulnerabilities(first: $first, after: $after) {\n              edges {\n                node {\n                  severity\n                  package {\n                    name\n                    ecosystem\n                  }\n                }\n              }\n              pageInfo {\n                endCursor\n                hasNextPage\n                hasPreviousPage\n                startCursor\n              }\n              totalCount\n            }\n            id\n          }\n          id\n        }\n      }\n    }\n    refs(refPrefix: \"refs/heads/\", orderBy: {direction: DESC, field: TAG_COMMIT_DATE}, first: $first, after: $after) {\n      edges {\n        node {\n          name\n          id\n          target {\n            __typename\n            ... on Commit {\n              history(first: $first, after: $after) {\n                edges {\n                  node {\n                    committedDate\n                    author {\n                      name\n                      email\n                    }\n                    message\n                    url\n                    pushedDate\n                    authoredDate\n                    id\n                  }\n                }\n              }\n            }\n            id\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n      totalCount\n      nodes {\n        associatedPullRequests(first: $first, after: $after) {\n          pageInfo {\n            endCursor\n            hasNextPage\n            hasPreviousPage\n            startCursor\n          }\n          totalCount\n        }\n        id\n      }\n    }\n    languages(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          color\n          name\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n      totalCount\n    }\n    forkCount\n    forks(first: $first, after: $after) {\n      edges {\n        node {\n          createdAt\n          nameWithOwner\n          description\n          url\n          owner {\n            __typename\n            login\n            url\n            id\n          }\n          parent {\n            url\n            owner {\n              __typename\n              login\n              url\n              id\n            }\n            id\n          }\n          id\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n      totalCount\n    }\n    stargazers(first: $first, after: $after) {\n      edges {\n        node {\n          login\n          url\n          id\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n      totalCount\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6d26596aab05946038d2fe80bbaf581c";

export default node;
