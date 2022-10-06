/**
 * @generated SignedSource<<847b7234b3396f9b0af70287bb117e5c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Profile_user$data = {
  readonly avatarUrl: any;
  readonly bio: string | null;
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
  readonly login: string;
  readonly name: string | null;
  readonly repositories: {
    readonly nodes: ReadonlyArray<{
      readonly id: string;
    } | null> | null;
    readonly totalCount: number;
  };
  readonly " $fragmentType": "Profile_user";
};
export type Profile_user$key = {
  readonly " $data"?: Profile_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"Profile_user">;
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
  "name": "Profile_user",
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

(node as any).hash = "75942a2f6876c2b3a77ea0852be32060";

export default node;
