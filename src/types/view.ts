export type PageName = "Profile" | "Holder List" | "Holder Detail";
export type PagePath = "/" | "/profile" | "/holder-list" | "/holder-detail";

export type ValidationRule = (v: string) => boolean | ErrorMessage;

export type ErrorMessage = "Master secret is required";

// FUTURE:
//ButtonLabel, Title, Subtitle Labelなど
