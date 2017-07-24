import { CircleViewPage } from './app.po';

describe('circle-view App', () => {
  let page: CircleViewPage;

  beforeEach(() => {
    page = new CircleViewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
