(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{328:function(e,n){e.exports={title:"1.5.9 Release",description:"!task command and plugin overlay menu options",author:"Jordan",__content:'<p>The <a href="https://github.com/runelite/runelite/wiki/Slayer">Slayer plugin</a> now offers a <code>!task</code> command,\nwhich displays your current task, starting amount and, if applicable, task location.</p>\n<p><img src="/img/blog/1.5.9-Release/task-command.gif" alt="Slayer plugin !task command"/></p>\n<p>Plugin overlays now support adding right-click menus. Currently, you will only see a &quot;Configure&quot;\noption, but expect to see more relevant and useful options in the future.</p>\n<p><img src="/img/blog/1.5.9-Release/overlay-menu.png" alt="The woodcutting overlay with an overlay-specific menu option"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Users will now be prompted to confirm plugin configuration resets</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Clue-Scroll">Clue Scroll plugin</a> correctly shows\nthe second emote required for the Mount Karuulm emote clue</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/WASD-Camera">WASD Camera plugin</a> operates correctly\nwhen holding modifier keys</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Idle-Notifier">Idle Notifier plugin</a> now sends\nnotifications after making magic tablets</li>\n<li>The Attack skill color has been changed slightly to be easier to see against the\n<a href="https://github.com/runelite/runelite/wiki/XP-Globes">XP Globes</a> background</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Prayer">Prayer plugin</a> now recognizes prayer\nbonuses of the ancient staff, devout boots, and bonecrusher necklace</li>\n<li>New items will now populate more quickly to be found using the\n<a href="https://github.com/runelite/runelite/wiki/Grand-Exchange">Grand Exchange plugin</a> search</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/World-Hopper">World Hopper plugin</a> hop chat message\ncan now be disabled</li>\n<li>Anti-venom potions now display the proper time in the\n<a href="https://github.com/runelite/runelite/wiki/Timers">Timers plugin</a></li>\n</ul>\n<p>An issue with the world hopper and prayer order plugins post-update has been\nfixed. We would like to remind users that we receive _no_ special insight into\nupcoming updates and so we do not know what will change ahead of time. After an\nupdate, all or none of the client may be broken in unpredictable ways. Please\ndon&#39;t report issues to Jagex without checking it out on the vanilla client\nfirst.</p>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 16 contributors this release!</p>\n<pre><code>Adam (13):\n      idle notifier: add tablet making animation\n      item service: detect new items when price scraping\n      api: mark getCollisionMaps as nullable\n      Add overlay menu support\n      Add support for Configuration overlay menus\n      Add configure option to many overlays\n      examine plugin: split item/quantity lookup from item price lookup\n      examine plugin: drop examines for tradable items and large stacks\n      examine service: split into controller and service\n      examine service: use item descriptions from item service if available\n      session manager: lazily open websocket\n      loot tracker: move panel updating to EDT on config change\n      Add task chat command\n\nBrandon Popson (1):\n      Allow full Amulet of the Damned as clue requirement (#7423)\n\nCharlie Waters (1):\n      ConfigPanel: Confirm plugin configuration reset\n\nDannysPVM (1):\n      Cap fog depth to 100 in the GPU Plugin.\n\nErmal (2):\n      Added SPIN after CLAP to Mount Karuulm Emote Clue Closes: #7416\n      Removed an extra semicolon Found in IdleNotifierPlugin.java line 392 from latest release\n\nHydrox6 (1):\n      Make Game Notification use the Game message highlight colour\n\nJeremy Plsek (1):\n      world hopper: allow disabling chat hop message\n\nJoe Iaquinto (1):\n      Correct spelling of Skybox bounds exception\n\nJosiah (1):\n      Add ancient staff to prayer items list (#7513)\n\nMax Weber (5):\n      cache: Add FlatStorage\n      cache: Add equals and hashCode to all Definitions\n      config: Add ModifierlessKeybind\n      wasdcamera: Use modifierless keybinds\n      runelite-api, runescape-api: Rename Area to mapElement\n\nTomas Slusny (15):\n      Inverse collapse menu entry loop\n      Shutdown plugins on window close\n      Move close handling to windowClosed event\n      Move configManager.sendConfig to RuneLite#shutdown\n      Wrap DiscordEventHandlers in native lib try/catch\n      Do not discard 1 second requests in Xp tracker\n      Change xp tracker filter clean to 3 hours\n      Remove OverlayManager#addMenu/removeMenu\n      Remove overlayManager#overlayId\n      Move overlay menu entries to Overlay class\n      Add Text#fromCSV and Text#toCSV\n      Replace usage of Spliter/Joiner with toCSV/fromCSV\n      Revert &quot;Move close handling to windowClosed event&quot;\n      Null-check local location in trap overlay\n      Mark localToCanvas methods nullable\n\nermalsh (1):\n      Change RGB variable for Attack on XP Globes (more bright) (#7454)\n\ngregg1494 (2):\n      Correct agility configuration casing (#7393)\n      Fix anti-venom potion timer (#7453)\n\nkevinisninja (1):\n      prayer plugin: add devout boots and bonecrusher necklace to prayer items\n\nmaytonsw (1):\n      time tracker: correct Iasor farming produce typo\n\ntrimbe (1):\n      chat commands: rebuild chatbox input after using clear shortcuts\n</code></pre>'}}}]);
//# sourceMappingURL=73.24c87d12.chunk.js.map