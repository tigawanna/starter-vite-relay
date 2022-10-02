/**
 * @generated SignedSource<<b951857bbb5346e751c6adbc55b4919e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type App_user$data = {
  readonly avatarUrl: any;
  readonly " $fragmentType": "App_user";
};
export type App_user$key = {
  readonly " $data"?: App_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"App_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "App_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "fa720be474daebbe8c502373a1fd7eaf";

export default node;
