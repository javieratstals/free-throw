namespace SpriteKind {
    export const hoop = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.hoop, function (sprite, otherSprite) {
    game.over(true)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddddddddddddfffff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddffffff
    fffdddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddddddddddffffffd
    ffffddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddffffffdd
    fffffdddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddfffffddd
    dffffdddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfff22222222ddddddddddddddddddddddddddddddddddddddddddfffffdddd
    ddffffddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfff22222222dddddddddddddddddddddddddddddddddddddddddfffffddddd
    ddffffddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfff22222222dddddddddddddddddddddddddddddddddddddddddfffffddddd
    dddfffddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddd
    dddfffddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddddddffffddddddd
    dddffffdddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddffffdddddddd
    dddfffffddddddddddddddddddddddddddd22222fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddd
    ddddfffffdddddddddddddddddddddddddd22222fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddddffffddddddddd
    dddddffffdddddddddddddddddddddddddd22222fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddffffdddddddddd
    ddddddfffdddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddffffdddddddddd
    ddddddfffdddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddfffddddddddddd
    ddddddffffddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddffffddddddddddd
    ddddddffffddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddffffddddddddddd
    dddddddffffdddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddd
    dddddddffffdddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddd
    ddddddddfffdddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddd
    ddddddddfffdddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfff2222dddddddddddddddddddddddddddddddddddddddffffdddddddddddd
    ddddddddfffdddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfff2222222222dddddddddddddddddddddddddddddddddffffdddddddddddd
    ddddddddffffddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfff2222222222dddddddddddddddddddddddddddddddddfffddddddddddddd
    ddddddddffffddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffd222222222dddddddddddddddddddddddddddddddddfffddddddddddddd
    dddddddddffffddddddddddddddddddddddd2222fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddffffddddddddddddd
    dddddddddffffddddddddddddddddddddddd2222fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddffffddddddddddddd
    dddddddddffffddddddddddddddddddddddd2222fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddd
    ddddddddddffffdddddddddddddddddddddd2222fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddffffdddddddddddddd
    ddddddddddffffddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddffffdddddddddddddd
    dddddddddddfffddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddfffddddddddddddddd
    dddddddddddffffdddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfff222dddddddddddddddddddddddddddddddddddddffffddddddddddddddd
    dddddddddddffffdddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfff222222222dddddddddddddddddddddddddddddddffffddddddddddddddd
    ddddddddddddfffdddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfff222222222dddddddddddddddddddddddddddddddfffdddddddddddddddd
    ddddddddddddffffddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffd22222222ddddddddddddddddddddddddddddddffffdddddddddddddddd
    ddddddddddddffffddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddffffdddddddddddddddd
    ddddddddddddffffddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddffffdddddddddddddddd
    dddddddddddddffffdddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddffffddddddddddddddddd
    dddddddddddddffffdddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddffffddddddddddddddddd
    ddddddddddddddffffdddddddddddddddd222222fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddffffdddddddddddddddddd
    ddddddddddddddffffdddddddddddddddd222222fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddffffdddddddddddddddddd
    dddddddddddddddffffddddddddddddddd222222fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddffffddddddddddddddddddd
    dddddddddddddddffffdddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddffffddddddddddddddddddd
    ddddddddddddddddfffdddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddffffdddddddddddddddddddd
    ddddddddddddddddffffdddddddddddddddddddddffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddffffdddddddddddddddddddd
    ddddddddddddddddffffdddddddddddddddddddddffddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddd
    dddddddddddddddddffffddddddddddddddddddddffdddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddd
    dddddddddddddddddffffdddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddffffdddddddddddddddddddddd
    dddddddddddddddddffffdddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddddddddffffddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddd
    ddddddddddddddddddffffddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddd
    ddddddddddddddddddffffdddddddddddddddddddddffddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddffffffddddddddddddddddddddddd
    dddddddddddddddddddffffddddddddddddddddddddffffdddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddd
    dddddddddddddddddddffffdddddddddddddddddddddffffddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddffffdddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddd
    ddddddddddddddddddddfffffdddddddddddddddddddddffffdddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddd
    ddddddddddddddddddddfffffddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddffffdddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddddfffffdddddddddddddddddddddffffdddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddd
    ddddddddddddddddddddddfffffddddddddddddddddddddddffffdddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddffffdddddddddddddddddddddddddddddd
    ddddddddddddddddddddddfffffdddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddffffddddddddddddddddddddddddddddddffffddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddfffffdddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddffffdddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddffffdddddddddddddddddddddddddfffffffdddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddffffdddddddddddddddddddddddddddfffffddddddddddddddddddddddddffffffddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddffffddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddfffffdddddddddddddddddddddddddfffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddffffddddddddddddddddddddddddddddfffffffffffffffffffffffffffffdddddddddddddddddddddddddddddfffffffdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffdddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffdddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffdddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffdddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddfffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddfffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddffffffffdddddddddddddddddddddddddddddddddddddddddddddffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddfffffffffddddddddddddddddddddddddddddddddddddddddfffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddfffffffffddddddddddddddddddddddddddddddddddfffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddffffffffffdddddddddddddddddddddddddddffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddffffffffffffddddddddddddddddfffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffdddddddddfffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333333dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333333dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333333dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333333dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333333333333333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd33333dddddddddddd33333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd33333dddddddddddd33333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd33333dddddddddddd33333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333dddddddddddd333333333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd33333dddddddd99999dddddddd333333dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    5555555555555555555555555555555555555555555555555555555533333555555559999955555555533333555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555533333555555559999955555555533333555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555333333555555559999955555555533333555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555333333555555559999955555555533333555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555333333555555555555555555555533333555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555333335555555555555555555555533333555555555555555555555555555555555555555555555555555555555555555555555555
    `)
mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
mySprite.setPosition(78, 93)
mySprite.setVelocity(50, 0)
mySprite.setBounceOnWall(true)
let mySprite2 = sprites.create(img`
    2 2 2 2 2 f f f f f 2 2 2 2 2 2 
    . . . 1 f . . . . . f . 1 . . . 
    . . 1 . f . . . . . f 1 . . . . 
    . . . 1 f . . . . . f . . . . . 
    . . 1 . f . . . . . f 1 1 . . . 
    . . . . f . . . . . f . . . . . 
    . . . . 1 f f f f f . 1 . . . . 
    . . . 1 . . 1 . . 1 . . 1 . . . 
    . . . . . . 1 1 . . 1 . . . . . 
    . . . 1 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.hoop)
mySprite2.setPosition(74, 4)
