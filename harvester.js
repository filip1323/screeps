module.exports = function (creep) {
  if(creep.carry.energy < creep.carryCapacity) {
    var sources = creep.room.find(FIND_SOURCES);
    creep.moveTo(sources[0]);
    creep.harvest(sources[0]);
  }
  else {
    creep.moveTo(creep.memory.baseSpawn);
    creep.transferEnergy(creep.memory.baseSpawn);
  }
}
