import Upgrade from './upgrade.js';

const DOUBLE_CLICKER_NAME = 'Double Clicker';
const DOUBLE_CLICKER_DESCRIPTION = 'Has Clicker Add 2';
const QUAD_CLICKER_NAME = 'Quad Clicker';
const QUAD_CLICKER_DESCRIPTION = 'Has Clicker Add 4';
const AVAILABLE = true;
const NOT_AVAILABLE = false;
const NOT_BAUGHT = false;
const CLICKS_NEEDED_DOUBLE_CLICKER = 100;
const CLICKS_NEEDED_QUAD_CLICKER = 200;

export const DEFAULT_AVAILABLE_FUNCTION = function () {
    return true;
};

export const QUAD_CLICKER_FUNCTION = function () {
    if (FULL_UPGRADE_OBJECT[DOUBLE_CLICKER_NAME].bought) {
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
        NOT_AVAILABLE,
        CLICKS_NEEDED_QUAD_CLICKER,
        4,
        null,
        NOT_BAUGHT
    ),
};
