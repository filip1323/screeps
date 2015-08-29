module.exports = function (creep) {
  if(creep.carry.energy == 0) {
    creep.moveTo(creep.getSpawnBase());
    creep.getSpawnBase().transferEnergy(creep);
  }  else {
    var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
    if(targets.length) {
      creep.moveTo(targets[0]);
      creep.build(targets[0]);
    }
    if(creep.getSpawnBase().energy/creep.getSpawnBase().energy > 0.8){
      creep.moveTo(creep.room.controller);
      creep.upgradeController(creep.room.controller);
    }
  }
}
