import Upgrade from './upgrade.js';

export default class DoubleClickerUpgrade extends Upgrade {
    constructor(
        name,
        description,
        isAvailable,
        clicksNeeded,
        clickerIncrement,
        clickerIncreaseFactor,
        bought
    ) {
        super(
            name,
            description,
            isAvailable,
            clicksNeeded,
            clickerIncrement,
            clickerIncreaseFactor,
            bought
        );
    }
}
