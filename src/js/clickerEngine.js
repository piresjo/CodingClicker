import { FULL_UPGRADE_OBJECT } from './gameObjects/upgradeConstants.js';

const SECOND_IN_MILLISECONDS = 1000;

export default class ClickerEngine {
    constructor() {
        this.clickerValue = 0;
        this.clickerIncrement = 1;
        this.clicksPerSecond = 0;
        this.clickedFirstTime = false;
        this.upgradeMap = new Map();
        this.obtainableUpgradeList = [];
        this.boughtUpgradeList = [];
        this.availableUpgradeList = [];
        this.seconds = 0;
    }

    updateUpgradeList() {
        var listToMakeAvailable = [];
        var listToMakeObtainable = [];
        var listToMarkBought = [];
        this.upgradeMap.forEach((upgradeObject, upgradeName) => {
            console.log(upgradeObject);
            console.log(upgradeName);
            if (upgradeObject.isAvailable && !upgradeObject.bought) {
                listToMakeAvailable.push(upgradeName);
            }
            if (
                upgradeObject.isAvailable &&
                !upgradeObject.bought &&
                upgradeObject.clicksNeeded <= this.clickerValue
            ) {
                if (listToMakeAvailable.includes(upgradeName)) {
                    listToMakeAvailable.splice(
                        listToMakeAvailable.length - 1,
                        1
                    );
                }
                listToMakeObtainable.push(upgradeName);
            }
            if (upgradeObject.bought) {
                if (listToMakeObtainable.includes(upgradeName)) {
                    listToMakeObtainable.splice(
                        listToMakeAvailable.length - 1,
                        1
                    );
                }
                listToMarkBought.push(upgradeName);
            }
        });
        this.obtainableUpgradeList = listToMakeAvailable;
        this.boughtUpgradeList = listToMakeObtainable;
        this.availableUpgradeList = listToMarkBought;
        return {
            makeAvailable: listToMakeAvailable,
            makeObtainable: listToMakeObtainable,
            markBought: listToMarkBought,
        };
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
            this.upgradeMap.set(upgradeObject.name.replaceAll(/\s/g, ''), upgradeObject);
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
