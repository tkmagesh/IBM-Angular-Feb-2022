import { TrimTextPipe } from './trim-text.pipe';

describe('TrimTextPipe', () => {
  let pipe : TrimTextPipe;

  beforeEach(() => {
    pipe = new TrimTextPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not trim the text when maxlength not exceeded', () => {
    //arrange
    let input = 'short string',
      expectedResult = 'short string';

    //act
    let result = pipe.transform(input, 30)

    //assert
    expect(result).toBe(expectedResult)
   
  });

  it('should trim the text when maxlength exceeded', () => {
    //arrange
    let input = 'Id proident est minim commodo. Veniam nulla in aliquip tempor exercitation eu officia. Minim ipsum officia laboris cillum quis culpa duis duis. Tempor eu irure quis ex consequat nulla fugiat occaecat. Sunt anim aliqua labore est non est deserunt nostrud enim. Lorem enim qui ut eiusmod nostrud aute ex adipisicing laborum in. Velit officia esse quis ad sit minim duis ullamco Lorem occaecat exercitation.',
      expectedResult = 'Id proident est minim commodo....';

    //act
    let result = pipe.transform(input, 30)

    //assert
    expect(result).toBe(expectedResult)
   
  });
});
