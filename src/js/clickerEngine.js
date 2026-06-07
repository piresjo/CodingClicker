import { FULL_UPGRADE_OBJECT } from './gameObjects/upgradeConstants.js';

const SECOND_IN_MILLISECONDS = 1000;

export default class ClickerEngine {
    constructor() {
        this.clickerValue = 0;
        this.clickerIncrement = 1;
        this.clicksPerSecond = 0;
        this.clickedFirstTime = false;
        this.boughtUpgradeList = [];
        this.availableUpgradeList = [];
        this.seconds = 0;
    }

    updateUpgradeList() {
        var returnList = [];
        this.availableUpgradeList.forEach((availableUpgrade) => {
            console.log(availableUpgrade);
            if (availableUpgrade.isAvailable && !availableUpgrade.posted) {
                availableUpgrade.posted = true;
                const className = availableUpgrade.name + 'Button';
                var upgradeTableMarkup =
                    `<tr><td><button class="${className}" disabled>` +
                    availableUpgrade.name +
                    '</button></td></tr>';
                returnList.push(upgradeTableMarkup);
            }
        });
        return returnList;
    }

    checkToEnableUpgrades() {
        var returnList = [];
        for (var i = 0; i < this.availableUpgradeList.length; i++) {
            const availableUpgrade = this.availableUpgradeList[i];
            console.log(availableUpgrade);
            if (
                availableUpgrade.isAvailable &&
                availableUpgrade.posted &&
                availableUpgrade.clicksNeeded <= this.clickerValue
            ) {
                returnList.push(i);
            }
        }
        return returnList;
    }

    startGame() {
        for (const [upgradeName, upgradeObject] of Object.entries(
            FULL_UPGRADE_OBJECT
        )) {
            console.log(`${upgradeName}: ${upgradeObject}`);
            console.log(upgradeObject);
            if (upgradeObject.isAvailable) {
                this.availableUpgradeList.push(upgradeObject);
            }
        }
    }

    onClick() {
        var returnVal = {};
        this.clickerValue += this.clickerIncrement;
        console.log(this.clickerValue);
        returnVal.clickCountText = this.clickerValue.toString();
        if (!this.clickedFirstTime) {
            this.clickedFirstTime = true;
            returnVal.clickerText = 'Add ' + this.clickerIncrement.toString();
        }
        return returnVal;
    }
}
