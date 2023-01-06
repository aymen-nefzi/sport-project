import { MyFilerPipe } from './my-filter.pipe';

describe('MyFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new MyFilerPipe();
    expect(pipe).toBeTruthy();
  });
});
