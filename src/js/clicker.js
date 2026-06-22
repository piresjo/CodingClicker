import Upgrade from './gameObjects/upgrade.js';
import ClickerEngine from './clickerEngine.js';
import { FULL_UPGRADE_OBJECT } from './gameObjects/upgradeConstants.js';

// ToDo - Complete Redesign Of How Updates Are Handled

var engine = new ClickerEngine();

var generateButtonMarkdown = function (upgradeName) {
    const className = upgradeName.replaceAll(/\s/g, '') + 'UpgradeButton';
    return (
        `<tr><td><button class="${className}" disabled>` +
        upgradeName +
        '</button></td></tr>'
    );
};

var unpackClassToGetName = function (upgradeClassName) {
    console.log(upgradeClassName);
    const upgradeButton = 'UpgradeButton';

    return upgradeClassName.replace(upgradeButton, '');
};

var updateUpgradesList = function () {
    var upgrades = engine.updateUpgradeList();
    const availableUpgrades = upgrades.makeAvailable;
    const obtainableUpgrades = upgrades.makeObtainable;
    const boughtUpgrades = upgrades.markBought;

    $(document).ready(function () {
        var tableData = $('.upgradeTable')
            .children('tr')
            .children('td')
            .children('button');
        var siteUpgrades = [];

        if (tableData.length > 0) {
            tableData.each((num, tableRow) => {
                console.log(tableRow);
                const upgradeName = unpackClassToGetName(
                    $(tableRow).attr('class')
                );
                siteUpgrades.push(upgradeName);
                console.log(upgradeName);
                if (
                    !availableUpgrades.includes(upgradeName) &&
                    !obtainableUpgrades.includes(upgradeName)
                ) {
                }
                console.log(tableRow);
                if (
                    !availableUpgrades.includes(upgradeName) &&
                    obtainableUpgrades.includes(upgradeName)
                ) {
                    $(tableRow).prop('disabled', false);
                }
            });
        }

        availableUpgrades.forEach((availableUpgrade) => {
            if (!siteUpgrades.includes(availableUpgrade)) {
                $('.upgradeTable').append(
                    generateButtonMarkdown(availableUpgrade)
                );
            }
        });
    });
};

$(document).ready(function () {
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
        console.log(
            $('.upgradeTable').children('tr').children('td').children('button')
        );
    });

    $('button').on('click', '.DoubleClickerUpgradeButton', function (event) {
        console.log("PingPong");
        console.log(event);
    });
});
