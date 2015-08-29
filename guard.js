module.exports = function (creep) {
  var targets = creep.getSpawnBase().getTargets();
    if(targets.length) {
      creep.moveTo(targets[0]);
      creep.attack(targets[0]);
    }else{
      creep.moveTo(creep.getSpawnBase());
    }
  }
