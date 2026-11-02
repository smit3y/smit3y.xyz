// Build-time hashing for block pages. Mirrors the browser's crypto.subtle
// hashing in CryptoChain, so a page header and the hub card always agree.
import { createHash } from "node:crypto";
import { BLOCKS, ZERO_HASH, hashInput } from "./chain";

export function chainHashes() {
  const out: Array<{ hash: string; parent: string }> = [];
  let parent = ZERO_HASH;
  for (const b of BLOCKS) {
    if (b.scene === "pending") {
      out.push({ hash: "", parent });
      break;
    }
    const hash = "0x" + createHash("sha256").update(hashInput(parent, b)).digest("hex");
    out.push({ hash, parent });
    parent = hash;
  }
  return out;
}
