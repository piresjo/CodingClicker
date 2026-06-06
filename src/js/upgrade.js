export default class Upgrade {
    constructor(
        name,
        description,
        availableFunction,
        isAvailable,
        clicksNeeded,
        clickerIncrement,
        clickerIncreaseFactor,
        bought
    ) {
        this.name = name;
        this.description = description;
        this.availableFunction = availableFunction;
        this.isAvailable = isAvailable;
        this.clicksNeeded = clicksNeeded;
        this.clickerIncrement = clickerIncrement;
        this.clickerIncreaseFactor = clickerIncreaseFactor;
        this.bought = bought;
    }
}
