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
      guard(creep);
    }
  }
  for(var i in Game.spawns) {
    var spawn = Game.spawns[i];


    var targets = spawn.room.find(FIND_HOSTILE_CREEPS);
    targets = targets.filter(
      function(element, index, array) {
        return (element.owner.username!="Source Keeper");
      });
    for(var i = 0; i < targets.length; i++){
      targets[i] = targets[i].id;
    }
    spawn.memory.targets = targets;

    if(spawn.unitCount.harvesters < 2){
      spawn.createHarvesterCreep();
    }else if(spawn.unitCount.guards < 1){
      spawn.createGuardCreep();
    }else if(spawn.unitCount.harvesters < 3){
      spawn.createHarvesterCreep();
    }else if(spawn.unitCount.guards < 3){
      spawn.createGuardCreep();
    }else if(spawn.unitCount.builders < 1){
      spawn.createBuilderCreep();
    }else{
      (spawn.unitCount.harvester > spawn.unitCount.guards) ? spawn.createGuardCreep() : spawn.createHarvesterCreep();
    }
  }

}
