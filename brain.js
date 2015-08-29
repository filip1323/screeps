module.exports = function (Spawn) {
  var harvester = require('harvester');
  var guard = require('guard');
  var builder = require('builder');
  Spawn.prototype.unitCount = {
    harvesters: 0,
    builders: 0,
    guards: 0
  }
  for(var name in Game.creeps) {
    var creep = Game.creeps[name];
    var itsSpawn = creep.getSpawnBase();
    if(creep.memory.role == 'harvester') {
      itsSpawn.unitCount.harvesters++;
      harvester(creep);
    }

    if(creep.memory.role == 'builder') {
      itsSpawn.unitCount.builders++;
      builder(creep);
    }

    if(creep.memory.role == 'guard') {
      itsSpawn.unitCount.guards++;
      builder(creep);
    }
  }
  for(var i in Game.spawns) {
    var spawn = Game.spawns[i];
    if(spawn.unitCount.harvesters < 2){
      spawn.createHarvesterCreep();
    }else if(spawn.unitCount.guards < 1){
      spawn.createGuardCreep();
    }else if(spawn.unitCount.harvesters < 3){
      spawn.createHarvesterCreep();
    }else if(spawn.UnitCount.guards < 3){
      spawn.createGuardCreep();
    }
  }

}
