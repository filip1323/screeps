var harvester = require('harvester');
var guard = require('guard');
var builder = require('builder');

for(var name in Game.creeps) {
  var creep = Game.creeps[name];

  if(creep.memory.role == 'harvester') {
    harvester(creep);
  }

  if(creep.memory.role == 'builder') {
    builder(creep);
  }

  if(creep.memory.role == 'guard') {
    builder(creep);
  }
}
