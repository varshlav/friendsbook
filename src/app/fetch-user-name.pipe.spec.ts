import { FetchUserNamePipe } from './fetch-user-name.pipe';

describe('FetchUserNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FetchUserNamePipe();
    expect(pipe).toBeTruthy();
  });
});
