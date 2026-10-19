import Phaser from 'phaser';
import './style.css';

class PlaceholderScene extends Phaser.Scene {
  constructor() {
    super('PlaceholderScene');
  }

  create() {
    const { width, height } = this.scale;
    this.cameras.main.setBackgroundColor('#111827');

    this.add.text(width / 2, height / 2 - 90, 'PHASER STARTER', {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '28px',
      fontStyle: 'bold',
      color: '#f9fafb',
    }).setOrigin(0.5);

    this.add.text(width / 2, height / 2 - 48, 'Your game idea goes here', {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '16px',
      color: '#9ca3af',
    }).setOrigin(0.5);

    const orb = this.add.circle(width / 2, height / 2 + 35, 28, 0x60a5fa)
      .setInteractive({ useHandCursor: true });

    this.tweens.add({
      targets: orb,
      y: orb.y - 12,
      duration: 900,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.inOut',
    });

    orb.on('pointerdown', () => {
      this.tweens.add({
        targets: orb,
        scale: 1.35,
        duration: 120,
        yoyo: true,
        onComplete: () => orb.setScale(1),
      });
    });

    this.add.text(width / 2, height - 34, 'Click the circle to test interaction', {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '13px',
      color: '#6b7280',
    }).setOrigin(0.5);
  }
}

new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 800,
  height: 500,
  backgroundColor: '#111827',
  scene: [PlaceholderScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
});
