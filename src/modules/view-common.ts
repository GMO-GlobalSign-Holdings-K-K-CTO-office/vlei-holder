import { IllegalStateException } from "./exception";
import { OobiIpexState } from "./oobi-ipex";

type OobiIpexLabel = {
  statelabel: string;
  actionlabel?: string;
};

const oobiIpexLabelMap: Map<OobiIpexState, OobiIpexLabel> = new Map();
oobiIpexLabelMap.set("1_init", { statelabel: "Init" });

oobiIpexLabelMap.set("2_1_challenge_received", {
  statelabel: "Your Challenge Received / NONE",
  actionlabel: "Send Response",
});
oobiIpexLabelMap.set("2_2_response_sent", {
  statelabel: "My Response Sent / NONE",
});

oobiIpexLabelMap.set("2_3_response_validated", {
  statelabel: "My Response Verified / NONE",
  actionlabel: "Challenge Sent?",
});

oobiIpexLabelMap.set("3_1_challenge_sent", {
  statelabel: "My Response Verified / My Challenge Sent",
});

oobiIpexLabelMap.set("3_2_response_received", {
  statelabel: "My Response Verified / Your Response Received",
  actionlabel: "Verify Response",
});

oobiIpexLabelMap.set("3_3_response_validated", {
  statelabel: "My Response Verified / Your Response Verified",
});

oobiIpexLabelMap.set("4_1_credential_received", {
  statelabel: "Credential Received",
  actionlabel: "Accept Issued Credential",
});

oobiIpexLabelMap.set("4_2_credential_accepted", {
  statelabel: "Credential Accepted (Valid)",
});
oobiIpexLabelMap.set("5_1_credential_revoked", {
  statelabel: "Credential Revoked",
});

/**
 * Get the label of the state.
 *
 * @param state
 * @returns
 */
export const getStateLabel = (state: OobiIpexState): string => {
  const label = oobiIpexLabelMap.get(state);
  if (!label) {
    throw new IllegalStateException("State not found.");
  }
  return label.statelabel;
};

/**
 * Get the action label of the state.
 *
 * @param state
 * @returns
 */
export const getActionLabel = (state: OobiIpexState): string => {
  const label = oobiIpexLabelMap.get(state);
  if (!label || !label.actionlabel) {
    throw new IllegalStateException("State or Action Label not found.");
  }
  return label.actionlabel;
};

/**
 *  Check if the Ipex State can proceed.
 *
 * @param state Ipex State
 * @returns can proceed or not
 */
export const canIpexStateProceed = (state: OobiIpexState): boolean => {
  const label = oobiIpexLabelMap.get(state);
  if (!label) {
    throw new IllegalStateException("State not found.");
  }

  return !!label.actionlabel;
};
