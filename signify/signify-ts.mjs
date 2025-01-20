var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/exports.ts
var exports_exports = {};
__export(exports_exports, {
  Agent: () => Agent,
  Algos: () => Algos,
  Authenticater: () => Authenticater,
  B64ChrByIdx: () => B64ChrByIdx,
  B64IdxByChr: () => B64IdxByChr,
  BexCodex: () => BexCodex,
  BexDex: () => BexDex,
  CesrNumber: () => CesrNumber,
  Challenges: () => Challenges,
  Cigar: () => Cigar,
  Cipher: () => Cipher,
  Codex: () => Codex,
  Contacts: () => Contacts,
  Controller: () => Controller,
  Counter: () => Counter,
  CounterCodex: () => CounterCodex,
  Creatory: () => Creatory,
  CredentialTypes: () => CredentialTypes,
  Credentials: () => Credentials,
  CtrDex: () => CtrDex,
  Decrypter: () => Decrypter,
  Diger: () => Diger,
  DigiCodex: () => DigiCodex,
  DigiDex: () => DigiDex,
  DipLabels: () => DipLabels,
  DrtLabels: () => DrtLabels,
  EmptyMaterialError: () => EmptyMaterialError,
  Encrypter: () => Encrypter,
  Escrows: () => Escrows,
  EventResult: () => EventResult,
  Exchanges: () => Exchanges,
  FALSY: () => FALSY,
  GroupKeeper: () => GroupKeeper,
  Groups: () => Groups,
  HEADER_SIG_INPUT: () => HEADER_SIG_INPUT,
  HEADER_SIG_TIME: () => HEADER_SIG_TIME,
  Hab: () => Hab,
  Habery: () => Habery,
  IcpLabels: () => IcpLabels,
  Ident: () => Ident,
  Identifier: () => Identifier,
  IdrDex: () => IdrDex,
  Ids: () => Ids,
  IdxBthSigDex: () => IdxBthSigDex,
  IdxCrtSigDex: () => IdxCrtSigDex,
  IdxSigDex: () => IdxSigDex,
  Ilks: () => Ilks,
  IndexedBothSigCodex: () => IndexedBothSigCodex,
  IndexedCurrentSigCodex: () => IndexedCurrentSigCodex,
  IndexedSigCodex: () => IndexedSigCodex,
  Indexer: () => Indexer,
  IndexerCodex: () => IndexerCodex,
  Inputage: () => Inputage,
  Ipex: () => Ipex,
  IxnLabels: () => IxnLabels,
  KeyEvents: () => KeyEvents,
  KeyManager: () => KeyManager,
  KeyStates: () => KeyStates,
  KsnLabels: () => KsnLabels,
  LargeVrzDex: () => LargeVrzDex,
  MINSIGSIZE: () => MINSIGSIZE,
  MINSNIFFSIZE: () => MINSNIFFSIZE,
  Manager: () => Manager,
  Matter: () => Matter,
  MatterCodex: () => MatterCodex,
  MtrDex: () => MtrDex,
  NonTransCodex: () => NonTransCodex,
  NonTransDex: () => NonTransDex,
  Notifications: () => Notifications,
  NumCodex: () => NumCodex,
  NumDex: () => NumDex,
  Oobis: () => Oobis,
  Operations: () => Operations,
  Prefixer: () => Prefixer,
  RandyCreator: () => RandyCreator,
  RandyKeeper: () => RandyKeeper,
  Registries: () => Registries,
  RegistryResult: () => RegistryResult,
  RotLabels: () => RotLabels,
  RpyLabels: () => RpyLabels,
  Saider: () => Saider,
  Salter: () => Salter,
  SaltyCreator: () => SaltyCreator,
  SaltyKeeper: () => SaltyKeeper,
  Schemas: () => Schemas,
  Seqner: () => Seqner,
  Serder: () => Serder,
  Serials: () => Serials,
  Siger: () => Siger,
  Signage: () => Signage,
  Signer: () => Signer,
  SignifyClient: () => SignifyClient,
  Sizage: () => Sizage,
  SmallVrzDex: () => SmallVrzDex,
  TRUTHY: () => TRUTHY,
  Tholder: () => Tholder,
  Tier: () => Tier,
  TraitCodex: () => TraitCodex,
  TraitDex: () => TraitDex,
  Unqualified: () => Unqualified,
  VEREX: () => VEREX,
  VERFULLSIZE: () => VERFULLSIZE,
  Verfer: () => Verfer,
  Version: () => Version,
  Versionage: () => Versionage,
  Xizage: () => Xizage,
  ample: () => ample,
  arrayEquals: () => arrayEquals,
  b: () => b,
  b64ToInt: () => b64ToInt,
  bytesToInt: () => bytesToInt,
  concat: () => concat,
  d: () => d,
  desiginput: () => desiginput,
  designature: () => designature,
  deversify: () => deversify,
  dumps: () => dumps,
  exchange: () => exchange,
  extractValues: () => extractValues,
  incept: () => incept,
  intToB64: () => intToB64,
  intToB64b: () => intToB64b,
  intToBytes: () => intToBytes,
  interact: () => interact,
  messagize: () => messagize,
  normalize: () => normalize,
  nowUTC: () => nowUTC,
  openManager: () => openManager,
  pad: () => pad,
  parseRangeHeaders: () => parseRangeHeaders,
  randomNonce: () => randomNonce,
  randomPasscode: () => randomPasscode,
  range: () => range,
  readInt: () => readInt,
  ready: () => ready,
  reply: () => reply,
  riKey: () => riKey,
  rotate: () => rotate,
  serializeACDCAttachment: () => serializeACDCAttachment,
  serializeIssExnAttachment: () => serializeIssExnAttachment,
  siginput: () => siginput,
  signature: () => signature,
  sizeify: () => sizeify,
  versify: () => versify
});

// src/ready.ts
import _sodium from "libsodium-wrappers-sumo";
var ready = async () => {
  await _sodium.ready;
};

// src/keri/core/encrypter.ts
import libsodium5 from "libsodium-wrappers-sumo";

// src/keri/core/kering.ts
var EmptyMaterialError = class {
  _err;
  constructor(err) {
    this._err = new Error(err);
  }
  get err() {
    return this._err;
  }
};

// src/keri/core/core.ts
var Serials = /* @__PURE__ */ ((Serials2) => {
  Serials2["JSON"] = "JSON";
  return Serials2;
})(Serials || {});
var Ident = /* @__PURE__ */ ((Ident2) => {
  Ident2["KERI"] = "KERI";
  Ident2["ACDC"] = "ACDC";
  return Ident2;
})(Ident || {});
var Version = class {
  major;
  minor;
  constructor(major = 1, minor = 0) {
    this.major = major;
    this.minor = minor;
  }
};
var Versionage = new Version();
var Ilks = {
  icp: "icp",
  rot: "rot",
  ixn: "ixn",
  dip: "dip",
  drt: "drt",
  rct: "rct",
  vrc: "vrc",
  rpy: "rpy",
  exn: "exn",
  vcp: "vcp",
  iss: "iss",
  rev: "rev"
};
var IcpLabels = [
  "v",
  "i",
  "s",
  "t",
  "kt",
  "k",
  "n",
  "bt",
  "b",
  "c",
  "a"
];
var DipLabels = [
  "v",
  "i",
  "s",
  "t",
  "kt",
  "k",
  "n",
  "bt",
  "b",
  "c",
  "a",
  "di"
];
var RotLabels = [
  "v",
  "i",
  "s",
  "t",
  "p",
  "kt",
  "k",
  "n",
  "bt",
  "br",
  "ba",
  "a"
];
var DrtLabels = [
  "v",
  "i",
  "s",
  "t",
  "p",
  "kt",
  "k",
  "n",
  "bt",
  "br",
  "ba",
  "a"
];
var IxnLabels = ["v", "i", "s", "t", "p", "a"];
var KsnLabels = [
  "v",
  "i",
  "s",
  "t",
  "p",
  "d",
  "f",
  "dt",
  "et",
  "kt",
  "k",
  "n",
  "bt",
  "b",
  "c",
  "ee",
  "di",
  "r"
];
var RpyLabels = ["v", "t", "d", "dt", "r", "a"];
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var VERFULLSIZE = 17;
var MINSNIFFSIZE = 12 + VERFULLSIZE;
var MINSIGSIZE = 4;
var VEREX = "(KERI|ACDC)([0-9a-f])([0-9a-f])([A-Z]{4})([0-9a-f]{6})_";
function deversify(versionString) {
  let kind;
  let size;
  let proto;
  const version = Versionage;
  const re = new RegExp(VEREX);
  const match = re.exec(versionString);
  if (match) {
    [proto, version.major, version.minor, kind, size] = [
      match[1],
      +match[2],
      +match[3],
      match[4],
      match[5]
    ];
    if (!Object.values(Serials).includes(kind)) {
      throw new Error(`Invalid serialization kind = ${kind}`);
    }
    if (!Object.values(Ident).includes(proto)) {
      throw new Error(`Invalid serialization kind = ${kind}`);
    }
    const ta = kind;
    kind = Serials[ta];
    const pa = proto;
    proto = Ident[pa];
    return [proto, kind, version, size];
  }
  throw new Error(`Invalid version string = ${versionString}`);
}
function versify(ident = "KERI" /* KERI */, version, kind = "JSON" /* JSON */, size = 0) {
  version = version == void 0 ? Versionage : version;
  return `${ident}${version.major.toString(
    16
  )}${version.minor.toString()}${kind}${size.toString(16).padStart(6, "0")}_`;
}
var B64ChrByIdx = /* @__PURE__ */ new Map([
  [0, "A"],
  [1, "B"],
  [2, "C"],
  [3, "D"],
  [4, "E"],
  [5, "F"],
  [6, "G"],
  [7, "H"],
  [8, "I"],
  [9, "J"],
  [10, "K"],
  [11, "L"],
  [12, "M"],
  [13, "N"],
  [14, "O"],
  [15, "P"],
  [16, "Q"],
  [17, "R"],
  [18, "S"],
  [19, "T"],
  [20, "U"],
  [21, "V"],
  [22, "W"],
  [23, "X"],
  [24, "Y"],
  [25, "Z"],
  [26, "a"],
  [27, "b"],
  [28, "c"],
  [29, "d"],
  [30, "e"],
  [31, "f"],
  [32, "g"],
  [33, "h"],
  [34, "i"],
  [35, "j"],
  [36, "k"],
  [37, "l"],
  [38, "m"],
  [39, "n"],
  [40, "o"],
  [41, "p"],
  [42, "q"],
  [43, "r"],
  [44, "s"],
  [45, "t"],
  [46, "u"],
  [47, "v"],
  [48, "w"],
  [49, "x"],
  [50, "y"],
  [51, "z"],
  [52, "0"],
  [53, "1"],
  [54, "2"],
  [55, "3"],
  [56, "4"],
  [57, "5"],
  [58, "6"],
  [59, "7"],
  [60, "8"],
  [61, "9"],
  [62, "-"],
  [63, "_"]
]);
var B64IdxByChr = new Map(
  Array.from(B64ChrByIdx, (entry) => [entry[1], entry[0]])
);
function intToB64(i, l = 1) {
  let out = "";
  while (l != 0) {
    out = B64ChrByIdx.get(i % 64) + out;
    i = Math.floor(i / 64);
    if (i == 0) {
      break;
    }
  }
  const x = l - out.length;
  for (let i2 = 0; i2 < x; i2++) {
    out = "A" + out;
  }
  return out;
}
function intToB64b(n, l = 1) {
  const s = intToB64(n, l);
  return b(s);
}
function b64ToInt(s) {
  if (s.length == 0) {
    throw new Error("Empty string, conversion undefined.");
  }
  let i = 0;
  const rev = s.split("").reverse();
  rev.forEach((c, e) => {
    i |= B64IdxByChr.get(c) << e * 6;
  });
  return i;
}
function b(s) {
  return encoder.encode(s);
}
function d(u) {
  return decoder.decode(u);
}
function concat(one, two) {
  const out = new Uint8Array(one.length + two.length);
  out.set(one);
  out.set(two, one.length);
  return out;
}
function readInt(array) {
  let value = 0;
  for (let i = 0; i < array.length; i++) {
    value = value * 256 + array[i];
  }
  return value;
}

// src/keri/core/matter.ts
import { Buffer as Buffer3 } from "buffer";

// src/keri/core/base64.ts
import { Buffer as Buffer2 } from "buffer";
function encodeBase64Url(buffer) {
  if (!Buffer2.isBuffer(buffer)) {
    throw new TypeError("`buffer` must be a buffer.");
  }
  return buffer.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+/, "");
}
function decodeBase64Url(input) {
  if (!(typeof input === "string")) {
    throw new TypeError("`input` must be a string.");
  }
  const n = input.length % 4;
  const padded = input + "=".repeat(n > 0 ? 4 - n : n);
  const base64String = padded.replace(/-/g, "+").replace(/_/g, "/");
  return Buffer2.from(base64String, "base64");
}

// src/keri/core/matter.ts
var Codex = class {
  has(prop) {
    const m = new Map(
      Array.from(Object.entries(this), (v) => [v[1], v[0]])
    );
    return m.has(prop);
  }
};
var MatterCodex = class extends Codex {
  Ed25519_Seed = "A";
  // Ed25519 256 bit random seed for private key
  Ed25519N = "B";
  // Ed25519 verification key non-transferable, basic derivation.
  X25519 = "C";
  // X25519 public encryption key, converted from Ed25519 or Ed25519N.
  Ed25519 = "D";
  // Ed25519 verification key basic derivation
  Blake3_256 = "E";
  // Blake3 256 bit digest self-addressing derivation.
  SHA3_256 = "H";
  // SHA3 256 bit digest self-addressing derivation.
  SHA2_256 = "I";
  // SHA2 256 bit digest self-addressing derivation.
  ECDSA_256k1_Seed = "J";
  // ECDSA secp256k1 256 bit random Seed for private key
  X25519_Private = "O";
  // X25519 private decryption key converted from Ed25519
  X25519_Cipher_Seed = "P";
  // X25519 124 char b64 Cipher of 44 char qb64 Seed
  ECDSA_256r1_Seed = "Q";
  // ECDSA secp256r1 256 bit random Seed for private key
  Salt_128 = "0A";
  // 128 bit random salt or 128 bit number (see Huge)
  Ed25519_Sig = "0B";
  // Ed25519 signature.
  ECDSA_256k1_Sig = "0C";
  // ECDSA secp256k1 signature.
  ECDSA_256r1_Sig = "0I";
  // ECDSA secp256r1 signature.
  StrB64_L0 = "4A";
  // String Base64 Only Lead Size 0
  StrB64_L1 = "5A";
  // String Base64 Only Lead Size 1
  StrB64_L2 = "6A";
  // String Base64 Only Lead Size 2
  ECDSA_256k1N = "1AAA";
  // ECDSA secp256k1 verification key non-transferable, basic derivation.
  ECDSA_256k1 = "1AAB";
  // ECDSA public verification or encryption key, basic derivation
  X25519_Cipher_Salt = "1AAH";
  // X25519 100 char b64 Cipher of 24 char qb64 Salt
  ECDSA_256r1N = "1AAI";
  // ECDSA secp256r1 verification key non-transferable, basic derivation.
  ECDSA_256r1 = "1AAJ";
  // ECDSA secp256r1 verification or encryption key, basic derivation
  StrB64_Big_L0 = "7AAA";
  // String Base64 Only Big Lead Size 0
  StrB64_Big_L1 = "8AAA";
  // String Base64 Only Big Lead Size 1
  StrB64_Big_L2 = "9AAA";
  // String Base64 Only Big Lead Size 2
};
var MtrDex = new MatterCodex();
var NonTransCodex = class extends Codex {
  Ed25519N = "B";
  // Ed25519 verification key non-transferable, basic derivation.
  ECDSA_256k1N = "1AAA";
  // ECDSA secp256k1 verification key non-transferable, basic derivation.
  Ed448N = "1AAC";
  // Ed448 non-transferable prefix public signing verification key. Basic derivation.
  ECDSA_256r1N = "1AAI";
  // ECDSA secp256r1 verification key non-transferable, basic derivation.
};
var NonTransDex = new NonTransCodex();
var DigiCodex = class extends Codex {
  Blake3_256 = "E";
  // Blake3 256 bit digest self-addressing derivation.
  Blake2b_256 = "F";
  // Blake2b 256 bit digest self-addressing derivation.
  Blake2s_256 = "G";
  // Blake2s 256 bit digest self-addressing derivation.
  SHA3_256 = "H";
  // SHA3 256 bit digest self-addressing derivation.
  SHA2_256 = "I";
  // SHA2 256 bit digest self-addressing derivation.
  Blake3_512 = "0D";
  // Blake3 512 bit digest self-addressing derivation.
  Blake2b_512 = "0E";
  // Blake2b 512 bit digest self-addressing derivation.
  SHA3_512 = "0F";
  // SHA3 512 bit digest self-addressing derivation.
  SHA2_512 = "0G";
  // SHA2 512 bit digest self-addressing derivation.
};
var DigiDex = new DigiCodex();
var NumCodex = class extends Codex {
  Short = "M";
  // Short 2 byte b2 number
  Long = "0H";
  // Long 4 byte b2 number
  Big = "N";
  // Big 8 byte b2 number
  Huge = "0A";
  // Huge 16 byte b2 number (same as Salt_128)
};
var NumDex = new NumCodex();
var BexCodex = class extends Codex {
  StrB64_L0 = "4A";
  // String Base64 Only Leader Size 0
  StrB64_L1 = "5A";
  // String Base64 Only Leader Size 1
  StrB64_L2 = "6A";
  // String Base64 Only Leader Size 2
  StrB64_Big_L0 = "7AAA";
  // String Base64 Only Big Leader Size 0
  StrB64_Big_L1 = "8AAA";
  // String Base64 Only Big Leader Size 1
  StrB64_Big_L2 = "9AAA";
  // String Base64 Only Big Leader Size 2
};
var BexDex = new BexCodex();
var SmallVarRawSizeCodex = class extends Codex {
  Lead0 = "4";
  // First Selector Character for all ls == 0 codes
  Lead1 = "5";
  // First Selector Character for all ls == 1 codes
  Lead2 = "6";
  // First Selector Character for all ls == 2 codes
};
var SmallVrzDex = new SmallVarRawSizeCodex();
var LargeVarRawSizeCodex = class extends Codex {
  Lead0_Big = "7";
  // First Selector Character for all ls == 0 codes
  Lead1_Big = "8";
  // First Selector Character for all ls == 1 codes
  Lead2_Big = "9";
  // First Selector Character for all ls == 2 codes
};
var LargeVrzDex = new LargeVarRawSizeCodex();
var Sizage = class {
  hs;
  ss;
  ls;
  fs;
  constructor(hs, ss, fs, ls) {
    this.hs = hs;
    this.ss = ss;
    this.fs = fs;
    this.ls = ls;
  }
};
var Matter = class _Matter {
  static Sizes = new Map(
    Object.entries({
      A: new Sizage(1, 0, 44, 0),
      B: new Sizage(1, 0, 44, 0),
      C: new Sizage(1, 0, 44, 0),
      D: new Sizage(1, 0, 44, 0),
      E: new Sizage(1, 0, 44, 0),
      F: new Sizage(1, 0, 44, 0),
      G: new Sizage(1, 0, 44, 0),
      H: new Sizage(1, 0, 44, 0),
      I: new Sizage(1, 0, 44, 0),
      J: new Sizage(1, 0, 44, 0),
      K: new Sizage(1, 0, 76, 0),
      L: new Sizage(1, 0, 76, 0),
      M: new Sizage(1, 0, 4, 0),
      N: new Sizage(1, 0, 12, 0),
      O: new Sizage(1, 0, 44, 0),
      P: new Sizage(1, 0, 124, 0),
      Q: new Sizage(1, 0, 44, 0),
      "0A": new Sizage(2, 0, 24, 0),
      "0B": new Sizage(2, 0, 88, 0),
      "0C": new Sizage(2, 0, 88, 0),
      "0D": new Sizage(2, 0, 88, 0),
      "0E": new Sizage(2, 0, 88, 0),
      "0F": new Sizage(2, 0, 88, 0),
      "0G": new Sizage(2, 0, 88, 0),
      "0H": new Sizage(2, 0, 8, 0),
      "0I": new Sizage(2, 0, 88, 0),
      "1AAA": new Sizage(4, 0, 48, 0),
      "1AAB": new Sizage(4, 0, 48, 0),
      "1AAC": new Sizage(4, 0, 80, 0),
      "1AAD": new Sizage(4, 0, 80, 0),
      "1AAE": new Sizage(4, 0, 56, 0),
      "1AAF": new Sizage(4, 0, 8, 0),
      "1AAG": new Sizage(4, 0, 36, 0),
      "1AAH": new Sizage(4, 0, 100, 0),
      "1AAI": new Sizage(4, 0, 48, 0),
      "1AAJ": new Sizage(4, 0, 48, 0),
      "2AAA": new Sizage(4, 0, 8, 1),
      "3AAA": new Sizage(4, 0, 8, 2),
      "4A": new Sizage(2, 2, void 0, 0),
      "5A": new Sizage(2, 2, void 0, 1),
      "6A": new Sizage(2, 2, void 0, 2),
      "7AAA": new Sizage(4, 4, void 0, 0),
      "8AAA": new Sizage(4, 4, void 0, 1),
      "9AAA": new Sizage(4, 4, void 0, 2),
      "4B": new Sizage(2, 2, void 0, 0),
      "5B": new Sizage(2, 2, void 0, 1),
      "6B": new Sizage(2, 2, void 0, 2),
      "7AAB": new Sizage(4, 4, void 0, 0),
      "8AAB": new Sizage(4, 4, void 0, 1),
      "9AAB": new Sizage(4, 4, void 0, 2)
    })
  );
  static Hards = /* @__PURE__ */ new Map([
    ["A", 1],
    ["B", 1],
    ["C", 1],
    ["D", 1],
    ["E", 1],
    ["F", 1],
    ["G", 1],
    ["H", 1],
    ["I", 1],
    ["J", 1],
    ["K", 1],
    ["L", 1],
    ["M", 1],
    ["N", 1],
    ["O", 1],
    ["P", 1],
    ["Q", 1],
    ["R", 1],
    ["S", 1],
    ["T", 1],
    ["U", 1],
    ["V", 1],
    ["W", 1],
    ["X", 1],
    ["Y", 1],
    ["Z", 1],
    ["a", 1],
    ["b", 1],
    ["c", 1],
    ["d", 1],
    ["e", 1],
    ["f", 1],
    ["g", 1],
    ["h", 1],
    ["i", 1],
    ["j", 1],
    ["k", 1],
    ["l", 1],
    ["m", 1],
    ["n", 1],
    ["o", 1],
    ["p", 1],
    ["q", 1],
    ["r", 1],
    ["s", 1],
    ["t", 1],
    ["u", 1],
    ["v", 1],
    ["w", 1],
    ["x", 1],
    ["y", 1],
    ["z", 1],
    ["0", 2],
    ["1", 4],
    ["2", 4],
    ["3", 4],
    ["4", 2],
    ["5", 2],
    ["6", 2],
    ["7", 4],
    ["8", 4],
    ["9", 4]
  ]);
  _code = "";
  _size = -1;
  _raw = new Uint8Array(0);
  constructor({
    raw,
    code = MtrDex.Ed25519N,
    qb64b,
    qb64,
    qb2,
    rize
  }) {
    let size = -1;
    if (raw != void 0) {
      if (code.length == 0) {
        throw new Error(
          "Improper initialization need either (raw and code) or qb64b or qb64 or qb2."
        );
      }
      if (SmallVrzDex.has(code[0]) || LargeVrzDex.has(code[0])) {
        if (rize !== void 0) {
          if (rize < 0)
            throw new Error(
              `missing var raw size for code=${code}`
            );
        } else {
          rize = raw.length;
        }
        const ls = (3 - rize % 3) % 3;
        size = Math.floor((rize + ls) / 3);
        if (SmallVrzDex.has(code[0])) {
          if (size <= 64 ** 2 - 1) {
            const hs = 2;
            const s = Object.values(SmallVrzDex)[ls];
            code = `${s}${code.substring(1, hs)}`;
          } else if (size <= 64 ** 4 - 1) {
            const hs = 4;
            const s = Object.values(LargeVrzDex)[ls];
            code = `${s}${"AAAA".substring(0, hs - 2)}${code[1]}`;
          } else {
            throw new Error(
              `Unsupported raw size for code=${code}`
            );
          }
        } else {
          if (size <= 64 ** 4 - 1) {
            const hs = 4;
            const s = Object.values(LargeVrzDex)[ls];
            code = `${s}${code.substring(1, hs)}`;
          } else {
            throw new Error(
              `Unsupported raw size for code=${code}`
            );
          }
        }
      } else {
        const sizage = _Matter.Sizes.get(code);
        if (sizage.fs == -1) {
          throw new Error(`Unsupported variable size code=${code}`);
        }
        rize = _Matter._rawSize(code);
      }
      raw = raw.slice(0, rize);
      if (raw.length != rize) {
        throw new Error(
          `Not enougth raw bytes for code=${code} expected ${rize} got ${raw.length}.`
        );
      }
      this._code = code;
      this._size = size;
      this._raw = raw;
    } else if (qb64 !== void 0) {
      this._exfil(qb64);
    } else if (qb64b !== void 0) {
      const qb642 = d(qb64b);
      this._exfil(qb642);
    } else if (qb2 !== void 0) {
      this._bexfil(qb2);
    } else {
      throw new EmptyMaterialError("EmptyMaterialError");
    }
  }
  get code() {
    return this._code;
  }
  get size() {
    return this._size;
  }
  get raw() {
    return this._raw;
  }
  get qb64() {
    return this._infil();
  }
  get qb64b() {
    return b(this.qb64);
  }
  get transferable() {
    return !NonTransDex.has(this.code);
  }
  get digestive() {
    return DigiDex.has(this.code);
  }
  static _rawSize(code) {
    const sizage = this.Sizes.get(code);
    const cs = sizage.hs + sizage.ss;
    if (sizage.fs === -1) {
      throw Error(`Non-fixed raw size code ${code}.`);
    }
    return Math.floor((sizage.fs - cs) * 3 / 4) - sizage.ls;
  }
  static _leadSize(code) {
    const sizage = this.Sizes.get(code);
    return sizage.ls;
  }
  get both() {
    const sizage = _Matter.Sizes.get(this.code);
    return `${this.code}${intToB64(this.size, sizage.ss)}`;
  }
  _infil() {
    const code = this.code;
    const size = this.size;
    const raw = this.raw;
    const ps = (3 - raw.length % 3) % 3;
    const sizage = _Matter.Sizes.get(code);
    if (sizage.fs === void 0) {
      const cs = sizage.hs + sizage.ss;
      if (cs % 4) {
        throw new Error(
          `Whole code size not multiple of 4 for variable length material. cs=${cs}`
        );
      }
      if (size < 0 || size > 64 ** sizage.ss - 1) {
        throw new Error(`Invalid size=${size} for code=${code}.`);
      }
      const both = `${code}${intToB64(size, sizage.ss)}`;
      if (both.length % 4 !== ps - sizage.ls) {
        throw new Error(
          `Invalid code=${both} for converted raw pad size=${ps}.`
        );
      }
      const bytes = new Uint8Array(sizage.ls + raw.length);
      for (let i = 0; i < sizage.ls; i++) {
        bytes[i] = 0;
      }
      for (let i = 0; i < raw.length; i++) {
        const odx = i + ps;
        bytes[odx] = raw[i];
      }
      return both + encodeBase64Url(Buffer3.from(bytes));
    } else {
      const both = code;
      const cs = both.length;
      if (cs % 4 != ps - sizage.ls) {
        throw new Error(
          `Invalid code=${both} for converted raw pad size=${ps}, ${raw.length}.`
        );
      }
      const bytes = new Uint8Array(ps + raw.length);
      for (let i = 0; i < ps; i++) {
        bytes[i] = 0;
      }
      for (let i = 0; i < raw.length; i++) {
        const odx = i + ps;
        bytes[odx] = raw[i];
      }
      return both + encodeBase64Url(Buffer3.from(bytes)).slice(cs % 4);
    }
  }
  _exfil(qb64) {
    if (qb64.length == 0) {
      throw new Error("Empty Material");
    }
    const first = qb64[0];
    if (!Array.from(_Matter.Hards.keys()).includes(first)) {
      throw new Error(`Unexpected code ${first}`);
    }
    const hs = _Matter.Hards.get(first);
    if (qb64.length < hs) {
      throw new Error(`Shortage Error`);
    }
    const hard = qb64.slice(0, hs);
    if (!Array.from(_Matter.Sizes.keys()).includes(hard)) {
      throw new Error(`Unsupported code ${hard}`);
    }
    const sizage = _Matter.Sizes.get(hard);
    const cs = sizage.hs + sizage.ss;
    let size = -1;
    if (sizage.fs == -1) {
      throw new Error("Variable size codes not supported yet");
    } else {
      size = sizage.fs;
    }
    if (qb64.length < sizage.fs) {
      throw new Error(`Need ${sizage.fs - qb64.length} more chars.`);
    }
    qb64 = qb64.slice(0, sizage.fs);
    const ps = cs % 4;
    const pbs = 2 * (ps == 0 ? sizage.ls : ps);
    let raw;
    if (ps != 0) {
      const base = new Array(ps + 1).join("A") + qb64.slice(cs);
      const paw = decodeBase64Url(base);
      const pi = readInt(paw.subarray(0, ps));
      if (pi & 2 ** pbs - 1) {
        throw new Error(
          `Non zeroed prepad bits = {pi & (2 ** pbs - 1 ):<06b} in {qb64b[cs:cs+1]}.`
        );
      }
      raw = paw.subarray(ps);
    } else {
      const base = qb64.slice(cs);
      const paw = decodeBase64Url(base);
      const li = readInt(paw.subarray(0, sizage.ls));
      if (li != 0) {
        if (li == 1) {
          throw new Error(`Non zeroed lead byte = 0x{li:02x}.`);
        } else {
          throw new Error(`Non zeroed lead bytes = 0x{li:04x}`);
        }
      }
      raw = paw.subarray(sizage.ls);
    }
    this._code = hard;
    this._size = size;
    this._raw = Uint8Array.from(raw);
  }
  _bexfil(qb2) {
    throw new Error(`qb2 not yet supported: ${qb2}`);
  }
};

// src/keri/core/verfer.ts
import libsodium from "libsodium-wrappers-sumo";
import secp256r1 from "ecdsa-secp256r1";
var Verfer = class extends Matter {
  _verify;
  constructor({ raw, code, qb64, qb64b, qb2 }) {
    super({ raw, code, qb64, qb64b, qb2 });
    if (Array.from([MtrDex.Ed25519N, MtrDex.Ed25519]).includes(this.code)) {
      this._verify = this._ed25519;
    } else if (Array.from([MtrDex.ECDSA_256r1N, MtrDex.ECDSA_256r1]).includes(
      this.code
    )) {
      this._verify = this._secp256r1;
    } else {
      throw new Error(`Unsupported code = ${this.code} for verifier.`);
    }
  }
  verify(sig, ser) {
    return this._verify(sig, ser, this.raw);
  }
  _ed25519(sig, ser, key) {
    try {
      return libsodium.crypto_sign_verify_detached(sig, ser, key);
    } catch (error) {
      throw new Error(error);
    }
  }
  _secp256r1(sig, ser, key) {
    try {
      const publicKey = secp256r1.fromCompressedPublicKey(key);
      return publicKey.verify(ser, sig);
    } catch (error) {
      throw new Error(error);
    }
  }
};

// src/keri/core/signer.ts
import libsodium2 from "libsodium-wrappers-sumo";

// src/keri/core/cigar.ts
var Cigar = class extends Matter {
  _verfer;
  constructor({ raw, code, qb64, qb64b, qb2 }, verfer) {
    super({ raw, code, qb64, qb64b, qb2 });
    this._verfer = verfer;
  }
  get verfer() {
    return this._verfer;
  }
  set verfer(verfer) {
    this._verfer = verfer;
  }
};

// src/keri/core/indexer.ts
import { Buffer as Buffer4 } from "buffer";
var IndexerCodex = class {
  Ed25519_Sig = "A";
  // Ed25519 sig appears same in both lists if any.
  Ed25519_Crt_Sig = "B";
  // Ed25519 sig appears in current list only.
  ECDSA_256k1_Sig = "C";
  // ECDSA secp256k1 sig appears same in both lists if any.
  ECDSA_256k1_Crt_Sig = "D";
  // ECDSA secp256k1 sig appears in current list.
  ECDSA_256r1_Sig = "E";
  // ECDSA secp256r1 sig appears same in both lists if any.
  ECDSA_256r1_Crt_Sig = "F";
  // ECDSA secp256r1 sig appears in current list.
  Ed448_Sig = "0A";
  // Ed448 signature appears in both lists.
  Ed448_Crt_Sig = "0B";
  // Ed448 signature appears in current list only.
  Ed25519_Big_Sig = "2A";
  // Ed25519 sig appears in both lists.
  Ed25519_Big_Crt_Sig = "2B";
  // Ed25519 sig appears in current list only.
  ECDSA_256k1_Big_Sig = "2C";
  // ECDSA secp256k1 sig appears in both lists.
  ECDSA_256k1_Big_Crt_Sig = "2D";
  // ECDSA secp256k1 sig appears in current list only.
  ECDSA_256r1_Big_Sig = "2E";
  // ECDSA secp256r1 sig appears in both lists.
  ECDSA_256r1_Big_Crt_Sig = "2F";
  // ECDSA secp256r1 sig appears in current list only.
  Ed448_Big_Sig = "3A";
  // Ed448 signature appears in both lists.
  Ed448_Big_Crt_Sig = "3B";
  // Ed448 signature appears in current list only.
};
var IdrDex = new IndexerCodex();
var IndexedSigCodex = class {
  Ed25519_Sig = "A";
  // Ed25519 sig appears same in both lists if any.
  Ed25519_Crt_Sig = "B";
  // Ed25519 sig appears in current list only.
  ECDSA_256k1_Sig = "C";
  // ECDSA secp256k1 sig appears same in both lists if any.
  ECDSA_256k1_Crt_Sig = "D";
  // ECDSA secp256k1 sig appears in current list.
  ECDSA_256r1_Sig = "E";
  // ECDSA secp256r1 sig appears same in both lists if any.
  ECDSA_256r1_Crt_Sig = "F";
  // ECDSA secp256r1 sig appears in current list.
  Ed448_Sig = "0A";
  // Ed448 signature appears in both lists.
  Ed448_Crt_Sig = "0B";
  // Ed448 signature appears in current list only.
  Ed25519_Big_Sig = "2A";
  // Ed25519 sig appears in both lists.
  Ed25519_Big_Crt_Sig = "2B";
  // Ed25519 sig appears in current list only.
  ECDSA_256k1_Big_Sig = "2C";
  // ECDSA secp256k1 sig appears in both lists.
  ECDSA_256k1_Big_Crt_Sig = "2D";
  // ECDSA secp256k1 sig appears in current list only.
  ECDSA_256r1_Big_Sig = "2E";
  // ECDSA secp256r1 sig appears in both lists.
  ECDSA_256r1_Big_Crt_Sig = "2F";
  // ECDSA secp256r1 sig appears in current list only.
  Ed448_Big_Sig = "3A";
  // Ed448 signature appears in both lists.
  Ed448_Big_Crt_Sig = "3B";
  // Ed448 signature appears in current list only.
  has(prop) {
    const m = new Map(
      Array.from(Object.entries(this), (v) => [v[1], v[0]])
    );
    return m.has(prop);
  }
};
var IdxSigDex = new IndexedSigCodex();
var IndexedCurrentSigCodex = class {
  Ed25519_Crt_Sig = "B";
  // Ed25519 sig appears in current list only.
  ECDSA_256k1_Crt_Sig = "D";
  // ECDSA secp256k1 sig appears in current list only.
  ECDSA_256r1_Crt_Sig = "F";
  // ECDSA secp256r1 sig appears in current list.
  Ed448_Crt_Sig = "0B";
  // Ed448 signature appears in current list only.
  Ed25519_Big_Crt_Sig = "2B";
  // Ed25519 sig appears in current list only.
  ECDSA_256k1_Big_Crt_Sig = "2D";
  // ECDSA secp256k1 sig appears in current list only.
  ECDSA_256r1_Big_Crt_Sig = "2F";
  // ECDSA secp256r1 sig appears in current list only.
  Ed448_Big_Crt_Sig = "3B";
  // Ed448 signature appears in current list only.
  has(prop) {
    const m = new Map(
      Array.from(Object.entries(this), (v) => [v[1], v[0]])
    );
    return m.has(prop);
  }
};
var IdxCrtSigDex = new IndexedCurrentSigCodex();
var IndexedBothSigCodex = class {
  Ed25519_Sig = "A";
  // Ed25519 sig appears same in both lists if any.
  ECDSA_256k1_Sig = "C";
  // ECDSA secp256k1 sig appears same in both lists if any.
  Ed448_Sig = "0A";
  // Ed448 signature appears in both lists.
  Ed25519_Big_Sig = "2A";
  // Ed25519 sig appears in both listsy.
  ECDSA_256k1_Big_Sig = "2C";
  // ECDSA secp256k1 sig appears in both lists.
  Ed448_Big_Sig = "3A";
  // Ed448 signature appears in both lists.
  has(prop) {
    const m = new Map(
      Array.from(Object.entries(this), (v) => [v[1], v[0]])
    );
    return m.has(prop);
  }
};
var IdxBthSigDex = new IndexedBothSigCodex();
var Xizage = class {
  hs;
  ss;
  os;
  fs;
  ls;
  constructor(hs, ss, os, fs, ls) {
    this.hs = hs;
    this.ss = ss;
    this.os = os;
    this.fs = fs;
    this.ls = ls;
  }
};
var Indexer = class _Indexer {
  Codex = IdrDex;
  static Hards = /* @__PURE__ */ new Map([
    ["A", 1],
    ["B", 1],
    ["C", 1],
    ["D", 1],
    ["E", 1],
    ["F", 1],
    ["G", 1],
    ["H", 1],
    ["I", 1],
    ["J", 1],
    ["K", 1],
    ["L", 1],
    ["M", 1],
    ["N", 1],
    ["O", 1],
    ["P", 1],
    ["Q", 1],
    ["R", 1],
    ["S", 1],
    ["T", 1],
    ["U", 1],
    ["V", 1],
    ["W", 1],
    ["X", 1],
    ["Y", 1],
    ["Z", 1],
    ["a", 1],
    ["b", 1],
    ["c", 1],
    ["d", 1],
    ["e", 1],
    ["f", 1],
    ["g", 1],
    ["h", 1],
    ["i", 1],
    ["j", 1],
    ["k", 1],
    ["l", 1],
    ["m", 1],
    ["n", 1],
    ["o", 1],
    ["p", 1],
    ["q", 1],
    ["r", 1],
    ["s", 1],
    ["t", 1],
    ["u", 1],
    ["v", 1],
    ["w", 1],
    ["x", 1],
    ["y", 1],
    ["z", 1],
    ["0", 2],
    ["1", 2],
    ["2", 2],
    ["3", 2],
    ["4", 2]
  ]);
  static Sizes = new Map(
    Object.entries({
      A: new Xizage(1, 1, 0, 88, 0),
      B: new Xizage(1, 1, 0, 88, 0),
      C: new Xizage(1, 1, 0, 88, 0),
      D: new Xizage(1, 1, 0, 88, 0),
      E: new Xizage(1, 1, 0, 88, 0),
      F: new Xizage(1, 1, 0, 88, 0),
      "0A": new Xizage(2, 2, 1, 156, 0),
      "0B": new Xizage(2, 2, 1, 156, 0),
      "2A": new Xizage(2, 4, 2, 92, 0),
      "2B": new Xizage(2, 4, 2, 92, 0),
      "2C": new Xizage(2, 4, 2, 92, 0),
      "2D": new Xizage(2, 4, 2, 92, 0),
      "2E": new Xizage(2, 4, 2, 92, 0),
      "2F": new Xizage(2, 4, 2, 92, 0),
      "3A": new Xizage(2, 6, 3, 160, 0),
      "3B": new Xizage(2, 6, 3, 160, 0),
      "0z": new Xizage(2, 2, 0, void 0, 0),
      "1z": new Xizage(2, 2, 1, 76, 1),
      "4z": new Xizage(2, 6, 3, 80, 1)
    })
  );
  _code = "";
  _index = -1;
  _ondex;
  _raw = new Uint8Array(0);
  constructor({
    raw = void 0,
    code = IdrDex.Ed25519_Sig,
    index = 0,
    ondex = void 0,
    qb64b = void 0,
    qb64 = void 0,
    qb2 = void 0
  }) {
    if (raw != void 0) {
      if (code == void 0) {
        throw new EmptyMaterialError(
          `Improper initialization need either (raw and code) or qb64b or qb64 or qb2.`
        );
      }
      if (!_Indexer.Sizes.has(code)) {
        throw new Error(`Unsupported code=${code}.`);
      }
      const xizage = _Indexer.Sizes.get(code);
      const os = xizage.os;
      const fs = xizage.fs;
      const cs = xizage.hs + xizage.ss;
      const ms = xizage.ss - xizage.os;
      if (!Number.isInteger(index) || index < 0 || index > 64 ** ms - 1) {
        throw new Error(`Invalid index=${index} for code=${code}.`);
      }
      if (ondex != void 0 && xizage.os != 0 && !(ondex >= 0 && ondex <= 64 ** os - 1)) {
        throw new Error(`Invalid ondex=${ondex} for code=${code}.`);
      }
      if (IdxCrtSigDex.has(code) && ondex != void 0) {
        throw new Error(`Non None ondex=${ondex} for code=${code}.`);
      }
      if (IdxBthSigDex.has(code)) {
        if (ondex == void 0) {
          ondex = index;
        } else {
          if (ondex != index && os == 0) {
            throw new Error(
              `Non matching ondex=${ondex} and index=${index} for code=${code}.`
            );
          }
        }
      }
      if (fs == void 0) {
        throw new Error("variable length unsupported");
      }
      const rawsize = Math.floor((fs - cs) * 3 / 4);
      raw = raw.slice(0, rawsize);
      if (raw.length != rawsize) {
        throw new Error(
          `Not enougth raw bytes for code=${code} and index=${index} ,expected ${rawsize} got ${raw.length}.`
        );
      }
      this._code = code;
      this._index = index;
      this._ondex = ondex;
      this._raw = raw;
    } else if (qb64b != void 0) {
      const qb642 = d(qb64b);
      this._exfil(qb642);
    } else if (qb64 != void 0) {
      this._exfil(qb64);
    } else if (qb2 != void 0) {
      this._bexfil(qb2);
    } else {
      throw new EmptyMaterialError(
        `Improper initialization need either (raw and code and index) or qb64b or qb64 or qb2.`
      );
    }
  }
  _bexfil(qb2) {
    throw new Error(`qb2 not yet supported: ${qb2}`);
  }
  static _rawSize(code) {
    const xizage = _Indexer.Sizes.get(code);
    return Math.floor(xizage.fs - (xizage.hs + xizage.ss) * 3 / 4);
  }
  get code() {
    return this._code;
  }
  get raw() {
    return this._raw;
  }
  get index() {
    return this._index;
  }
  get ondex() {
    return this._ondex;
  }
  get qb64() {
    return this._infil();
  }
  get qb64b() {
    return b(this.qb64);
  }
  _infil() {
    const code = this.code;
    const index = this.index;
    const ondex = this.ondex;
    const raw = this.raw;
    const ps = (3 - raw.length % 3) % 3;
    const xizage = _Indexer.Sizes.get(code);
    const cs = xizage.hs + xizage.ss;
    const ms = xizage.ss - xizage.os;
    if (index < 0 || index > 64 ** ms - 1) {
      throw new Error(`Invalid index=${index} for code=${code}.`);
    }
    if (ondex != void 0 && xizage.os != 0 && !(ondex >= 0 && ondex <= 64 ** xizage.os - 1)) {
      throw new Error(
        `Invalid ondex=${ondex} for os=${xizage.os} and code=${code}.`
      );
    }
    const both = `${code}${intToB64(index, ms)}${intToB64(
      ondex == void 0 ? 0 : ondex,
      xizage.os
    )}`;
    if (both.length != cs) {
      throw new Error(
        `Mismatch code size = ${cs} with table = ${both.length}.`
      );
    }
    if (cs % 4 != ps - xizage.ls) {
      throw new Error(
        `Invalid code=${both} for converted raw pad size=${ps}.`
      );
    }
    const bytes = new Uint8Array(ps + raw.length);
    for (let i = 0; i < ps; i++) {
      bytes[i] = 0;
    }
    for (let i = 0; i < raw.length; i++) {
      const odx = i + ps;
      bytes[odx] = raw[i];
    }
    const full = both + encodeBase64Url(Buffer4.from(bytes)).slice(ps - xizage.ls);
    if (full.length != xizage.fs) {
      throw new Error(`Invalid code=${both} for raw size=${raw.length}.`);
    }
    return full;
  }
  _exfil(qb64) {
    if (qb64.length == 0) {
      throw new Error("Empty Material");
    }
    const first = qb64[0];
    if (!Array.from(_Indexer.Hards.keys()).includes(first)) {
      throw new Error(`Unexpected code ${first}`);
    }
    const hs = _Indexer.Hards.get(first);
    if (qb64.length < hs) {
      throw new Error(`Need ${hs - qb64.length} more characters.`);
    }
    const hard = qb64.slice(0, hs);
    if (!Array.from(_Indexer.Sizes.keys()).includes(hard)) {
      throw new Error(`Unsupported code ${hard}`);
    }
    const xizage = _Indexer.Sizes.get(hard);
    const cs = xizage.hs + xizage.ss;
    const ms = xizage.ss - xizage.os;
    if (qb64.length < cs) {
      throw new Error(`Need ${cs - qb64.length} more characters.`);
    }
    const sindex = qb64.slice(hs, hs + ms);
    const index = b64ToInt(sindex);
    const sondex = qb64.slice(hs + ms, hs + ms + xizage.os);
    let ondex;
    if (IdxCrtSigDex.has(hard)) {
      ondex = xizage.os != 0 ? b64ToInt(sondex) : void 0;
      if (ondex != 0 && ondex != void 0) {
        throw new Error(`Invalid ondex=${ondex} for code=${hard}.`);
      } else {
        ondex = void 0;
      }
    } else {
      ondex = xizage.os != 0 ? b64ToInt(sondex) : index;
    }
    if (xizage.fs == void 0) {
      throw new Error("variable length not supported");
    }
    if (qb64.length < xizage.fs) {
      throw new Error(`Need ${xizage.fs - qb64.length} more chars.`);
    }
    qb64 = qb64.slice(0, xizage.fs);
    const ps = cs % 4;
    const pbs = 2 * ps != 0 ? ps : xizage.ls;
    let raw;
    if (ps != 0) {
      const base = new Array(ps + 1).join("A") + qb64.slice(cs);
      const paw = decodeBase64Url(base);
      const pi = readInt(paw.slice(0, ps));
      if (pi & 2 ** pbs - 1) {
        throw new Error(
          `Non zeroed prepad bits = {pi & (2 ** pbs - 1 ):<06b} in {qb64b[cs:cs+1]}.`
        );
      }
      raw = paw.slice(ps);
    } else {
      const base = qb64.slice(cs);
      const paw = decodeBase64Url(base);
      const li = readInt(paw.slice(0, xizage.ls));
      if (li != 0) {
        if (li == 1) {
          throw new Error(`Non zeroed lead byte = 0x{li:02x}.`);
        } else {
          throw new Error(`Non zeroed lead bytes = 0x{li:04x}`);
        }
      }
      raw = paw.slice(xizage.ls);
    }
    if (raw.length != Math.floor((qb64.length - cs) * 3 / 4)) {
      throw new Error(`Improperly qualified material = ${qb64}`);
    }
    this._code = hard;
    this._index = index;
    this._ondex = ondex;
    this._raw = new Uint8Array(raw);
  }
};

// src/keri/core/siger.ts
var Siger = class extends Indexer {
  _verfer;
  constructor({ raw, code, index, ondex, qb64, qb64b, qb2 }, verfer) {
    super({ raw, code, index, ondex, qb64, qb64b, qb2 });
    if (!IdxSigDex.has(this.code)) {
      throw new Error(`Invalid code = ${this.code} for Siger.`);
    }
    this._verfer = verfer;
  }
  get verfer() {
    return this._verfer;
  }
  set verfer(verfer) {
    this._verfer = verfer;
  }
};

// src/keri/core/signer.ts
import { Buffer as Buffer5 } from "buffer";
var Signer = class extends Matter {
  _sign;
  _verfer;
  constructor({
    raw,
    code = MtrDex.Ed25519_Seed,
    qb64,
    qb64b,
    qb2,
    transferable = true
  }) {
    try {
      super({ raw, code, qb64, qb64b, qb2 });
    } catch (e) {
      if (e instanceof EmptyMaterialError) {
        if (code == MtrDex.Ed25519_Seed) {
          const raw2 = libsodium2.randombytes_buf(
            libsodium2.crypto_sign_SEEDBYTES
          );
          super({ raw: raw2, code, qb64, qb64b, qb2 });
        } else {
          throw new Error(`Unsupported signer code = ${code}.`);
        }
      } else {
        throw e;
      }
    }
    let verfer;
    if (this.code == MtrDex.Ed25519_Seed) {
      this._sign = this._ed25519;
      const keypair = libsodium2.crypto_sign_seed_keypair(this.raw);
      verfer = new Verfer({
        raw: keypair.publicKey,
        code: transferable ? MtrDex.Ed25519 : MtrDex.Ed25519N
      });
    } else {
      throw new Error(`Unsupported signer code = ${this.code}.`);
    }
    this._verfer = verfer;
  }
  /**
   * @description Property verfer:
   Returns Verfer instance
   Assumes ._verfer is correctly assigned
   */
  get verfer() {
    return this._verfer;
  }
  sign(ser, index = null, only = false, ondex = void 0) {
    return this._sign(ser, this.raw, this.verfer, index, only, ondex);
  }
  _ed25519(ser, seed, verfer, index, only = false, ondex) {
    const sig = libsodium2.crypto_sign_detached(
      ser,
      Buffer5.concat([seed, verfer.raw])
    );
    if (index == null) {
      return new Cigar({ raw: sig, code: MtrDex.Ed25519_Sig }, verfer);
    } else {
      let code;
      if (only) {
        ondex = void 0;
        if (index <= 63) {
          code = IdrDex.Ed25519_Crt_Sig;
        } else {
          code = IdrDex.Ed25519_Big_Crt_Sig;
        }
      } else {
        if (ondex == void 0) {
          ondex = index;
        }
        if (ondex == index && index <= 63)
          code = IdrDex.Ed25519_Sig;
        else
          code = IdrDex.Ed25519_Big_Sig;
      }
      return new Siger(
        { raw: sig, code, index, ondex },
        verfer
      );
    }
  }
};

// src/keri/core/decrypter.ts
import libsodium4 from "libsodium-wrappers-sumo";

// src/keri/core/salter.ts
import libsodium3 from "libsodium-wrappers-sumo";
var Tier = /* @__PURE__ */ ((Tier3) => {
  Tier3["low"] = "low";
  Tier3["med"] = "med";
  Tier3["high"] = "high";
  return Tier3;
})(Tier || {});
var Salter = class extends Matter {
  _tier;
  constructor({
    raw,
    code = MtrDex.Salt_128,
    tier = "low" /* low */,
    qb64,
    qb64b,
    qb2
  }) {
    try {
      super({ raw, code, qb64, qb64b, qb2 });
    } catch (e) {
      if (e instanceof EmptyMaterialError) {
        if (code == MtrDex.Salt_128) {
          const salt = libsodium3.randombytes_buf(
            libsodium3.crypto_pwhash_SALTBYTES
          );
          super({ raw: salt, code });
        } else {
          throw new Error(
            "invalid code for Salter, only Salt_128 accepted"
          );
        }
      } else {
        throw e;
      }
    }
    if (this.code != MtrDex.Salt_128) {
      throw new Error("invalid code for Salter, only Salt_128 accepted");
    }
    this._tier = tier !== null ? tier : "low" /* low */;
  }
  stretch(size = 32, path = "", tier = null, temp = false) {
    tier = tier == null ? this.tier : tier;
    let opslimit, memlimit;
    if (temp) {
      opslimit = 1;
      memlimit = 8192;
    } else {
      switch (tier) {
        case "low" /* low */:
          opslimit = 2;
          memlimit = 67108864;
          break;
        case "med" /* med */:
          opslimit = 3;
          memlimit = 268435456;
          break;
        case "high" /* high */:
          opslimit = 4;
          memlimit = 1073741824;
          break;
        default:
          throw new Error(`Unsupported security tier = ${tier}.`);
      }
    }
    return libsodium3.crypto_pwhash(
      size,
      path,
      this.raw,
      opslimit,
      memlimit,
      libsodium3.crypto_pwhash_ALG_ARGON2ID13
    );
  }
  signer(code = MtrDex.Ed25519_Seed, transferable = true, path = "", tier = null, temp = false) {
    const seed = this.stretch(Matter._rawSize(code), path, tier, temp);
    return new Signer({
      raw: seed,
      code,
      transferable
    });
  }
  get tier() {
    return this._tier;
  }
};

// src/keri/core/decrypter.ts
var Decrypter = class extends Matter {
  _decrypt;
  constructor({ raw, code = MtrDex.X25519_Private, qb64, qb64b, qb2 }, seed = void 0) {
    try {
      super({ raw, code, qb64, qb64b, qb2 });
    } catch (e) {
      if (e instanceof EmptyMaterialError) {
        if (seed != void 0) {
          const signer = new Signer({ qb64b: seed });
          if (signer.code != MtrDex.Ed25519_Seed) {
            throw new Error(
              `Unsupported signing seed derivation code ${signer.code}`
            );
          }
          const sigkey = new Uint8Array(
            signer.raw.length + signer.verfer.raw.length
          );
          sigkey.set(signer.raw);
          sigkey.set(signer.verfer.raw, signer.raw.length);
          raw = libsodium4.crypto_sign_ed25519_sk_to_curve25519(sigkey);
          super({ raw, code, qb64, qb64b, qb2 });
        } else {
          throw e;
        }
      } else {
        throw e;
      }
    }
    if (this.code == MtrDex.X25519_Private) {
      this._decrypt = this._x25519;
    } else {
      throw new Error(`Unsupported decrypter code = ${this.code}.`);
    }
  }
  decrypt(ser = null, cipher = null, transferable = false) {
    if (ser == null && cipher == null) {
      throw new EmptyMaterialError("Neither ser or cipher were provided");
    }
    if (ser != null) {
      cipher = new Cipher({ qb64b: ser });
    }
    return this._decrypt(cipher, this.raw, transferable);
  }
  _x25519(cipher, prikey, transferable = false) {
    const pubkey = libsodium4.crypto_scalarmult_base(prikey);
    const plain = libsodium4.crypto_box_seal_open(
      cipher.raw,
      pubkey,
      prikey
    );
    if (cipher.code == MtrDex.X25519_Cipher_Salt) {
      return new Salter({ qb64b: plain });
    } else if (cipher.code == MtrDex.X25519_Cipher_Seed) {
      return new Signer({ qb64b: plain, transferable });
    } else {
      throw new Error(`Unsupported cipher text code == ${cipher.code}`);
    }
  }
};

// src/keri/core/cipher.ts
var Cipher = class extends Matter {
  constructor({ raw, code, qb64, qb64b, qb2 }) {
    if (raw != void 0 && code == void 0) {
      if (raw.length == Matter._rawSize(MtrDex.X25519_Cipher_Salt)) {
        code = MtrDex.X25519_Cipher_Salt;
      } else if (raw.length == Matter._rawSize(MtrDex.X25519_Cipher_Seed)) {
        code = MtrDex.X25519_Cipher_Salt;
      }
    }
    super({ raw, code, qb64b, qb64, qb2 });
    if (!Array.from([
      MtrDex.X25519_Cipher_Salt,
      MtrDex.X25519_Cipher_Seed
    ]).includes(this.code)) {
      throw new Error(`Unsupported Cipher code == ${this.code}`);
    }
  }
  decrypt(prikey = void 0, seed = void 0) {
    const decrypter = new Decrypter({ qb64b: prikey }, seed);
    return decrypter.decrypt(this.qb64b);
  }
};

// src/keri/core/counter.ts
var CounterCodex = class extends Codex {
  ControllerIdxSigs = "-A";
  // Qualified Base64 Indexed Signature.
  WitnessIdxSigs = "-B";
  // Qualified Base64 Indexed Signature.
  NonTransReceiptCouples = "-C";
  // Composed Base64 Couple, pre+cig.
  TransReceiptQuadruples = "-D";
  // Composed Base64 Quadruple, pre+snu+dig+sig.
  FirstSeenReplayCouples = "-E";
  // Composed Base64 Couple, fnu+dts.
  TransIdxSigGroups = "-F";
  // Composed Base64 Group, pre+snu+dig+ControllerIdxSigs group.
  SealSourceCouples = "-G";
  // Composed Base64 couple, snu+dig of given delegators or issuers event
  TransLastIdxSigGroups = "-H";
  // Composed Base64 Group, pre+ControllerIdxSigs group.
  SealSourceTriples = "-I";
  // Composed Base64 triple, pre+snu+dig of anchoring source event
  SadPathSig = "-J";
  // Composed Base64 Group path+TransIdxSigGroup of SAID of content
  SadPathSigGroup = "-K";
  // Composed Base64 Group, root(path)+SaidPathCouples
  PathedMaterialQuadlets = "-L";
  // Composed Grouped Pathed Material Quadlet (4 char each)
  AttachedMaterialQuadlets = "-V";
  // Composed Grouped Attached Material Quadlet (4 char each)
  BigAttachedMaterialQuadlets = "-0V";
  // Composed Grouped Attached Material Quadlet (4 char each)
  KERIProtocolStack = "--AAA";
  // KERI ACDC Protocol Stack CESR Version
};
var CtrDex = new CounterCodex();
var Counter = class _Counter {
  static Sizes = new Map(
    Object.entries({
      "-A": new Sizage(2, 2, 4, 0),
      "-B": new Sizage(2, 2, 4, 0),
      "-C": new Sizage(2, 2, 4, 0),
      "-D": new Sizage(2, 2, 4, 0),
      "-E": new Sizage(2, 2, 4, 0),
      "-F": new Sizage(2, 2, 4, 0),
      "-G": new Sizage(2, 2, 4, 0),
      "-H": new Sizage(2, 2, 4, 0),
      "-I": new Sizage(2, 2, 4, 0),
      "-J": new Sizage(2, 2, 4, 0),
      "-K": new Sizage(2, 2, 4, 0),
      "-L": new Sizage(2, 2, 4, 0),
      "-V": new Sizage(2, 2, 4, 0),
      "-0V": new Sizage(3, 5, 8, 0),
      "--AAA": new Sizage(5, 3, 8, 0)
    })
  );
  static Hards = /* @__PURE__ */ new Map([
    ["-A", 2],
    ["-B", 2],
    ["-C", 2],
    ["-D", 2],
    ["-E", 2],
    ["-F", 2],
    ["-G", 2],
    ["-H", 2],
    ["-I", 2],
    ["-J", 2],
    ["-K", 2],
    ["-L", 2],
    ["-M", 2],
    ["-N", 2],
    ["-O", 2],
    ["-P", 2],
    ["-Q", 2],
    ["-R", 2],
    ["-S", 2],
    ["-T", 2],
    ["-U", 2],
    ["-V", 2],
    ["-W", 2],
    ["-X", 2],
    ["-Y", 2],
    ["-Z", 2],
    ["-a", 2],
    ["-b", 2],
    ["-c", 2],
    ["-d", 2],
    ["-e", 2],
    ["-f", 2],
    ["-g", 2],
    ["-h", 2],
    ["-i", 2],
    ["-j", 2],
    ["-k", 2],
    ["-l", 2],
    ["-m", 2],
    ["-n", 2],
    ["-o", 2],
    ["-p", 2],
    ["-q", 2],
    ["-r", 2],
    ["-s", 2],
    ["-t", 2],
    ["-u", 2],
    ["-v", 2],
    ["-w", 2],
    ["-x", 2],
    ["-y", 2],
    ["-z", 2],
    ["-0", 3],
    ["--", 5]
  ]);
  _code = "";
  _count = -1;
  constructor({ code, count, countB64, qb64b, qb64, qb2 }) {
    if (code != void 0) {
      if (!_Counter.Sizes.has(code)) {
        throw new Error(`"Unsupported code=${code}.`);
      }
      const sizage = _Counter.Sizes.get(code);
      const cs = sizage.hs + sizage.ss;
      if (sizage.fs != cs || cs % 4 != 0) {
        throw new Error(
          `Whole code size not full size or not multiple of 4. cs=${cs} fs=${sizage.fs}.`
        );
      }
      if (count == void 0) {
        count = countB64 == void 0 ? 1 : b64ToInt(countB64);
      }
      if (count < 0 || count > 64 ** sizage.ss - 1) {
        throw new Error(`Invalid count=${count} for code=${code}.`);
      }
      this._code = code;
      this._count = count;
    } else if (qb64b != void 0) {
      const qb642 = d(qb64b);
      this._exfil(qb642);
    } else if (qb64 != void 0) {
      this._exfil(qb64);
    } else if (qb2 != void 0) {
    } else {
      throw new Error(
        `Improper initialization need either (code and count) or qb64b or qb64 or qb2.`
      );
    }
  }
  get code() {
    return this._code;
  }
  get count() {
    return this._count;
  }
  get qb64() {
    return this._infil();
  }
  get qb64b() {
    return b(this.qb64);
  }
  countToB64(l) {
    if (l == void 0) {
      const sizage = _Counter.Sizes.get(this.code);
      l = sizage.ss;
    }
    return intToB64(this.count, l);
  }
  static semVerToB64(version = "", major = 0, minor = 0, patch = 0) {
    let parts = [major, minor, patch];
    if (version != "") {
      const ssplits = version.split(".");
      const splits = ssplits.map((x2) => {
        if (x2 == "")
          return 0;
        return parseInt(x2);
      });
      const off = splits.length;
      const x = 3 - off;
      for (let i = 0; i < x; i++) {
        splits.push(parts[i + off]);
      }
      parts = splits;
    }
    parts.forEach((p) => {
      if (p < 0 || p > 63) {
        throw new Error(
          `Out of bounds semantic version. Part=${p} is < 0 or > 63.`
        );
      }
    });
    return parts.map((p) => {
      return intToB64(p, 1);
    }).join("");
  }
  _infil() {
    const code = this.code;
    const count = this.count;
    const sizage = _Counter.Sizes.get(code);
    const cs = sizage.hs + sizage.ss;
    if (sizage.fs != cs || cs % 4 != 0) {
      throw new Error(
        `Whole code size not full size or not multiple of 4. cs=${cs} fs=${sizage.fs}.`
      );
    }
    if (count < 0 || count > 64 ** sizage.ss - 1) {
      throw new Error(`Invalid count=${count} for code=${code}.`);
    }
    const both = `${code}${intToB64(count, sizage.ss)}`;
    if (both.length % 4) {
      throw new Error(
        `Invalid size = ${both.length} of ${both} not a multiple of 4.`
      );
    }
    return both;
  }
  _exfil(qb64) {
    if (qb64.length == 0) {
      throw new Error("Empty Material");
    }
    const first = qb64.slice(0, 2);
    if (!_Counter.Hards.has(first)) {
      throw new Error(`Unexpected code ${first}`);
    }
    const hs = _Counter.Hards.get(first);
    if (qb64.length < hs) {
      throw new Error(`Need ${hs - qb64.length} more characters.`);
    }
    const hard = qb64.slice(0, hs);
    if (!_Counter.Sizes.has(hard)) {
      throw new Error(`Unsupported code ${hard}`);
    }
    const sizage = _Counter.Sizes.get(hard);
    const cs = sizage.hs + sizage.ss;
    if (qb64.length < cs) {
      throw new Error(`Need ${cs - qb64.length} more chars.`);
    }
    const scount = qb64.slice(sizage.hs, sizage.hs + sizage.ss);
    const count = b64ToInt(scount);
    this._code = hard;
    this._count = count;
  }
};

// src/keri/core/seqner.ts
var Seqner = class extends Matter {
  constructor({
    raw,
    code = MtrDex.Salt_128,
    qb64,
    qb64b,
    qb2,
    sn,
    snh,
    ...kwa
  }) {
    if (!raw && !qb64b && !qb64 && !qb2) {
      if (sn === void 0) {
        if (snh === void 0) {
          sn = 0;
        } else {
          sn = parseInt(snh, 16);
        }
      }
      raw = intToBytes(sn, Matter._rawSize(MtrDex.Salt_128));
    }
    super({ raw, code, qb64, qb64b, qb2, ...kwa });
    if (this.code !== MtrDex.Salt_128) {
      throw new Error(`Invalid code = ${this.code} for Seqner.`);
    }
  }
  get sn() {
    return bytesToInt(this.raw);
  }
  get snh() {
    return this.sn.toString(16);
  }
};

// src/keri/core/diger.ts
import { blake3 } from "@noble/hashes/blake3";
import { Buffer as Buffer6 } from "buffer";
var Diger = class _Diger extends Matter {
  _verify;
  // This constructor will assign digest verification function to ._verify
  constructor({ raw, code = MtrDex.Blake3_256, qb64, qb64b, qb2 }, ser = null) {
    try {
      super({ raw, code, qb64, qb64b, qb2 });
    } catch (error) {
      if (ser == null) {
        throw error;
      }
      if (code === MtrDex.Blake3_256) {
        const dig = Buffer6.from(
          blake3.create({ dkLen: 32 }).update(ser).digest()
        );
        super({ raw: dig, code });
      } else {
        throw new Error(`Unsupported code = ${code} for digester.`);
      }
    }
    if (code === MtrDex.Blake3_256) {
      this._verify = this.blake3_256;
    } else {
      throw new Error(`Unsupported code = ${code} for digester.`);
    }
  }
  /**
   *
   * @param {Uint8Array} ser  serialization bytes
   * @description  This method will return true if digest of bytes serialization ser matches .raw
   * using .raw as reference digest for ._verify digest algorithm determined
   by .code
   */
  verify(ser) {
    return this._verify(ser, this.raw);
  }
  compare(ser, dig = null, diger = null) {
    if (dig != null) {
      if (dig.toString() == this.qb64) {
        return true;
      }
      diger = new _Diger({ qb64b: dig });
    } else if (diger != null) {
      if (diger.qb64b == this.qb64b) {
        return true;
      }
    } else {
      throw new Error("Both dig and diger may not be None.");
    }
    if (diger.code == this.code) {
      return false;
    }
    return diger.verify(ser) && this.verify(ser);
  }
  blake3_256(ser, dig) {
    const digest = Buffer6.from(
      blake3.create({ dkLen: 32 }).update(ser).digest()
    );
    return digest.toString() === dig.toString();
  }
};

// src/keri/core/number.ts
var CesrNumber = class extends Matter {
  constructor({ raw, code, qb64b, qb64, qb2 }, num, numh) {
    let _num;
    if (raw == void 0 && qb64 == void 0 && qb64b == void 0 && qb2 == void 0) {
      if (typeof num == "number") {
        _num = num;
      } else if (numh != void 0) {
        _num = parseInt(numh, 16);
      } else {
        _num = 0;
      }
    }
    if (_num == void 0) {
      throw new Error("Invalid whole number");
    }
    if (_num <= 256 ** 2 - 1) {
      code = NumDex.Short;
    } else if (_num <= 256 ** 4 - 1) {
      code = code = NumDex.Long;
    } else if (_num <= 256 ** 8 - 1) {
      code = code = NumDex.Big;
    } else if (_num <= 256 ** 16 - 1) {
      code = code = NumDex.Huge;
    } else {
      throw new Error(`Invalid num = ${num}, too large to encode.`);
    }
    raw = intToBytes(_num, Matter._rawSize(code));
    super({ raw, code, qb64b, qb64, qb2 });
    if (!NumDex.has(this.code)) {
      throw new Error("Invalid code " + code + " for Number");
    }
  }
  get num() {
    return bytesToInt(this.raw);
  }
  get numh() {
    return this.num.toString(16);
  }
  get positive() {
    return this.num > 0;
  }
};

// src/keri/core/serder.ts
var Serder = class {
  _kind;
  _raw = "";
  _ked = {};
  _ident = "KERI" /* KERI */;
  _size = 0;
  _version = Versionage;
  _code;
  constructor(ked, kind = "JSON" /* JSON */, code = MtrDex.Blake3_256) {
    this._code = code;
    this._kind = kind;
    this.ked = ked;
  }
  set ked(ked) {
    const [raw, ident, kind, kd, version] = this._exhale(ked, this._kind);
    const size = raw.length;
    this._raw = raw;
    this._ident = ident;
    this._ked = kd;
    this._kind = kind;
    this._size = size;
    this._version = version;
  }
  get pre() {
    return this._ked["i"];
  }
  get ked() {
    return this._ked;
  }
  get code() {
    return this._code;
  }
  get raw() {
    return this._raw;
  }
  get sner() {
    return new CesrNumber({}, this.ked["s"]);
  }
  get sn() {
    return this.sner.num;
  }
  get kind() {
    return this._kind;
  }
  _exhale(ked, kind) {
    return sizeify(ked, kind);
  }
  get ident() {
    return this._ident;
  }
  get size() {
    return this._size;
  }
  get version() {
    return this._version;
  }
  get verfers() {
    let keys = [];
    if ("k" in this._ked) {
      keys = this._ked["k"];
    } else {
      keys = [];
    }
    const verfers = [];
    for (const key of keys) {
      verfers.push(new Verfer({ qb64: key }));
    }
    return verfers;
  }
  get digers() {
    let keys = [];
    if ("n" in this._ked) {
      keys = this._ked["n"];
    } else {
      keys = [];
    }
    const digers = [];
    for (const key of keys) {
      digers.push(new Diger({ qb64: key }));
    }
    return digers;
  }
  pretty() {
    return JSON.stringify(this._ked, void 0, 2);
  }
};
function dumps(ked, kind) {
  if (kind == "JSON" /* JSON */) {
    return JSON.stringify(ked);
  } else {
    throw new Error("unsupported event encoding");
  }
}
function sizeify(ked, kind) {
  if (!("v" in ked)) {
    throw new Error("Missing or empty version string");
  }
  const [ident, knd, version] = deversify(ked["v"]);
  if (version != Versionage) {
    throw new Error(`unsupported version ${version.toString()}`);
  }
  if (kind == void 0) {
    kind = knd;
  }
  let raw = dumps(ked, kind);
  const size = new TextEncoder().encode(raw).length;
  ked["v"] = versify(ident, version, kind, size);
  raw = dumps(ked, kind);
  return [raw, ident, kind, ked, version];
}

// src/keri/core/prefixer.ts
import { Buffer as Buffer7 } from "buffer";
import { blake3 as blake32 } from "@noble/hashes/blake3";
var Dummy = "#";
var Prefixer = class _Prefixer extends Matter {
  _derive;
  _verify;
  constructor({ raw, code, qb64b, qb64, qb2 }, ked) {
    try {
      super({ raw, code, qb64b, qb64, qb2 });
    } catch (e) {
      if (e instanceof EmptyMaterialError) {
        if (ked == void 0 || code == void 0 && !("i" in ked)) {
          throw e;
        }
        if (code == void 0) {
          super({ qb64: ked["i"], code });
          code = this.code;
        }
        let _derive;
        if (code == MtrDex.Ed25519N) {
          _derive = _Prefixer._derive_ed25519N;
        } else if (code == MtrDex.Ed25519) {
          _derive = _Prefixer._derive_ed25519;
        } else if (code == MtrDex.Blake3_256) {
          _derive = _Prefixer._derive_blake3_256;
        } else {
          throw new Error(`Unsupported code = ${code} for prefixer.`);
        }
        [raw, code] = _derive(ked);
        super({ raw, code });
        this._derive = _derive;
      } else {
        throw e;
      }
    }
    if (this.code == MtrDex.Ed25519N) {
      this._verify = this._verify_ed25519N;
    } else if (this.code == MtrDex.Ed25519) {
      this._verify = this._verify_ed25519;
    } else if (this.code == MtrDex.Blake3_256) {
      this._verify = this._verify_blake3_256;
    } else {
      throw new Error(`Unsupported code = ${code} for prefixer.`);
    }
  }
  derive(ked) {
    if (ked["i"] != Ilks.icp) {
      throw new Error(
        `Non-incepting ilk ${ked["i"]} for prefix derivation`
      );
    }
    return this._derive(ked);
  }
  verify(ked, prefixed = false) {
    if (ked["i"] != Ilks.icp) {
      throw new Error(
        `Non-incepting ilk ${ked["i"]} for prefix derivation`
      );
    }
    return this._verify(ked, this.qb64, prefixed);
  }
  static _derive_ed25519N(ked) {
    let verfer;
    const keys = ked["k"];
    if (keys.length != 1) {
      throw new Error(
        `Basic derivation needs at most 1 key got ${keys.length} keys instead`
      );
    }
    try {
      verfer = new Verfer({ qb64: keys[0] });
    } catch (e) {
      throw new Error(`Error extracting public key = ${e}`);
    }
    if (verfer.code != MtrDex.Ed25519N) {
      throw new Error(`Mismatch derivation code = ${verfer.code}`);
    }
    const next = "n" in ked ? ked["n"] : [];
    if (verfer.code == MtrDex.Ed25519N && next.length > 0) {
      throw new Error(
        `Non-empty nxt = ${next} for non-transferable code = ${verfer.code}`
      );
    }
    const backers = "b" in ked ? ked["b"] : [];
    if (verfer.code == MtrDex.Ed25519N && backers.length > 0) {
      throw new Error(
        `Non-empty b =${backers} for non-transferable code = ${verfer.code}`
      );
    }
    const anchor = "a" in ked ? ked["a"] : [];
    if (verfer.code == MtrDex.Ed25519N && anchor.length > 0) {
      throw new Error(
        `Non-empty a = ${verfer.code} for non-transferable code = ${verfer.code}`
      );
    }
    return [verfer.raw, verfer.code];
  }
  static _derive_ed25519(ked) {
    let verfer;
    const keys = ked["k"];
    if (keys.length != 1) {
      throw new Error(
        `Basic derivation needs at most 1 key got ${keys.length} keys instead`
      );
    }
    try {
      verfer = new Verfer({ qb64: keys[0] });
    } catch (e) {
      throw new Error(`Error extracting public key = ${e}`);
    }
    if (verfer.code in [MtrDex.Ed25519]) {
      throw new Error(`Mismatch derivation code = ${verfer.code}`);
    }
    return [verfer.raw, verfer.code];
  }
  static _derive_blake3_256(ked) {
    const kd = ked;
    const ilk = ked["t"];
    if (![Ilks.icp, Ilks.dip, Ilks.vcp, Ilks.dip].includes(ilk)) {
      throw new Error(`Invalid ilk = ${ilk} to derive pre.`);
    }
    kd["i"] = "".padStart(Matter.Sizes.get(MtrDex.Blake3_256).fs, Dummy);
    kd["d"] = ked["i"];
    const [raw] = sizeify(ked);
    const dig = Buffer7.from(
      blake32.create({ dkLen: 32 }).update(raw).digest()
    );
    return [dig, MtrDex.Blake3_256];
  }
  _verify_ed25519N(ked, pre, prefixed = false) {
    try {
      const keys = ked["k"];
      if (keys.length != 1) {
        return false;
      }
      if (keys[0] != pre) {
        return false;
      }
      if (prefixed && ked["i"] != pre) {
        return false;
      }
      const next = "n" in ked ? ked["n"] : [];
      if (next.length > 0) {
        return false;
      }
    } catch (e) {
      return false;
    }
    return true;
  }
  _verify_ed25519(ked, pre, prefixed = false) {
    try {
      const keys = ked["k"];
      if (keys.length != 1) {
        return false;
      }
      if (keys[0] != pre) {
        return false;
      }
      if (prefixed && ked["i"] != pre) {
        return false;
      }
    } catch (e) {
      return false;
    }
    return true;
  }
  _verify_blake3_256(ked, pre, prefixed = false) {
    try {
      const [raw] = _Prefixer._derive_blake3_256(ked);
      const crymat = new Matter({ raw, code: MtrDex.Blake3_256 });
      if (crymat.qb64 != pre) {
        return false;
      }
      if (prefixed && ked["i"] != pre) {
        return false;
      }
    } catch (e) {
      return false;
    }
    return true;
  }
};

// src/keri/core/saider.ts
import { Buffer as Buffer8 } from "buffer";
import { blake3 as blake33 } from "@noble/hashes/blake3";
var Dummy2 = "#";
var Ids = /* @__PURE__ */ ((Ids2) => {
  Ids2["d"] = "d";
  return Ids2;
})(Ids || {});
var Digestage = class {
  klas = void 0;
  size = 0;
  length = 0;
  constructor(klas, size, length) {
    this.klas = klas;
    this.size = size;
    this.length = length;
  }
};
var Saider = class _Saider extends Matter {
  static Digests = /* @__PURE__ */ new Map([
    [
      MtrDex.Blake3_256,
      new Digestage(_Saider._derive_blake3_256, void 0, void 0)
    ]
  ]);
  constructor({ raw, code, qb64b, qb64, qb2 }, sad, kind, label = "d" /* d */) {
    try {
      super({ raw, code, qb64b, qb64, qb2 });
    } catch (e) {
      if (e instanceof EmptyMaterialError) {
        if (sad == void 0 || !(label in sad)) {
          throw e;
        }
        if (code == void 0) {
          if (sad[label] != "") {
            super({ qb64: sad[label], code });
            code = this.code;
          } else {
            code = MtrDex.Blake3_256;
          }
        }
        if (!DigiDex.has(code)) {
          throw new Error(`Unsupported digest code = ${code}`);
        }
        [raw] = _Saider._derive({ ...sad }, code, kind, label);
        super({ raw, code });
      } else {
        throw e;
      }
    }
    if (!this.digestive) {
      throw new Error(`Unsupported digest code = ${this.code}.`);
    }
  }
  static _derive_blake3_256(ser, _digest_size, _length) {
    return Buffer8.from(blake33.create({ dkLen: 32 }).update(ser).digest());
  }
  static _derive(sad, code, kind, label) {
    if (!DigiDex.has(code) || !_Saider.Digests.has(code)) {
      throw new Error(`Unsupported digest code = ${code}.`);
    }
    sad = { ...sad };
    sad[label] = "".padStart(Matter.Sizes.get(code).fs, Dummy2);
    if ("v" in sad) {
      [, , kind, sad] = sizeify(sad, kind);
    }
    const ser = { ...sad };
    const digestage = _Saider.Digests.get(code);
    const cpa = _Saider._serialze(ser, kind);
    const args = [];
    if (digestage.size != void 0) {
      args.push(digestage.size);
    }
    if (digestage.length != void 0) {
      args.push(digestage.length);
    }
    return [digestage.klas(cpa, ...args), sad];
  }
  derive(sad, code, kind, label) {
    code = code != void 0 ? code : this.code;
    return _Saider._derive(sad, code, kind, label);
  }
  verify(sad, prefixed = false, versioned = false, kind, label = "d" /* d */) {
    try {
      const [raw, dsad] = _Saider._derive(sad, this.code, kind, label);
      const saider = new _Saider({ raw, code: this.code });
      if (this.qb64 != saider.qb64) {
        return false;
      }
      if ("v" in sad && versioned) {
        if (sad["v"] != dsad["v"]) {
          return false;
        }
      }
      if (prefixed && sad[label] != this.qb64) {
        return false;
      }
    } catch (e) {
      return false;
    }
    return true;
  }
  static _serialze(sad, kind) {
    let knd = "JSON" /* JSON */;
    if ("v" in sad) {
      [, knd] = deversify(sad["v"]);
    }
    if (kind == void 0) {
      kind = knd;
    }
    return dumps(sad, kind);
  }
  static saidify(sad, code = MtrDex.Blake3_256, kind = "JSON" /* JSON */, label = "d" /* d */) {
    if (!(label in sad)) {
      throw new Error(`Missing id field labeled=${label} in sad.`);
    }
    let raw;
    [raw, sad] = _Saider._derive(sad, code, kind, label);
    const saider = new _Saider(
      { raw, code },
      void 0,
      kind,
      label
    );
    sad[label] = saider.qb64;
    return [saider, sad];
  }
};

// src/keri/core/utils.ts
function pad(n, width = 3, z = 0) {
  return (String(z).repeat(width) + String(n)).slice(String(n).length);
}
function extractValues(ked, labels) {
  let values = [];
  for (const label of labels) {
    values = extractElementValues(ked[label], values);
  }
  return values;
}
function arrayEquals(ar1, ar2) {
  return ar1.length === ar2.length && ar1.every((val, index) => val === ar2[index]);
}
function extractElementValues(element, values) {
  let data = [];
  try {
    if (element instanceof Array && !(typeof element == "string")) {
      for (const k in element)
        extractElementValues(element[k], values);
    } else if (typeof element == "string") {
      values.push(element);
    }
    data = values;
  } catch (error) {
    throw new Error(error);
  }
  return data;
}
function nowUTC() {
  return /* @__PURE__ */ new Date();
}
function range(start, stop, step) {
  if (typeof stop == "undefined") {
    stop = start;
    start = 0;
  }
  if (typeof step == "undefined") {
    step = 1;
  }
  if (step > 0 && start >= stop || step < 0 && start <= stop) {
    return [];
  }
  const result = new Array();
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }
  return result;
}
function intToBytes(value, length) {
  const byteArray = new Uint8Array(length);
  for (let index = byteArray.length - 1; index >= 0; index--) {
    const byte = value & 255;
    byteArray[index] = byte;
    value = (value - byte) / 256;
  }
  return byteArray;
}
function bytesToInt(ar) {
  let value = 0;
  for (let i = 0; i < ar.length; i++) {
    value = value * 256 + ar[i];
  }
  return value;
}
function serializeACDCAttachment(anc) {
  const prefixer = new Prefixer({ qb64: anc.pre });
  const seqner = new Seqner({ sn: anc.sn });
  const saider = new Saider({ qb64: anc.ked["d"] });
  const craw = new Uint8Array();
  const ctr = new Counter({ code: CtrDex.SealSourceTriples, count: 1 }).qb64b;
  const prefix = prefixer.qb64b;
  const seq = seqner.qb64b;
  const said = saider.qb64b;
  const newCraw = new Uint8Array(
    craw.length + ctr.length + prefix.length + seq.length + said.length
  );
  newCraw.set(craw);
  newCraw.set(ctr, craw.length);
  newCraw.set(prefix, craw.length + ctr.length);
  newCraw.set(seq, craw.length + ctr.length + prefix.length);
  newCraw.set(said, craw.length + ctr.length + prefix.length + seq.length);
  return newCraw;
}
function serializeIssExnAttachment(anc) {
  const seqner = new Seqner({ sn: anc.sn });
  const ancSaider = new Saider({ qb64: anc.ked["d"] });
  const coupleArray = new Uint8Array(
    seqner.qb64b.length + ancSaider.qb64b.length
  );
  coupleArray.set(seqner.qb64b);
  coupleArray.set(ancSaider.qb64b, seqner.qb64b.length);
  const counter = new Counter({
    code: CtrDex.SealSourceCouples,
    count: 1
  });
  const counterQb64b = counter.qb64b;
  const atc = new Uint8Array(counter.qb64b.length + coupleArray.length);
  atc.set(counterQb64b);
  atc.set(coupleArray, counterQb64b.length);
  if (atc.length % 4 !== 0) {
    throw new Error(
      `Invalid attachments size: ${atc.length}, non-integral quadlets detected.`
    );
  }
  const pcnt = new Counter({
    code: CtrDex.AttachedMaterialQuadlets,
    count: Math.floor(atc.length / 4)
  });
  const msg = new Uint8Array(pcnt.qb64b.length + atc.length);
  msg.set(pcnt.qb64b);
  msg.set(atc, pcnt.qb64b.length);
  return msg;
}

// src/keri/core/encrypter.ts
var Encrypter = class extends Matter {
  _encrypt;
  constructor({ raw, code = MtrDex.X25519, qb64, qb64b, qb2 }, verkey = null) {
    if (raw == void 0 && verkey != null) {
      const verfer = new Verfer({ qb64b: verkey });
      if (!Array.from([MtrDex.Ed25519N, MtrDex.Ed25519]).includes(
        verfer.code
      )) {
        throw new Error(
          `Unsupported verkey derivation code = ${verfer.code}.`
        );
      }
      raw = libsodium5.crypto_sign_ed25519_pk_to_curve25519(verfer.raw);
    }
    super({ raw, code, qb64, qb64b, qb2 });
    if (this.code == MtrDex.X25519) {
      this._encrypt = this._x25519;
    } else {
      throw new Error(`Unsupported encrypter code = ${this.code}.`);
    }
  }
  verifySeed(seed) {
    const signer = new Signer({ qb64b: seed });
    const keypair = libsodium5.crypto_sign_seed_keypair(signer.raw);
    const pubkey = libsodium5.crypto_sign_ed25519_pk_to_curve25519(
      keypair.publicKey
    );
    return arrayEquals(pubkey, this.raw);
  }
  encrypt(ser = null, matter = null) {
    if (ser == null && matter == null) {
      throw new Error("Neither ser nor matter are provided.");
    }
    if (ser != null) {
      matter = new Matter({ qb64b: ser });
    }
    let code;
    if (matter.code == MtrDex.Salt_128) {
      code = MtrDex.X25519_Cipher_Salt;
    } else {
      code = MtrDex.X25519_Cipher_Seed;
    }
    return this._encrypt(matter.qb64, this.raw, code);
  }
  _x25519(ser, pubkey, code) {
    const raw = libsodium5.crypto_box_seal(ser, pubkey);
    return new Cipher({ raw, code });
  }
};

// src/keri/core/manager.ts
var Algos = /* @__PURE__ */ ((Algos2) => {
  Algos2["randy"] = "randy";
  Algos2["salty"] = "salty";
  Algos2["group"] = "group";
  Algos2["extern"] = "extern";
  return Algos2;
})(Algos || {});
var PubLot = class {
  pubs = new Array();
  // list qb64 public keys.
  ridx = 0;
  //  index of rotation (est event) that uses public key set
  kidx = 0;
  //  index of key in sequence of public keys
  dt = "";
  // datetime ISO8601 when key set created
};
var PreSit = class {
  old = new PubLot();
  //previous publot
  new = new PubLot();
  //newly current publot
  nxt = new PubLot();
  //next public publot
};
var PrePrm = class {
  pidx = 0;
  // prefix index for this keypair sequence
  algo = "salty" /* salty */;
  // salty default uses indices and salt to create new key pairs
  salt = "";
  // empty salt  used for salty algo.
  stem = "";
  // default unique path stem for salty algo
  tier = "";
  // security tier for stretch index salty algo
};
var PubSet = class {
  pubs = new Array();
  // list qb64 public keys.
};
var PubPath = class {
  path = "";
  code = "";
  tier = "high" /* high */;
  temp = false;
};
var Keys = class {
  _signers;
  _paths;
  constructor(signers, paths) {
    this._signers = signers;
    if (paths != void 0) {
      if (signers.length != paths.length) {
        throw new Error(
          "If paths are provided, they must be the same length as signers"
        );
      }
    }
    this._paths = paths;
  }
  get paths() {
    return this._paths;
  }
  get signers() {
    return this._signers;
  }
};
var RandyCreator = class {
  create(codes = void 0, count = 1, code = MtrDex.Ed25519_Seed, transferable = true) {
    const signers = new Array();
    if (codes == void 0) {
      codes = new Array(count).fill(code);
    }
    codes.forEach(function(code2) {
      signers.push(
        new Signer({ code: code2, transferable })
      );
    });
    return new Keys(signers);
  }
  get salt() {
    return "";
  }
  get stem() {
    return "";
  }
  get tier() {
    return "";
  }
};
var SaltyCreator = class {
  salter;
  _stem;
  constructor(salt = void 0, tier = void 0, stem = void 0) {
    this.salter = new Salter({ qb64: salt, tier });
    this._stem = stem == void 0 ? "" : stem;
  }
  get salt() {
    return this.salter.qb64;
  }
  get stem() {
    return this._stem;
  }
  get tier() {
    return this.salter.tier;
  }
  create(codes = void 0, count = 1, code = MtrDex.Ed25519_Seed, transferable = true, pidx = 0, ridx = 0, kidx = 0, temp = false) {
    const signers = new Array();
    const paths = new Array();
    if (codes == void 0) {
      codes = new Array(count).fill(code);
    }
    codes.forEach((code2, idx) => {
      const path = this.stem == "" ? pidx.toString(16) : this.stem + ridx.toString(16) + (kidx + idx).toString(16);
      signers.push(
        this.salter.signer(code2, transferable, path, this.tier, temp)
      );
      paths.push(path);
    });
    return new Keys(signers, paths);
  }
};
var Creatory = class {
  _make;
  constructor(algo = "salty" /* salty */) {
    switch (algo) {
      case "randy" /* randy */:
        this._make = this._makeRandy;
        break;
      case "salty" /* salty */:
        this._make = this._makeSalty;
        break;
      default:
        throw new Error(`unsupported algo=${algo}`);
    }
  }
  make(...args) {
    return this._make(...args);
  }
  _makeRandy() {
    return new RandyCreator();
  }
  _makeSalty(...args) {
    return new SaltyCreator(...args);
  }
};
function openManager(passcode, salt) {
  if (passcode.length < 21) {
    throw new Error("Bran (passcode seed material) too short.");
  }
  const bran = MtrDex.Salt_128 + "A" + passcode.substring(0, 21);
  const signer = new Salter({ qb64: bran }).signer(
    MtrDex.Ed25519_Seed,
    false
  );
  const seed = signer.qb64;
  const aeid = signer.verfer.qb64;
  let algo;
  const salter = salt != void 0 ? new Salter({ qb64: salt }) : void 0;
  if (salt != void 0) {
    algo = "salty" /* salty */;
  } else {
    algo = "randy" /* randy */;
  }
  return new Manager({ seed, aeid, algo, salter });
}
var Manager = class {
  _seed;
  _salt;
  _encrypter;
  _decrypter;
  _ks;
  constructor({ ks, seed, aeid, pidx, algo, salter, tier }) {
    this._ks = ks == void 0 ? new Keeper() : ks;
    this._seed = seed;
    this._encrypter = void 0;
    this._decrypter = void 0;
    aeid = aeid == void 0 ? void 0 : aeid;
    pidx = pidx == void 0 ? 0 : pidx;
    algo = algo == void 0 ? "salty" /* salty */ : algo;
    const salt = salter?.qb64;
    tier = tier == void 0 ? "low" /* low */ : tier;
    if (this.pidx == void 0) {
      this.pidx = pidx;
    }
    if (this.algo == void 0) {
      this.algo = algo;
    }
    if (this.salt == void 0) {
      this.salt = salt;
    }
    if (this.tier == void 0) {
      this.tier = tier;
    }
    if (this.aeid == void 0) {
      this.updateAeid(aeid, this._seed);
    }
  }
  get ks() {
    return this._ks;
  }
  get encrypter() {
    return this._encrypter;
  }
  get decrypter() {
    return this._decrypter;
  }
  get seed() {
    return this._seed;
  }
  get aeid() {
    return this.ks.getGbls("aeid");
  }
  get pidx() {
    const pidx = this.ks.getGbls("pidx");
    if (pidx != void 0) {
      return parseInt(pidx, 16);
    }
    return void 0;
  }
  set pidx(pidx) {
    this.ks.pinGbls("pidx", pidx.toString(16));
  }
  get salt() {
    if (this._decrypter == void 0) {
      return this._salt;
    } else {
      const salt = this.ks.getGbls("salt");
      return this._decrypter.decrypt(b(salt)).qb64;
    }
  }
  set salt(salt) {
    if (this._encrypter == void 0) {
      this._salt = salt;
    } else {
      salt = this._encrypter.encrypt(b(salt)).qb64;
      this.ks.pinGbls("salt", salt);
    }
  }
  get tier() {
    return this.ks.getGbls("tier");
  }
  set tier(tier) {
    this.ks.pinGbls("tier", tier);
  }
  get algo() {
    const a = this.ks.getGbls("algo");
    const ta = a;
    return Algos[ta];
  }
  set algo(algo) {
    this.ks.pinGbls("algo", algo);
  }
  updateAeid(aeid, seed) {
    if (this.aeid != void 0) {
      const seed2 = b(this._seed);
      if (this._seed == void 0 || !this._encrypter?.verifySeed(seed2)) {
        throw new Error(`Last seed missing or provided last seed "
                                       "not associated with last aeid=${this.aeid}.`);
      }
    }
    if (aeid != "" && aeid != void 0) {
      if (aeid != this.aeid) {
        this._encrypter = new Encrypter({}, b(aeid));
        if (seed == void 0 || !this._encrypter.verifySeed(b(seed))) {
          throw new Error(`Seed missing or provided seed not associated"
                                           "  with provided aeid=${aeid}.`);
        }
      }
    } else if (this.algo == "randy" /* randy */) {
      throw new Error(
        "Invalid Manager configuration, encryption must be used with Randy key creation."
      );
    } else {
      this._encrypter = void 0;
    }
    const salt = this.salt;
    if (salt != void 0) {
      this.salt = salt;
    }
    if (this._decrypter != void 0) {
      for (const [keys, data] of this.ks.prmsElements()) {
        if (data.salt != void 0) {
          const salter = this._decrypter.decrypt(b(data.salt));
          data.salt = this._encrypter == void 0 ? salter.qb64 : this._encrypter.encrypt(null, salter);
          this.ks.pinPrms(keys, data);
        }
      }
      for (const [pubKey, signer] of this.ks.prisElements(
        this._decrypter
      )) {
        this.ks.pinPris(pubKey, signer, this._encrypter);
      }
    }
    this.ks.pinGbls("aeid", aeid);
    this._seed = seed;
    this._decrypter = seed != void 0 ? new Decrypter({}, b(seed)) : void 0;
  }
  incept({
    icodes = void 0,
    icount = 1,
    icode = MtrDex.Ed25519_Seed,
    ncodes = void 0,
    ncount = 1,
    ncode = MtrDex.Ed25519_Seed,
    dcode = MtrDex.Blake3_256,
    algo = void 0,
    salt = void 0,
    stem = void 0,
    tier = void 0,
    rooted = true,
    transferable = true,
    temp = false
  }) {
    if (rooted && algo == void 0) {
      algo = this.algo;
    }
    if (rooted && salt == void 0) {
      salt = this.salt;
    }
    if (rooted && tier == void 0) {
      tier = this.tier;
    }
    const pidx = this.pidx;
    const ridx = 0;
    const kidx = 0;
    const creator = new Creatory(algo).make(salt, tier, stem);
    if (icodes == void 0) {
      if (icount < 0) {
        throw new Error(`Invalid icount=${icount} must be >= 0.`);
      }
      icodes = new Array(icount).fill(icode);
    }
    const ikeys = creator.create(
      icodes,
      0,
      MtrDex.Ed25519_Seed,
      transferable,
      pidx,
      ridx,
      kidx,
      temp
    );
    const verfers = Array.from(
      ikeys.signers,
      (signer) => signer.verfer
    );
    if (ncodes == void 0) {
      if (ncount < 0) {
        throw new Error(`Invalid ncount=${ncount} must be >= 0.`);
      }
      ncodes = new Array(ncount).fill(ncode);
    }
    const nkeys = creator.create(
      ncodes,
      0,
      MtrDex.Ed25519_Seed,
      transferable,
      pidx,
      ridx + 1,
      kidx + icodes.length,
      temp
    );
    const digers = Array.from(
      nkeys.signers,
      (signer) => new Diger({ code: dcode }, signer.verfer.qb64b)
    );
    const pp = new PrePrm();
    pp.pidx = pidx;
    pp.algo = algo;
    pp.salt = creator.salt.length == 0 || this.encrypter == void 0 ? "" : this.encrypter.encrypt(b(creator.salt)).qb64;
    pp.stem = creator.stem;
    pp.tier = creator.tier;
    const dt = (/* @__PURE__ */ new Date()).toString();
    const nw = new PubLot();
    nw.pubs = Array.from(verfers, (verfer) => verfer.qb64);
    nw.ridx = ridx;
    nw.kidx = kidx;
    nw.dt = dt;
    const nt = new PubLot();
    nt.pubs = Array.from(
      nkeys.signers,
      (signer) => signer.verfer.qb64
    );
    nt.ridx = ridx + 1;
    nt.kidx = kidx + icodes.length;
    nt.dt = dt;
    const ps = new PreSit();
    ps.new = nw;
    ps.nxt = nt;
    const pre = verfers[0].qb64;
    if (!this.ks.putPres(pre, verfers[0].qb64b)) {
      throw new Error(`Already incepted pre=${pre}.`);
    }
    if (!this.ks.putPrms(pre, pp)) {
      throw new Error(`Already incepted prm for pre=${pre}.`);
    }
    this.pidx = pidx + 1;
    if (!this.ks.putSits(pre, ps)) {
      throw new Error(`Already incepted sit for pre=${pre}.`);
    }
    if (this.encrypter != void 0) {
      ikeys.signers.forEach((signer) => {
        this.ks.putPris(signer.verfer.qb64, signer, this.encrypter);
      });
      nkeys.signers.forEach((signer) => {
        this.ks.putPris(signer.verfer.qb64, signer, this.encrypter);
      });
    } else if (this._encrypter == void 0 && ikeys.paths != void 0 && nkeys.paths != void 0) {
      ikeys.paths.forEach((path, idx) => {
        const signer = ikeys.signers[idx];
        const ppt = new PubPath();
        ppt.path = path;
        ppt.code = icodes[idx];
        ppt.tier = pp.tier;
        ppt.temp = temp;
        this.ks.putPths(signer.verfer.qb64, ppt);
      });
      nkeys.paths.forEach((path, idx) => {
        const signer = nkeys.signers[idx];
        const ppt = new PubPath();
        ppt.path = path;
        ppt.code = ncodes[idx];
        ppt.tier = pp.tier;
        ppt.temp = temp;
        this.ks.putPths(signer.verfer.qb64, ppt);
      });
    } else {
      throw new Error(
        "invalid configuration, randy keys without encryption"
      );
    }
    const pubSet = new PubSet();
    pubSet.pubs = ps.new.pubs;
    this.ks.putPubs(riKey(pre, ridx), pubSet);
    const nxtPubSet = new PubSet();
    nxtPubSet.pubs = ps.nxt.pubs;
    this.ks.putPubs(riKey(pre, ridx + 1), nxtPubSet);
    return [verfers, digers];
  }
  move(old, gnu) {
    if (old == gnu) {
      return;
    }
    if (this.ks.getPres(old) == void 0) {
      throw new Error(`Nonexistent old pre=${old}, nothing to assign.`);
    }
    if (this.ks.getPres(gnu) != void 0) {
      throw new Error(`Preexistent new pre=${gnu} may not clobber.`);
    }
    const oldprm = this.ks.getPrms(old);
    if (oldprm == void 0) {
      throw new Error(
        `Nonexistent old prm for pre=${old}, nothing to move.`
      );
    }
    if (this.ks.getPrms(gnu) != void 0) {
      throw new Error(
        `Preexistent new prm for pre=${gnu} may not clobber.`
      );
    }
    const oldsit = this.ks.getSits(old);
    if (oldsit == void 0) {
      throw new Error(
        `Nonexistent old sit for pre=${old}, nothing to move.`
      );
    }
    if (this.ks.getSits(gnu) != void 0) {
      throw new Error(
        `Preexistent new sit for pre=${gnu} may not clobber.`
      );
    }
    if (!this.ks.putPrms(gnu, oldprm)) {
      throw new Error(
        `Failed moving prm from old pre=${old} to new pre=${gnu}.`
      );
    } else {
      this.ks.remPrms(old);
    }
    if (!this.ks.putSits(gnu, oldsit)) {
      throw new Error(
        `Failed moving sit from old pre=${old} to new pre=${gnu}.`
      );
    } else {
      this.ks.remSits(old);
    }
    let i = 0;
    while (true) {
      const pl = this.ks.getPubs(riKey(old, i));
      if (pl == void 0) {
        break;
      }
      if (!this.ks.putPubs(riKey(gnu, i), pl)) {
        throw new Error(
          `Failed moving pubs at pre=${old} ri=${i} to new pre=${gnu}`
        );
      }
      i = i + 1;
    }
    if (!this.ks.pinPres(old, b(gnu))) {
      throw new Error(
        `Failed assiging new pre=${gnu} to old pre=${old}.`
      );
    }
    if (!this.ks.putPres(gnu, b(gnu))) {
      throw new Error(`Failed assiging new pre=${gnu}.`);
    }
  }
  rotate({
    pre,
    ncodes = void 0,
    ncount = 1,
    ncode = MtrDex.Ed25519_Seed,
    dcode = MtrDex.Blake3_256,
    transferable = true,
    temp = false,
    erase = true
  }) {
    const pp = this.ks.getPrms(pre);
    if (pp == void 0) {
      throw new Error(`Attempt to rotate nonexistent pre=${pre}.`);
    }
    const ps = this.ks.getSits(pre);
    if (ps == void 0) {
      throw new Error(`Attempt to rotate nonexistent pre=${pre}.`);
    }
    if (ps.nxt.pubs == void 0 || ps.nxt.pubs.length == 0) {
      throw new Error(`Attempt to rotate nontransferable pre=${pre}.`);
    }
    const old = ps.old;
    ps.old = ps.new;
    ps.new = ps.nxt;
    if (this.aeid != void 0 && this.decrypter == void 0) {
      throw new Error(
        "Unauthorized decryption attempt.  Aeid but no decrypter."
      );
    }
    const verfers = new Array();
    ps.new.pubs.forEach((pub) => {
      if (this.decrypter != void 0) {
        const signer = this.ks.getPris(pub, this.decrypter);
        if (signer == void 0) {
          throw new Error(`Missing prikey in db for pubkey=${pub}`);
        }
        verfers.push(signer.verfer);
      } else {
        verfers.push(new Verfer({ qb64: pub }));
      }
    });
    let salt = pp.salt;
    if (salt != void 0 && salt != "") {
      if (this.decrypter == void 0) {
        throw new Error(
          "Invalid configuration: AID salt with no encryption"
        );
      }
      salt = this.decrypter.decrypt(b(salt)).qb64;
    } else {
      salt = this.salt;
    }
    const creator = new Creatory(pp.algo).make(salt, pp.tier, pp.stem);
    if (ncodes == void 0) {
      if (ncount < 0) {
        throw new Error(`Invalid count=${ncount} must be >= 0`);
      }
      ncodes = new Array(ncount).fill(ncode);
    }
    const pidx = pp.pidx;
    const ridx = ps.new.ridx + 1;
    const kidx = ps.nxt.kidx + ps.new.pubs.length;
    const keys = creator.create(
      ncodes,
      0,
      "",
      transferable,
      pidx,
      ridx,
      kidx,
      temp
    );
    const digers = Array.from(
      keys.signers,
      (signer) => new Diger({ code: dcode }, signer.verfer.qb64b)
    );
    const dt = (/* @__PURE__ */ new Date()).toString();
    ps.nxt = new PubLot();
    ps.nxt.pubs = Array.from(
      keys.signers,
      (signer) => signer.verfer.qb64
    );
    ps.nxt.ridx = ridx;
    ps.nxt.kidx = kidx;
    ps.nxt.dt = dt;
    if (!this.ks.pinSits(pre, ps)) {
      throw new Error(`Problem updating pubsit db for pre=${pre}.`);
    }
    if (this.encrypter != void 0) {
      keys.signers.forEach((signer) => {
        this.ks.putPris(signer.verfer.qb64, signer, this.encrypter);
      });
    } else if (this._encrypter == void 0 && keys.paths != void 0) {
      keys.paths.forEach((path, idx) => {
        const signer = keys.signers[idx];
        const ppt = new PubPath();
        ppt.path = path;
        ppt.tier = pp.tier;
        ppt.temp = temp;
        this.ks.putPths(signer.verfer.qb64, ppt);
      });
    } else {
      throw new Error(
        "invalid configuration, randy keys without encryption"
      );
    }
    const newPs = new PubSet();
    newPs.pubs = ps.nxt.pubs;
    this.ks.putPubs(riKey(pre, ps.nxt.ridx), newPs);
    if (erase) {
      old.pubs.forEach((pub) => {
        this.ks.remPris(pub);
      });
    }
    return [verfers, digers];
  }
  sign({
    ser,
    pubs = void 0,
    verfers = void 0,
    indexed = true,
    indices = void 0,
    ondices = void 0
  }) {
    const signers = new Array();
    if (pubs == void 0 && verfers == void 0) {
      throw new Error("pubs or verfers required");
    }
    if (pubs != void 0) {
      if (this.aeid != void 0 && this.decrypter == void 0) {
        throw new Error(
          "Unauthorized decryption attempt.  Aeid but no decrypter."
        );
      }
      pubs.forEach((pub) => {
        if (this.decrypter != void 0) {
          const signer = this.ks.getPris(pub, this.decrypter);
          if (signer == void 0) {
            throw new Error(
              `Missing prikey in db for pubkey=${pub}`
            );
          }
          signers.push(signer);
        } else {
          const verfer = new Verfer({ qb64: pub });
          const ppt = this.ks.getPths(pub);
          if (ppt == void 0) {
            throw new Error(
              `Missing prikey in db for pubkey=${pub}`
            );
          }
          const salter = new Salter({ qb64: this.salt });
          signers.push(
            salter.signer(
              ppt.code,
              verfer.transferable,
              ppt.path,
              ppt.tier,
              ppt.temp
            )
          );
        }
      });
    } else {
      verfers.forEach((verfer) => {
        if (this.decrypter != void 0) {
          const signer = this.ks.getPris(verfer.qb64, this.decrypter);
          if (signer == void 0) {
            throw new Error(
              `Missing prikey in db for pubkey=${verfer.qb64}`
            );
          }
          signers.push(signer);
        } else {
          const ppt = this.ks.getPths(verfer.qb64);
          if (ppt == void 0) {
            throw new Error(
              `Missing prikey in db for pubkey=${verfer.qb64}`
            );
          }
          const salter = new Salter({ qb64: this.salt });
          signers.push(
            salter.signer(
              ppt.code,
              verfer.transferable,
              ppt.path,
              ppt.tier,
              ppt.temp
            )
          );
        }
      });
    }
    if (indices != void 0 && indices.length != signers.length) {
      throw new Error(
        `Mismatch indices length=${indices.length} and resultant signers length=${signers.length}`
      );
    }
    if (ondices != void 0 && ondices.length != signers.length) {
      throw new Error(
        `Mismatch ondices length=${ondices.length} and resultant signers length=${signers.length}`
      );
    }
    if (indexed) {
      const sigers = new Array();
      signers.forEach((signer, idx) => {
        let i;
        if (indices != void 0) {
          i = indices[idx];
          if (i < 0) {
            throw new Error(
              `Invalid signing index = ${i}, not whole number.`
            );
          }
        } else {
          i = idx;
        }
        let o;
        if (ondices != void 0) {
          o = ondices[idx];
          if (o <= 0) {
            throw new Error(
              `Invalid other signing index = {o}, not None or not whole number.`
            );
          }
        } else {
          o = i;
        }
        const only = o == void 0;
        sigers.push(signer.sign(ser, i, only, o));
      });
      return sigers;
    } else {
      const cigars = new Array();
      signers.forEach((signer) => {
        cigars.push(signer.sign(ser));
      });
      return cigars;
    }
  }
};
function riKey(pre, ridx) {
  return pre + "." + ridx.toString(16).padStart(32, "0");
}
var Keeper = class {
  _gbls;
  _pris;
  _pths;
  _pres;
  _prms;
  _sits;
  _pubs;
  constructor() {
    this._gbls = /* @__PURE__ */ new Map();
    this._pris = /* @__PURE__ */ new Map();
    this._pths = /* @__PURE__ */ new Map();
    this._pres = /* @__PURE__ */ new Map();
    this._prms = /* @__PURE__ */ new Map();
    this._sits = /* @__PURE__ */ new Map();
    this._pubs = /* @__PURE__ */ new Map();
  }
  getGbls(key) {
    return this._gbls.get(key);
  }
  pinGbls(key, val) {
    this._gbls.set(key, val);
  }
  prmsElements() {
    const out = new Array();
    this._prms.forEach((value, key) => {
      out.push([key, value]);
    });
    return out;
  }
  getPrms(keys) {
    return this._prms.get(keys);
  }
  pinPrms(keys, data) {
    this._prms.set(keys, data);
  }
  putPrms(keys, data) {
    if (this._prms.has(keys)) {
      return false;
    }
    this._prms.set(keys, data);
    return true;
  }
  remPrms(keys) {
    return this._prms.delete(keys);
  }
  prisElements(decrypter) {
    const out = new Array();
    this._pris.forEach(function(val, pubKey) {
      const verfer = new Verfer({ qb64: pubKey });
      const signer = decrypter.decrypt(val, null, verfer.transferable);
      out.push([pubKey, signer]);
    });
    return out;
  }
  pinPris(pubKey, signer, encrypter) {
    const cipher = encrypter.encrypt(null, signer);
    this._pris.set(pubKey, cipher.qb64b);
  }
  putPris(pubKey, signer, encrypter) {
    if (this._pris.has(pubKey)) {
      return false;
    }
    const cipher = encrypter.encrypt(null, signer);
    this._pris.set(pubKey, cipher.qb64b);
    return true;
  }
  getPris(pubKey, decrypter) {
    const val = this._pris.get(pubKey);
    if (val == void 0) {
      return void 0;
    }
    const verfer = new Verfer({ qb64: pubKey });
    return decrypter.decrypt(val, null, verfer.transferable);
  }
  pinPths(pubKey, val) {
    this._pths.set(pubKey, val);
    return true;
  }
  putPths(pubKey, val) {
    if (this._pths.has(pubKey)) {
      return false;
    }
    this._pths.set(pubKey, val);
    return true;
  }
  getPths(pubKey) {
    return this._pths.get(pubKey);
  }
  remPris(pubKey) {
    this._pris.delete(pubKey);
  }
  getPres(pre) {
    return this._pres.get(pre);
  }
  pinPres(pre, val) {
    this._pres.set(pre, val);
    return true;
  }
  putPres(pre, val) {
    if (this._pres.has(pre)) {
      return false;
    }
    this._pres.set(pre, val);
    return true;
  }
  getSits(keys) {
    return this._sits.get(keys);
  }
  putSits(pre, val) {
    if (this._sits.has(pre)) {
      return false;
    }
    this._sits.set(pre, val);
    return true;
  }
  pinSits(pre, val) {
    this._sits.set(pre, val);
    return true;
  }
  remSits(keys) {
    return this._sits.delete(keys);
  }
  getPubs(keys) {
    return this._pubs.get(keys);
  }
  putPubs(keys, data) {
    if (this._pubs.has(keys)) {
      return false;
    }
    this._pubs.set(keys, data);
    return true;
  }
};

// src/keri/core/tholder.ts
import { format, sum, fraction } from "mathjs";
var Tholder = class {
  _weighted = false;
  _thold = void 0;
  _size = 0;
  _number = void 0;
  _satisfy = void 0;
  // private _bexter: any
  constructor(kargs) {
    if (kargs.thold !== void 0) {
      this._processThold(kargs.thold);
    } else if (kargs.limen != void 0) {
      this._processLimen(kargs.limen);
    } else if (kargs.sith !== void 0) {
      this._processSith(kargs.sith);
    } else {
      throw new Error("Missing threshold expression");
    }
  }
  get weighted() {
    return this._weighted;
  }
  get thold() {
    return this._thold;
  }
  get size() {
    return this._size;
  }
  get limen() {
    return this._number?.qb64b;
  }
  get sith() {
    if (this.weighted) {
      let sith = this.thold.map((clause) => {
        return clause.map((c) => {
          if (0 < Number(c) && Number(c) < 1) {
            return format(c, { fraction: "ratio" });
          } else {
            return format(c, { fraction: "decimal" });
          }
        });
      });
      if (sith.length == 1) {
        sith = sith[0];
      }
      return sith;
    } else {
      return this.thold.toString(16);
    }
  }
  get json() {
    return JSON.stringify(this.sith);
  }
  get num() {
    return this._weighted ? void 0 : this._thold;
  }
  _processThold(thold) {
    if (typeof thold === "number") {
      this._processUnweighted(thold);
    } else {
      this._processWeighted(thold);
    }
  }
  _processLimen(limen) {
    const matter = new Matter({ qb64: limen });
    if (NumDex.has(matter.code)) {
      const number = new CesrNumber({
        raw: matter.raw,
        code: matter.code
      });
      this._processUnweighted(number.num);
    } else if (BexDex.has(matter.code)) {
    } else {
      throw new Error("Invalid code for limen=" + matter.code);
    }
  }
  _processSith(sith) {
    if (typeof sith == "number") {
      this._processUnweighted(sith);
    } else if (typeof sith == "string" && sith.indexOf("[") == -1) {
      this._processUnweighted(parseInt(sith, 16));
    } else {
      let _sith = sith;
      if (typeof sith == "string") {
        _sith = JSON.parse(sith);
      }
      if (_sith.length == 0) {
        throw new Error("Empty weight list");
      }
      const mask = _sith.map((x) => {
        return typeof x !== "string";
      });
      if (mask.length > 0 && !mask.every((x) => x)) {
        _sith = [_sith];
      }
      for (const c of _sith) {
        const mask2 = c.map((x) => {
          return typeof x === "string";
        });
        if (mask2.length > 0 && !mask2.every((x) => x)) {
          throw new Error(
            "Invalid sith, some weights in clause " + mask2 + " are non string"
          );
        }
      }
      const thold = this._processClauses(_sith);
      this._processWeighted(thold);
    }
  }
  _processClauses(sith) {
    const thold = new Array();
    sith.forEach((clause) => {
      thold.push(
        clause.map((w) => {
          return this.weight(w);
        })
      );
    });
    return thold;
  }
  _processUnweighted(thold) {
    if (thold < 0) {
      throw new Error("Non-positive int threshold = {thold}.");
    }
    this._thold = thold;
    this._weighted = false;
    this._size = this._thold;
    this._satisfy = this._satisfy_numeric;
    this._number = new CesrNumber({}, thold);
  }
  _processWeighted(thold) {
    for (const clause of thold) {
      if (Number(sum(clause)) < 1) {
        throw new Error(
          "Invalid sith clause: " + thold + "all clause weight sums must be >= 1"
        );
      }
    }
    this._thold = thold;
    this._weighted = true;
    this._size = thold.reduce((acc, currentValue) => {
      return acc + currentValue.length;
    }, 0);
    this._satisfy = this._satisfy_weighted;
  }
  weight(w) {
    return fraction(w);
  }
  _satisfy_numeric(indices) {
    return this.thold > 0 && indices.length >= this.thold;
  }
  _satisfy_weighted(indices) {
    if (indices.length === 0) {
      return false;
    }
    const indexes = new Set(indices.sort());
    const sats = new Array(indices.length).fill(false);
    for (const idx of indexes) {
      sats[idx] = true;
    }
    let wio = 0;
    for (const clause of this.thold) {
      let cw = 0;
      for (const w of clause) {
        if (sats[wio]) {
          cw += Number(w);
        }
        wio += 1;
      }
      if (cw < 1) {
        return false;
      }
    }
    return true;
  }
  satisfy(indices) {
    return this._satisfy(indices);
  }
};

// src/keri/core/eventing.ts
var MaxIntThold = 2 ** 32 - 1;
function rotate({
  pre = void 0,
  keys,
  dig = void 0,
  ilk = Ilks.rot,
  sn = 1,
  isith = void 0,
  ndigs = void 0,
  nsith = void 0,
  wits = void 0,
  cuts = void 0,
  adds = void 0,
  toad = void 0,
  data = void 0,
  version = void 0,
  kind = void 0,
  intive = true
}) {
  const vs = versify("KERI" /* KERI */, version, kind, 0);
  const _ilk = ilk;
  if (_ilk != Ilks.rot && _ilk != Ilks.drt) {
    throw new Error(`Invalid ilk = ${ilk} for rot or drt.`);
  }
  const sner = new CesrNumber({}, sn);
  if (sner.num < 1) {
    throw new Error(`Invalid sn = 0x${sner.numh} for rot or drt.`);
  }
  let _isit;
  if (isith == void 0) {
    _isit = Math.max(1, Math.ceil(keys.length / 2));
  } else {
    _isit = isith;
  }
  const tholder = new Tholder({ sith: _isit });
  if (tholder.num != void 0 && tholder.num < 1) {
    throw new Error(`Invalid sith = ${tholder.num} less than 1.`);
  }
  if (tholder.size > keys.length) {
    throw new Error(`Invalid sith = ${tholder.num} for keys = ${keys}`);
  }
  let _ndigs;
  if (ndigs === void 0) {
    _ndigs = [];
  } else {
    _ndigs = ndigs;
  }
  let _nsith;
  if (nsith === void 0) {
    _nsith = Math.max(1, Math.ceil(_ndigs.length / 2));
  } else {
    _nsith = nsith;
  }
  const ntholder = new Tholder({ sith: _nsith });
  if (ntholder.num != void 0 && ntholder.num < 1) {
    throw new Error(`Invalid sith = ${ntholder.num} less than 1.`);
  }
  if (ntholder.size > _ndigs.length) {
    throw new Error(`Invalid sith = ${ntholder.num} for ndigs = ${ndigs}`);
  }
  let _wits;
  if (wits === void 0) {
    _wits = [];
  } else {
    _wits = wits;
  }
  const witset = new Set(_wits);
  if (witset.size != _wits.length) {
    throw new Error(`Invalid wits = ${wits}, has duplicates.`);
  }
  let _cuts;
  if (cuts === void 0) {
    _cuts = [];
  } else {
    _cuts = cuts;
  }
  const cutset = new Set(_cuts);
  if (cutset.size != _cuts.length) {
    throw new Error(`Invalid cuts = ${cuts}, has duplicates.`);
  }
  let _adds;
  if (adds === void 0) {
    _adds = [];
  } else {
    _adds = adds;
  }
  const addset = new Set(_adds);
  const witaddset = new Set([...witset].filter((x) => addset.has(x)));
  if (witaddset.size > 0) {
    throw new Error(
      `Invalid member combination among wits = ${wits}, and adds = ${adds}.`
    );
  }
  const cutaddset = new Set([...cutset].filter((x) => addset.has(x)));
  if (cutaddset.size > 0) {
    throw new Error(
      `Invalid member combination among cuts = ${cuts}, and adds = ${adds}.`
    );
  }
  const newitsetdiff = new Set(_wits);
  _cuts.forEach(function(v) {
    newitsetdiff.delete(v);
  });
  const newitset = new Set(
    function* () {
      yield* newitsetdiff;
      yield* addset;
    }()
  );
  if (newitset.size != witset.size - cutset.size + addset.size) {
    throw new Error(
      `Invalid member combination among wits = ${wits}, cuts = ${cuts}, and adds = ${adds}.`
    );
  }
  let _toad;
  if (toad === void 0) {
    if (newitset.size == 0) {
      _toad = 0;
    } else {
      _toad = ample(newitset.size);
    }
  } else {
    _toad = toad;
  }
  if (newitset.size > 0) {
    if (_toad < 1 || _toad > newitset.size) {
      throw new Error(`Invalid toad = ${_toad} for wit = ${wits}`);
    }
  } else {
    if (_toad != 0) {
      throw new Error(`Invalid toad = ${_toad} for wit = ${wits}`);
    }
  }
  const _ked = {
    v: vs,
    t: _ilk,
    d: "",
    i: pre,
    s: sner.numh,
    p: dig,
    kt: tholder.num && intive && tholder.num !== void 0 && tholder.num <= MaxIntThold ? tholder.num.toString(16) : tholder.sith,
    k: keys,
    nt: ntholder.num && intive && ntholder.num !== void 0 && ntholder.num <= MaxIntThold ? ntholder.num.toString(16) : ntholder.sith,
    n: _ndigs,
    bt: _toad && intive && _toad !== void 0 && _toad <= MaxIntThold ? _toad : _toad.toString(16),
    br: cuts,
    ba: adds,
    a: data != void 0 ? data : []
  };
  const [, ked] = Saider.saidify(_ked);
  return new Serder(ked);
}
function ample(n, f, weak = true) {
  n = Math.max(0, n);
  let f1;
  if (f == void 0) {
    f1 = Math.max(1, Math.floor(Math.max(0, n - 1) / 3));
    const f2 = Math.max(1, Math.ceil(Math.max(0, n - 1) / 3));
    if (weak) {
      return Math.min(
        n,
        Math.ceil((n + f1 + 1) / 2),
        Math.ceil((n + f2 + 1) / 2)
      );
    } else {
      return Math.min(
        n,
        Math.max(0, n - f1, Math.ceil((n + f1 + 1) / 2))
      );
    }
  } else {
    f = Math.max(0, f);
    const m1 = Math.ceil((n + f + 1) / 2);
    const m2 = Math.max(0, n - f);
    if (m2 < m1 && n > 0) {
      throw new Error(`Invalid f=${f} is too big for n=${n}.`);
    }
    if (weak) {
      return Math.min(n, m1, m2);
    } else {
      return Math.min(n, Math.max(m1, m2));
    }
  }
}
function incept({
  keys,
  isith,
  ndigs,
  nsith,
  toad,
  wits,
  cnfg,
  data,
  version = Versionage,
  kind = "JSON" /* JSON */,
  code,
  intive = false,
  delpre
}) {
  const vs = versify("KERI" /* KERI */, version, kind, 0);
  const ilk = delpre == void 0 ? Ilks.icp : Ilks.dip;
  const sner = new CesrNumber({}, 0);
  if (isith == void 0) {
    isith = Math.max(1, Math.ceil(keys.length / 2));
  }
  const tholder = new Tholder({ sith: isith });
  if (tholder.num != void 0 && tholder.num < 1) {
    throw new Error(`Invalid sith = ${tholder.num} less than 1.`);
  }
  if (tholder.size > keys.length) {
    throw new Error(`Invalid sith = ${tholder.num} for keys ${keys}`);
  }
  if (ndigs == void 0) {
    ndigs = new Array();
  }
  if (nsith == void 0) {
    nsith = Math.max(0, Math.ceil(ndigs.length / 2));
  }
  const ntholder = new Tholder({ sith: nsith });
  if (ntholder.num != void 0 && ntholder.num < 0) {
    throw new Error(`Invalid nsith = ${ntholder.num} less than 0.`);
  }
  if (ntholder.size > keys.length) {
    throw new Error(`Invalid nsith = ${ntholder.num} for keys ${ndigs}`);
  }
  wits = wits == void 0 ? [] : wits;
  if (new Set(wits).size != wits.length) {
    throw new Error(`Invalid wits = ${wits}, has duplicates.`);
  }
  if (toad == void 0) {
    if (wits.length == 0) {
      toad = 0;
    } else {
      toad = ample(wits.length);
    }
  }
  const toader = new CesrNumber({}, toad);
  if (wits.length > 0) {
    if (toader.num < 1 || toader.num > wits.length) {
      throw new Error(`Invalid toad = ${toader.num} for wits = ${wits}`);
    }
  } else {
    if (toader.num != 0) {
      throw new Error(`Invalid toad = ${toader.num} for wits = ${wits}`);
    }
  }
  cnfg = cnfg == void 0 ? new Array() : cnfg;
  data = data == void 0 ? new Array() : data;
  let ked = {
    v: vs,
    t: ilk,
    d: "",
    i: "",
    s: sner.numh,
    kt: intive && tholder.num != void 0 ? tholder.num : tholder.sith,
    k: keys,
    nt: intive && tholder.num != void 0 ? ntholder.num : ntholder.sith,
    n: ndigs,
    bt: intive ? toader.num : toader.numh,
    b: wits,
    c: cnfg,
    a: data
  };
  if (delpre != void 0) {
    ked["di"] = delpre;
    if (code == void 0) {
      code = MtrDex.Blake3_256;
    }
  }
  let prefixer;
  if (delpre == void 0 && code == void 0 && keys.length == 1) {
    prefixer = new Prefixer({ qb64: keys[0] });
    if (prefixer.digestive) {
      throw new Error(
        `Invalid code, digestive=${prefixer.code}, must be derived from ked.`
      );
    }
  } else {
    prefixer = new Prefixer({ code }, ked);
    if (delpre != void 0) {
      if (!prefixer.digestive) {
        throw new Error(
          `Invalid derivation code = ${prefixer.code} for delegation. Must be digestive`
        );
      }
    }
  }
  ked["i"] = prefixer.qb64;
  if (prefixer.digestive) {
    ked["d"] = prefixer.qb64;
  } else {
    [, ked] = Saider.saidify(ked);
  }
  return new Serder(ked);
}
function messagize(serder, sigers, seal, wigers, cigars, pipelined = false) {
  let msg = new Uint8Array(b(serder.raw));
  let atc = new Uint8Array();
  if (sigers == void 0 && wigers == void 0 && cigars == void 0) {
    throw new Error(
      `Missing attached signatures on message = ${serder.ked}.`
    );
  }
  if (sigers != void 0) {
    if (seal != void 0) {
      if (seal[0] == "SealEvent") {
        atc = concat(
          atc,
          new Counter({ code: CtrDex.TransIdxSigGroups, count: 1 }).qb64b
        );
        atc = concat(atc, new TextEncoder().encode(seal[1].i));
        atc = concat(
          atc,
          new Seqner({ sn: parseInt(seal[1].s) }).qb64b
        );
        atc = concat(atc, new TextEncoder().encode(seal[1].d));
      } else if (seal[0] == "SealLast") {
        atc = concat(
          atc,
          new Counter({
            code: CtrDex.TransLastIdxSigGroups,
            count: 1
          }).qb64b
        );
        atc = concat(atc, new TextEncoder().encode(seal[1].i));
      }
    }
    atc = concat(
      atc,
      new Counter({
        code: CtrDex.ControllerIdxSigs,
        count: sigers.length
      }).qb64b
    );
    sigers.forEach((siger) => {
      atc = concat(atc, siger.qb64b);
    });
  }
  if (wigers != void 0) {
    atc = concat(
      atc,
      new Counter({
        code: CtrDex.ControllerIdxSigs,
        count: wigers.length
      }).qb64b
    );
    wigers.forEach((wiger) => {
      if (wiger.verfer && !(wiger.verfer.code in NonTransDex)) {
        throw new Error(
          `Attempt to use tranferable prefix=${wiger.verfer.qb64} for receipt.`
        );
      }
      atc = concat(atc, wiger.qb64b);
    });
  }
  if (cigars != void 0) {
    atc = concat(
      atc,
      new Counter({
        code: CtrDex.ControllerIdxSigs,
        count: cigars.length
      }).qb64b
    );
    cigars.forEach((cigar) => {
      if (cigar.verfer && !(cigar.verfer.code in NonTransDex)) {
        throw new Error(
          `Attempt to use tranferable prefix=${cigar.verfer.qb64} for receipt.`
        );
      }
      atc = concat(atc, cigar.qb64b);
    });
  }
  if (pipelined) {
    if (atc.length % 4 != 0) {
      throw new Error(
        `Invalid attachments size=${atc.length}, nonintegral quadlets.`
      );
    }
    msg = concat(
      msg,
      new Counter({
        code: CtrDex.AttachedMaterialQuadlets,
        count: Math.floor(atc.length / 4)
      }).qb64b
    );
  }
  msg = concat(msg, atc);
  return msg;
}
function interact(args) {
  let { pre, dig, sn, data, version, kind } = args;
  const vs = versify("KERI" /* KERI */, version, kind, 0);
  const ilk = Ilks.ixn;
  const sner = new CesrNumber({}, sn);
  if (sner.num < 1) {
    throw new Error(`Invalid sn = 0x${sner.numh} for ixn.`);
  }
  data = data == void 0 ? new Array() : data;
  let ked = {
    v: vs,
    t: ilk,
    d: "",
    i: pre,
    s: sner.numh,
    p: dig,
    a: data
  };
  [, ked] = Saider.saidify(ked);
  return new Serder(ked);
}
function reply(route = "", data, stamp, version, kind = "JSON" /* JSON */) {
  const vs = versify("KERI" /* KERI */, version, kind, 0);
  if (data == void 0) {
    data = {};
  }
  const _sad = {
    v: vs,
    t: Ilks.rpy,
    d: "",
    dt: stamp ?? (/* @__PURE__ */ new Date()).toISOString().replace("Z", "000+00:00"),
    r: route,
    a: data
  };
  const [, sad] = Saider.saidify(_sad);
  const saider = new Saider({ qb64: sad["d"] });
  if (!saider.verify(sad, true, true, kind, "d"))
    throw new Error(`Invalid said = ${saider.qb64} for reply msg=${sad}.`);
  return new Serder(sad);
}

// src/keri/app/habery.ts
var TraitCodex = class {
  EstOnly = "EO";
  // Only allow establishment events
  DoNotDelegate = "DND";
  // Dot not allow delegated identifiers
  NoBackers = "NB";
  // Do not allow backers
};
var TraitDex = new TraitCodex();
var Hab = class {
  name;
  serder;
  constructor(name, icp) {
    this.name = name;
    this.serder = icp;
  }
  get pre() {
    return this.serder.ked["i"];
  }
};
var Habery = class {
  _name;
  _mgr;
  _habs = /* @__PURE__ */ new Map();
  constructor({ name, passcode, seed, aeid, pidx, salt }) {
    this._name = name;
    if (passcode != void 0 && seed == void 0) {
      if (passcode.length < 21) {
        throw new Error("Bran (passcode seed material) too short.");
      }
      const bran = MtrDex.Salt_128 + "A" + passcode.substring(0, 21);
      const signer = new Salter({ qb64: bran }).signer(
        MtrDex.Ed25519_Seed,
        false
      );
      seed = signer.qb64;
      if (aeid == void 0) {
        aeid = signer.verfer.qb64;
      }
    }
    let algo;
    const salter = salt != void 0 ? new Salter({ qb64: salt }) : void 0;
    if (salt != void 0) {
      algo = "salty" /* salty */;
    } else {
      algo = "randy" /* randy */;
    }
    this._mgr = new Manager({
      seed,
      aeid,
      pidx,
      algo,
      salter
    });
  }
  get mgr() {
    return this._mgr;
  }
  get habs() {
    return Array.from(this._habs.values());
  }
  habByName(name) {
    return this._habs.get(name);
  }
  makeHab(name, {
    code = MtrDex.Blake3_256,
    transferable = true,
    isith = void 0,
    icount = 1,
    nsith = void 0,
    ncount = void 0,
    toad = void 0,
    wits = void 0,
    delpre = void 0,
    estOnly = false,
    DnD = false,
    data = void 0
  }) {
    if (nsith == void 0) {
      nsith = isith;
    }
    if (ncount == void 0) {
      ncount = icount;
    }
    if (!transferable) {
      ncount = 0;
      nsith = "0";
      code = MtrDex.Ed25519N;
    }
    const [verfers, digers] = this._mgr.incept({
      icount,
      ncount,
      stem: this.name,
      transferable,
      temp: false
    });
    icount = verfers.length;
    ncount = digers != void 0 ? digers.length : 0;
    if (isith == void 0) {
      isith = `${Math.max(1, Math.ceil(icount / 2)).toString(16)}`;
    }
    if (nsith == void 0) {
      nsith = `${Math.max(1, Math.ceil(ncount / 2)).toString(16)}`;
    }
    const cnfg = new Array();
    if (estOnly) {
      cnfg.push(TraitDex.EstOnly);
    }
    if (DnD) {
      cnfg.push(TraitDex.DoNotDelegate);
    }
    const keys = Array.from(verfers, (verfer) => verfer.qb64);
    const ndigs = Array.from(digers, (diger) => diger.qb64);
    const icp = incept({
      keys,
      isith,
      ndigs,
      nsith,
      toad,
      wits,
      cnfg,
      data,
      code,
      delpre
    });
    const hab = new Hab(name, icp);
    this._habs.set(name, hab);
    return hab;
  }
  get name() {
    return this._name;
  }
};

// src/keri/app/controller.ts
var Agent = class {
  pre;
  anchor;
  verfer;
  state;
  sn;
  said;
  constructor(agent) {
    this.pre = "";
    this.anchor = "";
    this.verfer = null;
    this.state = null;
    this.sn = 0;
    this.said = "";
    this.parse(agent);
  }
  parse(agent) {
    const [state, verfer] = this.event(agent);
    this.sn = new CesrNumber({}, void 0, state["s"]).num;
    this.said = state["d"];
    if (state["et"] !== Ilks.dip) {
      throw new Error(`invalid inception event type ${state["et"]}`);
    }
    this.pre = state["i"];
    if (!state["di"]) {
      throw new Error("no anchor to controller AID");
    }
    this.anchor = state["di"];
    this.verfer = verfer;
    this.state = state;
  }
  event(evt) {
    if (evt["k"].length !== 1) {
      throw new Error(`agent inception event can only have one key`);
    }
    const verfer = new Verfer({ qb64: evt["k"][0] });
    if (evt["n"].length !== 1) {
      throw new Error(`agent inception event can only have one next key`);
    }
    const diger = new Diger({ qb64: evt["n"][0] });
    const tholder = new Tholder({ sith: evt["kt"] });
    if (tholder.num !== 1) {
      throw new Error(`invalid threshold ${tholder.num}, must be 1`);
    }
    const ntholder = new Tholder({ sith: evt["nt"] });
    if (ntholder.num !== 1) {
      throw new Error(
        `invalid next threshold ${ntholder.num}, must be 1`
      );
    }
    return [evt, verfer, diger];
  }
};
var Controller = class {
  bran;
  stem;
  tier;
  ridx;
  salter;
  signer;
  nsigner;
  serder;
  keys;
  ndigs;
  constructor(bran, tier, ridx = 0, state = null) {
    this.bran = MtrDex.Salt_128 + "A" + bran.substring(0, 21);
    this.stem = "signify:controller";
    this.tier = tier;
    this.ridx = ridx;
    this.salter = new Salter({ qb64: this.bran, tier: this.tier });
    const creator = new SaltyCreator(
      this.salter.qb64,
      this.tier,
      this.stem
    );
    this.signer = creator.create(
      void 0,
      1,
      MtrDex.Ed25519_Seed,
      true,
      0,
      this.ridx,
      0,
      false
    ).signers.pop();
    this.nsigner = creator.create(
      void 0,
      1,
      MtrDex.Ed25519_Seed,
      true,
      0,
      this.ridx + 1,
      0,
      false
    ).signers.pop();
    this.keys = [this.signer.verfer.qb64];
    this.ndigs = [
      new Diger({ code: MtrDex.Blake3_256 }, this.nsigner.verfer.qb64b).qb64
    ];
    if (state == null || state["ee"]["s"] == 0) {
      this.serder = incept({
        keys: this.keys,
        isith: "1",
        nsith: "1",
        ndigs: this.ndigs,
        code: MtrDex.Blake3_256,
        toad: "0",
        wits: []
      });
    } else {
      this.serder = new Serder(state["ee"]);
    }
  }
  approveDelegation(_agent) {
    const seqner = new Seqner({ sn: _agent.sn });
    const anchor = { i: _agent.pre, s: seqner.snh, d: _agent.said };
    const sn = new CesrNumber({}, void 0, this.serder.ked["s"]).num + 1;
    this.serder = interact({
      pre: this.serder.pre,
      dig: this.serder.ked["d"],
      sn,
      data: [anchor],
      version: Versionage,
      kind: "JSON" /* JSON */
    });
    return [this.signer.sign(this.serder.raw, 0).qb64];
  }
  get pre() {
    return this.serder.pre;
  }
  get event() {
    const siger = this.signer.sign(this.serder.raw, 0);
    return [this.serder, siger];
  }
  get verfers() {
    return this.signer.verfer();
  }
  derive(state) {
    if (state != void 0 && state["ee"]["s"] === "0") {
      return incept({
        keys: this.keys,
        isith: "1",
        nsith: "1",
        ndigs: this.ndigs,
        code: MtrDex.Blake3_256,
        toad: "0",
        wits: []
      });
    } else {
      return new Serder({ ked: state.controller["ee"] });
    }
  }
  rotate(bran, aids) {
    const nbran = MtrDex.Salt_128 + "A" + bran.substring(0, 21);
    const nsalter = new Salter({ qb64: nbran, tier: this.tier });
    const nsigner = this.salter.signer(void 0, false);
    const creator = new SaltyCreator(
      this.salter.qb64,
      this.tier,
      this.stem
    );
    const signer = creator.create(
      void 0,
      1,
      MtrDex.Ed25519_Seed,
      true,
      0,
      this.ridx + 1,
      0,
      false
    ).signers.pop();
    const ncreator = new SaltyCreator(nsalter.qb64, this.tier, this.stem);
    this.signer = ncreator.create(
      void 0,
      1,
      MtrDex.Ed25519_Seed,
      true,
      0,
      this.ridx,
      0,
      false
    ).signers.pop();
    this.nsigner = ncreator.create(
      void 0,
      1,
      MtrDex.Ed25519_Seed,
      true,
      0,
      this.ridx + 1,
      0,
      false
    ).signers.pop();
    this.keys = [this.signer.verfer.qb64, signer?.verfer.qb64];
    this.ndigs = [new Diger({}, this.nsigner.verfer.qb64b).qb64];
    const rot = rotate({
      pre: this.pre,
      keys: this.keys,
      dig: this.serder.ked["d"],
      isith: ["1", "0"],
      nsith: "1",
      ndigs: this.ndigs
    });
    const sigs = [
      signer?.sign(b(rot.raw), 1, false, 0).qb64,
      this.signer.sign(rot.raw, 0).qb64
    ];
    const encrypter = new Encrypter({}, b(nsigner.verfer.qb64));
    const decrypter = new Decrypter({}, nsigner.qb64b);
    const sxlt = encrypter.encrypt(b(this.bran)).qb64;
    const keys = {};
    for (const aid of aids) {
      const pre = aid["prefix"];
      if ("salty" in aid) {
        const salty = aid["salty"];
        const cipher = new Cipher({ qb64: salty["sxlt"] });
        const dnxt = decrypter.decrypt(null, cipher).qb64;
        const acreator = new SaltyCreator(
          dnxt,
          salty["tier"],
          salty["stem"]
        );
        const signers = acreator.create(
          salty["icodes"],
          void 0,
          MtrDex.Ed25519_Seed,
          salty["transferable"],
          salty["pidx"],
          0,
          salty["kidx"],
          false
        );
        const _signers = [];
        for (const signer2 of signers.signers) {
          _signers.push(signer2.verfer.qb64);
        }
        const pubs = aid["state"]["k"];
        if (pubs.join(",") != _signers.join(",")) {
          throw new Error("Invalid Salty AID");
        }
        const asxlt = encrypter.encrypt(b(dnxt)).qb64;
        keys[pre] = {
          sxlt: asxlt
        };
      } else if ("randy" in aid) {
        const randy = aid["randy"];
        const prxs = randy["prxs"];
        const nxts = randy["nxts"];
        const nprxs = [];
        const signers = [];
        for (const prx of prxs) {
          const cipher = new Cipher({ qb64: prx });
          const dsigner = decrypter.decrypt(null, cipher, true);
          signers.push(dsigner);
          nprxs.push(encrypter.encrypt(b(dsigner.qb64)).qb64);
        }
        const pubs = aid["state"]["k"];
        const _signers = [];
        for (const signer2 of signers) {
          _signers.push(signer2.verfer.qb64);
        }
        if (pubs.join(",") != _signers.join(",")) {
          throw new Error(
            `unable to rotate, validation of encrypted public keys ${pubs} failed`
          );
        }
        const nnxts = [];
        for (const nxt of nxts) {
          nnxts.push(this.recrypt(nxt, decrypter, encrypter));
        }
        keys[pre] = {
          prxs: nprxs,
          nxts: nnxts
        };
      } else {
        throw new Error("invalid aid type ");
      }
    }
    const data = {
      rot: rot.ked,
      sigs,
      sxlt,
      keys
    };
    return data;
  }
  recrypt(enc, decrypter, encrypter) {
    const cipher = new Cipher({ qb64: enc });
    const dnxt = decrypter.decrypt(null, cipher).qb64;
    return encrypter.encrypt(b(dnxt)).qb64;
  }
};

// src/keri/core/httping.ts
import {
  serializeDictionary,
  parseDictionary
} from "structured-headers";
import { Buffer as Buffer9 } from "buffer";
var HEADER_SIG_INPUT = normalize("Signature-Input");
var HEADER_SIG_TIME = normalize("Signify-Timestamp");
function normalize(header) {
  return header.trim();
}
function siginput(signer, {
  name,
  method,
  path,
  headers,
  fields,
  expires,
  nonce,
  alg,
  keyid,
  context
}) {
  const items = new Array();
  const ifields = new Array();
  fields.forEach((field) => {
    if (field.startsWith("@")) {
      switch (field) {
        case "@method":
          items.push(`"${field}": ${method}`);
          ifields.push([field, /* @__PURE__ */ new Map()]);
          break;
        case "@path":
          items.push(`"${field}": ${path}`);
          ifields.push([field, /* @__PURE__ */ new Map()]);
          break;
      }
    } else {
      if (!headers.has(field))
        return;
      ifields.push([field, /* @__PURE__ */ new Map()]);
      const value = normalize(headers.get(field));
      items.push(`"${field}": ${value}`);
    }
  });
  const nameParams = /* @__PURE__ */ new Map();
  const now = Math.floor(nowUTC().getTime() / 1e3);
  nameParams.set("created", now);
  const values = [
    `(${ifields.map((field) => field[0]).join(" ")})`,
    `created=${now}`
  ];
  if (expires != void 0) {
    values.push(`expires=${expires}`);
    nameParams.set("expires", expires);
  }
  if (nonce != void 0) {
    values.push(`nonce=${nonce}`);
    nameParams.set("nonce", nonce);
  }
  if (keyid != void 0) {
    values.push(`keyid=${keyid}`);
    nameParams.set("keyid", keyid);
  }
  if (context != void 0) {
    values.push(`context=${context}`);
    nameParams.set("context", context);
  }
  if (alg != void 0) {
    values.push(`alg=${alg}`);
    nameParams.set("alg", alg);
  }
  const sid = /* @__PURE__ */ new Map([[name, [ifields, nameParams]]]);
  const params = values.join(";");
  items.push(`"@signature-params: ${params}"`);
  const ser = items.join("\n");
  const sig = signer.sign(b(ser));
  return [
    /* @__PURE__ */ new Map([
      [HEADER_SIG_INPUT, `${serializeDictionary(sid)}`]
    ]),
    sig
  ];
}
var Unqualified = class {
  _raw;
  constructor(raw) {
    this._raw = raw;
  }
  get qb64() {
    return encodeBase64Url(Buffer9.from(this._raw));
  }
  get qb64b() {
    return b(this.qb64);
  }
};
var Inputage = class {
  name;
  fields;
  created;
  expires;
  nonce;
  alg;
  keyid;
  context;
};
function desiginput(value) {
  const sid = parseDictionary(value);
  const siginputs = new Array();
  sid.forEach((value2, key) => {
    const siginput2 = new Inputage();
    siginput2.name = key;
    let list;
    let params;
    [list, params] = value2;
    siginput2.fields = list.map((item) => item[0]);
    if (!params.has("created")) {
      throw new Error(
        "missing required `created` field from signature input"
      );
    }
    siginput2.created = params.get("created");
    if (params.has("expires")) {
      siginput2.expires = params.get("expires");
    }
    if (params.has("nonce")) {
      siginput2.nonce = params.get("nonce");
    }
    if (params.has("alg")) {
      siginput2.alg = params.get("alg");
    }
    if (params.has("keyid")) {
      siginput2.keyid = params.get("keyid");
    }
    if (params.has("context")) {
      siginput2.context = params.get("context");
    }
    siginputs.push(siginput2);
  });
  return siginputs;
}
function parseRangeHeaders(header, typ) {
  if (header !== null) {
    const data = header.replace(`${typ} `, "");
    const values = data.split("/");
    const rng = values[0].split("-");
    return {
      start: parseInt(rng[0]),
      end: parseInt(rng[1]),
      total: parseInt(values[1])
    };
  } else {
    return { start: 0, end: 0, total: 0 };
  }
}

// src/keri/app/aiding.ts
var Identifier = class {
  client;
  /**
   * Identifier
   * @param {IdentifierDeps} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * List managed identifiers
   * @async
   * @param {number} [start=0] Start index of list of notifications, defaults to 0
   * @param {number} [end=24] End index of list of notifications, defaults to 24
   * @returns {Promise<any>} A promise to the list of managed identifiers
   */
  async list(start = 0, end = 24) {
    const extraHeaders = new Headers();
    extraHeaders.append("Range", `aids=${start}-${end}`);
    const path = `/identifiers`;
    const data = null;
    const method = "GET";
    const res = await this.client.fetch(path, method, data, extraHeaders);
    const cr = res.headers.get("content-range");
    const range2 = parseRangeHeaders(cr, "aids");
    const aids = await res.json();
    return {
      start: range2.start,
      end: range2.end,
      total: range2.total,
      aids
    };
  }
  /**
   * Get information for a managed identifier
   * @async
   * @param {string} name Name or alias of the identifier
   * @returns {Promise<any>} A promise to the identifier information
   */
  async get(name) {
    const path = `/identifiers/${encodeURIComponent(name)}`;
    const data = null;
    const method = "GET";
    const res = await this.client.fetch(path, method, data);
    return await res.json();
  }
  /**
   * Create a managed identifier
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {CreateIdentiferArgs} [kargs] Optional parameters to create the identifier
   * @returns {EventResult} The inception result
   */
  async create(name, kargs = {}) {
    const algo = kargs.algo == void 0 ? "salty" /* salty */ : kargs.algo;
    const transferable = kargs.transferable ?? true;
    const isith = kargs.isith ?? "1";
    let nsith = kargs.nsith ?? "1";
    let wits = kargs.wits ?? [];
    const toad = kargs.toad ?? 0;
    let dcode = kargs.dcode ?? MtrDex.Blake3_256;
    const proxy = kargs.proxy;
    const delpre = kargs.delpre;
    const data = kargs.data != void 0 ? [kargs.data] : [];
    const pre = kargs.pre;
    const states = kargs.states;
    const rstates = kargs.rstates;
    const prxs = kargs.prxs;
    const nxts = kargs.nxts;
    const mhab = kargs.mhab;
    const _keys = kargs.keys;
    const _ndigs = kargs.ndigs;
    const bran = kargs.bran;
    const count = kargs.count;
    let ncount = kargs.ncount;
    const tier = kargs.tier;
    const extern_type = kargs.extern_type;
    const extern = kargs.extern;
    if (!transferable) {
      ncount = 0;
      nsith = 0;
      dcode = MtrDex.Ed25519N;
    }
    const xargs = {
      transferable,
      isith,
      nsith,
      wits,
      toad,
      proxy,
      delpre,
      dcode,
      data,
      algo,
      pre,
      prxs,
      nxts,
      mhab,
      states,
      rstates,
      keys: _keys,
      ndigs: _ndigs,
      bran,
      count,
      ncount,
      tier,
      extern_type,
      extern
    };
    const keeper = this.client.manager.new(algo, this.client.pidx, xargs);
    const [keys, ndigs] = await keeper.incept(transferable);
    wits = wits !== void 0 ? wits : [];
    let serder = void 0;
    if (delpre == void 0) {
      serder = incept({
        keys,
        isith,
        ndigs,
        nsith,
        toad,
        wits,
        cnfg: [],
        data,
        version: Versionage,
        kind: "JSON" /* JSON */,
        code: dcode,
        intive: false
      });
    } else {
      serder = incept({
        keys,
        isith,
        ndigs,
        nsith,
        toad,
        wits,
        cnfg: [],
        data,
        version: Versionage,
        kind: "JSON" /* JSON */,
        code: dcode,
        intive: false,
        delpre
      });
    }
    const sigs = await keeper.sign(b(serder.raw));
    const jsondata = {
      name,
      icp: serder.ked,
      sigs,
      proxy,
      smids: states != void 0 ? states.map((state) => state.i) : void 0,
      rmids: rstates != void 0 ? rstates.map((state) => state.i) : void 0
    };
    jsondata[algo] = keeper.params();
    this.client.pidx = this.client.pidx + 1;
    const res = this.client.fetch("/identifiers", "POST", jsondata);
    return new EventResult(serder, sigs, res);
  }
  /**
   * Generate an interaction event in a managed identifier
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {any} [data] Option data to be anchored in the interaction event
   * @returns {Promise<EventResult>} A promise to the interaction event result
   */
  async interact(name, data) {
    let { serder, sigs, jsondata } = await this.createInteract(name, data);
    const res = await this.client.fetch(
      "/identifiers/" + name + "/events",
      "POST",
      jsondata
    );
    return new EventResult(serder, sigs, res);
  }
  async createInteract(name, data) {
    const hab = await this.get(name);
    const pre = hab.prefix;
    const state = hab.state;
    const sn = parseInt(state.s, 16);
    const dig = state.d;
    data = Array.isArray(data) ? data : [data];
    const serder = interact({
      pre,
      sn: sn + 1,
      data,
      dig,
      version: void 0,
      kind: void 0
    });
    const keeper = this.client.manager.get(hab);
    const sigs = await keeper.sign(b(serder.raw));
    const jsondata = {
      ixn: serder.ked,
      sigs
    };
    jsondata[keeper.algo] = keeper.params();
    return { serder, sigs, jsondata };
  }
  /**
   * Generate a rotation event in a managed identifier
   * @param {string} name Name or alias of the identifier
   * @param {RotateIdentifierArgs} [kargs] Optional parameters requiered to generate the rotation event
   * @returns {Promise<EventResult>} A promise to the rotation event result
   */
  async rotate(name, kargs = {}) {
    const transferable = kargs.transferable ?? true;
    const ncode = kargs.ncode ?? MtrDex.Ed25519_Seed;
    const ncount = kargs.ncount ?? 1;
    const hab = await this.get(name);
    const pre = hab.prefix;
    const delegated = hab.state.di !== "";
    const state = hab.state;
    const count = state.k.length;
    const dig = state.d;
    const ridx = parseInt(state.s, 16) + 1;
    const wits = state.b;
    let isith = state.nt;
    let nsith = kargs.nsith ?? isith;
    if (isith == void 0)
      isith = `${Math.max(1, Math.ceil(count / 2)).toString(16)}`;
    if (nsith == void 0)
      nsith = `${Math.max(1, Math.ceil(ncount / 2)).toString(16)}`;
    const cst = new Tholder({ sith: isith }).sith;
    const nst = new Tholder({ sith: nsith }).sith;
    const keeper = this.client.manager.get(hab);
    const ncodes = kargs.ncodes ?? new Array(ncount).fill(ncode);
    const states = kargs.states == void 0 ? [] : kargs.states;
    const rstates = kargs.rstates == void 0 ? [] : kargs.rstates;
    const [keys, ndigs] = await keeper.rotate(
      ncodes,
      transferable,
      states,
      rstates
    );
    const cuts = kargs.cuts ?? [];
    const adds = kargs.adds ?? [];
    const data = kargs.data != void 0 ? [kargs.data] : [];
    const toad = kargs.toad;
    const ilk = delegated ? Ilks.drt : Ilks.rot;
    const serder = rotate({
      pre,
      ilk,
      keys,
      dig,
      sn: ridx,
      isith: cst,
      nsith: nst,
      ndigs,
      toad,
      wits,
      cuts,
      adds,
      data
    });
    const sigs = await keeper.sign(b(serder.raw));
    const jsondata = {
      rot: serder.ked,
      sigs,
      smids: states != void 0 ? states.map((state2) => state2.i) : void 0,
      rmids: rstates != void 0 ? rstates.map((state2) => state2.i) : void 0
    };
    jsondata[keeper.algo] = keeper.params();
    const res = await this.client.fetch(
      "/identifiers/" + name + "/events",
      "POST",
      jsondata
    );
    return new EventResult(serder, sigs, res);
  }
  /**
   * Authorize an endpoint provider in a given role for a managed identifier
   * @remarks
   * Typically used to authorize the agent to be the endpoint provider for the identifier in the role of `agent`
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {string} role Authorized role for eid
   * @param {string} [eid] Optional qb64 of endpoint provider to be authorized
   * @param {string} [stamp=now] Optional date-time-stamp RFC-3339 profile of iso8601 datetime. Now is the default if not provided
   * @returns {Promise<EventResult>} A promise to the result of the authorization
   */
  async addEndRole(name, role, eid, stamp) {
    const hab = await this.get(name);
    const pre = hab.prefix;
    const rpy = this.makeEndRole(pre, role, eid, stamp);
    const keeper = this.client.manager.get(hab);
    const sigs = await keeper.sign(b(rpy.raw));
    const jsondata = {
      rpy: rpy.ked,
      sigs
    };
    const res = this.client.fetch(
      "/identifiers/" + name + "/endroles",
      "POST",
      jsondata
    );
    return new EventResult(rpy, sigs, res);
  }
  /**
   * Generate an /end/role/add reply message
   * @param {string} pre Prefix of the identifier
   * @param {string} role Authorized role for eid
   * @param {string} [eid] Optional qb64 of endpoint provider to be authorized
   * @param {string} [stamp=now] Optional date-time-stamp RFC-3339 profile of iso8601 datetime. Now is the default if not provided
   * @returns {Serder} The reply message
   */
  makeEndRole(pre, role, eid, stamp) {
    const data = {
      cid: pre,
      role
    };
    if (eid != void 0) {
      data.eid = eid;
    }
    const route = "/end/role/add";
    return reply(route, data, stamp, void 0, "JSON" /* JSON */);
  }
  /**
   * Get the members of a group identifier
   * @async
   * @param {string} name - Name or alias of the identifier
   * @returns {Promise<any>} - A promise to the list of members
   */
  async members(name) {
    const res = await this.client.fetch(
      "/identifiers/" + name + "/members",
      "GET",
      void 0
    );
    return await res.json();
  }
};
var EventResult = class {
  _serder;
  _sigs;
  promise;
  constructor(serder, sigs, promise) {
    this._serder = serder;
    this._sigs = sigs;
    this.promise = promise;
  }
  get serder() {
    return this._serder;
  }
  get sigs() {
    return this._sigs;
  }
  async op() {
    const res = await this.promise;
    return await res.json();
  }
};

// src/keri/end/ending.ts
var FALSY = [false, 0, "?0", "no", "false", "False", "off"];
var TRUTHY = [true, 1, "?1", "yes", "true", "True", "on"];
var Signage = class {
  constructor(markers, indexed, signer, ordinal, digest, kind) {
    this.markers = markers;
    this.indexed = indexed;
    this.signer = signer;
    this.ordinal = ordinal;
    this.digest = digest;
    this.kind = kind;
  }
  markers;
  indexed = false;
  signer;
  ordinal;
  digest;
  kind;
};
function signature(signages) {
  const values = new Array();
  for (const signage of signages) {
    let markers;
    let indexed = signage.indexed;
    const signer = signage.signer;
    const ordinal = signage.ordinal;
    const digest = signage.digest;
    const kind = signage.kind;
    let tags;
    if (signage.markers instanceof Map) {
      tags = Array.from(signage.markers.keys());
      markers = Array.from(signage.markers.values());
    } else {
      markers = signage.markers;
      tags = new Array();
    }
    if (indexed == void 0) {
      indexed = markers[0] instanceof Siger;
    }
    const items = new Array();
    const tag = "indexed";
    let val = indexed ? "?1" : "?0";
    items.push(`${tag}="${val}"`);
    if (signer != void 0) {
      items.push(`signer="${signer}"`);
    }
    if (ordinal != void 0) {
      items.push(`ordinal="${ordinal}"`);
    }
    if (digest != void 0) {
      items.push(`digest="${digest}"`);
    }
    if (kind != void 0) {
      items.push(`kind="${kind}"`);
    }
    markers.forEach((marker, idx) => {
      let tag2;
      if (tags != void 0 && tags.length > idx) {
        tag2 = tags[idx];
      } else if (marker instanceof Siger) {
        if (!indexed)
          throw new Error(
            `Indexed signature marker ${marker} when indexed False.`
          );
        tag2 = marker.index.toString();
      } else {
        if (indexed)
          throw new Error(
            `Unindexed signature marker ${marker} when indexed True.`
          );
        tag2 = marker.verfer.qb64;
      }
      val = marker.qb64;
      items.push(`${tag2}="${val}"`);
    });
    values.push(items.join(";"));
  }
  return new Headers([["Signature", values.join(",")]]);
}
function designature(value) {
  const values = value.replace(" ", "").split(",");
  const signages = new Array();
  values.forEach((val) => {
    const dict = /* @__PURE__ */ new Map();
    val.split(";").forEach((v) => {
      const splits = v.split("=", 2);
      dict.set(splits[0], splits[1].replaceAll('"', ""));
    });
    if (!dict.has("indexed")) {
      throw new Error(
        "Missing indexed field in Signature header signage."
      );
    }
    const item = dict.get("indexed");
    const indexed = !FALSY.includes(item);
    dict.delete("indexed");
    let signer;
    if (dict.has("signer")) {
      signer = dict.get("signer");
      dict.delete("signer");
    }
    let ordinal;
    if (dict.has("ordinal")) {
      ordinal = dict.get("ordinal");
      dict.delete("ordinal");
    }
    let digest;
    if (dict.has("digest")) {
      digest = dict.get("digest");
      dict.delete("digest");
    }
    let kind;
    if (dict.has("kind")) {
      kind = dict.get("kind");
      dict.delete("kind");
    } else {
      kind = "CESR";
    }
    let markers;
    if (kind == "CESR") {
      markers = /* @__PURE__ */ new Map();
      dict.forEach((val2, key) => {
        if (indexed) {
          markers.set(key, new Siger({ qb64: val2 }));
        } else {
          markers.set(key, new Cigar({ qb64: val2 }));
        }
      });
    } else {
      markers = dict;
    }
    signages.push(
      new Signage(markers, indexed, signer, ordinal, digest, kind)
    );
  });
  return signages;
}

// src/keri/core/authing.ts
var Authenticater = class _Authenticater {
  static DefaultFields = [
    "@method",
    "@path",
    "signify-resource",
    HEADER_SIG_TIME.toLowerCase()
  ];
  _verfer;
  _csig;
  constructor(csig, verfer) {
    this._csig = csig;
    this._verfer = verfer;
  }
  verify(headers, method, path) {
    const siginput2 = headers.get(HEADER_SIG_INPUT);
    if (siginput2 == null) {
      return false;
    }
    const signature2 = headers.get("Signature");
    if (signature2 == null) {
      return false;
    }
    let inputs = desiginput(siginput2);
    inputs = inputs.filter((input) => input.name == "signify");
    if (inputs.length == 0) {
      return false;
    }
    inputs.forEach((input) => {
      const items = new Array();
      input.fields.forEach((field) => {
        if (field.startsWith("@")) {
          if (field == "@method") {
            items.push(`"${field}": ${method}`);
          } else if (field == "@path") {
            items.push(`"${field}": ${path}`);
          }
        } else {
          if (headers.has(field)) {
            const value = normalize(headers.get(field));
            items.push(`"${field}": ${value}`);
          }
        }
      });
      const values = new Array();
      values.push(`(${input.fields.join(" ")})`);
      values.push(`created=${input.created}`);
      if (input.expires != void 0) {
        values.push(`expires=${input.expires}`);
      }
      if (input.nonce != void 0) {
        values.push(`nonce=${input.nonce}`);
      }
      if (input.keyid != void 0) {
        values.push(`keyid=${input.keyid}`);
      }
      if (input.context != void 0) {
        values.push(`context=${input.context}`);
      }
      if (input.alg != void 0) {
        values.push(`alg=${input.alg}`);
      }
      const params = values.join(";");
      items.push(`"@signature-params: ${params}"`);
      const ser = items.join("\n");
      const signage = designature(signature2);
      const cig = signage[0].markers.get(input.name);
      if (!this._verfer.verify(cig.raw, ser)) {
        throw new Error(`Signature for ${input.keyid} invalid.`);
      }
    });
    return true;
  }
  sign(headers, method, path, fields) {
    if (fields == void 0) {
      fields = _Authenticater.DefaultFields;
    }
    const [header, sig] = siginput(this._csig, {
      name: "signify",
      method,
      path,
      headers,
      fields,
      alg: "ed25519",
      keyid: this._csig.verfer.qb64
    });
    header.forEach((value, key) => {
      headers.append(key, value);
    });
    const markers = /* @__PURE__ */ new Map();
    markers.set("signify", sig);
    const signage = new Signage(markers, false);
    const signed = signature([signage]);
    signed.forEach((value, key) => {
      headers.append(key, value);
    });
    return headers;
  }
};

// src/keri/core/keeping.ts
var KeyManager = class {
  constructor(salter, externalModules = []) {
    this.salter = salter;
    this.salter = salter;
    for (const mod of externalModules) {
      this.modules[mod.type] = mod.module;
    }
  }
  modules = {};
  new(algo, pidx, kargs) {
    switch (algo) {
      case "salty" /* salty */:
        return new SaltyKeeper(
          this.salter,
          pidx,
          kargs["kidx"],
          kargs["tier"],
          kargs["transferable"],
          kargs["stem"],
          kargs["code"],
          kargs["count"],
          kargs["icodes"],
          kargs["ncode"],
          kargs["ncount"],
          kargs["ncodes"],
          kargs["dcode"],
          kargs["bran"],
          kargs["sxlt"]
        );
      case "randy" /* randy */:
        return new RandyKeeper(
          this.salter,
          kargs["code"],
          kargs["count"],
          kargs["icodes"],
          kargs["transferable"],
          kargs["ncode"],
          kargs["ncount"],
          kargs["ncodes"],
          kargs["dcode"],
          kargs["prxs"],
          kargs["nxts"]
        );
      case "group" /* group */:
        return new GroupKeeper(
          this,
          kargs["mhab"],
          kargs["states"],
          kargs["rstates"],
          kargs["keys"],
          kargs["ndigs"]
        );
      case "extern" /* extern */: {
        const ModuleConstructor = this.modules[kargs.extern_type];
        if (!ModuleConstructor) {
          throw new Error(
            `unsupported external module type ${kargs.extern_type}`
          );
        }
        return new ModuleConstructor(pidx, kargs);
      }
      default:
        throw new Error("Unknown algo");
    }
  }
  get(aid) {
    if (aid["salty" /* salty */]) {
      const kargs = aid["salty" /* salty */];
      return new SaltyKeeper(
        this.salter,
        kargs["pidx"],
        kargs["kidx"],
        kargs["tier"],
        kargs["transferable"],
        kargs["stem"],
        void 0,
        void 0,
        kargs["icodes"],
        void 0,
        void 0,
        kargs["ncodes"],
        kargs["dcode"],
        void 0,
        kargs["sxlt"]
      );
    } else if (aid["randy" /* randy */]) {
      const pre = new Prefixer({ qb64: aid["prefix"] });
      const kargs = aid["randy" /* randy */];
      return new RandyKeeper(
        this.salter,
        void 0,
        void 0,
        void 0,
        pre.transferable,
        void 0,
        void 0,
        [],
        void 0,
        kargs["prxs"],
        kargs["nxts"]
      );
    } else if (aid["group" /* group */]) {
      const kargs = aid["group" /* group */];
      return new GroupKeeper(
        this,
        kargs["mhab"],
        void 0,
        void 0,
        kargs["keys"],
        kargs["ndigs"]
      );
    } else if (aid["extern" /* extern */]) {
      const kargs = aid["extern" /* extern */];
      const typ = kargs.extern_type;
      if (typ in this.modules) {
        const mod = new this.modules[typ](kargs["pidx"], kargs);
        return mod;
      } else {
        throw new Error(`unsupported external module type ${typ}`);
      }
    } else {
      throw new Error(`Algo not allowed yet`);
    }
  }
};
var SaltyKeeper = class {
  aeid;
  encrypter;
  decrypter;
  salter;
  pidx;
  kidx;
  tier;
  transferable;
  stem;
  code;
  count;
  icodes;
  ncode;
  ncount;
  ncodes;
  dcode;
  sxlt;
  bran;
  creator;
  algo = "salty" /* salty */;
  signers;
  constructor(salter, pidx, kidx = 0, tier = "low" /* low */, transferable = false, stem = void 0, code = MtrDex.Ed25519_Seed, count = 1, icodes = void 0, ncode = MtrDex.Ed25519_Seed, ncount = 1, ncodes = void 0, dcode = MtrDex.Blake3_256, bran = void 0, sxlt = void 0) {
    this.salter = salter;
    const signer = this.salter.signer(void 0, transferable = false);
    this.aeid = signer.verfer.qb64;
    this.encrypter = new Encrypter({}, b(this.aeid));
    this.decrypter = new Decrypter({}, signer.qb64b);
    this.code = code;
    this.ncode = ncode;
    this.tier = tier;
    this.icodes = icodes == void 0 ? new Array(count).fill(code) : icodes;
    this.ncodes = ncodes == void 0 ? new Array(ncount).fill(ncode) : ncodes;
    this.dcode = dcode;
    this.pidx = pidx;
    this.kidx = kidx;
    this.transferable = transferable;
    this.count = count;
    this.ncount = ncount;
    this.stem = stem == void 0 ? "signify:aid" : stem;
    if (bran != void 0) {
      this.bran = MtrDex.Salt_128 + "A" + bran.slice(0, 21);
      this.creator = new SaltyCreator(this.bran, this.tier, this.stem);
      this.sxlt = this.encrypter.encrypt(b(this.creator.salt)).qb64;
    } else if (sxlt == void 0) {
      this.creator = new SaltyCreator(void 0, this.tier, this.stem);
      this.sxlt = this.encrypter.encrypt(b(this.creator.salt)).qb64;
    } else {
      this.sxlt = sxlt;
      const ciph = new Cipher({ qb64: this.sxlt });
      this.creator = new SaltyCreator(
        this.decrypter.decrypt(null, ciph).qb64,
        tier,
        this.stem
      );
    }
    this.signers = this.creator.create(
      this.icodes,
      this.ncount,
      this.ncode,
      this.transferable,
      this.pidx,
      0,
      this.kidx,
      false
    ).signers;
  }
  params() {
    return {
      sxlt: this.sxlt,
      pidx: this.pidx,
      kidx: this.kidx,
      stem: this.stem,
      tier: this.tier,
      icodes: this.icodes,
      ncodes: this.ncodes,
      dcode: this.dcode,
      transferable: this.transferable
    };
  }
  async incept(transferable) {
    this.transferable = transferable;
    this.kidx = 0;
    const signers = this.creator.create(
      this.icodes,
      this.count,
      this.code,
      this.transferable,
      this.pidx,
      0,
      this.kidx,
      false
    );
    const verfers = signers.signers.map((signer) => signer.verfer.qb64);
    const nsigners = this.creator.create(
      this.ncodes,
      this.ncount,
      this.ncode,
      this.transferable,
      this.pidx,
      0,
      this.icodes?.length,
      false
    );
    const digers = nsigners.signers.map(
      (nsigner) => new Diger({ code: this.dcode }, nsigner.verfer.qb64b).qb64
    );
    return [verfers, digers];
  }
  async rotate(ncodes, transferable) {
    this.ncodes = ncodes;
    this.transferable = transferable;
    const signers = this.creator.create(
      this.ncodes,
      this.ncount,
      this.ncode,
      this.transferable,
      this.pidx,
      0,
      this.kidx + this.icodes.length,
      false
    );
    const verfers = signers.signers.map((signer) => signer.verfer.qb64);
    this.kidx = this.kidx + this.icodes.length;
    const nsigners = this.creator.create(
      this.ncodes,
      this.ncount,
      this.ncode,
      this.transferable,
      this.pidx,
      0,
      this.kidx + this.icodes.length,
      false
    );
    const digers = nsigners.signers.map(
      (nsigner) => new Diger({ code: this.dcode }, nsigner.verfer.qb64b).qb64
    );
    return [verfers, digers];
  }
  async sign(ser, indexed = true, indices = void 0, ondices = void 0) {
    const signers = this.creator.create(
      this.icodes,
      this.ncount,
      this.ncode,
      this.transferable,
      this.pidx,
      0,
      this.kidx,
      false
    );
    if (indexed) {
      const sigers = [];
      let i = 0;
      for (const [j, signer] of signers.signers.entries()) {
        if (indices != void 0) {
          i = indices[j];
          if (typeof i != "number" || i < 0) {
            throw new Error(
              `Invalid signing index = ${i}, not whole number.`
            );
          }
        } else {
          i = j;
        }
        let o = 0;
        if (ondices != void 0) {
          o = ondices[j];
          if (o == void 0 || typeof o == "number" && typeof o != "number" && o >= 0) {
            throw new Error(
              `Invalid ondex = ${o}, not whole number.`
            );
          }
        } else {
          o = i;
        }
        sigers.push(
          signer.sign(ser, i, o == void 0 ? true : false, o)
        );
      }
      return sigers.map((siger) => siger.qb64);
    } else {
      const cigars = [];
      for (const [, signer] of signers.signers.entries()) {
        cigars.push(signer.sign(ser));
      }
      return cigars.map((cigar) => cigar.qb64);
    }
  }
};
var RandyKeeper = class {
  salter;
  code;
  count;
  icodes;
  transferable;
  ncount;
  ncodes;
  ncode;
  dcode;
  prxs;
  nxts;
  aeid;
  encrypter;
  decrypter;
  creator;
  algo = "randy" /* randy */;
  signers;
  constructor(salter, code = MtrDex.Ed25519_Seed, count = 1, icodes = void 0, transferable = false, ncode = MtrDex.Ed25519_Seed, ncount = 1, ncodes, dcode = MtrDex.Blake3_256, prxs = void 0, nxts = void 0) {
    this.salter = salter;
    this.icodes = icodes == void 0 ? new Array(count).fill(code) : icodes;
    this.ncodes = ncodes == void 0 ? new Array(ncount).fill(ncode) : ncodes;
    this.code = code;
    this.ncode = ncode;
    this.count = count;
    this.ncount = ncount;
    const signer = this.salter.signer(void 0, transferable = false);
    this.aeid = signer.verfer.qb64;
    this.encrypter = new Encrypter({}, b(this.aeid));
    this.decrypter = new Decrypter({}, signer.qb64b);
    this.nxts = nxts ?? [];
    this.prxs = prxs ?? [];
    this.transferable = transferable;
    this.icodes = icodes;
    this.ncodes = ncodes;
    this.dcode = dcode;
    this.creator = new RandyCreator();
    this.signers = this.prxs.map(
      (prx) => this.decrypter.decrypt(
        new Cipher({ qb64: prx }).qb64b,
        void 0,
        this.transferable
      )
    );
  }
  params() {
    return {
      nxts: this.nxts,
      prxs: this.prxs,
      transferable: this.transferable
    };
  }
  async incept(transferable) {
    this.transferable = transferable;
    const signers = this.creator.create(
      this.icodes,
      this.count,
      this.code,
      this.transferable
    );
    this.prxs = signers.signers.map(
      (signer) => this.encrypter.encrypt(void 0, signer).qb64
    );
    const verfers = signers.signers.map((signer) => signer.verfer.qb64);
    const nsigners = this.creator.create(
      this.ncodes,
      this.ncount,
      this.ncode,
      this.transferable
    );
    this.nxts = nsigners.signers.map(
      (signer) => this.encrypter.encrypt(void 0, signer).qb64
    );
    const digers = nsigners.signers.map(
      (nsigner) => new Diger({ code: this.dcode }, nsigner.verfer.qb64b).qb64
    );
    return [verfers, digers];
  }
  async rotate(ncodes, transferable) {
    this.ncodes = ncodes;
    this.transferable = transferable;
    this.prxs = this.nxts;
    const signers = this.nxts.map(
      (nxt) => this.decrypter.decrypt(
        void 0,
        new Cipher({ qb64: nxt }),
        this.transferable
      )
    );
    const verfers = signers.map((signer) => signer.verfer.qb64);
    const nsigners = this.creator.create(
      this.ncodes,
      this.ncount,
      this.ncode,
      this.transferable
    );
    this.nxts = nsigners.signers.map(
      (signer) => this.encrypter.encrypt(void 0, signer).qb64
    );
    const digers = nsigners.signers.map(
      (nsigner) => new Diger({ code: this.dcode }, nsigner.verfer.qb64b).qb64
    );
    return [verfers, digers];
  }
  async sign(ser, indexed = true, indices = void 0, ondices = void 0) {
    const signers = this.prxs.map(
      (prx) => this.decrypter.decrypt(
        new Cipher({ qb64: prx }).qb64b,
        void 0,
        this.transferable
      )
    );
    if (indexed) {
      const sigers = [];
      let i = 0;
      for (const [j, signer] of signers.entries()) {
        if (indices != void 0) {
          i = indices[j];
          if (typeof i != "number" || i < 0) {
            throw new Error(
              `Invalid signing index = ${i}, not whole number.`
            );
          }
        } else {
          i = j;
        }
        let o = 0;
        if (ondices != void 0) {
          o = ondices[j];
          if (o == void 0 || typeof o == "number" && typeof o != "number" && o >= 0) {
            throw new Error(
              `Invalid ondex = ${o}, not whole number.`
            );
          }
        } else {
          o = i;
        }
        sigers.push(
          signer.sign(ser, i, o == void 0 ? true : false, o)
        );
      }
      return sigers.map((siger) => siger.qb64);
    } else {
      const cigars = [];
      for (const [, signer] of signers.entries()) {
        cigars.push(signer.sign(ser));
      }
      return cigars.map((cigar) => cigar.qb64);
    }
  }
};
var GroupKeeper = class {
  manager;
  mhab;
  gkeys = [];
  gdigs = [];
  algo = "group" /* group */;
  signers;
  constructor(manager, mhab, states = void 0, rstates = void 0, keys = [], ndigs = []) {
    this.manager = manager;
    if (states != void 0) {
      keys = states.map((state) => state["k"][0]);
    }
    if (rstates != void 0) {
      ndigs = rstates.map((state) => state["n"][0]);
    }
    this.gkeys = states?.map((state) => state["k"][0]) ?? keys;
    this.gdigs = rstates?.map((state) => state["n"][0]) ?? ndigs;
    this.mhab = mhab;
    this.signers = [];
  }
  async incept() {
    return [this.gkeys, this.gdigs];
  }
  async rotate(_ncodes, _transferable, states, rstates) {
    this.gkeys = states.map((state) => state["k"][0]);
    this.gdigs = rstates.map((state) => state["n"][0]);
    return [this.gkeys, this.gdigs];
  }
  async sign(ser, indexed = true) {
    if (!this.mhab.state) {
      throw new Error(`No state in mhab`);
    }
    const key = this.mhab["state"]["k"][0];
    const ndig = this.mhab["state"]["n"][0];
    const csi = this.gkeys.indexOf(key);
    const pni = this.gdigs.indexOf(ndig);
    const mkeeper = this.manager.get(this.mhab);
    return await mkeeper.sign(ser, indexed, [csi], [pni]);
  }
  params() {
    return {
      mhab: this.mhab,
      keys: this.gkeys,
      ndigs: this.gdigs
    };
  }
};

// src/keri/app/contacting.ts
var Contacts = class {
  client;
  /**
   * Contacts
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * List contacts
   * @async
   * @param {string} [group] Optional group name to filter contacts
   * @param {string} [filterField] Optional field name to filter contacts
   * @param {string} [filterValue] Optional field value to filter contacts
   * @returns {Promise<any>} A promise to the list of contacts
   */
  async list(group, filterField, filterValue) {
    const params = new URLSearchParams();
    if (group !== void 0) {
      params.append("group", group);
    }
    if (filterField !== void 0 && filterValue !== void 0) {
      params.append("filter_field", filterField);
      params.append("filter_value", filterValue);
    }
    const path = `/contacts?` + params.toString();
    const method = "GET";
    const res = await this.client.fetch(path, method, null);
    return await res.json();
  }
  /**
   * Get a contact
   * @async
   * @param {string} pre Prefix of the contact
   * @returns {Promise<any>} A promise to the contact
   */
  async get(pre) {
    const path = `/contacts/` + pre;
    const method = "GET";
    const res = await this.client.fetch(path, method, null);
    return await res.json();
  }
  /**
   * Add a contact
   * @async
   * @param {string} pre Prefix of the contact
   * @param {any} info Information about the contact
   * @returns {Promise<any>} A promise to the result of the addition
   */
  async add(pre, info) {
    const path = `/contacts/` + pre;
    const method = "POST";
    const res = await this.client.fetch(path, method, info);
    return await res.json();
  }
  /**
   * Delete a contact
   * @async
   * @param {string} pre Prefix of the contact
   * @returns {Promise<void>}
   */
  async delete(pre) {
    const path = `/contacts/` + pre;
    const method = "DELETE";
    await this.client.fetch(path, method, null);
  }
  /**
   * Update a contact
   * @async
   * @param {string} pre Prefix of the contact
   * @param {any} info Updated information about the contact
   * @returns {Promise<any>} A promise to the result of the update
   */
  async update(pre, info) {
    const path = `/contacts/` + pre;
    const method = "PUT";
    const res = await this.client.fetch(path, method, info);
    return await res.json();
  }
};
var Challenges = class {
  client;
  /**
   * Challenges
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Generate a random challenge word list based on BIP39
   * @async
   * @param {number} strength Integer representing the strength of the challenge. Typically 128 or 256
   * @returns {Promise<any>} A promise to the list of random words
   */
  async generate(strength = 128) {
    const path = `/challenges?strength=${strength.toString()}`;
    const method = "GET";
    const res = await this.client.fetch(path, method, null);
    return await res.json();
  }
  /**
   * Respond to a challenge by signing a message with the list of words
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {string} recipient Prefix of the recipient of the response
   * @param {Array<string>} words List of words to embed in the signed response
   * @returns {Promise<Response>} A promise to the result of the response
   */
  async respond(name, recipient, words) {
    const hab = await this.client.identifiers().get(name);
    const exchanges = this.client.exchanges();
    const resp = await exchanges.send(
      name,
      "challenge",
      hab,
      "/challenge/response",
      { words },
      {},
      [recipient]
    );
    return resp;
  }
  /**
   * Ask Agent to verify a given sender signed the provided words
   * @param {string} source Prefix of the identifier that was challenged
   * @param {Array<string>} words List of challenge words to check for
   * @returns A promise to the long running operation
   */
  async verify(source, words) {
    const path = `/challenges_verify/${source}`;
    const method = "POST";
    const data = {
      words
    };
    const res = await this.client.fetch(path, method, data);
    return await res.json();
  }
  /**
   * Mark challenge response as signed and accepted
   * @param {string} source Prefix of the identifier that was challenged
   * @param {string} said qb64 AID of exn message representing the signed response
   * @returns {Promise<Response>} A promise to the result
   */
  async responded(source, said) {
    const path = `/challenges_verify/${source}`;
    const method = "PUT";
    const data = {
      said
    };
    const res = await this.client.fetch(path, method, data);
    return res;
  }
};

// src/keri/app/coring.ts
import libsodium6 from "libsodium-wrappers-sumo";
function randomPasscode() {
  const raw = libsodium6.randombytes_buf(16);
  const salter = new Salter({ raw });
  return salter.qb64.substring(2, 23);
}
function randomNonce() {
  const seed = libsodium6.randombytes_buf(libsodium6.crypto_sign_SEEDBYTES);
  const seedqb64 = new Matter({ raw: seed, code: MtrDex.Ed25519_Seed });
  return seedqb64.qb64;
}
var Oobis = class {
  client;
  /**
   * Oobis
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Get the OOBI(s) for a managed indentifier for a given role
   * @param {string} name Name or alias of the identifier
   * @param {string} role Authorized role
   * @returns {Promise<any>} A promise to the OOBI(s)
   */
  async get(name, role = "agent") {
    const path = `/identifiers/${name}/oobis?role=${role}`;
    const method = "GET";
    const res = await this.client.fetch(path, method, null);
    return await res.json();
  }
  /**
   * Resolve an OOBI
   * @async
   * @param {string} oobi The OOBI to be resolver
   * @param {string} [alias] Optional name or alias to link the OOBI resolution to a contact
   * @returns {Promise<any>} A promise to the long-running operation
   */
  async resolve(oobi, alias) {
    const path = `/oobis`;
    const data = {
      url: oobi
    };
    if (alias !== void 0) {
      data.oobialias = alias;
    }
    const method = "POST";
    const res = await this.client.fetch(path, method, data);
    return await res.json();
  }
};
var Operations = class {
  client;
  /**
   * Operations
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Get operation status
   * @async
   * @param {string} name Name of the operation
   * @returns {Promise<Operation>} A promise to the status of the operation
   */
  async get(name) {
    const path = `/operations/${name}`;
    const data = null;
    const method = "GET";
    const res = await this.client.fetch(path, method, data);
    return await res.json();
  }
  /**
   * List operations
   * @async
   * @param {string} type Select operations by type
   * @returns {Promise<Operation[]>} A list of operations
   */
  async list(type) {
    const params = new URLSearchParams();
    if (type !== void 0) {
      params.append("type", type);
    }
    const path = `/operations?${params.toString()}`;
    const data = null;
    const method = "GET";
    const res = await this.client.fetch(path, method, data);
    return await res.json();
  }
  /**
   * Delete operation
   * @async
   * @param {string} name Name of the operation
   */
  async delete(name) {
    const path = `/operations/${name}`;
    const data = null;
    const method = "DELETE";
    await this.client.fetch(path, method, data);
  }
  /**
   * Poll for operation to become completed.
   */
  async wait(op, options = {}) {
    const minSleep = options.minSleep ?? 10;
    const maxSleep = options.maxSleep ?? 1e4;
    const increaseFactor = options.increaseFactor ?? 50;
    if (op.metadata?.depends?.done === false) {
      await this.wait(op.metadata.depends, options);
    }
    if (op.done === true) {
      return op;
    }
    let retries = 0;
    while (true) {
      op = await this.get(op.name);
      const delay = Math.max(
        minSleep,
        Math.min(maxSleep, 2 ** retries * increaseFactor)
      );
      retries++;
      if (op.done === true) {
        return op;
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
      options.signal?.throwIfAborted();
    }
  }
};
var KeyEvents = class {
  client;
  /**
   * KeyEvents
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Retrieve key events for an identifier
   * @async
   * @param {string} pre Identifier prefix
   * @returns {Promise<any>} A promise to the key events
   */
  async get(pre) {
    const path = `/events?pre=${pre}`;
    const data = null;
    const method = "GET";
    const res = await this.client.fetch(path, method, data);
    return await res.json();
  }
};
var KeyStates = class {
  client;
  /**
   * KeyStates
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Retriene the key state for an identifier
   * @async
   * @param {string} pre Identifier prefix
   * @returns {Promise<any>} A promise to the key states
   */
  async get(pre) {
    const path = `/states?pre=${pre}`;
    const data = null;
    const method = "GET";
    const res = await this.client.fetch(path, method, data);
    return await res.json();
  }
  /**
   * Retrieve the key state for a list of identifiers
   * @async
   * @param {Array<string>} pres List of identifier prefixes
   * @returns {Promise<any>} A promise to the key states
   */
  async list(pres) {
    const path = `/states?${pres.map((pre) => `pre=${pre}`).join("&")}`;
    const data = null;
    const method = "GET";
    const res = await this.client.fetch(path, method, data);
    return await res.json();
  }
  /**
   * Query the key state of an identifier for a given sequence number or anchor
   * @async
   * @param {string} pre Identifier prefix
   * @param {number} [sn] Optional sequence number
   * @param {any} [anchor] Optional anchor
   * @returns {Promise<any>} A promise to the long-running operation
   */
  async query(pre, sn, anchor) {
    const path = `/queries`;
    const data = {
      pre
    };
    if (sn !== void 0) {
      data.sn = sn;
    }
    if (anchor !== void 0) {
      data.anchor = anchor;
    }
    const method = "POST";
    const res = await this.client.fetch(path, method, data);
    return await res.json();
  }
};

// src/keri/core/vdring.ts
var vdr;
((vdr2) => {
  function incept2({
    pre,
    toad,
    nonce = randomNonce(),
    baks = [],
    cnfg = [],
    version = Versionage,
    kind = "JSON" /* JSON */,
    code = MtrDex.Blake3_256
  }) {
    const vs = versify("KERI" /* KERI */, version, kind, 0);
    const isn = 0;
    const ilk = Ilks.vcp;
    if (cnfg.includes(TraitDex.NoBackers) && baks.length > 0) {
      throw new Error(
        `${baks.length} backers specified for NB vcp, 0 allowed`
      );
    }
    if (new Set(baks).size < baks.length) {
      throw new Error(`Invalid baks ${baks} has duplicates`);
    }
    let _toad;
    if (toad === void 0) {
      if (baks.length === 0) {
        _toad = 0;
      } else {
        _toad = ample(baks.length);
      }
    } else {
      _toad = +toad;
    }
    if (baks.length > 0) {
      if (_toad < 1 || _toad > baks.length) {
        throw new Error(`Invalid toad ${_toad} for baks in ${baks}`);
      }
    } else {
      if (_toad != 0) {
        throw new Error(`Invalid toad ${_toad} for no baks`);
      }
    }
    const ked = {
      v: vs,
      t: ilk,
      d: "",
      i: "",
      ii: pre,
      s: "" + isn,
      c: cnfg,
      bt: _toad.toString(16),
      b: baks,
      n: nonce
    };
    const prefixer = new Prefixer({ code }, ked);
    ked.i = prefixer.qb64;
    ked.d = prefixer.qb64;
    return new Serder(ked);
  }
  vdr2.incept = incept2;
})(vdr || (vdr = {}));

// src/keri/app/credentialing.ts
var CredentialTypes = class {
  static issued = "issued";
  static received = "received";
};
var Credentials = class {
  client;
  /**
   * Credentials
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * List credentials
   * @async
   * @param {CredentialFilter} [kargs] Optional parameters to filter the credentials
   * @returns {Promise<any>} A promise to the list of credentials
   */
  async list(kargs = {}) {
    const path = `/credentials/query`;
    const filtr = kargs.filter === void 0 ? {} : kargs.filter;
    const sort = kargs.sort === void 0 ? [] : kargs.sort;
    const limit = kargs.limit === void 0 ? 25 : kargs.limit;
    const skip = kargs.skip === void 0 ? 0 : kargs.skip;
    const data = {
      filter: filtr,
      sort,
      skip,
      limit
    };
    const method = "POST";
    const res = await this.client.fetch(path, method, data, void 0);
    return await res.json();
  }
  /**
   * Get a credential
   * @async
   * @param {string} said - SAID of the credential
   * @param {boolean} [includeCESR=false] - Optional flag export the credential in CESR format
   * @returns {Promise<any>} A promise to the credential
   */
  async get(said, includeCESR = false) {
    const path = `/credentials/${said}`;
    const method = "GET";
    const headers = includeCESR ? new Headers({ Accept: "application/json+cesr" }) : new Headers({ Accept: "application/json" });
    const res = await this.client.fetch(path, method, null, headers);
    return includeCESR ? await res.text() : await res.json();
  }
  /**
   * Issue a credential
   */
  async issue(name, args) {
    const hab = await this.client.identifiers().get(name);
    const estOnly = hab.state.c !== void 0 && hab.state.c.includes("EO");
    if (estOnly) {
      throw new Error("Establishment only not implemented");
    }
    if (!this.client.manager) {
      throw new Error("No manager on client");
    }
    const keeper = this.client.manager.get(hab);
    const [, subject] = Saider.saidify({
      d: "",
      ...args.a,
      dt: args.a.dt ?? (/* @__PURE__ */ new Date()).toISOString().replace("Z", "000+00:00")
    });
    const [, acdc] = Saider.saidify({
      v: versify("ACDC" /* ACDC */, void 0, "JSON" /* JSON */, 0),
      d: "",
      u: args.u,
      i: args.i ?? hab.prefix,
      ri: args.ri,
      s: args.s,
      a: subject,
      e: args.e,
      r: args.r
    });
    const [, iss] = Saider.saidify({
      v: versify("KERI" /* KERI */, void 0, "JSON" /* JSON */, 0),
      t: Ilks.iss,
      d: "",
      i: acdc.d,
      s: "0",
      ri: args.ri,
      dt: subject.dt
    });
    const sn = parseInt(hab.state.s, 16);
    const anc = interact({
      pre: hab.prefix,
      sn: sn + 1,
      data: [
        {
          i: iss.i,
          s: iss.s,
          d: iss.d
        }
      ],
      dig: hab.state.d,
      version: void 0,
      kind: void 0
    });
    const sigs = await keeper.sign(b(anc.raw));
    const path = `/identifiers/${hab.name}/credentials`;
    const method = "POST";
    const body = {
      acdc,
      iss,
      ixn: anc.ked,
      sigs,
      [keeper.algo]: keeper.params()
    };
    const headers = new Headers({
      Accept: "application/json+cesr"
    });
    const res = await this.client.fetch(path, method, body, headers);
    const op = await res.json();
    return {
      acdc: new Serder(acdc),
      iss: new Serder(iss),
      anc,
      op
    };
  }
  /**
   * Revoke credential
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {string} said SAID of the credential
   * @param {string} datetime date time of revocation
   * @returns {Promise<any>} A promise to the long-running operation
   */
  async revoke(name, said, datetime) {
    const hab = await this.client.identifiers().get(name);
    const pre = hab.prefix;
    const vs = versify("KERI" /* KERI */, void 0, "JSON" /* JSON */, 0);
    const dt = datetime ?? (/* @__PURE__ */ new Date()).toISOString().replace("Z", "000+00:00");
    const cred = await this.get(said);
    const _rev = {
      v: vs,
      t: Ilks.rev,
      d: "",
      i: said,
      s: "1",
      ri: cred.sad.ri,
      p: cred.status.d,
      dt
    };
    const [, rev] = Saider.saidify(_rev);
    let ixn = {};
    let sigs = [];
    const state = hab.state;
    if (state.c !== void 0 && state.c.includes("EO")) {
      var estOnly = true;
    } else {
      var estOnly = false;
    }
    const sn = parseInt(state.s, 16);
    const dig = state.d;
    const data = [
      {
        i: rev.i,
        s: rev.s,
        d: rev.d
      }
    ];
    const keeper = this.client.manager.get(hab);
    if (estOnly) {
      throw new Error("Establishment only not implemented");
    } else {
      const serder = interact({
        pre,
        sn: sn + 1,
        data,
        dig,
        version: void 0,
        kind: void 0
      });
      sigs = await keeper.sign(b(serder.raw));
      ixn = serder.ked;
    }
    const body = {
      rev,
      ixn,
      sigs,
      [keeper.algo]: keeper.params()
    };
    const path = `/identifiers/${name}/credentials/${said}`;
    const method = "DELETE";
    const headers = new Headers({
      Accept: "application/json+cesr"
    });
    const res = await this.client.fetch(path, method, body, headers);
    const op = await res.json();
    return {
      rev: new Serder(rev),
      anc: new Serder(ixn),
      op
    };
  }
  /**
   * Present a credential
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {string} said SAID of the credential
   * @param {string} recipient Identifier prefix of the receiver of the presentation
   * @param {boolean} [include=true] Flag to indicate whether to stream credential alongside presentation exchange message
   * @returns {Promise<string>} A promise to the long-running operation
   */
  async present(name, said, recipient, include = true) {
    const hab = await this.client.identifiers().get(name);
    const pre = hab.prefix;
    const cred = await this.get(said);
    const data = {
      i: cred.sad.i,
      s: cred.sad.s,
      n: said
    };
    const vs = versify("KERI" /* KERI */, void 0, "JSON" /* JSON */, 0);
    const _sad = {
      v: vs,
      t: Ilks.exn,
      d: "",
      dt: (/* @__PURE__ */ new Date()).toISOString().replace("Z", "000+00:00"),
      r: "/presentation",
      q: {},
      a: data
    };
    const [, sad] = Saider.saidify(_sad);
    const exn = new Serder(sad);
    const keeper = this.client.manager.get(hab);
    const sig = await keeper.sign(b(exn.raw), true);
    const siger = new Siger({ qb64: sig[0] });
    const seal = ["SealLast", { i: pre }];
    let ims = messagize(exn, [siger], seal, void 0, void 0, true);
    ims = ims.slice(JSON.stringify(exn.ked).length);
    const body = {
      exn: exn.ked,
      sig: new TextDecoder().decode(ims),
      recipient,
      include
    };
    const path = `/identifiers/${name}/credentials/${said}/presentations`;
    const method = "POST";
    const headers = new Headers({
      Accept: "application/json+cesr"
    });
    const res = await this.client.fetch(path, method, body, headers);
    return await res.text();
  }
  /**
   * Request a presentation of a credential
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {string} recipient Identifier prefix of the receiver of the presentation
   * @param {string} schema SAID of the schema
   * @param {string} [issuer] Optional prefix of the issuer of the credential
   * @returns {Promise<string>} A promise to the long-running operation
   */
  async request(name, recipient, schema, issuer) {
    const hab = await this.client.identifiers().get(name);
    const pre = hab.prefix;
    const data = {
      s: schema
    };
    if (issuer !== void 0) {
      data["i"] = issuer;
    }
    const vs = versify("KERI" /* KERI */, void 0, "JSON" /* JSON */, 0);
    const _sad = {
      v: vs,
      t: Ilks.exn,
      d: "",
      dt: (/* @__PURE__ */ new Date()).toISOString().replace("Z", "000+00:00"),
      r: "/presentation/request",
      q: {},
      a: data
    };
    const [, sad] = Saider.saidify(_sad);
    const exn = new Serder(sad);
    const keeper = this.client.manager.get(hab);
    const sig = await keeper.sign(b(exn.raw), true);
    const siger = new Siger({ qb64: sig[0] });
    const seal = ["SealLast", { i: pre }];
    let ims = messagize(exn, [siger], seal, void 0, void 0, true);
    ims = ims.slice(JSON.stringify(exn.ked).length);
    const body = {
      exn: exn.ked,
      sig: new TextDecoder().decode(ims),
      recipient
    };
    const path = `/identifiers/${name}/requests`;
    const method = "POST";
    const headers = new Headers({
      Accept: "application/json+cesr"
    });
    const res = await this.client.fetch(path, method, body, headers);
    return await res.text();
  }
};
var RegistryResult = class {
  _regser;
  _serder;
  _sigs;
  promise;
  constructor(regser, serder, sigs, promise) {
    this._regser = regser;
    this._serder = serder;
    this._sigs = sigs;
    this.promise = promise;
  }
  get regser() {
    return this._regser;
  }
  get serder() {
    return this._serder;
  }
  get sigs() {
    return this._sigs;
  }
  async op() {
    const res = await this.promise;
    return await res.json();
  }
};
var Registries = class {
  client;
  /**
   * Registries
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * List registries
   * @async
   * @param {string} name Name or alias of the identifier
   * @returns {Promise<any>} A promise to the list of registries
   */
  async list(name) {
    const path = `/identifiers/${name}/registries`;
    const method = "GET";
    const res = await this.client.fetch(path, method, null);
    return await res.json();
  }
  /**
   * Create a registry
   * @async
   * @param {CreateRegistryArgs}
   * @returns {Promise<[any, Serder, any[], object]> } A promise to the long-running operation
   */
  async create({
    name,
    registryName,
    noBackers = true,
    toad = 0,
    baks = [],
    nonce
  }) {
    const hab = await this.client.identifiers().get(name);
    const pre = hab.prefix;
    const cnfg = [];
    if (noBackers) {
      cnfg.push(TraitDex.NoBackers);
    }
    const state = hab.state;
    const estOnly = state.c !== void 0 && state.c.includes("EO");
    if (estOnly) {
      cnfg.push(TraitDex.EstOnly);
    }
    const regser = vdr.incept({ pre, baks, toad, nonce, cnfg });
    if (estOnly) {
      throw new Error("establishment only not implemented");
    } else {
      const state2 = hab.state;
      const sn = parseInt(state2.s, 16);
      const dig = state2.d;
      const data = [
        {
          i: regser.pre,
          s: "0",
          d: regser.pre
        }
      ];
      const serder = interact({
        pre,
        sn: sn + 1,
        data,
        dig,
        version: Versionage,
        kind: "JSON" /* JSON */
      });
      const keeper = this.client.manager.get(hab);
      const sigs = await keeper.sign(b(serder.raw));
      const res = this.createFromEvents(
        hab,
        name,
        registryName,
        regser.ked,
        serder.ked,
        sigs
      );
      return new RegistryResult(regser, serder, sigs, res);
    }
  }
  createFromEvents(hab, name, registryName, vcp, ixn, sigs) {
    const path = `/identifiers/${name}/registries`;
    const method = "POST";
    const data = {
      name: registryName,
      vcp,
      ixn,
      sigs
    };
    const keeper = this.client.manager.get(hab);
    data[keeper.algo] = keeper.params();
    return this.client.fetch(path, method, data);
  }
  /**
   * Rename a registry
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {string} registryName Current registry name
   * @param {string} newName New registry name
   * @returns {Promise<any>} A promise to the registry record
   */
  async rename(name, registryName, newName) {
    const path = `/identifiers/${name}/registries/${registryName}`;
    const method = "PUT";
    const data = {
      name: newName
    };
    const res = await this.client.fetch(path, method, data);
    return await res.json();
  }
};
var Schemas = class {
  client;
  /**
   * Schemas
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Get a schema
   * @async
   * @param {string} said SAID of the schema
   * @returns {Promise<any>} A promise to the schema
   */
  async get(said) {
    const path = `/schema/${said}`;
    const method = "GET";
    const res = await this.client.fetch(path, method, null);
    return await res.json();
  }
  /**
   * List schemas
   * @async
   * @returns {Promise<any>} A promise to the list of schemas
   */
  async list() {
    const path = `/schema`;
    const method = "GET";
    const res = await this.client.fetch(path, method, null);
    return await res.json();
  }
};
var Ipex = class {
  client;
  /**
   * Schemas
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Create an IPEX grant EXN message
   */
  async grant(args) {
    const hab = await this.client.identifiers().get(args.senderName);
    const data = {
      m: args.message ?? "",
      i: args.recipient
    };
    let atc = args.ancAttachment;
    if (atc === void 0) {
      const keeper = this.client.manager.get(hab);
      const sigs = await keeper.sign(b(args.anc.raw));
      const sigers = sigs.map((sig) => new Siger({ qb64: sig }));
      const ims = d(messagize(args.anc, sigers));
      atc = ims.substring(args.anc.size);
    }
    const acdcAtc = args.acdcAttachment === void 0 ? d(serializeACDCAttachment(args.iss)) : args.acdcAttachment;
    const issAtc = args.issAttachment === void 0 ? d(serializeIssExnAttachment(args.anc)) : args.issAttachment;
    const embeds = {
      acdc: [args.acdc, acdcAtc],
      iss: [args.iss, issAtc],
      anc: [args.anc, atc]
    };
    return this.client.exchanges().createExchangeMessage(
      hab,
      "/ipex/grant",
      data,
      embeds,
      args.recipient,
      args.datetime,
      args.agree
    );
  }
  async submitGrant(name, exn, sigs, atc, recp) {
    const body = {
      exn: exn.ked,
      sigs,
      atc,
      rec: recp
    };
    const response = await this.client.fetch(
      `/identifiers/${name}/ipex/grant`,
      "POST",
      body
    );
    return response.json();
  }
  /**
   * Create an IPEX admit EXN message
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {string} message accompany human readable description of the credential being admitted
   * @param {string} grant qb64 SAID of grant message this admit is responding to
   * @param {string} datetime Optional datetime to set for the credential
   * @returns {Promise<[Serder, string[], string]>} A promise to the long-running operation
   */
  async admit(name, message, grant, datetime) {
    const hab = await this.client.identifiers().get(name);
    const data = {
      m: message
    };
    return this.client.exchanges().createExchangeMessage(
      hab,
      "/ipex/admit",
      data,
      {},
      "",
      datetime,
      grant
    );
  }
  async submitAdmit(name, exn, sigs, atc, recp) {
    const body = {
      exn: exn.ked,
      sigs,
      atc,
      rec: recp
    };
    const response = await this.client.fetch(
      `/identifiers/${name}/ipex/admit`,
      "POST",
      body
    );
    return response.json();
  }
};

// src/keri/app/delegating.ts
var Delegations = class {
  client;
  /**
   * Delegations
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Approve the delegation via interaction event
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {any} [data] The anchoring interaction event
   * @returns {Promise<EventResult>} A promise to the delegated approval result
   */
  async approve(name, data) {
    let { serder, sigs, jsondata } = await this.client.identifiers().createInteract(name, data);
    const res = await this.client.fetch(
      "/identifiers/" + name + "/delegation",
      "POST",
      jsondata
    );
    return new EventResult(serder, sigs, res);
  }
};

// src/keri/app/escrowing.ts
var Escrows = class {
  client;
  /**
   * Escrows
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * List replay messages
   * @async
   * @param {string} [route] Optional route in the replay message
   * @returns {Promise<any>} A promise to the list of replay messages
   */
  async listReply(route) {
    const params = new URLSearchParams();
    if (route !== void 0) {
      params.append("route", route);
    }
    const path = `/escrows/rpy?` + params.toString();
    const method = "GET";
    const res = await this.client.fetch(path, method, null);
    return await res.json();
  }
};

// src/keri/core/bexter.ts
import { Buffer as Buffer10 } from "buffer";
var B64REX = "^[A-Za-z0-9\\-_]*$";
var Reb64 = new RegExp(B64REX);
var Bexter = class _Bexter extends Matter {
  constructor({ raw, code = MtrDex.StrB64_L0, qb64b, qb64, qb2 }, bext) {
    if (raw === void 0 && qb64b === void 0 && qb64 === void 0 && qb2 === void 0) {
      if (bext === void 0)
        throw new EmptyMaterialError("Missing bext string.");
      const match = Reb64.exec(bext);
      if (!match)
        throw new Error("Invalid Base64.");
      raw = _Bexter._rawify(bext);
    }
    super({ raw, code, qb64b, qb64, qb2 });
    if (!BexDex.has(this.code))
      throw new Error(`Invalid code = ${this.code} for Bexter.`);
  }
  static _rawify(bext) {
    const ts = bext.length % 4;
    const ws = (4 - ts) % 4;
    const ls = (3 - ts) % 3;
    const wad = new Array(ws);
    wad.fill("A");
    const base = wad.join("") + bext;
    const raw = decodeBase64Url(base);
    return Uint8Array.from(raw).subarray(ls);
  }
  get bext() {
    const sizage = Matter.Sizes.get(this.code);
    const wad = Uint8Array.from(new Array(sizage?.ls).fill(0));
    const bext = encodeBase64Url(Buffer10.from([...wad, ...this.raw]));
    let ws = 0;
    if (sizage?.ls === 0 && bext !== void 0) {
      if (bext[0] === "A") {
        ws = 1;
      }
    } else {
      ws = (sizage?.ls + 1) % 4;
    }
    return bext.substring(ws);
  }
};

// src/keri/core/pather.ts
var Pather = class _Pather extends Bexter {
  constructor({ raw, code = MtrDex.StrB64_L0, qb64b, qb64, qb2 }, bext, path) {
    if (raw === void 0 && bext === void 0 && qb64b === void 0 && qb64 === void 0 && qb2 === void 0) {
      if (path === void 0)
        throw new EmptyMaterialError("Missing bext string.");
      bext = _Pather._bextify(path);
    }
    super({ raw, code, qb64b, qb64, qb2 }, bext);
  }
  // TODO: implement SAD access methods like resolve, root, strip, startswith and tail
  get path() {
    if (!this.bext.startsWith("-")) {
      throw new Error("invalid SAD ptr");
    }
    let path = this.bext;
    while (path.charAt(0) === "-") {
      path = path.substring(1);
    }
    const apath = path.split("-");
    if (apath[0] !== "") {
      return apath;
    } else {
      return [];
    }
  }
  static _bextify(path) {
    const vath = [];
    for (const p of path) {
      let sp = "";
      if (typeof p === "number") {
        sp = p.toString();
      } else {
        sp = p;
      }
      const match = Reb64.exec(sp);
      if (!match) {
        throw new Error(`"Non Base64 path component = ${p}.`);
      }
      vath.push(sp);
    }
    return "-" + vath.join("-");
  }
};

// src/keri/app/exchanging.ts
var Exchanges = class {
  client;
  /**
   * Exchanges
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Create exn message
   * @async
   * @returns {Promise<any>} A promise to the list of replay messages
   * @param sender
   * @param route
   * @param payload
   * @param embeds
   * @param recipient
   * @param datetime
   * @param dig
   */
  async createExchangeMessage(sender, route, payload, embeds, recipient, datetime, dig) {
    const keeper = this.client.manager.get(sender);
    const [exn, end] = exchange(
      route,
      payload,
      sender["prefix"],
      recipient,
      datetime,
      dig,
      void 0,
      embeds
    );
    const sigs = await keeper.sign(b(exn.raw));
    return [exn, sigs, d(end)];
  }
  /**
   * Send exn messages to list of recipients
   * @async
   * @returns {Promise<any>} A promise to the list of replay messages
   * @param name
   * @param topic
   * @param sender
   * @param route
   * @param payload
   * @param embeds
   * @param recipients
   */
  async send(name, topic, sender, route, payload, embeds, recipients) {
    for (const recipient of recipients) {
      const [exn, sigs, atc] = await this.createExchangeMessage(
        sender,
        route,
        payload,
        embeds,
        recipient
      );
      return await this.sendFromEvents(
        name,
        topic,
        exn,
        sigs,
        atc,
        recipients
      );
    }
  }
  /**
   * Send exn messaget to list of recipients
   * @async
   * @returns {Promise<any>} A promise to the list of replay messages
   * @param name
   * @param topic
   * @param exn
   * @param sigs
   * @param atc
   * @param recipients
   */
  async sendFromEvents(name, topic, exn, sigs, atc, recipients) {
    const path = `/identifiers/${name}/exchanges`;
    const method = "POST";
    const data = {
      tpc: topic,
      exn: exn.ked,
      sigs,
      atc,
      rec: recipients
    };
    const res = await this.client.fetch(path, method, data);
    return await res.json();
  }
  /**
   * Get exn message by said
   * @async
   * @returns A promise to the exn message
   * @param said The said of the exn message
   */
  async get(said) {
    const path = `/exchanges/${said}`;
    const method = "GET";
    const res = await this.client.fetch(path, method, null);
    return await res.json();
  }
};
function exchange(route, payload, sender, recipient, date, dig, modifiers, embeds) {
  const vs = versify("KERI" /* KERI */, void 0, "JSON" /* JSON */, 0);
  const ilk = Ilks.exn;
  const dt = date !== void 0 ? date : nowUTC().toISOString().replace("Z", "000+00:00");
  const p = dig !== void 0 ? dig : "";
  const q = modifiers !== void 0 ? modifiers : {};
  const ems = embeds != void 0 ? embeds : {};
  let e = {};
  let end = "";
  Object.entries(ems).forEach(([key, value]) => {
    const serder = value[0];
    const atc = value[1];
    e[key] = serder.ked;
    if (atc == void 0) {
      return;
    }
    let pathed = "";
    const pather = new Pather({}, void 0, ["e", key]);
    pathed += pather.qb64;
    pathed += atc;
    const counter = new Counter({
      code: CtrDex.PathedMaterialQuadlets,
      count: Math.floor(pathed.length / 4)
    });
    end += counter.qb64;
    end += pathed;
  });
  if (Object.keys(e).length > 0) {
    e["d"] = "";
    [, e] = Saider.saidify(e);
  }
  const attrs = {};
  attrs["i"] = recipient;
  const a = {
    ...attrs,
    ...payload
  };
  const _ked = {
    v: vs,
    t: ilk,
    d: "",
    i: sender,
    rp: recipient,
    p,
    dt,
    r: route,
    q,
    a,
    e
  };
  const [, ked] = Saider.saidify(_ked);
  const exn = new Serder(ked);
  return [exn, b(end)];
}

// src/keri/app/grouping.ts
var Groups = class {
  client;
  /**
   * Groups
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Get group request messages
   * @async
   * @param {string} [said] SAID of exn message to load
   * @returns {Promise<any>} A promise to the list of replay messages
   */
  async getRequest(said) {
    const path = `/multisig/request/` + said;
    const method = "GET";
    const res = await this.client.fetch(path, method, null);
    return await res.json();
  }
  /**
   * Send multisig exn request  messages to other group members
   * @async
   * @param {string} [name] human readable name of group AID
   * @param {Dict<any>} [exn] exn message to send to other members
   * @param {string[]} [sigs] signature of the participant over the exn
   * @param {string} [atc] additional attachments from embedded events in exn
   * @returns {Promise<any>} A promise to the list of replay messages
   */
  async sendRequest(name, exn, sigs, atc) {
    const path = `/identifiers/${name}/multisig/request`;
    const method = "POST";
    const data = {
      exn,
      sigs,
      atc
    };
    const res = await this.client.fetch(path, method, data);
    return await res.json();
  }
  /**
   * Join multisig group using rotation event.
   * This can be used by participants being asked to contribute keys to a rotation event to join an existing group.
   * @async
   * @param {string} [name] human readable name of group AID
   * @param {any} [rot] rotation event
   * @param {any} [sigs] signatures
   * @param {string} [gid] prefix
   * @param {string[]} [smids] array of particpants
   * @param {string[]} [rmids] array of particpants
   * @returns {Promise<any>} A promise to the list of replay messages
   */
  async join(name, rot, sigs, gid, smids, rmids) {
    const path = `/identifiers/${name}/multisig/join`;
    const method = "POST";
    const data = {
      tpc: "multisig",
      rot: rot.ked,
      sigs,
      gid,
      smids,
      rmids
    };
    const res = await this.client.fetch(path, method, data);
    return await res.json();
  }
};

// src/keri/app/notifying.ts
var Notifications = class {
  client;
  /**
   * Notifications
   * @param {SignifyClient} client
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * List notifications
   * @async
   * @param {number} [start=0] Start index of list of notifications, defaults to 0
   * @param {number} [end=24] End index of list of notifications, defaults to 24
   * @returns {Promise<any>} A promise to the list of notifications
   */
  async list(start = 0, end = 24) {
    const extraHeaders = new Headers();
    extraHeaders.append("Range", `notes=${start}-${end}`);
    const path = `/notifications`;
    const method = "GET";
    const res = await this.client.fetch(path, method, null, extraHeaders);
    const cr = res.headers.get("content-range");
    const range2 = parseRangeHeaders(cr, "notes");
    const notes = await res.json();
    return {
      start: range2.start,
      end: range2.end,
      total: range2.total,
      notes
    };
  }
  /**
   * Mark a notification as read
   * @async
   * @param {string} said SAID of the notification
   * @returns {Promise<string>} A promise to the result of the marking
   */
  async mark(said) {
    const path = `/notifications/` + said;
    const method = "PUT";
    const res = await this.client.fetch(path, method, null);
    return await res.text();
  }
  /**
   * Delete a notification
   * @async
   * @param {string} said SAID of the notification
   * @returns {Promise<any>} A promise to the result of the deletion
   */
  async delete(said) {
    const path = `/notifications/` + said;
    const method = "DELETE";
    await this.client.fetch(path, method, null);
  }
};

// src/keri/app/clienting.ts
var DEFAULT_BOOT_URL = "http://localhost:3903";
var State = class {
  agent;
  controller;
  ridx;
  pidx;
  constructor() {
    this.agent = null;
    this.controller = null;
    this.pidx = 0;
    this.ridx = 0;
  }
};
var SignifyClient = class {
  controller;
  url;
  bran;
  pidx;
  agent;
  authn;
  manager;
  tier;
  bootUrl;
  exteralModules;
  /**
   * SignifyClient constructor
   * @param {string} url KERIA admin interface URL
   * @param {string} bran Base64 21 char string that is used as base material for seed of the client AID
   * @param {Tier} tier Security tier for generating keys of the client AID (high | mewdium | low)
   * @param {string} bootUrl KERIA boot interface URL
   * @param {ExternalModule[]} externalModules list of external modules to load
   */
  constructor(url, bran, tier = "low" /* low */, bootUrl = DEFAULT_BOOT_URL, externalModules = []) {
    this.url = url;
    if (bran.length < 21) {
      throw Error("bran must be 21 characters");
    }
    this.bran = bran;
    this.pidx = 0;
    this.controller = new Controller(bran, tier);
    this.authn = null;
    this.agent = null;
    this.manager = null;
    this.tier = tier;
    this.bootUrl = bootUrl;
    this.exteralModules = externalModules;
  }
  get data() {
    return [this.url, this.bran, this.pidx, this.authn];
  }
  /**
   * Boot a KERIA agent
   * @async
   * @returns {Promise<Response>} A promise to the result of the boot
   */
  async boot() {
    const [evt, sign] = this.controller?.event ?? [];
    const data = {
      icp: evt.ked,
      sig: sign.qb64,
      stem: this.controller?.stem,
      pidx: 1,
      tier: this.controller?.tier
    };
    return await fetch(this.bootUrl + "/boot", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  /**
   * Get state of the agent and the client
   * @async
   * @returns {Promise<Response>} A promise to the state
   */
  async state() {
    const caid = this.controller?.pre;
    const res = await fetch(this.url + `/agent/${caid}`);
    if (res.status == 404) {
      throw new Error(`agent does not exist for controller ${caid}`);
    }
    const data = await res.json();
    const state = new State();
    state.agent = data.agent ?? {};
    state.controller = data.controller ?? {};
    state.ridx = data.ridx ?? 0;
    state.pidx = data.pidx ?? 0;
    return state;
  }
  /**  Connect to a KERIA agent
   * @async
   */
  async connect() {
    const state = await this.state();
    this.pidx = state.pidx;
    this.controller = new Controller(
      this.bran,
      this.tier,
      0,
      state.controller
    );
    this.controller.ridx = state.ridx !== void 0 ? state.ridx : 0;
    this.agent = new Agent(state.agent);
    if (this.agent.anchor != this.controller.pre) {
      throw Error(
        "commitment to controller AID missing in agent inception event"
      );
    }
    if (this.controller.serder.ked.s == 0) {
      await this.approveDelegation();
    }
    this.manager = new KeyManager(
      this.controller.salter,
      this.exteralModules
    );
    this.authn = new Authenticater(
      this.controller.signer,
      this.agent.verfer
    );
  }
  /**
   * Fetch a resource from the KERIA agent
   * @async
   * @param {string} path Path to the resource
   * @param {string} method HTTP method
   * @param {any} data Data to be sent in the body of the resource
   * @param {Headers} [extraHeaders] Optional extra headers to be sent with the request
   * @returns {Promise<Response>} A promise to the result of the fetch
   */
  async fetch(path, method, data, extraHeaders) {
    const headers = new Headers();
    let signed_headers = new Headers();
    const final_headers = new Headers();
    headers.set("Signify-Resource", this.controller.pre);
    headers.set(
      HEADER_SIG_TIME,
      (/* @__PURE__ */ new Date()).toISOString().replace("Z", "000+00:00")
    );
    headers.set("Content-Type", "application/json");
    const _body = method == "GET" ? null : JSON.stringify(data);
    if (this.authn) {
      signed_headers = this.authn.sign(
        headers,
        method,
        path.split("?")[0]
      );
    } else {
      throw new Error("client need to call connect first");
    }
    signed_headers.forEach((value, key) => {
      final_headers.set(key, value);
    });
    if (extraHeaders !== void 0) {
      extraHeaders.forEach((value, key) => {
        final_headers.append(key, value);
      });
    }
    const res = await fetch(this.url + path, {
      method,
      body: _body,
      headers: final_headers
    });
    if (!res.ok) {
      const error = await res.text();
      const message = `HTTP ${method} ${path} - ${res.status} ${res.statusText} - ${error}`;
      throw new Error(message);
    }
    const isSameAgent = this.agent?.pre === res.headers.get("signify-resource");
    if (!isSameAgent) {
      throw new Error("message from a different remote agent");
    }
    const verification = this.authn.verify(
      res.headers,
      method,
      path.split("?")[0]
    );
    if (verification) {
      return res;
    } else {
      throw new Error("response verification failed");
    }
  }
  /**
   * Create a Signed Request to fetch a resource from an external URL with headers signed by an AID
   * @async
   * @param {string} aidName Name or alias of the AID to be used for signing
   * @param {string} url URL of the requested resource
   * @param {RequestInit} req Request options should include:
   *     - method: HTTP method
   *     - data Data to be sent in the body of the resource.
   *              If the data is a CESR JSON string then you should also set contentType to 'application/json+cesr'
   *              If the data is a FormData object then you should not set the contentType and the browser will set it to 'multipart/form-data'
   *              If the data is an object then you should use JSON.stringify to convert it to a string and set the contentType to 'application/json'
   *     - contentType Content type of the request.
   * @returns {Promise<Request>} A promise to the created Request
   */
  async createSignedRequest(aidName, url, req) {
    const hab = await this.identifiers().get(aidName);
    const keeper = this.manager.get(hab);
    const authenticator = new Authenticater(
      keeper.signers[0],
      keeper.signers[0].verfer
    );
    const headers = new Headers(req.headers);
    headers.set("Signify-Resource", hab["prefix"]);
    headers.set(
      HEADER_SIG_TIME,
      (/* @__PURE__ */ new Date()).toISOString().replace("Z", "000+00:00")
    );
    const signed_headers = authenticator.sign(
      new Headers(headers),
      req.method ?? "GET",
      new URL(url).pathname
    );
    req.headers = signed_headers;
    return new Request(url, req);
  }
  /**
   * Approve the delegation of the client AID to the KERIA agent
   * @async
   * @returns {Promise<Response>} A promise to the result of the approval
   */
  async approveDelegation() {
    const sigs = this.controller.approveDelegation(this.agent);
    const data = {
      ixn: this.controller.serder.ked,
      sigs
    };
    return await fetch(
      this.url + "/agent/" + this.controller.pre + "?type=ixn",
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  /**
   * Save old client passcode in KERIA agent
   * @async
   * @param {string} passcode Passcode to be saved
   * @returns {Promise<Response>} A promise to the result of the save
   */
  async saveOldPasscode(passcode) {
    const caid = this.controller?.pre;
    const body = { salt: passcode };
    return await fetch(this.url + "/salt/" + caid, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  /**
   * Delete a saved passcode from KERIA agent
   * @async
   * @returns {Promise<Response>} A promise to the result of the deletion
   */
  async deletePasscode() {
    const caid = this.controller?.pre;
    return await fetch(this.url + "/salt/" + caid, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  /**
   * Rotate the client AID
   * @async
   * @param {string} nbran Base64 21 char string that is used as base material for the new seed
   * @param {Array<string>} aids List of managed AIDs to be rotated
   * @returns {Promise<Response>} A promise to the result of the rotation
   */
  async rotate(nbran, aids) {
    const data = this.controller.rotate(nbran, aids);
    return await fetch(this.url + "/agent/" + this.controller.pre, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  /**
   * Get identifiers resource
   * @returns {Identifier}
   */
  identifiers() {
    return new Identifier(this);
  }
  /**
   * Get OOBIs resource
   * @returns {Oobis}
   */
  oobis() {
    return new Oobis(this);
  }
  /**
   * Get operations resource
   * @returns {Operations}
   */
  operations() {
    return new Operations(this);
  }
  /**
   * Get keyEvents resource
   * @returns {KeyEvents}
   */
  keyEvents() {
    return new KeyEvents(this);
  }
  /**
   * Get keyStates resource
   * @returns {KeyStates}
   */
  keyStates() {
    return new KeyStates(this);
  }
  /**
   * Get credentials resource
   * @returns {Credentials}
   */
  credentials() {
    return new Credentials(this);
  }
  /**
   * Get IPEX resource
   * @returns {Ipex}
   */
  ipex() {
    return new Ipex(this);
  }
  /**
   * Get registries resource
   * @returns {Registries}
   */
  registries() {
    return new Registries(this);
  }
  /**
   * Get schemas resource
   * @returns {Schemas}
   */
  schemas() {
    return new Schemas(this);
  }
  /**
   * Get challenges resource
   * @returns {Challenges}
   */
  challenges() {
    return new Challenges(this);
  }
  /**
   * Get contacts resource
   * @returns {Contacts}
   */
  contacts() {
    return new Contacts(this);
  }
  /**
   * Get notifications resource
   * @returns {Notifications}
   */
  notifications() {
    return new Notifications(this);
  }
  /**
   * Get escrows resource
   * @returns {Escrows}
   */
  escrows() {
    return new Escrows(this);
  }
  /**
   * Get groups resource
   * @returns {Groups}
   */
  groups() {
    return new Groups(this);
  }
  /**
   * Get exchange resource
   * @returns {Exchanges}
   */
  exchanges() {
    return new Exchanges(this);
  }
  /**
   * Get delegations resource
   * @returns {Delegations}
   */
  delegations() {
    return new Delegations(this);
  }
};

// src/index.ts
var src_default = exports_exports;
export {
  Agent,
  Algos,
  Authenticater,
  B64ChrByIdx,
  B64IdxByChr,
  BexCodex,
  BexDex,
  CesrNumber,
  Challenges,
  Cigar,
  Cipher,
  Codex,
  Contacts,
  Controller,
  Counter,
  CounterCodex,
  Creatory,
  CredentialTypes,
  Credentials,
  CtrDex,
  Decrypter,
  Diger,
  DigiCodex,
  DigiDex,
  DipLabels,
  DrtLabels,
  EmptyMaterialError,
  Encrypter,
  Escrows,
  EventResult,
  Exchanges,
  FALSY,
  GroupKeeper,
  Groups,
  HEADER_SIG_INPUT,
  HEADER_SIG_TIME,
  Hab,
  Habery,
  IcpLabels,
  Ident,
  Identifier,
  IdrDex,
  Ids,
  IdxBthSigDex,
  IdxCrtSigDex,
  IdxSigDex,
  Ilks,
  IndexedBothSigCodex,
  IndexedCurrentSigCodex,
  IndexedSigCodex,
  Indexer,
  IndexerCodex,
  Inputage,
  Ipex,
  IxnLabels,
  KeyEvents,
  KeyManager,
  KeyStates,
  KsnLabels,
  LargeVrzDex,
  MINSIGSIZE,
  MINSNIFFSIZE,
  Manager,
  Matter,
  MatterCodex,
  MtrDex,
  NonTransCodex,
  NonTransDex,
  Notifications,
  NumCodex,
  NumDex,
  Oobis,
  Operations,
  Prefixer,
  RandyCreator,
  RandyKeeper,
  Registries,
  RegistryResult,
  RotLabels,
  RpyLabels,
  Saider,
  Salter,
  SaltyCreator,
  SaltyKeeper,
  Schemas,
  Seqner,
  Serder,
  Serials,
  Siger,
  Signage,
  Signer,
  SignifyClient,
  Sizage,
  SmallVrzDex,
  TRUTHY,
  Tholder,
  Tier,
  TraitCodex,
  TraitDex,
  Unqualified,
  VEREX,
  VERFULLSIZE,
  Verfer,
  Version,
  Versionage,
  Xizage,
  ample,
  arrayEquals,
  b,
  b64ToInt,
  bytesToInt,
  concat,
  d,
  src_default as default,
  desiginput,
  designature,
  deversify,
  dumps,
  exchange,
  extractValues,
  incept,
  intToB64,
  intToB64b,
  intToBytes,
  interact,
  messagize,
  normalize,
  nowUTC,
  openManager,
  pad,
  parseRangeHeaders,
  randomNonce,
  randomPasscode,
  range,
  readInt,
  ready,
  reply,
  riKey,
  rotate,
  serializeACDCAttachment,
  serializeIssExnAttachment,
  siginput,
  signature,
  sizeify,
  versify
};
//# sourceMappingURL=signify-ts.mjs.map
