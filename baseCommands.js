module.exports = function () {
  Spawn.prototype.getNextIndex(){
    return Spawn.memory.index++;
  }
  Spawn.prototype.createHarvesterCreep = function() {
    return this.createCreep([MOVE, CARRY, WORK], name, {role: "harvester", index: this.getNexIndex()});
  };
  Spawn.prototype.createBuilderCreep = function() {
    return this.createCreep([MOVE, CARRY, WORK], name, {role: "harvester", index: this.getNexIndex()});
  };
  Spawn.prototype.createGuardCreep = function() {
    return this.createCreep([ATTACK, CARRY, MOVE], name, {role: "harvester", index: this.getNexIndex()});
  };
}
