(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{346:function(e,n){e.exports={title:"1.5.27 Release",description:"Items Kept on Death plugin, World Map Quest Completion Icons, bug fixes",author:"Jordan",__content:'<p><a href="https://www.reddit.com/r/2007scape/comments/c194r3/suggestion_my_rework_of_the_broken_keptondeath/">You&#39;ve asked for\nit</a>,\nand we&#39;re here to deliver! We have added an\n<a href="https://github.com/runelite/runelite/wiki/Items-Kept-on-Death">Items Kept on Death plugin</a> which\nmore accurately displays the items you will lose upon dying, and adds toggle buttons which simulate\ncertain statuses which would affect that, such as being skulled or having the Protect Item prayer\nactive. Thanks to <a href="https://github.com/TheStonedTurtle">@TheStonedTurtle&#39;s</a> for the hard work that\nwent into making this possible.</p>\n<p><strong>Please note</strong> that while we have tested this with as many situations as we had access to, our\nknowledge and understanding of the death mechanics may not be perfectly in line with what will occur\ningame. If you discover a situation where this interface is inaccurate, <a href="https://github.com/runelite/runelite/issues/new?template=Bug_report.md">please report such bugs on\nour issue tracker.</a> For this\nreason, <em>this plugin is disabled by default</em>. Make sure to look for it and turn it on if you&#39;d like\nto try it!</p>\n<p><img src="/img/blog/1.5.27-Release/items-kept-on-death-plugin.gif" alt="Items Kept on Death interface demonstration"/></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/World-Map">World Map plugin</a> has been updated to\ndisplay quest completion states. Thanks to <a href="https://github.com/connorjclark">@connorjclark</a> for\nadding this feature.</p>\n<p><img src="/img/blog/1.5.27-Release/world-map-quest-completion-status.png" alt="World Map plugin showing question completion status"/></p>\n<p>In addition to the new features mentioned above, a small number of notable bugs have been fixed.</p>\n<ul>\n<li><a href="https://github.com/runelite/runelite/wiki/Object-Markers">Object markers</a> for objects larger than\none tile will no longer become duplicated. This means you should no longer see a black overlay on\nsuch objects, and this will no longer impact your FPS ingame.</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Key-Remapping">Key Remapping plugin</a> will no longer\nchange your tabs when an NPC dialog is open, allowing you to properly input chat options.</li>\n<li>We have fixed the\n<a href="https://github.com/runelite/runelite/wiki/Interface-Styles">Interface Styles plugin&#39;s</a> HD\nhealthbars.</li>\n</ul>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Chat-Notifications">Chat Notifications plugin</a> now\ncorrectly matches <code>&lt;</code> and <code>&gt;</code></li>\n<li><a href="https://github.com/runelite/runelite/wiki/Emojis">Emojis added to a message</a> will no longer reset\nthe message&#39;s <a href="https://github.com/runelite/runelite/wiki/Chat-Color">chat color</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Mining">Mining plugin</a> now recognizes ash piles,\nhas some missing and inaccurate ore timers corrected, and draws its progress pie at the proper\nheight for motherlode mine and amethyst veins. In addition, it displays its progress pie in a\ndifferent color for motherlode mine veins during the random timer of their respawn.</li>\n<li>Clue scrolls affected by the Hosidius rework have had their locations updated</li>\n<li>A coordinate clue scroll located in Weiss has been added to the\n<a href="https://github.com/runelite/runelite/wiki/Clue-Scroll">Clue Scroll plugin</a></li>\n<li>The skill challenge clue scroll requiring killing a spiritual mage is now properly recognized</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Clue-Scroll">Clue Scroll plugin</a> will now recognize\nmore Falo the Bard clue scrolls</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Item-Stats">Item Stats plugin</a> now has an option to\nremove the &quot;Weight&quot; stat from the stats tooltip</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Item-Identification">Item Identification plugin</a>\nwill now overlay items shown in the seed box, looting bag, and in Miscellania&#39;s collection screen</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Timers">Timers plugin</a> will properly add a\nteleblock timer now, since the ingame message has changed</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Discord">Discord plugin</a> will show your ingame\nstatus as &quot;Training: Fishing&quot; instead of Strength or Agility when performing barbarian fly fishing</li>\n<li>New flash notification options have been added to\n<a href="https://github.com/runelite/runelite/wiki/RuneLite">RuneLite&#39;s global configuration</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Agility">Agility plugin</a> now recognizes a\npreviously-missing Falador rooftop agility course obstacle</li>\n<li>You can now configure the drag delay of the <a href="https://github.com/runelite/runelite/wiki/Inventory-Grid">Inventory Grid\nplugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper">Menu Entry Swapper plugin</a> will\nnow swap the &quot;Shop&quot; menu entry of the Witchhaven shop when the &quot;Trade&quot; option is enabled</li>\n<li>A bug in the <a href="https://github.com/runelite/runelite/wiki/Item-Prices">Item Prices plugin</a>\npreventing high alchemy profits from being displayed unless the item&#39;s high alchemy value was also\ndisplayed has been fixed</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 19 contributors this release!</p>\n<pre><code>Adam (7):\n      mixins: fix duplicate spawn events for large gameobjects\n      key remapping: don&#39;t remap fkeys when options dialog is open\n      key remapping: remove some unused widget and keylistener checks\n      key remapping: fix clearing input when plugin is turned on\n      scripts: correctly pop unused input string when blocking chat input\n      chat notifier: fix matching &lt; and &gt; in chat messages\n      emoji plugin: fix stripping chat recolor tags\n\nAdelaidian (1):\n      mining plugin: add ash piles\n\nAundron (1):\n      clue plugin: update Hosidius allotment clue location for rework\n\nConnor Clark (1):\n      world map plugin: show quest completion state\n\nDava (1):\n      items stats: add option to show weight\n\nHydrox6 (6):\n      Add ItemIdentification to Seed Box, Looting Bag, and Miscellania collection screen (#8999)\n      mining plugin: add missing silver id\n      timers: fix teleblock message\n      api: implement resetHealthBarCaches and getHealthBarFrontSpriteId\n      api: remove unneeded Health Bar Override code\n      interface styles: update HD Health bar to work with new sprites\n\nJacky (1):\n      Add additional info to waterbirth coordinate clue\n\nJacky Liang (2):\n      clue plugin: add Weiss coordinate clue description\n      clue plugin: improve Champions Guild clue hint\n\nJarred Vardy (1):\n      Set priority &#39;1&#39; for TRAINING_FISHING DiscordGameEvent (#9061)\n\nJordan Atwood (2):\n      cluescrolls: Fix Hosidius mess hall clue locations\n      HotColdLocation: Center northeastern Kharazi jungle location\n\nMax Weber (2):\n      runelite-client: centralize item sprite dimensions\n      runelite-client: Centralize the high alchemy multiplier\n\nSander de Groot (1):\n      Fix typo in spiritual mage master cryptic clue (#9105)\n\nTheStonedTurtle (2):\n      Add scroll price to Magic shortbow (i) and Row (i)\n      runelite-client: add items kept on death plugin\n\nTwiglet1022 (7):\n      mining plugin: draw overlay at correct height for mlm and amethyst\n      mining plugin: correct coal timer, missing copper rock and other fixes\n      clues: correct text of falo the bard warrior guild token clue\n      mining plugin: remove progress pie from mlm veins that respawn early\n      mining plugin: recolour pie in MLM during random segment of timer\n      clues: correct text of falo the bard obby maul clue\n      notifier: add customisation to flash notification\n\nUnknown (1):\n      Added missing falador rooftop course agility obstacle\n\nWilliam Collishaw (7):\n      Fix typo in &#39;dumpJson&#39; function name\n      Fix typo in &#39;sessionCheck&#39; function name\n      Fix typo in &#39;getProperties&#39; function name\n      Fix &#39;Jewellery&#39; typo in PohConfig show jewellery box description\n      Optimize if statements in the client module (#8998)\n      Fix &#39;ABERRANT_SPECTRE&#39; typo in SlayerUnlock and CannonSpot enums\n      Fix &#39;GROTESQUE_GUARDIAN&#39; typo in SlayerUnlock enum\n\nWilliam Maga (1):\n      inventory grid: add config for drag delay\n\ncjamcl (1):\n      MenuEntrySwapper: include &quot;shop&quot; for trade option\n\ngregg1494 (2):\n      mining plugin: add sandstone and granite\n      itemprices: fix showing high alch profit with show ha value disabled\n</code></pre>'}}}]);
//# sourceMappingURL=91.a74c0f68.chunk.js.map