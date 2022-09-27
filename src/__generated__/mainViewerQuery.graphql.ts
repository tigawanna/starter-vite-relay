/**
 * @generated SignedSource<<6ce8f32a5de0a6f4891e1fc5956f988d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type mainVIEWERQuery$variables = {};
export type mainVIEWERQuery$data = {
  readonly viewer: {
    readonly bio: string | null;
    readonly email: string;
    readonly name: string | null;
  };
};
export type mainVIEWERQuery = {
  response: mainVIEWERQuery$data;
  variables: mainVIEWERQuery$variables;
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
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "mainVIEWERQuery",
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
          (v2/*: any*/)
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
    "name": "mainVIEWERQuery",
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
          (v2/*: any*/),
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
    "cacheID": "1cfce1e231a3b37854e10475cd9a18f1",
    "id": null,
    "metadata": {},
    "name": "mainVIEWERQuery",
    "operationKind": "query",
    "text": "query mainVIEWERQuery {\n  viewer {\n    name\n    email\n    bio\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "4600b1123dff4ebf1f40423beaea405b";

export default node;
