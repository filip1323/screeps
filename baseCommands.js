module.exports = function () {
  Spawn.prototype.getNextIndex = function(){
    return Spawn.memory.index++;
  };
  Spawn.prototype.createHarvesterCreep = function() {
    var i = this.getNexIndex();
    return this.createCreep([MOVE, CARRY, WORK], name, {role: "harvester"+i, index: i});
  };
  Spawn.prototype.createBuilderCreep = function() {
    var i = this.getNexIndex();
    return this.createCreep([MOVE, CARRY, WORK], name, {role: "builder"+i, index: i});
  };
  Spawn.prototype.createGuardCreep = function() {
    var i = this.getNexIndex();
    return this.createCreep([ATTACK, CARRY, MOVE], name, {role: "guard"+i, index: i});
  };
}
