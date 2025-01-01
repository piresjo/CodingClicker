class Upgrade {
    constructor(name, description, availableFunction, isAvailable, clicksNeeded, clickerIncrement, clickerIncreaseFactor, bought) {
        this._name = name;
        this._description = description;
        this._availableFunction = availableFunction;
        this._isAvailable = isAvailable;
        this._clicksNeeded = clicksNeeded;
        this._clickerIncrement = clickerIncrement;
        this._clickerIncreaseFactor = clickerIncreaseFactor;
        this._bought = bought;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get description() {
        return this._description;
    }

    set description(newDescription) {
        this._description = newDescription;
    }

    get availableFunction() {
        return this._availableFunction;
    }

    set availableFunction(newAvailableFunction) {
        this._availableFunction = newAvailableFunction;
    }

    get isAvailable() {
        return this._isAvailable;
    }

    set isAvailable(newIsAvailable) {
        this._isAvailable = newIsAvailable;
    }

    get clicksNeeded() {
        return this._clicksNeeded;
    }

    set clicksNeeded(newClicksNeeded) {
        this._clicksNeeded = newClicksNeeded;
    }

    get clickerIncrement() {
        return this._clickerIncrement;
    }

    set clickerIncrement(newClickerIncrement) {
        this._clickerIncrement = newClickerIncrement;
    }

    get clickerIncreaseFactor() {
        return this._clickerIncreaseFactor;
    }

    set clickerIncreaseFactor(newClickerIncreaseFactor) {
        this._clickerIncreaseFactor = newClickerIncreaseFactor;
    }

    get bought() {
        return this._bought;
    }

    set bought(newBought) {
        this._bought = newBought;
    }
}