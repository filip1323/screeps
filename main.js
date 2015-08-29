var harvester = require('harvester');
var guard = require('guard');
var builder = require('builder');
var initBaseCommands = require('baseCommands');

var mainSpawnPoint = Game.spawns.Base;
initBaseCommands(Spawn);

var UnitCount = {
  harvesters: 0,
  builders: 0,
  guards: 0
}
for(var name in Game.creeps) {
  var creep = Game.creeps[name];

  if(creep.memory.role == 'harvester') {
    UnitCount.harvesters++;
    harvester(creep);
  }

  if(creep.memory.role == 'builder') {
    UnitCount.builders++;
    builder(creep);
  }

  if(creep.memory.role == 'guard') {
    UnitCount.guards++;
    builder(creep);
  }
}

if(UnitCount.harvesters < 3){
  mainSpawnPoint.createHarvesterCreep();
}
