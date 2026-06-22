export default class Upgrade {
    constructor(
        name,
        description,
        isAvailable,
        clicksNeeded,
        clickerIncrement,
        clickerIncreaseFactor,
        bought
    ) {
        this.name = name;
        this.description = description;
        this.isAvailable = isAvailable;
        this.clicksNeeded = clicksNeeded;
        this.clickerIncrement = clickerIncrement;
        this.clickerIncreaseFactor = clickerIncreaseFactor;
        this.bought = bought;
        this.posted = false;
    }

    availableFunction(upgradeMap, clickerValue) {
        return true;
    }
}
