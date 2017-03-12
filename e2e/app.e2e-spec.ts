import { ShomoPage } from './app.po';

describe('shomo App', () => {
  let page: ShomoPage;

  beforeEach(() => {
    page = new ShomoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
