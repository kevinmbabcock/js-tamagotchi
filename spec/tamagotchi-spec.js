import { Tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function() {
  let reusableTamagotchi;

  beforeEach(function() {
    reusableTamagotchi = new Tamagotchi("Steve");
  })

  it('creates a new tamagotchi', function() {
    expect(reusableTamagotchi.name).toEqual("Steve");
    expect(reusableTamagotchi.hunger).toEqual(10);
    expect(reusableTamagotchi.fun).toEqual(10);
    expect(reusableTamagotchi.energy).toEqual(10);
  })
})
