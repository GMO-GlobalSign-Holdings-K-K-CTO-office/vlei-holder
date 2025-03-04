export type PageName =
  | "Profile"
  | "Issuer List"
  | "Issuer Detail"
  | "Event History";
export type PagePath =
  | "/"
  | "/profile"
  | "/issuer-list"
  | "/issuer-detail"
  | "/event-history";

export type ValidationRule = (v: string) => boolean | ErrorMessage;

export type ErrorMessage = "Master secret is required";

// FUTURE:
//ButtonLabel, Title, Subtitle Labelなど
