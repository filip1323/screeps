var harvester = require('harvester');
var guard = require('guard');
var builder = require('builder');
var initBaseCommands = require('baseCommands');
var brain = require('brain');

var mainSpawnPoint = Game.spawns.Base;
initBaseCommands(Spawn);
brain(Spawn);
