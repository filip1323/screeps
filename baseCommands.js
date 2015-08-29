module.exports = function (Spawn) {
  Spawn.prototype.getNextIndex = function(){
    if(this.memory.index === undefined) this.memory.index = 0;
    return this.memory.index++;
  };
  Spawn.prototype.createHarvesterCreep = function() {
    var thisSpawn = this;
    var i = this.getNextIndex();
    var name = "harvester";
    return this.createCreep([MOVE, CARRY, WORK], name+i, {role: "harvester", index: i, baseSpawn : thisSpawn});
    console.log("Harvester created");
  };
  Spawn.prototype.createBuilderCreep = function() {
    var thisSpawn = this;
    var i = this.getNextIndex();
    var name = "builder";
    return this.createCreep([MOVE, CARRY, WORK], name+i, {role: "builder", index: i, baseSpawn : thisSpawn});
    console.log("Builder created");
  };
  Spawn.prototype.createGuardCreep = function() {
    var thisSpawn = this;
    var i = this.getNextIndex();
    var name = "guard";
    return this.createCreep([ATTACK, CARRY, MOVE], name+i, {role: "guard", index: i, baseSpawn : thisSpawn});
    console.log("Guard created");
  };
}
