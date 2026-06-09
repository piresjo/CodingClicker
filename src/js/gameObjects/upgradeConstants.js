import Upgrade from './upgrade.js';

export const DOUBLE_CLICKER_NAME = 'Double Clicker';
export const DOUBLE_CLICKER_DESCRIPTION = 'Has Clicker Add 2';
export const QUAD_CLICKER_NAME = 'Quad Clicker';
export const QUAD_CLICKER_DESCRIPTION = 'Has Clicker Add 4';
export const AVAILABLE = true;
export const NOT_AVAILABLE = false;
export const NOT_BAUGHT = false;
export const CLICKS_NEEDED_DOUBLE_CLICKER = 100;
export const CLICKS_NEEDED_QUAD_CLICKER = 200;

export const DEFAULT_AVAILABLE_FUNCTION = function () {
    return true;
};

export const QUAD_CLICKER_FUNCTION = function (upgradeMap, clickerValue) {
    if (upgradeMap.get(DOUBLE_CLICKER_NAME).bought) {
        if (clickerValue > 100) {
            return true;
        }
        return false;
    }
    return false;
};

export const FULL_UPGRADE_OBJECT = {
    DOUBLE_CLICKER_NAME: new Upgrade(
        DOUBLE_CLICKER_NAME,
        DOUBLE_CLICKER_DESCRIPTION,
        DEFAULT_AVAILABLE_FUNCTION,
        AVAILABLE,
        CLICKS_NEEDED_DOUBLE_CLICKER,
        2,
        null,
        NOT_BAUGHT
    ),
    QUAD_CLICKER_NAME: new Upgrade(
        QUAD_CLICKER_NAME,
        QUAD_CLICKER_DESCRIPTION,
        QUAD_CLICKER_FUNCTION,
        AVAILABLE,
        CLICKS_NEEDED_QUAD_CLICKER,
        4,
        null,
        NOT_BAUGHT
    ),
};
