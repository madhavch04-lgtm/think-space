export interface Feature {
  path: string; title: string; blurb: string; stage: number;
  status: "Not built yet" | "Partly built" | "Working";
}
// Status is edited by hand each stage. Only mark "Working" when it really is.
export const FEATURES: Feature[] = [
  { path: "study-map", title: "Create Study Map", blurb: "Upload PDFs, images or text and organise them with transparent rules.", stage: 2, status: "Not built yet" },
  { path: "mind-canvas", title: "Mind Canvas", blurb: "Edit mind maps and flowcharts by touch, mouse or keyboard.", stage: 4, status: "Not built yet" },
  { path: "revision", title: "Quick Revision", blurb: "Revision notes built from the content you select.", stage: 6, status: "Not built yet" },
  { path: "flashcards", title: "Flashcards", blurb: "Cards from definitions and questions, with a study mode.", stage: 6, status: "Not built yet" },
  { path: "recent", title: "Recent Maps", blurb: "Pick up where you left off.", stage: 5, status: "Not built yet" },
  { path: "boards", title: "My Boards", blurb: "Save and manage your visual boards.", stage: 5, status: "Not built yet" },
];
