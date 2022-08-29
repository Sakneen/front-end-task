import { createAction } from "@reduxjs/toolkit";

export const doGetNextPage = createAction("next_page");
export const doGetPrevPage = createAction("prev_page");
export const doSetPage = createAction<any>("set_page");
export const doSetImagesToView = createAction<any>("images_to_view");
