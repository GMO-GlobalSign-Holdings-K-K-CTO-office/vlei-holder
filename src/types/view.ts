export type PageName =
  | "Profile"
  | "Session List"
  | "Session Detail"
  | "Event History";
export type PagePath =
  | "/"
  | "/profile"
  | "/session-list"
  | "/session-detail"
  | "/event-history";

export type ValidationRule = (v: string) => boolean | ErrorMessage;

export type ErrorMessage = "Master secret is required";

// FUTURE:
//ButtonLabel, Title, Subtitle Labelなど
