var clickerValue = 0;
var clickerIncrement = 1;
var clicksPerSecond = 0;
var clickedFirstTime = false;
var boughtUpgradeList = [];
var availableUpgradeList = [];

const DEFAULT_AVAILABLE_FUNCTION = function() {
    return true;
};

const QUAD_CLICKER_FUNCTION = function() {
    if (FULL_UPGRADE_OBJECT["Double Clicker"].bought) {
        if (clickerValue > 100) {
            return true;
        } 
        return false;
    }
    return false;
};

const FULL_UPGRADE_OBJECT = {
    "Double Clicker": new Upgrade("Double Clicker", "Has Clicker Add 2", DEFAULT_AVAILABLE_FUNCTION, true, 100, 2, null, false),
    "Quad Clicker": new Upgrade("Quad Clicker", "Has Clicker Add 4", QUAD_CLICKER_FUNCTION, false, 200, 4, null, false),
};


for (const [upgradeName, upgradeObject] of Object.entries(FULL_UPGRADE_OBJECT)) {
    console.log(`${upgradeName}: ${upgradeObject}`);
    if (upgradeObject.isAvailable) {
        availableUpgradeList.push(upgradeObject);
    }
}

availableUpgradeList.forEach((availableUpgrade) => {
    if (availableUpgrade._isAvailable) {
        var upgradeTableMarkup = "<tr><td>" + availableUpgrade._name + "</td></tr>";
        $(".upgradeTable").append(upgradeTableMarkup);
    }
});

$(".firstClicker").click(function() {
    clickerValue += clickerIncrement;
    console.log(clickerValue);
    $(".firstNumber").text(clickerValue.toString());
    if (!(clickedFirstTime)) {
        clickedFirstTime = true;
        $(".firstClicker").text("Add " + clickerIncrement.toString());
    }
});
