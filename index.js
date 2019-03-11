// Code your solution here:

function driversWithRevenueOver(driver, revenue) {
    return driver.filter(d => d.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const filteredDrivers = driversWithRevenueOver(drivers, revenue)
    return filteredDrivers.map(d => d.name)
}

function exactMatch(drivers,filterObj) {
    return drivers.filter(function(d) {
        let fKey = Object.keys(filterObj)[0]
        return d[fKey] === filterObj[fKey]
    })
}

function exactMatchToList(drivers,filterObj) {
    return exactMatch(drivers,filterObj).map(d=>d.name)
}