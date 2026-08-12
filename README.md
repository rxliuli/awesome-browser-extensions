<!-- Generated from data/extensions.yml by scripts/build.mjs — do not edit by hand. -->

# Awesome Browser Extensions [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of trustworthy browser extensions, with cross-browser install links.

Extension stores are exhaustive; this list is not. Every entry here is well
known, actively maintained, and worth trusting with the permissions it asks
for — and when the obvious choice has changed (an acquisition, a Manifest V3
casualty, an abandoned original), the entry says so.

**How to read an entry:** the store links show where each extension is
actually available — Chrome · Firefox · Safari · Edge. A `Source` link means
the extension is open source; entries without one are closed source, noted in
the description.

Currently listing **20** extensions.

## Contents

- [Ad Blocking & Privacy](#ad-blocking--privacy)
- [Passwords & Security](#passwords--security)
- [Customization](#customization)
- [Productivity](#productivity)
- [Media](#media)
- [Developer Tools](#developer-tools)

## Ad Blocking & Privacy

- [uBlock Origin Lite](https://github.com/uBlockOrigin/uBOL-home) - Permission-less, MV3-native content blocker from the author of uBlock Origin. The recommended way to block ads on Chrome and Edge since Manifest V3 retired the full version there.<br>[Chrome](https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh) · [Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin-lite/cimighlppcgcoapaliogpjjdehbnofhn) · [Source](https://github.com/uBlockOrigin/uBOL-home)
- [uBlock Origin](https://github.com/gorhill/uBlock) - The gold-standard wide-spectrum content blocker. No longer works on Chrome after the Manifest V2 shutdown — use uBlock Origin Lite there; on Firefox it still runs at full power.<br>[Firefox](https://addons.mozilla.org/firefox/addon/ublock-origin/) · [Source](https://github.com/gorhill/uBlock)
- [Privacy Badger](https://privacybadger.org/) - Tracker blocker from the EFF that learns to block invisible trackers as you browse. A trustworthy complement to an ad blocker rather than a replacement for one.<br>[Chrome](https://chromewebstore.google.com/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp) · [Firefox](https://addons.mozilla.org/firefox/addon/privacy-badger17/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/privacy-badger/mkejgcgkdlddbggjhhflekkondicpnop) · [Source](https://github.com/EFForg/privacybadger)
- [ClearURLs](https://github.com/ClearURLs/Addon) - Strips tracking parameters (utm_*, fbclid and friends) from URLs automatically before you share or follow them.<br>[Chrome](https://chromewebstore.google.com/detail/clearurls/lckanjgmijmafbedllaakclkaicjfmnk) · [Firefox](https://addons.mozilla.org/firefox/addon/clearurls/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/clearurls/mdkdmaickkfdekbjdoojfalpbkgaddei) · [Source](https://github.com/ClearURLs/Addon)

## Passwords & Security

- [Bitwarden](https://bitwarden.com/) - Open-source password manager with a solid free tier and clients on every platform. The default recommendation since the LastPass breaches made "closed source + your vault" a hard sell.<br>[Chrome](https://chromewebstore.google.com/detail/bitwarden-password-manage/nngceckbapebfimnlniiiahkandclblb) · [Firefox](https://addons.mozilla.org/firefox/addon/bitwarden-password-manager/) · [Safari](https://apps.apple.com/app/bitwarden/id1352778147) · [Edge](https://microsoftedge.microsoft.com/addons/detail/bitwarden-password-manage/jbkfoedolllekgbhcbcoahefnbanhhlh) · [Source](https://github.com/bitwarden/clients)
- [KeePassXC-Browser](https://keepassxc.org/) - Companion extension for the KeePassXC desktop app. The right choice if you want your password database as a local file instead of in anyone's cloud.<br>[Chrome](https://chromewebstore.google.com/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk) · [Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/keepassxcbrowser/pdffhmdngciaglkoonimfcmckehcpafo) · [Source](https://github.com/keepassxreboot/keepassxc-browser)

## Customization

- [Dark Reader](https://darkreader.org/) - Generates a dark theme for every website, with per-site brightness, contrast and sepia tuning. Free on Chrome, Firefox and Edge; a paid app on Safari.<br>[Chrome](https://chromewebstore.google.com/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh) · [Firefox](https://addons.mozilla.org/firefox/addon/darkreader/) · [Safari](https://apps.apple.com/app/dark-reader-for-safari/id1438243180) · [Edge](https://microsoftedge.microsoft.com/addons/detail/dark-reader/ifoakfbpdcdoeenechcleahebpibofpc) · [Source](https://github.com/darkreader/darkreader)
- [Stylus](https://github.com/openstyles/stylus) - Apply custom CSS to any website, with an editor and access to the UserStyles community. The trustworthy successor to Stylish, which was caught collecting browsing history after an acquisition.<br>[Chrome](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) · [Firefox](https://addons.mozilla.org/firefox/addon/styl-us/) · [Source](https://github.com/openstyles/stylus)
- [Violentmonkey](https://violentmonkey.github.io/) - Userscript manager for running community scripts from Greasy Fork and friends. Fully open source, which is why it edges out the more famous but closed-source Tampermonkey as the default pick.<br>[Chrome](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) · [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao) · [Source](https://github.com/violentmonkey/violentmonkey)
- [Tampermonkey](https://www.tampermonkey.net/) - The most widely used userscript manager, with the broadest browser coverage including Safari. Mature and reliable, but closed source — prefer Violentmonkey if that matters to you.<br>[Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) · [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/) · [Safari](https://apps.apple.com/app/tampermonkey/id1482490089) · [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

## Productivity

- [Immersive Translate](https://immersivetranslate.com/) - Bilingual side-by-side translation for pages, PDFs, subtitles and EPUBs, with pluggable translation engines. Closed source; the free tier covers everyday use.<br>[Chrome](https://chromewebstore.google.com/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh) · [Firefox](https://addons.mozilla.org/firefox/addon/immersive-translate/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/immersive-translate/amkbmndfnliijdhojkpoglbnaaahippg)
- [SingleFile](https://github.com/gildas-lormeau/SingleFile) - Saves a complete web page — styles, images, fonts — into a single self-contained HTML file. The best answer to "this page might not exist next year."<br>[Chrome](https://chromewebstore.google.com/detail/singlefile/mpiodijhokgodhhofbcjdecpffjipkle) · [Firefox](https://addons.mozilla.org/firefox/addon/single-file/) · [Safari](https://apps.apple.com/app/singlefile-for-safari/id6444322545) · [Edge](https://microsoftedge.microsoft.com/addons/detail/singlefile/efnbkdcfmcmnhlkaijjjmhjjgladedno) · [Source](https://github.com/gildas-lormeau/SingleFile)
- [OneTab](https://www.one-tab.com/) - Collapses all open tabs into a restorable list with one click. Closed source and barely changed in a decade, but it does one thing and still does it well.<br>[Chrome](https://chromewebstore.google.com/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall) · [Firefox](https://addons.mozilla.org/firefox/addon/onetab/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/onetab/hoimpamkkoehapgenciaoajfkfkpgfop)

## Media

- [SponsorBlock](https://sponsor.ajay.app/) - Skips sponsor segments, intros and self-promotion in YouTube videos, powered by crowdsourced timestamps.<br>[Chrome](https://chromewebstore.google.com/detail/sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone) · [Firefox](https://addons.mozilla.org/firefox/addon/sponsorblock/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/sponsorblock-for-youtube/hkbdddpiemdeibjoknnofjnhjfkdbpbc) · [Source](https://github.com/ajayyy/SponsorBlock)
- [Return YouTube Dislike](https://returnyoutubedislike.com/) - Restores the dislike count on YouTube videos using archived data and crowdsourced extension votes.<br>[Chrome](https://chromewebstore.google.com/detail/return-youtube-dislike/gebbhagfogifgggkldgodflihgfeippi) · [Firefox](https://addons.mozilla.org/firefox/addon/return-youtube-dislikes/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/return-youtube-dislike/kbfmmghcopgpdmmoaenobopkeekimeoc) · [Source](https://github.com/Anarios/return-youtube-dislike)

## Developer Tools

- [React Developer Tools](https://react.dev/learn/react-developer-tools) - Official React DevTools panel for inspecting component trees, props, state and render performance.<br>[Chrome](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) · [Firefox](https://addons.mozilla.org/firefox/addon/react-devtools/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil) · [Source](https://github.com/facebook/react/tree/main/packages/react-devtools-extensions)
- [Vue.js devtools](https://devtools.vuejs.org/) - Official Vue DevTools panel for inspecting components, Pinia stores, router state and timeline events.<br>[Chrome](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) · [Firefox](https://addons.mozilla.org/firefox/addon/vue-js-devtools/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/vuejs-devtools/olofadcdnkkjdfgjcmjaadnlehnnihnl) · [Source](https://github.com/vuejs/devtools)
- [JSON Formatter](https://github.com/callumlocke/json-formatter) - Pretty-prints raw JSON responses with syntax highlighting and collapsible trees. Tiny, stable and permission-light.<br>[Chrome](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) · [Source](https://github.com/callumlocke/json-formatter)
- [Refined GitHub](https://github.com/refined-github/refined-github) - Dozens of small quality-of-life improvements to the GitHub UI, from whitespace toggles to smarter default views. Absorbed most of what the old single-purpose GitHub extensions used to do.<br>[Chrome](https://chromewebstore.google.com/detail/refined-github/hlepfoohegkhhmjieoechaddaejaokhf) · [Firefox](https://addons.mozilla.org/firefox/addon/refined-github-/) · [Safari](https://apps.apple.com/app/refined-github/id1519867270) · [Source](https://github.com/refined-github/refined-github)
- [ZeroOmega](https://github.com/zero-peak/ZeroOmega) - Per-rule proxy switching with pattern lists. Actively maintained fork that carries on Proxy SwitchyOmega, whose original author stopped updating it years ago.<br>[Chrome](https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped) · [Firefox](https://addons.mozilla.org/firefox/addon/zeroomega/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/proxy-switchyomega-3-zer/dmaldhchmoafliphkijbfhaomcgglmgd) · [Source](https://github.com/zero-peak/ZeroOmega)

## Contributing

Entries live in [`data/extensions.yml`](data/extensions.yml); the README is
generated. See [CONTRIBUTING.md](CONTRIBUTING.md) for the inclusion criteria
and how to add an extension.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the authors have waived all copyright and
related rights to this work.
