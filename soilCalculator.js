const actionMessages = require('./fixtures/actionMessages.json');
const soilsInfo = require('./fixtures/soilsInfo.json');

function defineAction(soil) {
  return actionMessages[checkMoistureLevels(soil.type, soil.moistureLevel)];
}

function checkMoistureLevels(type, moistureLevel) {
  const soil = soilsInfo[type];
  for (let key in soil) {
    if (moistureLevel >= soil[key].min && moistureLevel <= soil[key].max) {
      return key;
    }
  }
}

module.exports = { 
  defineAction, 
  checkMoistureLevels 
}