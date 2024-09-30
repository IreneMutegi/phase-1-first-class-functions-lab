const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2); // Returns the first two drivers
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2); // Returns the last two drivers
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 
// Define the createFareMultiplier function
const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier; // Multiply the fare by the multiplier
    };
  };
  
  // Example usage
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  const fareQuadrupler = createFareMultiplier(4);
  
  // Testing the functions (uncomment these lines for direct testing)
  console.log(fareDoubler(10)); // Should log: 20
  console.log(fareTripler(10));  // Should log: 30
  console.log(fareQuadrupler(10)); // Should log: 40
  
 
 
  const selectDifferentDrivers = function(drivers, selectionFunction) {
    return selectionFunction(drivers); // Call the provided function with the drivers array
  };
  
  // Example usage:
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Logs: ['Antonia', 'Nuru']
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));  // Logs: ['Amari', 'Mo']

  