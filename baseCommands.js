module.exports = function (Spawn) {
  Spawn.prototype.roles = {
    worker : [MOVE, CARRY, WORK],
    guard : [ATTACK, CARRY, MOVE]
  }
  Spawn.prototype.getNextIndex = function(){
    if(this.memory.index === undefined) this.memory.index = 0;
    return this.memory.index++;
  };
  Spawn.prototype.createHarvesterCreep = function() {
    var i = this.getNextIndex();
    var name = "harvester";
    return this.createCreep(this.roles.worker, name+i, {role: "harvester", index: i, baseSpawnId : this.id});
  };
  Spawn.prototype.createBuilderCreep = function() {
    var i = this.getNextIndex();
    var name = "builder";
    return this.createCreep(this.roles.worker, name+i, {role: "builder", index: i, baseSpawnId : this.id});
  };
  Spawn.prototype.createGuardCreep = function() {
    var i = this.getNextIndex();
    var name = "guard";
    return this.createCreep(this.roles.guard, name+i, {role: "guard", index: i, baseSpawnId : this.id});
  };
  Creep.prototype.getSpawnBase = function(){
    return Game.getObjectById(this.memory.baseSpawnId);
  }
}
