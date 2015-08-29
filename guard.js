module.exports = function (creep) {
  var targets = creep.room.find(FIND_HOSTILE_CREEPS, {
    filter:function(enemy){enemy.owner.username !== 'Source Keeper'});
  if(targets.length) {
    creep.moveTo(targets[0]);
    creep.attack(targets[0]);
  }else{
    creep.moveTo(creep.getSpawnBase());
  }
}
