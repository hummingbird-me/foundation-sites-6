---
title: Tooltips
description: Tooltips? More like <em>Cooltips</em>. But really though, tooltips are nifty for displaying extended information for a term or action on a page.
sass: scss/components/_tooltip.scss
js: js/foundation.tooltip.js
---


<div class="alert callout">
  <h5>Known Issues</h5>
  <ul>
    <li>Inconsistent hover effects on Firefox.</li>
    <li>Anchor `<span>` sometimes repositions incorrectly to far left of screen on tooltip open.</li>
    <li>Broken on Android 4.4 browser and iOS devices w/ Safari.</li>
  </ul>
</div>


## Basic Tooltip
By default, a tooltip appears below the the definition on hover.

```html_example
<p>
The <span data-tooltip aria-haspopup="true" class="has-tip" data-disable-hover='false' tabindex=1 title="Fancy word for a beetle.">scarabaeus</span> hung quite clear of any branches, and, if allowed to fall, would have fallen at our feet. Legrand immediately took the scythe, and cleared with it a circular space, three or four yards in diameter, just beneath the insect, and, having accomplished this, ordered Jupiter to let go the string and come down from the tree.
</p>
```

---

## Tooltip Top
To get a tip-top top tooltip (lol), just add the class <code>top</code> the <code>span</code> tag.

```html_example
<p>
...clearing away the brambles with the
<span data-tooltip aria-haspopup="true" class="has-tip top" data-disable-hover='false' tabindex=2 title="A tool used for cutting crops.">scythe.</span>
At the spot thus attained a second peg was driven, and about this, as a centre, a rude circle, about four feet in diameter, described. Taking now a spade himself, and giving one to Jupiter and one to me, Legrand begged us to set about one to digging as quickly as possible.
</p>
```

---

## Tooltip Right and Left
You can also position the tooltips to the right and left of the word by adding the classes <code>right</code> and <code>left</code> to <code>span</code> tag.

```html_example
<p>
To speak the truth, I had no especial relish for such amusement at any time, and, at that particular moment, would most willingly have declined it; for the night was coming on, and I felt much fatigued with the exercise already taken; but I saw no mode of escape, and was fearful of disturbing my poor friend's equanimity by a refusal. Could I have depended, indeed, upon Jupiter's aid, I would have had no hesitation in attempting to get the
<span data-tooltip aria-haspopup="true" class="has-tip right" data-disable-hover='false' tabindex=3 title="Someone not using Foundation.">lunatic</span>
home by force; but I was too well assured of the old negro's disposition, to hope that he would assist me, under any circumstances, in a personal contest with his master. I made no doubt that the latter had been infected with some of the innumerable Southern superstitions about money buried, and that his phantasy had received confirmation by the finding of the scarabaeus, or, perhaps, by Jupiter's obstinacy in maintaining it to be "a bug of real gold." A mind disposed to lunacy would readily be led away by such suggestions -especially if chiming in with favorite preconceived ideas -and then I called to mind the poor fellow's speech about the beetle's being "the
<span data-tooltip aria-haspopup="true" class="has-tip left" data-disable-hover='false' tabindex=4 title="Sometimes referred to as a homepage.">index</span>
of his fortune." Upon the whole, I was sadly vexed and puzzled, but, at length, I concluded to make a virtue of necessity -to dig with a good will, and thus the sooner to convince the visionary, by ocular demonstration, of the fallacy of the opinions he entertained. </p>
```
