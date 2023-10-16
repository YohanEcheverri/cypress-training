import { IframePage } from "../page/iframe.page";

const iframePage = new IframePage();

describe("iframe", ()=> {
    it("iframe page", ()=> {
        iframePage.visit();

        iframePage.getFrameTitle();

        // iframePage.goToCssPageInFrame();
    })
})