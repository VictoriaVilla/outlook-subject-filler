/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document, Office */
import { Subject } from "../subjects/subject";
import { AddressSubject } from "../subjects/addressSubject";

//test varibles for subjects
var testSub = new Subject("Hello", "World");
var testAddressSub = new AddressSubject("building","0000","","building name","address","suburb","vic");

Office.onReady((info) => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("run").onclick = run;
  }
});

export async function run() {
  /**
   * Insert your Outlook code here
   */

  const item = Office.context.mailbox.item;
  document.getElementById("item-subject").innerHTML = testAddressSub.print();
}
