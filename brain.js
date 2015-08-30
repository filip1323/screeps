module.exports = function (Spawn) {

  var harvester = require('harvester');
  var guard = require('guard');
  var builder = require('builder');
  var healer = require('healer');
  var transporter = require('transporter');
  Spawn.prototype.unitCount = {
    harvesters: 0,
    builders: 0,
    guards: 0,
    healers: 0,
    transporters: 0
  }
  spawn.memory.harvestersId = [];
  for(var name in Game.creeps) {
    var creep = Game.creeps[name];
    var itsSpawn = creep.getSpawnBase();
    if(creep.memory.role == 'harvester') {
      itsSpawn.unitCount.harvesters++;
      spawn.memory.harvestersId.push(creep.id);
      harvester(creep);
    }else if(creep.memory.role == 'builder') {
      itsSpawn.unitCount.builders++;
      builder(creep);
    }else if(creep.memory.role == 'guard') {
      itsSpawn.unitCount.guards++;
      guard(creep);
    }else if(creep.memory.role == 'healer') {
      itsSpawn.unitCount.healers++;
      healer(creep);
    }else if(creep.memory.role == 'transporter') {
      itsSpawn.unitCount.transporters++;
      transporter(creep);
    }
  }
  for(var i in Game.spawns) {
    var spawn = Game.spawns[i];


    var targets = spawn.room.find(FIND_HOSTILE_CREEPS);
    targets = targets.filter(
      function(element, index, array) {
        return (element.owner.username!=="Source Keeper");
      });
      for(var i = 0; i < targets.length; i++){
        targets[i] = targets[i].id;
      }
      spawn.memory.targets = targets;
      spawn.memory.allowBuildersWork = false;
      if(spawn.unitCount.harvesters < 2){
        spawn.createHarvesterCreep();
      }else if(spawn.unitCount.guards < 1){
        spawn.createGuardCreep();
      }else if(spawn.unitCount.harvesters < 3){
        spawn.createHarvesterCreep();
      }else if(spawn.unitCount.guards < 3){
        spawn.createGuardCreep();
      }else if(spawn.unitCount.healers < 2){
        spawn.createHealerCreep();
      }else if(spawn.unitCount.builders < 2){
        spawn.createBuilderCreep();
      }else if(spawn.unitCount.guards < 6){
        spawn.createGuardCreep();
      }else if(spawn.unitCount.transporters < 2){
        spawn.createTransporterCreep();
      }else{
        spawn.memory.allowBuildersWork = true;
      }
    }

  }
