import Upgrade from './upgrade.js';

export default class QuadClickerUpgrade extends Upgrade {
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

    availableFunction(upgradeMap, clickerValue) {
        if (upgradeMap.get('DoubleClicker').bought) {
            if (clickerValue > 100) {
                return true;
            }
            return false;
        }
        return false;
    }
}
