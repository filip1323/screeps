module.exports = function (creep) {
  var standpoint = creep.getSpawnBase();
  if(Game.flags.guardPoint != undefined) standpoint = Game.flags.guardPoint;
  var targets = creep.getSpawnBase().getTargets();
  if(targets.length) {
    creep.moveTo(standpoint);
  }else{
    for(var name in Game.creeps) {
      var otherCreep = Game.creeps[name];
      if(otherCreep.hits < otherCreep.hitsMax){
        creep.moveTo(otherCreep);
        creep.heal(otherCreep);
        break;
      }
    }

  }
}
