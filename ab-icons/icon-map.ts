/**
 * AbIcons — browser-safe static SVG map (Material snake_case names).
 * Generated at package build/generate time; NO node:fs at runtime.
 * Geometry is original AbIcons (not Google Material path data).
 */

export type AbIconName =
  | "account_circle" | "add" | "analytics" | "arrow_back" | "arrow_forward" | "attach_file" | "bookmark" | "bug_report" | "build" | "calendar_today" | "camera" | "cancel" | "chat" | "check" | "check_box" | "check_box_outline_blank" | "check_circle" | "chevron_left" | "chevron_right" | "close" | "cloud" | "code" | "content_copy" | "dark_mode" | "dashboard" | "delete" | "done" | "download" | "edit" | "error" | "expand_less" | "expand_more" | "favorite" | "filter_list" | "folder" | "help" | "home" | "image" | "info" | "language" | "light_mode" | "link" | "location_on" | "lock" | "lock_open" | "login" | "logout" | "mail" | "map" | "menu" | "mic" | "more_horiz" | "more_vert" | "notifications" | "open_in_new" | "palette" | "pause" | "payments" | "person" | "phone" | "play_arrow" | "print" | "radio_button_checked" | "radio_button_unchecked" | "redo" | "refresh" | "save" | "schedule" | "search" | "send" | "settings" | "share" | "shopping_cart" | "sort" | "star" | "terminal" | "tune" | "undo" | "upload" | "visibility" | "visibility_off" | "volume_up" | "warning" | "widgets";

export const abIconNames = [
  "account_circle",
  "add",
  "analytics",
  "arrow_back",
  "arrow_forward",
  "attach_file",
  "bookmark",
  "bug_report",
  "build",
  "calendar_today",
  "camera",
  "cancel",
  "chat",
  "check",
  "check_box",
  "check_box_outline_blank",
  "check_circle",
  "chevron_left",
  "chevron_right",
  "close",
  "cloud",
  "code",
  "content_copy",
  "dark_mode",
  "dashboard",
  "delete",
  "done",
  "download",
  "edit",
  "error",
  "expand_less",
  "expand_more",
  "favorite",
  "filter_list",
  "folder",
  "help",
  "home",
  "image",
  "info",
  "language",
  "light_mode",
  "link",
  "location_on",
  "lock",
  "lock_open",
  "login",
  "logout",
  "mail",
  "map",
  "menu",
  "mic",
  "more_horiz",
  "more_vert",
  "notifications",
  "open_in_new",
  "palette",
  "pause",
  "payments",
  "person",
  "phone",
  "play_arrow",
  "print",
  "radio_button_checked",
  "radio_button_unchecked",
  "redo",
  "refresh",
  "save",
  "schedule",
  "search",
  "send",
  "settings",
  "share",
  "shopping_cart",
  "sort",
  "star",
  "terminal",
  "tune",
  "undo",
  "upload",
  "visibility",
  "visibility_off",
  "volume_up",
  "warning",
  "widgets"
] as const satisfies readonly AbIconName[];

export type AbIconSvgEntry = {
  outlined: string;
  filled?: string;
};

export const abIconSvg: Record<AbIconName, AbIconSvgEntry> = {
  "account_circle": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"12\" r=\"8.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"9.2\" r=\"2.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M6.5 18.2 C7.5 15.5 9.5 14 12 14 C14.5 14 16.5 15.5 17.5 18.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 3.5 A8.5 8.5 0 1 0 12 20.5 A8.5 8.5 0 1 0 12 3.5 Z M12 6.2 A3.0 3.0 0 1 1 12 12.2 A3.0 3.0 0 1 1 12 6.2 Z M6.8 18.0 C7.8 15.6 9.6 14.2 12 14.2 C14.4 14.2 16.2 15.6 17.2 18.0 A8.3 8.3 0 0 1 6.8 18.0 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>\n</svg>"
  },
  "add": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "analytics": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M4.5 19.5 H19.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M6.5 19.5 V12\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M11.5 19.5 V8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M16.5 19.5 V14\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M7.5 9 L12 5.5 L16 10 L20 6.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M5.2 19.5 H7.8 V12 H5.2 Z\" fill=\"currentColor\"/>\n  <path d=\"M10.2 19.5 H12.8 V8 H10.2 Z\" fill=\"currentColor\"/>\n  <path d=\"M15.2 19.5 H17.8 V14 H15.2 Z\" fill=\"currentColor\"/>\n  <path d=\"M4.5 19.5 H19.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M7.5 9 L12 5.5 L16 10 L20 6.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "arrow_back": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M19 12 H5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M11 6 L5 12 L11 18\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "arrow_forward": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M5 12 H19\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M13 6 L19 12 L13 18\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "attach_file": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M15.5 8.5 V15.5 C15.5 17.7 13.7 19.5 11.5 19.5 C9.3 19.5 7.5 17.7 7.5 15.5 V7.5 C7.5 6.1 8.6 5 10 5 C11.4 5 12.5 6.1 12.5 7.5 V14.5 C12.5 15.1 12.1 15.5 11.5 15.5 C10.9 15.5 10.5 15.1 10.5 14.5 V8.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "bookmark": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M7 4.5 H17 A1.5 1.5 0 0 1 18.5 6 V19.5 L12 15.2 L5.5 19.5 V6 A1.5 1.5 0 0 1 7 4.5 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M7 4.5 H17 A1.5 1.5 0 0 1 18.5 6 V19.5 L12 15.2 L5.5 19.5 V6 A1.5 1.5 0 0 1 7 4.5 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "bug_report": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M9 9.5 C9 7.5 10.3 6 12 6 C13.7 6 15 7.5 15 9.5 V15.5 C15 17.5 13.7 19 12 19 C10.3 19 9 17.5 9 15.5 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"12\" y1=\"3.8\" x2=\"12\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"5.5\" y1=\"10\" x2=\"9\" y2=\"11\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"5.5\" y1=\"14\" x2=\"9\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"18.5\" y1=\"10\" x2=\"15\" y2=\"11\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"18.5\" y1=\"14\" x2=\"15\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"7\" y1=\"18.5\" x2=\"9.2\" y2=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"17\" y1=\"18.5\" x2=\"14.8\" y2=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"7\" y1=\"6.5\" x2=\"9.2\" y2=\"8.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"17\" y1=\"6.5\" x2=\"14.8\" y2=\"8.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"9\" y1=\"12.5\" x2=\"15\" y2=\"12.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M9 9.5 C9 7.5 10.3 6 12 6 C13.7 6 15 7.5 15 9.5 V15.5 C15 17.5 13.7 19 12 19 C10.3 19 9 17.5 9 15.5 Z\" fill=\"currentColor\"/>\n  <line x1=\"12\" y1=\"3.8\" x2=\"12\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"5.5\" y1=\"10\" x2=\"9\" y2=\"11\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"5.5\" y1=\"14\" x2=\"9\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"18.5\" y1=\"10\" x2=\"15\" y2=\"11\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"18.5\" y1=\"14\" x2=\"15\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"7\" y1=\"18.5\" x2=\"9.2\" y2=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"17\" y1=\"18.5\" x2=\"14.8\" y2=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"7\" y1=\"6.5\" x2=\"9.2\" y2=\"8.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"17\" y1=\"6.5\" x2=\"14.8\" y2=\"8.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "build": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M18.5 5.5 C16.5 3.5 13.2 3.8 11.5 5.8 L14.2 8.5 L13 12 L9.5 13.2 L6.8 10.5 C4.8 12.2 4.5 15.5 6.5 17.5 C8.2 19.2 10.8 19.5 12.8 18.2 L18.8 12.2 C20.2 10.2 19.8 7.2 18.5 5.5 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M18.5 5.5 C16.5 3.5 13.2 3.8 11.5 5.8 L14.2 8.5 L13 12 L9.5 13.2 L6.8 10.5 C4.8 12.2 4.5 15.5 6.5 17.5 C8.2 19.2 10.8 19.5 12.8 18.2 L18.8 12.2 C20.2 10.2 19.8 7.2 18.5 5.5 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "calendar_today": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"4.5\" y=\"6\" width=\"15\" height=\"14\" rx=\"1.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"4.5\" y1=\"10\" x2=\"19.5\" y2=\"10\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"8\" y1=\"4.5\" x2=\"8\" y2=\"7.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"16\" y1=\"4.5\" x2=\"16\" y2=\"7.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M6.3 6 H17.7 A1.8 1.8 0 0 1 19.5 7.8 V10 H4.5 V7.8 A1.8 1.8 0 0 1 6.3 6 Z\" fill=\"currentColor\"/>\n  <path d=\"M4.5 10 H19.5 V18.2 A1.8 1.8 0 0 1 17.7 20 H6.3 A1.8 1.8 0 0 1 4.5 18.2 Z\" fill=\"currentColor\"/>\n  <line x1=\"8\" y1=\"4.5\" x2=\"8\" y2=\"7.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"16\" y1=\"4.5\" x2=\"16\" y2=\"7.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "camera": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M8 7.5 L9.2 5.5 H14.8 L16 7.5 H18.5 A1.5 1.5 0 0 1 20 9 V17 A1.5 1.5 0 0 1 18.5 18.5 H5.5 A1.5 1.5 0 0 1 4 17 V9 A1.5 1.5 0 0 1 5.5 7.5 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"12.5\" r=\"3.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M8 7.5 L9.2 5.5 H14.8 L16 7.5 H18.5 A1.5 1.5 0 0 1 20 9 V17 A1.5 1.5 0 0 1 18.5 18.5 H5.5 A1.5 1.5 0 0 1 4 17 V9 A1.5 1.5 0 0 1 5.5 7.5 Z\" fill=\"currentColor\"/>\n  <circle cx=\"12\" cy=\"12.5\" r=\"3.0\" fill=\"#fff\"/>\n  <circle cx=\"12\" cy=\"12.5\" r=\"1.5\" fill=\"currentColor\"/>\n</svg>"
  },
  "cancel": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"12\" r=\"8.3\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 3.5 A8.5 8.5 0 1 0 12 20.5 A8.5 8.5 0 1 0 12 3.5 Z\" fill=\"currentColor\"/>\n  <line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\" stroke=\"#fff\" stroke-width=\"1.85\" stroke-linecap=\"round\"/>\n  <line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\" stroke=\"#fff\" stroke-width=\"1.85\" stroke-linecap=\"round\"/>\n</svg>"
  },
  "chat": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M5.5 5.5 H18.5 A1.8 1.8 0 0 1 20.3 7.3 V14.5 A1.8 1.8 0 0 1 18.5 16.3 H11 L7 19.5 V16.3 H5.5 A1.8 1.8 0 0 1 3.7 14.5 V7.3 A1.8 1.8 0 0 1 5.5 5.5 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M5.5 5.5 H18.5 A1.8 1.8 0 0 1 20.3 7.3 V14.5 A1.8 1.8 0 0 1 18.5 16.3 H11 L7 19.5 V16.3 H5.5 A1.8 1.8 0 0 1 3.7 14.5 V7.3 A1.8 1.8 0 0 1 5.5 5.5 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "check": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M5 12.2 L9.8 17 L19 7.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "check_box": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"2.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M8 12 L11 15 L16.5 9\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M6.5 4.5 H17.5 A2 2 0 0 1 19.5 6.5 V17.5 A2 2 0 0 1 17.5 19.5 H6.5 A2 2 0 0 1 4.5 17.5 V6.5 A2 2 0 0 1 6.5 4.5 Z\" fill=\"currentColor\"/>\n  <path d=\"M8 12 L11 15 L16.5 9\" stroke=\"#fff\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "check_box_outline_blank": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"2.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "check_circle": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"12\" r=\"8.3\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M8 12.2 L10.8 15 L16.2 9.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 3.5 A8.5 8.5 0 1 0 12 20.5 A8.5 8.5 0 1 0 12 3.5 Z\" fill=\"currentColor\"/>\n  <path d=\"M8 12.2 L10.8 15 L16.2 9.2\" stroke=\"#fff\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "chevron_left": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M14.5 6 L9 12 L14.5 18\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "chevron_right": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M9.5 6 L15 12 L9.5 18\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "close": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "cloud": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M7.5 17.5 H16.5 C18.8 17.5 20.5 15.8 20.5 13.8 C20.5 11.9 19.1 10.3 17.3 10 C16.8 7.8 14.8 6.2 12.3 6.2 C9.6 6.2 7.4 8.1 7.0 10.6 C5.2 10.9 3.8 12.5 3.8 14.4 C3.8 16.2 5.4 17.5 7.5 17.5 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M7.5 17.5 H16.5 C18.8 17.5 20.5 15.8 20.5 13.8 C20.5 11.9 19.1 10.3 17.3 10 C16.8 7.8 14.8 6.2 12.3 6.2 C9.6 6.2 7.4 8.1 7.0 10.6 C5.2 10.9 3.8 12.5 3.8 14.4 C3.8 16.2 5.4 17.5 7.5 17.5 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "code": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M8.5 7.5 L4.5 12 L8.5 16.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M15.5 7.5 L19.5 12 L15.5 16.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"13.2\" y1=\"5.5\" x2=\"10.8\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "content_copy": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"8.5\" y=\"8.5\" width=\"11\" height=\"11\" rx=\"1.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M6.5 15.5 H5.5 A1.5 1.5 0 0 1 4 14 V5.5 A1.5 1.5 0 0 1 5.5 4 H14 A1.5 1.5 0 0 1 15.5 5.5 V6.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"8.5\" y=\"8.5\" width=\"11\" height=\"11\" rx=\"1.8\" fill=\"currentColor\"/>\n  <path d=\"M6.5 15.5 H5.5 A1.5 1.5 0 0 1 4 14 V5.5 A1.5 1.5 0 0 1 5.5 4 H14 A1.5 1.5 0 0 1 15.5 5.5 V6.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "dark_mode": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M14.5 3.8 C10.2 4.5 7 8.2 7 12.5 C7 17 10.5 20.5 15 20.5 C16.2 20.5 17.3 20.2 18.3 19.7 C14.5 19.2 11.5 15.9 11.5 12 C11.5 8.8 13.2 6 15.8 4.6 C15.4 4.2 14.9 3.9 14.5 3.8 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M14.5 3.8 C10.2 4.5 7 8.2 7 12.5 C7 17 10.5 20.5 15 20.5 C16.2 20.5 17.3 20.2 18.3 19.7 C14.5 19.2 11.5 15.9 11.5 12 C11.5 8.8 13.2 6 15.8 4.6 C15.4 4.2 14.9 3.9 14.5 3.8 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "dashboard": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"4\" y=\"4\" width=\"7\" height=\"7\" rx=\"1.6\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <rect x=\"13\" y=\"4\" width=\"7\" height=\"4.5\" rx=\"1.6\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <rect x=\"13\" y=\"10.5\" width=\"7\" height=\"9.5\" rx=\"1.6\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <rect x=\"4\" y=\"13\" width=\"7\" height=\"7\" rx=\"1.6\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"4\" y=\"4\" width=\"7\" height=\"7\" rx=\"1.6\" fill=\"currentColor\"/>\n  <rect x=\"13\" y=\"4\" width=\"7\" height=\"4.5\" rx=\"1.6\" fill=\"currentColor\"/>\n  <rect x=\"13\" y=\"10.5\" width=\"7\" height=\"9.5\" rx=\"1.6\" fill=\"currentColor\"/>\n  <rect x=\"4\" y=\"13\" width=\"7\" height=\"7\" rx=\"1.6\" fill=\"currentColor\"/>\n</svg>"
  },
  "delete": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M6 8 H18\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M9 8 V6.2 A1.2 1.2 0 0 1 10.2 5 H13.8 A1.2 1.2 0 0 1 15 6.2 V8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M8 8 V18.2 A1.5 1.5 0 0 0 9.5 19.7 H14.5 A1.5 1.5 0 0 0 16 18.2 V8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"10.5\" y1=\"11\" x2=\"10.5\" y2=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"13.5\" y1=\"11\" x2=\"13.5\" y2=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M6 8 H18 M9 8 V6.2 A1.2 1.2 0 0 1 10.2 5 H13.8 A1.2 1.2 0 0 1 15 6.2 V8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M8 8 H16 V18.2 A1.5 1.5 0 0 1 14.5 19.7 H9.5 A1.5 1.5 0 0 1 8 18.2 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "done": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M5 12.2 L9.8 17 L19 7.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "download": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 4.5 V15\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M8 11.5 L12 15.5 L16 11.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M5 19 H19\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "edit": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M5 16.5 V19 H7.5 L17.2 9.3 L14.7 6.8 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M15.8 5.7 L18.3 8.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M5 16.5 V19 H7.5 L17.2 9.3 L14.7 6.8 Z M15.8 5.7 L18.3 8.2 L16.5 10 L14 7.5 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "error": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"12\" r=\"8.3\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"12\" y1=\"7.5\" x2=\"12\" y2=\"13\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"16.2\" r=\"0.9\" fill=\"currentColor\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 3.5 A8.5 8.5 0 1 0 12 20.5 A8.5 8.5 0 1 0 12 3.5 Z\" fill=\"currentColor\"/>\n  <line x1=\"12\" y1=\"7.5\" x2=\"12\" y2=\"13\" stroke=\"#fff\" stroke-width=\"1.85\" stroke-linecap=\"round\"/>\n  <circle cx=\"12\" cy=\"16.2\" r=\"1.0\" fill=\"#fff\"/>\n</svg>"
  },
  "expand_less": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M6 14.5 L12 8.5 L18 14.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "expand_more": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M6 9.5 L12 15.5 L18 9.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "favorite": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 19.2 L5.8 13.4 C3.9 11.6 3.9 8.6 5.8 6.8 C7.6 5.1 10.4 5.3 12 7.2 C13.6 5.3 16.4 5.1 18.2 6.8 C20.1 8.6 20.1 11.6 18.2 13.4 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 19.2 L5.8 13.4 C3.9 11.6 3.9 8.6 5.8 6.8 C7.6 5.1 10.4 5.3 12 7.2 C13.6 5.3 16.4 5.1 18.2 6.8 C20.1 8.6 20.1 11.6 18.2 13.4 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "filter_list": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <line x1=\"5\" y1=\"7\" x2=\"19\" y2=\"7\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"7.5\" y1=\"12\" x2=\"16.5\" y2=\"12\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"10\" y1=\"17\" x2=\"14\" y2=\"17\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "folder": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M4.5 7.5 A1.5 1.5 0 0 1 6 6 H10 L12 8 H18 A1.5 1.5 0 0 1 19.5 9.5 V17 A1.5 1.5 0 0 1 18 18.5 H6 A1.5 1.5 0 0 1 4.5 17 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M4.5 7.5 A1.5 1.5 0 0 1 6 6 H10 L12 8 H18 A1.5 1.5 0 0 1 19.5 9.5 V17 A1.5 1.5 0 0 1 18 18.5 H6 A1.5 1.5 0 0 1 4.5 17 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "help": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"12\" r=\"8.3\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M9.5 9.2 C9.5 7.5 10.7 6.5 12 6.5 C13.4 6.5 14.5 7.4 14.5 8.9 C14.5 10.2 13.5 10.8 12.5 11.4 C12 11.7 12 12.2 12 12.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"16.2\" r=\"0.9\" fill=\"currentColor\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 3.5 A8.5 8.5 0 1 0 12 20.5 A8.5 8.5 0 1 0 12 3.5 Z\" fill=\"currentColor\"/>\n  <path d=\"M9.5 9.2 C9.5 7.5 10.7 6.5 12 6.5 C13.4 6.5 14.5 7.4 14.5 8.9 C14.5 10.2 13.5 10.8 12.5 11.4 C12 11.7 12 12.2 12 12.8\" stroke=\"#fff\" stroke-width=\"1.85\" stroke-linecap=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"16.2\" r=\"1.0\" fill=\"#fff\"/>\n</svg>"
  },
  "home": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M4.5 10.5 L12 4.2 L19.5 10.5 V19.2 A1.8 1.8 0 0 1 17.7 21 H14.2 V14.5 H9.8 V21 H6.3 A1.8 1.8 0 0 1 4.5 19.2 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M4.5 10.5 L12 4.2 L19.5 10.5 V19.2 A1.8 1.8 0 0 1 17.7 21 H14.2 V14.5 H9.8 V21 H6.3 A1.8 1.8 0 0 1 4.5 19.2 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "image": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"3.5\" y=\"5\" width=\"17\" height=\"14\" rx=\"1.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"8.5\" cy=\"10\" r=\"1.6\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M3.8 16.5 L9 12.5 L12 15 L15.5 11 L20.2 16.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M5.3 5 H18.7 A1.8 1.8 0 0 1 20.5 6.8 V18.2 A1.8 1.8 0 0 1 18.7 20 H5.3 A1.8 1.8 0 0 1 3.5 18.2 V6.8 A1.8 1.8 0 0 1 5.3 5 Z\" fill=\"currentColor\"/>\n  <circle cx=\"8.5\" cy=\"10\" r=\"1.6\" fill=\"#fff\"/>\n  <path d=\"M3.8 16.5 L9 12.5 L12 15 L15.5 11 L20.2 16.2 L20.2 18.2 A1.8 1.8 0 0 1 18.7 20 H5.3 A1.8 1.8 0 0 1 3.5 18.2 Z\" fill=\"#fff\" fill-opacity=\"0.35\"/>\n</svg>"
  },
  "info": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"12\" r=\"8.3\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"12\" y1=\"10.5\" x2=\"12\" y2=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"7.8\" r=\"0.9\" fill=\"currentColor\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 3.5 A8.5 8.5 0 1 0 12 20.5 A8.5 8.5 0 1 0 12 3.5 Z\" fill=\"currentColor\"/>\n  <line x1=\"12\" y1=\"10.5\" x2=\"12\" y2=\"16.5\" stroke=\"#fff\" stroke-width=\"1.85\" stroke-linecap=\"round\"/>\n  <circle cx=\"12\" cy=\"7.8\" r=\"1.0\" fill=\"#fff\"/>\n</svg>"
  },
  "language": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"12\" r=\"8.3\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M4.2 12 H19.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M12 3.7 C14.2 6.2 15.3 9 15.3 12 C15.3 15 14.2 17.8 12 20.3 C9.8 17.8 8.7 15 8.7 12 C8.7 9 9.8 6.2 12 3.7 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M5.5 7.5 C8 8.5 10 9 12 9 C14 9 16 8.5 18.5 7.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M5.5 16.5 C8 15.5 10 15 12 15 C14 15 16 15.5 18.5 16.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "light_mode": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"12\" r=\"3.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"12\" y1=\"3.5\" x2=\"12\" y2=\"5.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"12\" y1=\"18.5\" x2=\"12\" y2=\"20.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"3.5\" y1=\"12\" x2=\"5.5\" y2=\"12\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"18.5\" y1=\"12\" x2=\"20.5\" y2=\"12\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"5.8\" y1=\"5.8\" x2=\"7.2\" y2=\"7.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"16.8\" y1=\"16.8\" x2=\"18.2\" y2=\"18.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"16.8\" y1=\"7.2\" x2=\"18.2\" y2=\"5.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"5.8\" y1=\"18.2\" x2=\"7.2\" y2=\"16.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"12\" r=\"3.7\" fill=\"currentColor\"/>\n  <line x1=\"12\" y1=\"3.5\" x2=\"12\" y2=\"5.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"12\" y1=\"18.5\" x2=\"12\" y2=\"20.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"3.5\" y1=\"12\" x2=\"5.5\" y2=\"12\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"18.5\" y1=\"12\" x2=\"20.5\" y2=\"12\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"5.8\" y1=\"5.8\" x2=\"7.2\" y2=\"7.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"16.8\" y1=\"16.8\" x2=\"18.2\" y2=\"18.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"16.8\" y1=\"7.2\" x2=\"18.2\" y2=\"5.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"5.8\" y1=\"18.2\" x2=\"7.2\" y2=\"16.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "link": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M9.5 12.5 H14.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M10.5 16 H8.5 C6.6 16 5 14.4 5 12.5 C5 10.6 6.6 9 8.5 9 H10.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M13.5 9 H15.5 C17.4 9 19 10.6 19 12.5 C19 14.4 17.4 16 15.5 16 H13.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "location_on": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 21 C12 21 5.5 14.8 5.5 10.2 C5.5 6.5 8.4 3.8 12 3.8 C15.6 3.8 18.5 6.5 18.5 10.2 C18.5 14.8 12 21 12 21 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"10.2\" r=\"2.3\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 21 C12 21 5.5 14.8 5.5 10.2 C5.5 6.5 8.4 3.8 12 3.8 C15.6 3.8 18.5 6.5 18.5 10.2 C18.5 14.8 12 21 12 21 Z\" fill=\"currentColor\"/>\n  <circle cx=\"12\" cy=\"10.2\" r=\"2.2\" fill=\"#fff\"/>\n</svg>"
  },
  "lock": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"6\" y=\"10.5\" width=\"12\" height=\"9\" rx=\"1.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M8.5 10.5 V8 C8.5 6 10 4.5 12 4.5 C14 4.5 15.5 6 15.5 8 V10.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"15\" r=\"1.2\" fill=\"currentColor\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"6\" y=\"10.5\" width=\"12\" height=\"9\" rx=\"1.8\" fill=\"currentColor\"/>\n  <path d=\"M8.5 10.5 V8 C8.5 6 10 4.5 12 4.5 C14 4.5 15.5 6 15.5 8 V10.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"15\" r=\"1.2\" fill=\"#fff\"/>\n</svg>"
  },
  "lock_open": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"6\" y=\"10.5\" width=\"12\" height=\"9\" rx=\"1.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M8.5 10.5 V8 C8.5 6 10 4.5 12 4.5 C14 4.5 15.5 6 15.5 8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"15\" r=\"1.2\" fill=\"currentColor\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"6\" y=\"10.5\" width=\"12\" height=\"9\" rx=\"1.8\" fill=\"currentColor\"/>\n  <path d=\"M8.5 10.5 V8 C8.5 6 10 4.5 12 4.5 C14 4.5 15.5 6 15.5 8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"15\" r=\"1.2\" fill=\"#fff\"/>\n</svg>"
  },
  "login": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M10 4.5 H6.5 A2 2 0 0 0 4.5 6.5 V17.5 A2 2 0 0 0 6.5 19.5 H10\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M12 12 H20\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M16.5 8 L20 12 L16.5 16\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "logout": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M14 4.5 H17.5 A2 2 0 0 1 19.5 6.5 V17.5 A2 2 0 0 1 17.5 19.5 H14\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M12 12 H4\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M7.5 8 L4 12 L7.5 16\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "mail": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"3.5\" y=\"6\" width=\"17\" height=\"12\" rx=\"1.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M4.2 7.2 L12 13 L19.8 7.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M3.5 7.5 A1.8 1.8 0 0 1 5.3 5.7 H18.7 A1.8 1.8 0 0 1 20.5 7.5 L12 13.2 Z\" fill=\"currentColor\"/>\n  <path d=\"M3.5 9 V16.2 A1.8 1.8 0 0 0 5.3 18 H18.7 A1.8 1.8 0 0 0 20.5 16.2 V9 L12 14.8 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "map": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M4.5 6.5 L9.5 4.5 L14.5 6.5 L19.5 4.5 V17.5 L14.5 19.5 L9.5 17.5 L4.5 19.5 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"9.5\" y1=\"4.5\" x2=\"9.5\" y2=\"17.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"14.5\" y1=\"6.5\" x2=\"14.5\" y2=\"19.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M4.5 6.5 L9.5 4.5 L14.5 6.5 L19.5 4.5 V17.5 L14.5 19.5 L9.5 17.5 L4.5 19.5 Z\" fill=\"currentColor\"/>\n  <line x1=\"9.5\" y1=\"4.5\" x2=\"9.5\" y2=\"17.5\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-opacity=\"0.5\"/>\n  <line x1=\"14.5\" y1=\"6.5\" x2=\"14.5\" y2=\"19.5\" stroke=\"#fff\" stroke-width=\"1.2\" stroke-opacity=\"0.5\"/>\n</svg>"
  },
  "menu": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <line x1=\"4.5\" y1=\"7\" x2=\"19.5\" y2=\"7\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"4.5\" y1=\"12\" x2=\"19.5\" y2=\"12\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"4.5\" y1=\"17\" x2=\"19.5\" y2=\"17\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "mic": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 4.5 A2.8 2.8 0 0 1 14.8 7.3 V12 A2.8 2.8 0 0 1 9.2 12 V7.3 A2.8 2.8 0 0 1 12 4.5 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M7 11.5 C7 14.5 9.2 16.5 12 16.5 C14.8 16.5 17 14.5 17 11.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"12\" y1=\"16.5\" x2=\"12\" y2=\"19.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"9.5\" y1=\"19.5\" x2=\"14.5\" y2=\"19.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 4.5 A2.8 2.8 0 0 1 14.8 7.3 V12 A2.8 2.8 0 0 1 9.2 12 V7.3 A2.8 2.8 0 0 1 12 4.5 Z\" fill=\"currentColor\"/>\n  <path d=\"M7 11.5 C7 14.5 9.2 16.5 12 16.5 C14.8 16.5 17 14.5 17 11.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"12\" y1=\"16.5\" x2=\"12\" y2=\"19.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"9.5\" y1=\"19.5\" x2=\"14.5\" y2=\"19.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "more_horiz": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"6.5\" cy=\"12\" r=\"1.35\" fill=\"currentColor\"/>\n  <circle cx=\"12\" cy=\"12\" r=\"1.35\" fill=\"currentColor\"/>\n  <circle cx=\"17.5\" cy=\"12\" r=\"1.35\" fill=\"currentColor\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"6.5\" cy=\"12\" r=\"1.55\" fill=\"currentColor\"/>\n  <circle cx=\"12\" cy=\"12\" r=\"1.55\" fill=\"currentColor\"/>\n  <circle cx=\"17.5\" cy=\"12\" r=\"1.55\" fill=\"currentColor\"/>\n</svg>"
  },
  "more_vert": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"6.5\" r=\"1.35\" fill=\"currentColor\"/>\n  <circle cx=\"12\" cy=\"12\" r=\"1.35\" fill=\"currentColor\"/>\n  <circle cx=\"12\" cy=\"17.5\" r=\"1.35\" fill=\"currentColor\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"6.5\" r=\"1.55\" fill=\"currentColor\"/>\n  <circle cx=\"12\" cy=\"12\" r=\"1.55\" fill=\"currentColor\"/>\n  <circle cx=\"12\" cy=\"17.5\" r=\"1.55\" fill=\"currentColor\"/>\n</svg>"
  },
  "notifications": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M6.5 16.5 H17.5 C17.5 16.5 16.2 14.8 16.2 11.2 C16.2 8.5 14.4 6.5 12 6.5 C9.6 6.5 7.8 8.5 7.8 11.2 C7.8 14.8 6.5 16.5 6.5 16.5 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M10.5 16.5 C10.5 17.6 11.2 18.5 12 18.5 C12.8 18.5 13.5 17.6 13.5 16.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"12\" y1=\"4.5\" x2=\"12\" y2=\"6.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M6.5 16.5 H17.5 C17.5 16.5 16.2 14.8 16.2 11.2 C16.2 8.5 14.4 6.5 12 6.5 C9.6 6.5 7.8 8.5 7.8 11.2 C7.8 14.8 6.5 16.5 6.5 16.5 Z\" fill=\"currentColor\"/>\n  <path d=\"M10.5 16.5 C10.5 17.6 11.2 18.5 12 18.5 C12.8 18.5 13.5 17.6 13.5 16.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"12\" y1=\"4.5\" x2=\"12\" y2=\"6.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "open_in_new": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M10 5 H6.2 A1.7 1.7 0 0 0 4.5 6.7 V17.8 A1.7 1.7 0 0 0 6.2 19.5 H17.3 A1.7 1.7 0 0 0 19 17.8 V14\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M13.5 4.5 H19.5 V10.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"19.2\" y1=\"4.8\" x2=\"11.5\" y2=\"12.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "palette": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 3.8 C7.3 3.8 3.8 7.5 3.8 12.2 C3.8 15.8 6.5 18.8 10 19.5 C10.8 19.7 11.5 19.1 11.5 18.3 V17.2 C11.5 15.8 12.6 14.7 14 14.7 H16.5 C18.8 14.7 20.2 12.8 20.2 10.5 C20.2 6.8 16.5 3.8 12 3.8 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"7.8\" cy=\"11\" r=\"1.1\" fill=\"currentColor\"/>\n  <circle cx=\"10.2\" cy=\"7.8\" r=\"1.1\" fill=\"currentColor\"/>\n  <circle cx=\"14.2\" cy=\"7.5\" r=\"1.1\" fill=\"currentColor\"/>\n  <circle cx=\"17\" cy=\"10.2\" r=\"1.1\" fill=\"currentColor\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 3.8 C7.3 3.8 3.8 7.5 3.8 12.2 C3.8 15.8 6.5 18.8 10 19.5 C10.8 19.7 11.5 19.1 11.5 18.3 V17.2 C11.5 15.8 12.6 14.7 14 14.7 H16.5 C18.8 14.7 20.2 12.8 20.2 10.5 C20.2 6.8 16.5 3.8 12 3.8 Z\" fill=\"currentColor\"/>\n  <circle cx=\"7.8\" cy=\"11\" r=\"1.15\" fill=\"#fff\"/>\n  <circle cx=\"10.2\" cy=\"7.8\" r=\"1.15\" fill=\"#fff\"/>\n  <circle cx=\"14.2\" cy=\"7.5\" r=\"1.15\" fill=\"#fff\"/>\n  <circle cx=\"17\" cy=\"10.2\" r=\"1.15\" fill=\"#fff\"/>\n</svg>"
  },
  "pause": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"6.5\" y=\"5.5\" width=\"3.8\" height=\"13\" rx=\"1.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <rect x=\"13.7\" y=\"5.5\" width=\"3.8\" height=\"13\" rx=\"1.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"6.5\" y=\"5.5\" width=\"3.8\" height=\"13\" rx=\"1.2\" fill=\"currentColor\"/>\n  <rect x=\"13.7\" y=\"5.5\" width=\"3.8\" height=\"13\" rx=\"1.2\" fill=\"currentColor\"/>\n</svg>"
  },
  "payments": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"3.5\" y=\"6.5\" width=\"17\" height=\"11\" rx=\"1.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"3.5\" y1=\"10\" x2=\"20.5\" y2=\"10\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M6.5 14.5 H10.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M5.3 6.5 H18.7 A1.8 1.8 0 0 1 20.5 8.3 V10 H3.5 V8.3 A1.8 1.8 0 0 1 5.3 6.5 Z\" fill=\"currentColor\"/>\n  <path d=\"M3.5 10 H20.5 V15.7 A1.8 1.8 0 0 1 18.7 17.5 H5.3 A1.8 1.8 0 0 1 3.5 15.7 Z\" fill=\"currentColor\"/>\n  <line x1=\"6.5\" y1=\"14.5\" x2=\"10.5\" y2=\"14.5\" stroke=\"#fff\" stroke-width=\"1.85\" stroke-linecap=\"round\"/>\n</svg>"
  },
  "person": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"8\" r=\"3.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M5.5 19.5 C5.5 15.8 8.4 13.2 12 13.2 C15.6 13.2 18.5 15.8 18.5 19.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"8\" r=\"3.4\" fill=\"currentColor\"/>\n  <path d=\"M5.2 19.8 C5.2 15.6 8.2 12.8 12 12.8 C15.8 12.8 18.8 15.6 18.8 19.8 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "phone": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M7.2 4.5 H10 L11.2 8.2 L9.2 9.8 C10.2 12.2 12.2 14 14.8 14.8 L16.4 12.8 L20 14 V16.8 A1.7 1.7 0 0 1 18.2 18.6 C11.2 18.6 5.4 12.8 5.4 5.8 A1.7 1.7 0 0 1 7.2 4.5 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M7.2 4.5 H10 L11.2 8.2 L9.2 9.8 C10.2 12.2 12.2 14 14.8 14.8 L16.4 12.8 L20 14 V16.8 A1.7 1.7 0 0 1 18.2 18.6 C11.2 18.6 5.4 12.8 5.4 5.8 A1.7 1.7 0 0 1 7.2 4.5 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "play_arrow": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M8 5.5 L18.5 12 L8 18.5 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M8 5.5 L18.5 12 L8 18.5 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "print": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M7.5 8 V4.5 H16.5 V8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M6 10 H18 A1.8 1.8 0 0 1 19.8 11.8 V16.5 H16.5 V14.5 H7.5 V16.5 H4.2 V11.8 A1.8 1.8 0 0 1 6 10 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M7.5 16.5 H16.5 V19.5 H7.5 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M6 10 H18 A1.8 1.8 0 0 1 19.8 11.8 V16.5 H16.5 V14.2 H7.5 V16.5 H4.2 V11.8 A1.8 1.8 0 0 1 6 10 Z\" fill=\"currentColor\"/>\n  <path d=\"M7.5 4.5 H16.5 V10 H7.5 Z\" fill=\"currentColor\"/>\n  <path d=\"M7.5 16.2 H16.5 V19.5 H7.5 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "radio_button_checked": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"12\" r=\"8.0\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"12\" r=\"4.0\" fill=\"currentColor\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"12\" r=\"8.0\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"12\" r=\"4.2\" fill=\"currentColor\"/>\n</svg>"
  },
  "radio_button_unchecked": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"12\" r=\"8.0\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "redo": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M16 10 H9.5 A4.5 4.5 0 0 0 9.5 19 H14\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M16 10 L12.5 6.5 M16 10 L12.5 13.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "refresh": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M19.5 12 A7.5 7.5 0 1 1 17.2 6.3\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M19.5 4.2 V8.2 H15.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "save": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M6 4.5 H15.5 L19.5 8.5 V18 A1.5 1.5 0 0 1 18 19.5 H6 A1.5 1.5 0 0 1 4.5 18 V6 A1.5 1.5 0 0 1 6 4.5 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M8 4.5 V9.5 H14.5 V4.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M8 13.5 H16 V19.5 H8 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M6 4.5 H15.5 L19.5 8.5 V18 A1.5 1.5 0 0 1 18 19.5 H6 A1.5 1.5 0 0 1 4.5 18 V6 A1.5 1.5 0 0 1 6 4.5 Z\" fill=\"currentColor\"/>\n  <rect x=\"8.2\" y=\"13.5\" width=\"7.6\" height=\"5.5\" fill=\"#fff\" rx=\"0.5\"/>\n  <rect x=\"8.2\" y=\"5\" width=\"6\" height=\"4\" fill=\"#fff\" rx=\"0.4\"/>\n</svg>"
  },
  "schedule": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"12\" cy=\"12\" r=\"8.3\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M12 7.5 V12.5 L15.5 15\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 3.5 A8.5 8.5 0 1 0 12 20.5 A8.5 8.5 0 1 0 12 3.5 Z\" fill=\"currentColor\"/>\n  <path d=\"M12 7.5 V12.5 L15.5 15\" stroke=\"#fff\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "search": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"10.2\" cy=\"10.2\" r=\"5.6\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"14.4\" y1=\"14.4\" x2=\"19.2\" y2=\"19.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "send": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M4.5 11.2 L19.5 4.8 L13.5 12 L19.5 19.2 L4.5 12.8 L10.2 12 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M4.5 11.2 L19.5 4.8 L13.5 12 L19.5 19.2 L4.5 12.8 L10.2 12 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "settings": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 3.5 L13.05 5.55 L15.4 4.9 L16.25 7.15 L18.6 7.7 L18.0 10.05 L20.0 11.35 L18.0 12.65 L18.6 15.0 L16.25 15.55 L15.4 17.8 L13.05 17.15 L12 19.2 L10.95 17.15 L8.6 17.8 L7.75 15.55 L5.4 15.0 L6.0 12.65 L4.0 11.35 L6.0 10.05 L5.4 7.7 L7.75 7.15 L8.6 4.9 L10.95 5.55 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"11.35\" r=\"2.85\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 3.5 L13.05 5.55 L15.4 4.9 L16.25 7.15 L18.6 7.7 L18.0 10.05 L20.0 11.35 L18.0 12.65 L18.6 15.0 L16.25 15.55 L15.4 17.8 L13.05 17.15 L12 19.2 L10.95 17.15 L8.6 17.8 L7.75 15.55 L5.4 15.0 L6.0 12.65 L4.0 11.35 L6.0 10.05 L5.4 7.7 L7.75 7.15 L8.6 4.9 L10.95 5.55 Z M12 8.55 A2.8 2.8 0 1 0 12 14.15 A2.8 2.8 0 1 0 12 8.55 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>\n</svg>"
  },
  "share": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"17.5\" cy=\"6.5\" r=\"2.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"17.5\" cy=\"17.5\" r=\"2.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"6.5\" cy=\"12\" r=\"2.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"8.5\" y1=\"11.2\" x2=\"15.3\" y2=\"7.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"8.5\" y1=\"12.8\" x2=\"15.3\" y2=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <circle cx=\"17.5\" cy=\"6.5\" r=\"2.4\" fill=\"currentColor\"/>\n  <circle cx=\"17.5\" cy=\"17.5\" r=\"2.4\" fill=\"currentColor\"/>\n  <circle cx=\"6.5\" cy=\"12\" r=\"2.4\" fill=\"currentColor\"/>\n  <line x1=\"8.5\" y1=\"11.2\" x2=\"15.3\" y2=\"7.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"8.5\" y1=\"12.8\" x2=\"15.3\" y2=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "shopping_cart": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M4 5.5 H6.2 L7.5 8.5 H18.5 L17 14.5 H8.2 L7 8.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"9.5\" cy=\"18\" r=\"1.4\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"16\" cy=\"18\" r=\"1.4\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M4 5.5 H6.2 L7.5 8.5 H18.5 L17 14.5 H8.2 L7 8.5 Z\" fill=\"currentColor\"/>\n  <circle cx=\"9.5\" cy=\"18\" r=\"1.5\" fill=\"currentColor\"/>\n  <circle cx=\"16\" cy=\"18\" r=\"1.5\" fill=\"currentColor\"/>\n</svg>"
  },
  "sort": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M8 6 V16 M8 16 L5.5 13.5 M8 16 L10.5 13.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M16 18 V8 M16 8 L13.5 10.5 M16 8 L18.5 10.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "star": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 3.8 L14.4 9.2 L20.2 9.8 L15.8 13.8 L17.2 19.5 L12 16.5 L6.8 19.5 L8.2 13.8 L3.8 9.8 L9.6 9.2 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 3.8 L14.4 9.2 L20.2 9.8 L15.8 13.8 L17.2 19.5 L12 16.5 L6.8 19.5 L8.2 13.8 L3.8 9.8 L9.6 9.2 Z\" fill=\"currentColor\"/>\n</svg>"
  },
  "terminal": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"3.5\" y=\"5\" width=\"17\" height=\"14\" rx=\"1.8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M6.5 10 L9.5 12.5 L6.5 15\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"11\" y1=\"15.5\" x2=\"16.5\" y2=\"15.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M5.3 5 H18.7 A1.8 1.8 0 0 1 20.5 6.8 V17.2 A1.8 1.8 0 0 1 18.7 19 H5.3 A1.8 1.8 0 0 1 3.5 17.2 V6.8 A1.8 1.8 0 0 1 5.3 5 Z\" fill=\"currentColor\"/>\n  <path d=\"M6.5 10 L9.5 12.5 L6.5 15\" stroke=\"#fff\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"11\" y1=\"15.5\" x2=\"16.5\" y2=\"15.5\" stroke=\"#fff\" stroke-width=\"1.85\" stroke-linecap=\"round\"/>\n</svg>"
  },
  "tune": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <line x1=\"5\" y1=\"8\" x2=\"19\" y2=\"8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"9\" cy=\"8\" r=\"2.0\" fill=\"currentColor\"/>\n  <line x1=\"5\" y1=\"16\" x2=\"19\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"15\" cy=\"16\" r=\"2.0\" fill=\"currentColor\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <line x1=\"5\" y1=\"8\" x2=\"19\" y2=\"8\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"9\" cy=\"8\" r=\"2.2\" fill=\"currentColor\"/>\n  <line x1=\"5\" y1=\"16\" x2=\"19\" y2=\"16\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"15\" cy=\"16\" r=\"2.2\" fill=\"currentColor\"/>\n</svg>"
  },
  "undo": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M8 10 H14.5 A4.5 4.5 0 0 1 14.5 19 H10\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M8 10 L11.5 6.5 M8 10 L11.5 13.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "upload": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 15.5 V5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M8 8.5 L12 4.5 L16 8.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M5 19 H19\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "visibility": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M2.8 12 C4.5 7.8 8 5.2 12 5.2 C16 5.2 19.5 7.8 21.2 12 C19.5 16.2 16 18.8 12 18.8 C8 18.8 4.5 16.2 2.8 12 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"12\" r=\"3.0\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M2.8 12 C4.5 7.8 8 5.2 12 5.2 C16 5.2 19.5 7.8 21.2 12 C19.5 16.2 16 18.8 12 18.8 C8 18.8 4.5 16.2 2.8 12 Z\" fill=\"currentColor\"/>\n  <circle cx=\"12\" cy=\"12\" r=\"2.6\" fill=\"#fff\"/>\n  <circle cx=\"12\" cy=\"12\" r=\"1.2\" fill=\"currentColor\"/>\n</svg>"
  },
  "visibility_off": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M3.2 4.8 L19.5 20.2\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M9.4 9.6 C8.6 10.3 8.1 11.1 8.1 12 C8.1 14.15 9.85 15.9 12 15.9 C12.9 15.9 13.7 15.55 14.35 15\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M6.3 7.0 C4.6 8.35 3.4 10.1 2.9 12 C4.55 16.1 7.95 18.7 12 18.7 C13.7 18.7 15.3 18.25 16.7 17.45\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M10.9 5.45 C11.25 5.35 11.6 5.3 12 5.3 C16 5.3 19.4 7.9 21.1 12 C20.55 13.35 19.7 14.55 18.65 15.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "volume_up": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M4.5 9.5 H8 L12.5 5.5 V18.5 L8 14.5 H4.5 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M15.2 9 C16.2 10 16.8 11 16.8 12 C16.8 13 16.2 14 15.2 15\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M17.5 7 C19.2 8.5 20.2 10.2 20.2 12 C20.2 13.8 19.2 15.5 17.5 17\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M4.5 9.5 H8 L12.5 5.5 V18.5 L8 14.5 H4.5 Z\" fill=\"currentColor\"/>\n  <path d=\"M15.2 9 C16.2 10 16.8 11 16.8 12 C16.8 13 16.2 14 15.2 15\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M17.5 7 C19.2 8.5 20.2 10.2 20.2 12 C20.2 13.8 19.2 15.5 17.5 17\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  },
  "warning": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 4.5 L21 19.5 H3 Z\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <line x1=\"12\" y1=\"10\" x2=\"12\" y2=\"14.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <circle cx=\"12\" cy=\"17\" r=\"0.85\" fill=\"currentColor\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <path d=\"M12 4.5 L21 19.5 H3 Z\" fill=\"currentColor\"/>\n  <line x1=\"12\" y1=\"10\" x2=\"12\" y2=\"14.5\" stroke=\"#fff\" stroke-width=\"1.85\" stroke-linecap=\"round\"/>\n  <circle cx=\"12\" cy=\"17\" r=\"0.95\" fill=\"#fff\"/>\n</svg>"
  },
  "widgets": {
    "outlined": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"4.5\" y=\"4.5\" width=\"6.5\" height=\"6.5\" rx=\"1.6\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <rect x=\"13\" y=\"4.5\" width=\"6.5\" height=\"6.5\" rx=\"1.6\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <rect x=\"4.5\" y=\"13\" width=\"6.5\" height=\"6.5\" rx=\"1.6\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n  <path d=\"M13 16.25 H19.5 M16.25 13 V19.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>",
    "filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">\n  <rect x=\"4.5\" y=\"4.5\" width=\"6.5\" height=\"6.5\" rx=\"1.6\" fill=\"currentColor\"/>\n  <rect x=\"13\" y=\"4.5\" width=\"6.5\" height=\"6.5\" rx=\"1.6\" fill=\"currentColor\"/>\n  <rect x=\"4.5\" y=\"13\" width=\"6.5\" height=\"6.5\" rx=\"1.6\" fill=\"currentColor\"/>\n  <path d=\"M13 16.25 H19.5 M16.25 13 V19.5\" stroke=\"currentColor\" stroke-width=\"1.85\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>"
  }
} as const;

/**
 * Get SVG markup for an AbIcon name.
 * @param name Material snake_case icon name (e.g. "home", "arrow_back")
 * @param variant "outlined" (default) or "filled" (falls back to outlined if missing)
 */
export function getAbIconSvg(
  name: string,
  variant: "outlined" | "filled" = "outlined",
): string | undefined {
  const entry = (abIconSvg as Record<string, AbIconSvgEntry | undefined>)[name];
  if (!entry) return undefined;
  if (variant === "filled") return entry.filled ?? entry.outlined;
  return entry.outlined;
}
