import Upgrade from './gameObjects/upgrade.js';
import ClickerEngine from './clickerEngine.js';
import { FULL_UPGRADE_OBJECT } from './gameObjects/upgradeConstants.js';

// ToDo - Complete Redesign Of How Updates Are Handled


var updateUpgradesList = function () {
    $('.upgradeTable').empty();
    var upgradesToAdd = engine.updateUpgradeList();

    upgradesToAdd.forEach((upgradeToAdd) => {
        $('.upgradeTable').append(upgradeToAdd);
    });
};

var engine = new ClickerEngine();
engine.startGame();
updateUpgradesList();
setInterval(() => {
    engine.seconds += 1;
    console.log(engine.seconds);
}, 1000);

$('.firstClicker').click(function () {
    const elementUpdateText = engine.onClick();
    $('.firstNumber').text(elementUpdateText.clickCountText);
    if (elementUpdateText.clickerText !== null) {
        $('.firstClicker').text(elementUpdateText.clickerText);
    }
    updateUpgradesList();

});
