module.exports = function (Spawn) {
  Spawn.prototype.getNextIndex = function(){
    if(this.memory.index === undefined) this.memory.index = 0;
    return this.memory.index++;
  };
  Spawn.prototype.createHarvesterCreep = function() {
    var i = this.getNextIndex();
    var name = "harvester";
    return this.createCreep([MOVE, CARRY, WORK], name+i, {role: "harvester", "index": i});
  };
  Spawn.prototype.createBuilderCreep = function() {
    var i = this.getNextIndex();
    var name = "builder";
    return this.createCreep([MOVE, CARRY, WORK], name+i, {role: "builder", "index": i});
  };
  Spawn.prototype.createGuardCreep = function() {
    var i = this.getNextIndex();
    var name = "guard";
    return this.createCreep([ATTACK, CARRY, MOVE], name+i, {role: "guard", "index": i});
  };
}
