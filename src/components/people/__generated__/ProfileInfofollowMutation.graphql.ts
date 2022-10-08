/**
 * @generated SignedSource<<3c6908f07650134f10b63a05bb795e5f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowUserInput = {
  clientMutationId?: string | null;
  userId: string;
};
export type ProfileInfofollowMutation$variables = {
  input: FollowUserInput;
};
export type ProfileInfofollowMutation$data = {
  readonly followUser: {
    readonly clientMutationId: string | null;
  } | null;
};
export type ProfileInfofollowMutation = {
  response: ProfileInfofollowMutation$data;
  variables: ProfileInfofollowMutation$variables;
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
    "concreteType": "FollowUserPayload",
    "kind": "LinkedField",
    "name": "followUser",
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
    "name": "ProfileInfofollowMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProfileInfofollowMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b3d46ae0b3cf6c0b0b825e295d63c8be",
    "id": null,
    "metadata": {},
    "name": "ProfileInfofollowMutation",
    "operationKind": "mutation",
    "text": "mutation ProfileInfofollowMutation(\n  $input: FollowUserInput!\n) {\n  followUser(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "85ba6a5b5a566293955468c16b691d39";

export default node;
