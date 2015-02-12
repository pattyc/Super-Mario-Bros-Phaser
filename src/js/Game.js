Mario.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

Mario.Game.prototype = {


        //var runKey;
        //var jumpTimer = 0;
        //
        //function preload() {
        //
        //    game.stage.backgroundColor = '#6B8CFF';
        //    game.load.tilemap('map', 'assets/level1-1.json', null, Phaser.Tilemap.TILED_JSON);
        //    game.load.image('tileset', 'assets/tile_set.png');
        //    game.load.spritesheet('mario', 'assets/small_mario.png', 16, 16);
        //}
        //
        //function create() {
        //    map = this.add.tilemap('map');
        //    map.addTilesetImage('tile_set', 'tileset');
        //    layer = map.createLayer('Tile Layer 1');
        //    layer.resizeWorld();
        //    collisionArray = [0, 1, 2, 3, 25, 34, 265, 266, 298, 299];
        //    map.setCollision(collisionArray);
        //
        //    player = game.add.sprite(50, game.world.height - 48, 'mario');
        //    game.physics.arcade.enable(player);
        //
        //    player.anchor.setTo(.5, .5);
        //    player.body.gravity.y = 1200;
        //    player.body.collideWorldBounds = true;
        //
        //    player.animations.add('left', [9, 8, 7], 10, true);
        //    player.animations.add('right', [1, 2, 3], 10, true);
        //
        //    cursors = game.input.keyboard.createCursorKeys();
        //    this.runKey = game.input.keyboard.addKey(Phaser.Keyboard.CONTROL);
        //
        //    game.camera.follow(player);
        //}
        //
        //function update() {
        //    game.physics.arcade.collide(player, layer);
        //
        //    if (cursors.right.isDown) {
        //        if (this.runKey.isDown) {
        //            player.body.acceleration.x = 300;
        //            if (player.body.velocity.x > 150) {
        //                player.body.velocity.x = 150;
        //            }
        //        } else {
        //            player.body.acceleration.x = 150;
        //            if (player.body.velocity.x > 100) {
        //                player.body.velocity.x = 100;
        //            }
        //        }
        //
        //        if (player.body.blocked.down) {
        //            player.animations.play('right');
        //        }
        //    }
        //    else if (cursors.left.isDown) {
        //        player.body.acceleration.x = -300;
        //        if (player.body.velocity.x < -150) {
        //            player.body.velocity.x = -150;
        //        }
        //        if (player.body.blocked.down) {
        //            player.animations.play('left');
        //        }
        //    } else {
        //        if (player.body.velocity.x > 0) {
        //            player.body.acceleration.x = -300;
        //        }
        //        else if (player.body.velocity.x < 0) {
        //            player.body.acceleration.x = 300;
        //        }
        //        if (player.body.velocity.x > -5 && player.body.velocity.x < 5 && player.body.blocked.down) {
        //            player.body.velocity.x = 0;
        //            if (player.animations.currentAnim.name == 'left') {
        //                player.animations.stop();
        //                player.frame = 10;
        //            } else {
        //                player.animations.stop();
        //                player.frame = 0;
        //            }
        //        }
        //    }
        //
        //    if (cursors.up.isDown && player.body.blocked.down) {
        //        jumpTimer = 1;
        //        player.body.velocity.y = -220;
        //        if ((player.animations.currentAnim.name == 'left') || (player.frame == 10)) {
        //            player.animations.stop();
        //            player.frame = 6;
        //        } else {
        //            player.animations.stop();
        //            player.frame = 4;
        //        }
        //    } else if (cursors.up.isDown && (jumpTimer != 0)) {
        //        if (jumpTimer > 15 || player.body.velocity.y == 0) {
        //            jumpTimer = 0;
        //        } else {
        //            jumpTimer++;
        //            player.body.velocity.y = -220;
        //        }
        //    } else if (jumpTimer != 0) {
        //        jumpTimer = 0;
        //    }
        //}

    create: function () {

        //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
        this.game.stage.backgroundColor = '#6B8CFF';
    },

    update: function () {

        //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');

    }

};