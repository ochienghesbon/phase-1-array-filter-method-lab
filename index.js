function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(array, string) {
    return array.filter(function(element) {
        return element.startsWith(string);
    });
}

function matchName(array, name) {
    return array.filter(function(driver) {
        return driver.name === name;
    });
}