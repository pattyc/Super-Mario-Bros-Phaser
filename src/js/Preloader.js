
Mario.Preloader = function (game) {

    this.background = null;
    this.preloadBar = null;

    this.ready = false;

};

Mario.Preloader.prototype = {

    preload: function () {

        this.load.image('title', 'assets/title.png');
        this.load.image('cursor', 'assets/cursor.png');
        this.load.tilemap('map', 'assets/level1-1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tileset', 'assets/tile_set.png');
        this.load.spritesheet('mario', 'assets/small_mario.png', 16, 16);
        text = "Start Game";
        style = { font: "12px Arial", fill: "#ffffff", align: "center"};
    },

    create: function () {

    },

    update: function () {

        this.state.start('MainMenu');
    }

};