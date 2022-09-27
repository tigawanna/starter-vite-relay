/**
 * @generated SignedSource<<719e66852bfa34304af7c47046bf5e76>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HomeBioQuery$variables = {};
export type HomeBioQuery$data = {
  readonly viewer: {
    readonly email: string;
    readonly name: string | null;
  };
};
export type HomeBioQuery = {
  response: HomeBioQuery$data;
  variables: HomeBioQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeBioQuery",
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
          (v1/*: any*/)
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
    "name": "HomeBioQuery",
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
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "89cb86e34856eaea0961f534c81f01cb",
    "id": null,
    "metadata": {},
    "name": "HomeBioQuery",
    "operationKind": "query",
    "text": "query HomeBioQuery {\n  viewer {\n    name\n    email\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "46e315ce353820837c5ee09298e5e777";

export default node;
