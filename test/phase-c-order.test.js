import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";

test("speculative completion order fixture", async () => {
  if (!existsSync(new URL("../markers/phase-c-order-b.txt", import.meta.url))) {
    await new Promise((resolve) => setTimeout(resolve, 60_000));
  }
  assert.equal(true, true);
});
