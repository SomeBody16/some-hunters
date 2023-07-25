onEvent('item.registry', event => {
  const goggles = event.create('custom_night_vision_goggles')
    .displayName('Custom Night Vision Goggles')
    .type('helmet')
    .texture('minecraft:item/netherite_helmet');

  goggles.creativeTabs = CreativeTabs.TOOLS_AND_COMBAT;

  event.create('custom_night_vision_crafting')
    .shaped(goggles, [
      'NNN',
      'EGE',
      ' I '
    ], {
      N: 'minecraft:netherite_ingot',
      E: 'minecraft:ender_pearl',
      G: 'minecraft:glass_pane',
      I: 'minecraft:iron_ingot'
    });

});

onEvent('player.equip', event => {
  const player = event.player;
  const item = event.item;

  if (item.name === 'custom_night_vision_goggles') {
    player.potionEffects.add('minecraft:night_vision', 999999, 0, true, true);
  }
});

onEvent('player.unequip', event => {
  const player = event.player;
  const item = event.item;

  if (item.name === 'custom_night_vision_goggles') {
    player.potionEffects.remove('minecraft:night_vision');
  }
});
