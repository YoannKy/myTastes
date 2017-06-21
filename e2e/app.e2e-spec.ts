import { MyTastesPage } from './app.po';

describe('my-tastes App', () => {
  let page: MyTastesPage;

  beforeEach(() => {
    page = new MyTastesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
