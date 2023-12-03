const { defineAction } = require("../soilCalculator.js");
const { randomNumber } = require("../support/random.js");
const actionMessages = require("../fixtures/actionMessages.json");
const soilsInfo = require("../fixtures/soilsInfo.json");


//I've decided to put each type of soils within it's own "describe" 
//as a way to group the tests by soil type.
//AFAIK, Jest doesn't support a way for doing that

describe("Clay Soil Calculator Feature", () => {
  test("Should check if clay soil has Ideal Moisture Levels", () => {
    const soil = {
      type: "clay",
      moistureLevel: randomNumber(
        soilsInfo.clay.ideal.min,
        soilsInfo.clay.ideal.max
      ),
    };

    expect(defineAction(soil)).toBe(actionMessages.ideal);
  });

  test("Should check if clay soil needs irrigation", () => {
    const soil = {
      type: "clay",
      moistureLevel: randomNumber(
        soilsInfo.clay.needsIrrigation.min,
        soilsInfo.clay.needsIrrigation.max
      ),
    };

    expect(defineAction(soil)).toBe(actionMessages.needsIrrigation);
  });

  test("Should check if clay soil needs moisture levels are dangerously low", () => {
    const soil = {
      type: "clay",
      moistureLevel: randomNumber(
        soilsInfo.clay.dangerouslyLow.min,
        soilsInfo.clay.dangerouslyLow.max
      ),
    };

    expect(defineAction(soil)).toBe(actionMessages.dangerouslyLow);
  });
});

describe("Loamy Soil Calculator Feature", () => {
  test("Should check if loamy soil has Ideal Moisture Levels", () => {
    const soil = {
      type: "loamy",
      moistureLevel: randomNumber(
        soilsInfo.loamy.ideal.min,
        soilsInfo.loamy.ideal.max
      ),
    };

    expect(defineAction(soil)).toBe(actionMessages.ideal);
  });

  test("Should check if loamy soil needs irrigation", () => {
    const soil = {
      type: "loamy",
      moistureLevel: randomNumber(
        soilsInfo.loamy.needsIrrigation.min,
        soilsInfo.loamy.needsIrrigation.max
      ),
    };

    expect(defineAction(soil)).toBe(actionMessages.needsIrrigation);
  });

  test("Should check if loamy soil needs moisture levels are dangerously low", () => {
    const soil = {
      type: "loamy",
      moistureLevel: randomNumber(
        soilsInfo.loamy.dangerouslyLow.min,
        soilsInfo.loamy.dangerouslyLow.max
      ),
    };

    expect(defineAction(soil)).toBe(actionMessages.dangerouslyLow);
  });
});

describe("Sandy Soil Calculator Feature", () => {
  test("Should check if sandy soil needs irrigation", () => {
    const soil = {
      type: "sandy",
      moistureLevel: randomNumber(
        soilsInfo.sandy.needsIrrigation.min,
        soilsInfo.sandy.needsIrrigation.max
      ),
    };

    expect(defineAction(soil)).toBe(actionMessages.needsIrrigation);
  });

  test("Should check if sandy soil needs moisture levels are dangerously low", () => {
    const soil = {
      type: "sandy",
      moistureLevel: randomNumber(
        soilsInfo.sandy.dangerouslyLow.min,
        soilsInfo.sandy.dangerouslyLow.max
      ),
    };

    expect(defineAction(soil)).toBe(actionMessages.dangerouslyLow);
  });

  test("Should check if sandy soil has Ideal Moisture Levels", () => {
    const soil = {
      type: "loamy",
      moistureLevel: randomNumber(
        soilsInfo.loamy.ideal.min,
        soilsInfo.loamy.ideal.max
      ),
    };

    expect(defineAction(soil)).toBe(actionMessages.ideal);
  });
});
