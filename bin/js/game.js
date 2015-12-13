var SplashScreen = (function () {
    function SplashScreen() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    SplashScreen.prototype.preload = function () {
        this.game.load.image('logo', 'assets/logo.png');
        this.game.stage.backgroundColor = 0x000000;
    };

    SplashScreen.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    };
    return SplashScreen;
})();

window.onload = function () {
    var game = new SplashScreen();
};
