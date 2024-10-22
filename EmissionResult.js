function getEmissionResults() {
    machineRuntime = parseFloat(prompt('Enter machine runtime', '0'));
    toolWeight = parseFloat(prompt('Enter tool weight', '0'));
    toolLife = parseFloat(prompt('Enter tool life', '0'));
    materialWeight = parseFloat(prompt('Enter material weight', '0'));
    toolEmissions = (machineRuntime/toolLife) * toolWeight * 30;
    materialEmissions = materialWeight * 2.5;
}

getEmissionResults();