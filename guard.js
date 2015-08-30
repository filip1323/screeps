module.exports = function (creep) {
  var getClosest = function(targets){
    var distanceBetween = function(a, b){
      Math.sqrt(Math.pow((a.x - b.x),2) + Math.pow((a.y - b.y),2));
    }
    var target;
    var distanceMin = 1000;
    for(t in targets){
      if(distanceBetween(creep.pos, t.pos) < distanceMin){
        target = t;
      }
    }
    return target;
  }
  var targets = creep.getSpawnBase().getTargets();
    if(targets.length) {
      var target = getClosest(targets);
      creep.moveTo(target);
      creep.attack(target);
    }else{
      if(Game.flags.guardPoint != undefined) creep.moveTo(Game.flags.guardPoint);
      else creep.moveTo(creep.getSpawnBase());
    }
  }
