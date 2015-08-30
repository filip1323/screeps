module.exports = function (creep) {
  if(creep.carry.energy == 0) {
    creep.moveTo(creep.getSpawnBase());
    creep.getSpawnBase().transferEnergy(creep);
  }  else {
    var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
    if(creep.getSpawnBase().memory.allowBuildersWork)
    if(targets.length) {
      creep.moveTo(targets[0]);
      creep.build(targets[0]);
    }else{
      creep.moveTo(creep.room.controller);
      creep.upgradeController(creep.room.controller);
    }
  }
}
