export type PageName = "Profile" | "Session List" | "Session Detail";
export type PagePath = "/" | "/profile" | "/session-list" | "/session-detail";

export type ValidationRule = (v: string) => boolean | ErrorMessage;

export type ErrorMessage = "Master secret is required";

// FUTURE:
//ButtonLabel, Title, Subtitle Labelなど
