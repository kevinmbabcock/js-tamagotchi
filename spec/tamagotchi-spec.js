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

  it('increases hunger when fed', function() {
    reusableTamagotchi.feed(5);
    expect(reusableTamagotchi.hunger).toEqual(15);
  })

  it('increases fun when played with', function() {
    reusableTamagotchi.play(5);
    expect(reusableTamagotchi.fun).toEqual(15);
  })

  it('increases energy when sleeping', function() {
    reusableTamagotchi.sleep(5);
    expect(reusableTamagotchi.energy).toEqual(15);
  })

  it('is dead with no activities for 10 minutes', function() {
    jasmine.clock().tick(600001);
    expect(reusableTamagotchi.isAlive()).toEqual("I'm Dead");
  })

  it('is dead if hunger reaches zero', function() {
    reusableTamagotchi.hunger = 0;
    expect(reusableTamagotchi.isAlive()).toEqual("I'm Dead");
  })

  it('is dead if fun reaches zero', function() {
    reusableTamagotchi.fun = 0;
    expect(reusableTamagotchi.isAlive()).toEqual("I'm Dead");
  })

  it('is dead if energy reaches zero', function() {
    reusableTamagotchi.energy = 0;
    expect(reusableTamagotchi.isAlive()).toEqual("I'm Dead");
  })
})
