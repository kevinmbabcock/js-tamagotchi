import { Tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function() {
  let reusableTamagotchi;

  beforeEach(function() {
    reusableTamagotchi = new Tamagotchi("Steve");
    jasmine.clock().install();
    reusableTamagotchi.setHunger();
    reusableTamagotchi.setFun();
    reusableTamagotchi.setEnergy();
  })

  afterEach(function() {
    jasmine.clock().uninstall();
  })

  it('creates a new tamagotchi', function() {
    expect(reusableTamagotchi.name).toEqual("Steve");
    expect(reusableTamagotchi.hunger).toEqual(10);
    expect(reusableTamagotchi.fun).toEqual(10);
    expect(reusableTamagotchi.energy).toEqual(10);
  })

  it('decrements hunger fun and energy by 1 after 1 minute', function() {
    jasmine.clock().tick(60001);
    expect(reusableTamagotchi.hunger).toEqual(9);
    expect(reusableTamagotchi.fun).toEqual(9);
    expect(reusableTamagotchi.energy).toEqual(9);
  })
})
