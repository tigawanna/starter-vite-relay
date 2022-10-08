/**
 * @generated SignedSource<<551b381ae029fe334257f5d28aae3120>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UnfollowUserInput = {
  clientMutationId?: string | null;
  userId: string;
};
export type ProfileInfounfollowMutation$variables = {
  input: UnfollowUserInput;
};
export type ProfileInfounfollowMutation$data = {
  readonly unfollowUser: {
    readonly clientMutationId: string | null;
  } | null;
};
export type ProfileInfounfollowMutation = {
  response: ProfileInfounfollowMutation$data;
  variables: ProfileInfounfollowMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UnfollowUserPayload",
    "kind": "LinkedField",
    "name": "unfollowUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfileInfounfollowMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProfileInfounfollowMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bc2a62b6e292f64775f7b4d0d82504b1",
    "id": null,
    "metadata": {},
    "name": "ProfileInfounfollowMutation",
    "operationKind": "mutation",
    "text": "mutation ProfileInfounfollowMutation(\n  $input: UnfollowUserInput!\n) {\n  unfollowUser(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "b6e49456b11cd7f538a3a6d3420b1145";

export default node;
