module.exports = function (Spawn) {
  Spawn.prototype.roles = {
    worker : [MOVE, CARRY, WORK],
    guard : [TOUGH, MOVE, ATTACK],
    healer : [HEAL, MOVE],
    transporter : [CARRY, CARRY, MOVE]
  }
  Spawn.prototype.getNextIndex = function(){
    if(this.memory.index === undefined) this.memory.index = 0;
    return this.memory.index++;
  };
  Spawn.prototype.createHarvesterCreep = function() {
    if(this.canCreateCreep(this.roles.worker)) return;
    var i = this.getNextIndex();
    var name = "harvester";
    return this.createCreep(this.roles.worker, name+i, {role: name, index: i, baseSpawnId : this.id});
  };
  Spawn.prototype.createBuilderCreep = function() {
    if(this.canCreateCreep(this.roles.worker)) return;
    var i = this.getNextIndex();
    var name = "builder";
    return this.createCreep(this.roles.worker, name+i, {role: name, index: i, baseSpawnId : this.id});
  };
  Spawn.prototype.createGuardCreep = function() {
    if(this.canCreateCreep(this.roles.guard)) return;
    var i = this.getNextIndex();
    var name = "guard";
    return this.createCreep(this.roles.guard, name+i, {role: name, index: i, baseSpawnId : this.id});
  };
  Spawn.prototype.createHealerCreep = function() {
    if(this.canCreateCreep(this.roles.healer)) return;
    var i = this.getNextIndex();
    var name = "healer";
    return this.createCreep(this.roles.healer, name+i, {role: name, index: i, baseSpawnId : this.id});
  };
  Spawn.prototype.getTargets = function(){
    var targets = []
    for(var i = 0; i < this.memory.targets.length; i++){
      targets[targets.length] = Game.getObjectById(this.memory.targets[i]);
    }
    return targets;
  }
  Creep.prototype.getSpawnBase = function(){
    return Game.getObjectById(this.memory.baseSpawnId);
  }
}
