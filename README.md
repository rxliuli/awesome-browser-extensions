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

Currently listing **16** extensions.

## Contents

- [Ad Blocking & Privacy](#ad-blocking--privacy)
- [Passwords & Security](#passwords--security)
- [Customization](#customization)
- [Productivity](#productivity)
- [Media](#media)
- [Developer Tools](#developer-tools)
- [Removed](#removed)

## Ad Blocking & Privacy

- [uBlock Origin Lite](https://github.com/uBlockOrigin/uBOL-home) - Permission-less, MV3-native content blocker from the author of uBlock Origin. The recommended way to block ads on Chrome and Edge since Manifest V3 retired the full version there.<br>[Chrome](https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh) · [Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin-lite/cimighlppcgcoapaliogpjjdehbnofhn) · [Source](https://github.com/uBlockOrigin/uBOL-home)
- [uBlock Origin](https://github.com/gorhill/uBlock) - The gold-standard wide-spectrum content blocker. No longer works on Chrome after the Manifest V2 shutdown — use uBlock Origin Lite there; on Firefox it still runs at full power.<br>[Firefox](https://addons.mozilla.org/firefox/addon/ublock-origin/) · [Source](https://github.com/gorhill/uBlock)
- [Privacy Badger](https://privacybadger.org/) - Tracker blocker from the EFF that learns to block invisible trackers as you browse. A trustworthy complement to an ad blocker rather than a replacement for one.<br>[Chrome](https://chromewebstore.google.com/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp) · [Firefox](https://addons.mozilla.org/firefox/addon/privacy-badger17/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/privacy-badger/mkejgcgkdlddbggjhhflekkondicpnop) · [Source](https://github.com/EFForg/privacybadger)
- [uBlacklist](https://ublacklist.github.io/) - Blocks the sites you choose from ever appearing in Google search results, with subscribable community rulesets. Increasingly essential as SEO spam and machine-generated content flood the results page.<br>[Chrome](https://chromewebstore.google.com/detail/ublacklist/pncfbmialoiaghdehhbnbhkkgmjanfhe) · [Firefox](https://addons.mozilla.org/firefox/addon/ublacklist/) · [Safari](https://apps.apple.com/app/ublacklist-for-safari/id1547912640) · [Source](https://github.com/iorate/ublacklist)

## Passwords & Security

- [Bitwarden](https://bitwarden.com/) - Open-source password manager with a solid free tier and clients on every platform. The default recommendation since the LastPass breaches made "closed source + your vault" a hard sell.<br>[Chrome](https://chromewebstore.google.com/detail/bitwarden-password-manage/nngceckbapebfimnlniiiahkandclblb) · [Firefox](https://addons.mozilla.org/firefox/addon/bitwarden-password-manager/) · [Safari](https://apps.apple.com/app/bitwarden/id1352778147) · [Edge](https://microsoftedge.microsoft.com/addons/detail/bitwarden-password-manage/jbkfoedolllekgbhcbcoahefnbanhhlh) · [Source](https://github.com/bitwarden/clients)
- [KeePassXC-Browser](https://keepassxc.org/) - Companion extension for the KeePassXC desktop app. The right choice if you want your password database as a local file instead of in anyone's cloud.<br>[Chrome](https://chromewebstore.google.com/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk) · [Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/keepassxcbrowser/pdffhmdngciaglkoonimfcmckehcpafo) · [Source](https://github.com/keepassxreboot/keepassxc-browser)
- [Authenticator](https://authenticator.cc/) - Generates two-factor authentication codes in the browser; the de facto standard open-source TOTP extension. Convenient, but know the trade-off — keeping codes in the same browser as your passwords weakens the isolation a second factor is meant to provide.<br>[Chrome](https://chromewebstore.google.com/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai) · [Firefox](https://addons.mozilla.org/firefox/addon/auth-helper/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/authenticator-2fa-client/ocglkepbibnalbgmbachknglpdipeoio) · [Source](https://github.com/Authenticator-Extension/Authenticator)

## Customization

- [Dark Reader](https://darkreader.org/) - Generates a dark theme for every website, with per-site brightness, contrast and sepia tuning. Free on Chrome, Firefox and Edge; a paid app on Safari.<br>[Chrome](https://chromewebstore.google.com/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh) · [Firefox](https://addons.mozilla.org/firefox/addon/darkreader/) · [Safari](https://apps.apple.com/app/dark-reader-for-safari/id1438243180) · [Edge](https://microsoftedge.microsoft.com/addons/detail/dark-reader/ifoakfbpdcdoeenechcleahebpibofpc) · [Source](https://github.com/darkreader/darkreader)
- [Stylus](https://github.com/openstyles/stylus) - Apply custom CSS to any website, with an editor and access to the UserStyles community. The trustworthy successor to Stylish, which was caught collecting browsing history after an acquisition.<br>[Chrome](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) · [Firefox](https://addons.mozilla.org/firefox/addon/styl-us/) · [Source](https://github.com/openstyles/stylus)
- [Violentmonkey](https://violentmonkey.github.io/) - Userscript manager for running community scripts from Greasy Fork and friends. Fully open source, which is why it edges out the more famous but closed-source Tampermonkey as the default pick.<br>[Chrome](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) · [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao) · [Source](https://github.com/violentmonkey/violentmonkey)
- [Tampermonkey](https://www.tampermonkey.net/) - The most widely used userscript manager, with the broadest browser coverage including Safari. Mature and reliable, but closed source — prefer Violentmonkey if that matters to you.<br>[Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) · [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/) · [Safari](https://apps.apple.com/app/tampermonkey/id1482490089) · [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

## Productivity

- [SingleFile](https://github.com/gildas-lormeau/SingleFile) - Saves a complete web page — styles, images, fonts — into a single self-contained HTML file. The best answer to "this page might not exist next year."<br>[Chrome](https://chromewebstore.google.com/detail/singlefile/mpiodijhokgodhhofbcjdecpffjipkle) · [Firefox](https://addons.mozilla.org/firefox/addon/single-file/) · [Safari](https://apps.apple.com/app/singlefile-for-safari/id6444322545) · [Edge](https://microsoftedge.microsoft.com/addons/detail/singlefile/efnbkdcfmcmnhlkaijjjmhjjgladedno) · [Source](https://github.com/gildas-lormeau/SingleFile)

## Media

- [SponsorBlock](https://sponsor.ajay.app/) - Skips sponsor segments, intros and self-promotion in YouTube videos, powered by crowdsourced timestamps.<br>[Chrome](https://chromewebstore.google.com/detail/sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone) · [Firefox](https://addons.mozilla.org/firefox/addon/sponsorblock/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/sponsorblock-for-youtube/hkbdddpiemdeibjoknnofjnhjfkdbpbc) · [Source](https://github.com/ajayyy/SponsorBlock)

## Developer Tools

- [React Developer Tools](https://react.dev/learn/react-developer-tools) - Official React DevTools panel for inspecting component trees, props, state and render performance.<br>[Chrome](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) · [Firefox](https://addons.mozilla.org/firefox/addon/react-devtools/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil) · [Source](https://github.com/facebook/react/tree/main/packages/react-devtools-extensions)
- [Vue.js devtools](https://devtools.vuejs.org/) - Official Vue DevTools panel for inspecting components, Pinia stores, router state and timeline events.<br>[Chrome](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) · [Firefox](https://addons.mozilla.org/firefox/addon/vue-js-devtools/) · [Edge](https://microsoftedge.microsoft.com/addons/detail/vuejs-devtools/olofadcdnkkjdfgjcmjaadnlehnnihnl) · [Source](https://github.com/vuejs/devtools)
- [Refined GitHub](https://github.com/refined-github/refined-github) - Dozens of small quality-of-life improvements to the GitHub UI, from whitespace toggles to smarter default views. Absorbed most of what the old single-purpose GitHub extensions used to do.<br>[Chrome](https://chromewebstore.google.com/detail/refined-github/hlepfoohegkhhmjieoechaddaejaokhf) · [Firefox](https://addons.mozilla.org/firefox/addon/refined-github-/) · [Safari](https://apps.apple.com/app/refined-github/id1519867270) · [Source](https://github.com/refined-github/refined-github)

## Removed

Extensions that used to be on this list, and why they left. Curation means
re-checking, not just adding — an entry that stops clearing the bar moves
here with its reason on record.

- **JSON Formatter** *(removed 2026-08)* - The author is moving to a closed-source commercial successor and the open-source extension is no longer maintained.
- **Immersive Translate** *(removed 2026-08)* - Closed source with a pattern of user-hostile product decisions — most recently shipping a release that dropped bring-your-own-key API support, reversed within hours only after user backlash.
- **ClearURLs** *(removed 2026-08)* - Largely superseded — uBlock Origin's removeparam filters and browsers' built-in tracking-parameter stripping now cover most of what it did, and its own maintenance has been intermittent.
- **OneTab** *(removed 2026-08)* - Closed source and essentially unchanged for a decade; still works, but no longer clears the bar for an active recommendation.
- **Return YouTube Dislike** *(removed 2026-08)* - The displayed counts are estimates extrapolated from aging archived data and votes from extension users, and their accuracy keeps degrading.
- **ZeroOmega** *(removed 2026-08)* - Browser-level proxy switching has largely been superseded by system-level proxy tools; still solid in its niche, but no longer broadly recommendable.

## Contributing

Entries live in [`data/extensions.yml`](data/extensions.yml); the README is
generated. See [CONTRIBUTING.md](CONTRIBUTING.md) for the inclusion criteria
and how to add an extension.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the authors have waived all copyright and
related rights to this work.
