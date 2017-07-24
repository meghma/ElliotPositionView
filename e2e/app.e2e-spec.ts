import { PositionViewPage } from './app.po';

describe('position-view App', () => {
  let page: PositionViewPage;

  beforeEach(() => {
    page = new PositionViewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
