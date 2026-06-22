import DoubleClickerUpgrade from './doubleClickerUpgrade.js';
import QuadClickerUpgrade from './quadClickerUpgrade.js';
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

export const FULL_UPGRADE_OBJECT = {
    DOUBLE_CLICKER_NAME: new DoubleClickerUpgrade(
        DOUBLE_CLICKER_NAME,
        DOUBLE_CLICKER_DESCRIPTION,
        AVAILABLE,
        CLICKS_NEEDED_DOUBLE_CLICKER,
        2,
        null,
        NOT_BAUGHT
    ),
    QUAD_CLICKER_NAME: new QuadClickerUpgrade(
        QUAD_CLICKER_NAME,
        QUAD_CLICKER_DESCRIPTION,
        AVAILABLE,
        CLICKS_NEEDED_QUAD_CLICKER,
        4,
        null,
        NOT_BAUGHT
    ),
};
