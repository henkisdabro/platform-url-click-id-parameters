# Platform Click ID URL Parameter Collection

A living collection of url parameters from popular traffic platforms (organic and paid). Use as filters within website analytics tools, such as Google Analytics (UA & GA) and or from a tag management tool such as Google Tag Manager to clean up URL's and defragement page url/location/query reports.

## 🤷 Purpose of Click ID's

Social media (and advertising) platforms commonly decorate outbound links with click ID's; suffixed url parameters onto outbound URL's added within the platform. The parameters are used in conjunction with the platforms' marketing tag (pixel) which often is recommended to be placed on the brands' website. The tag commonly references the click ID and drops a first-party cookie in the users' browser with the click ID parameter stored in its value, which is later used for (ad) attribution purposes.

## 🤔 Problem

Website Analytics tools, such as Google Analytics 4, Adobe Analytics, Amplitude or similar by default stores the URL alongside each event, which in most above scenarios would include the click id parameters. In a typical site content report inside GA4, one usually wants to compare the number of e.g. `page_view` events and `conversions` (performance) between unique pages of their site, such as below, between the homepage `/` and the Product Showcase Page `/product-showcase`:

| Page Path + Query String                | Page Views    | Conversions |
| --------------------------------------- | ------------- | ----------- |
| `/`                                     | 10,478        | 345         |
| `/product-showcase`                     | 6,578         | 834         |

Because the brand has driven traffic to the website using popular ad platforms such as Facebook, each unique platform click (and ultimately landing page view) reports onto _individual rows_ due to unique click id's generated by the platform e.g. This results in fragmented homepage and product pages' reports; split into muliple lines with single visits, making overall page performance analysis difficult.

| Page Path + Query String                | Page Views    | Conversions |
| --------------------------------------- | ------------- | ----------- |
| `/`                                     | 1             | 0           |
| `/?fbclid=12345`                        | 1             | 0           |
| `/?fbclid=23456`                        | 1             | 1           |
| `/?fbclid=34567`                        | 1             | 0           |
| `/?fbclid=45678`                        | 1             | 0           |
| `/?fbclid=56789`                        | 1             | 0           |
| `.......etc`
| `/product-showcase?ttclid=123abc`       | 1             | 0           |
| `/product-showcase?ttclid=234bcd`       | 1             | 0           |
| `/product-showcase?ttclid=345cde`       | 1             | 1           |
| `/product-showcase?ttclid=456def`       | 1             | 0           |
| `/product-showcase?ttclid=567efg`       | 1             | 0           |
| `.......etc`

To see the consolidated page report requires additional work, such as using excel pivot tables, aggregation/consolidation and using advanced filters and regular expressions.

Example: a brand creates a post on Facebook with a headline, description and a landing page URL, meant to encourage and lead a user to the brand's website. The brand relies on GA4 on their site to collect user behaviour and struggle with the native `page location` or `page path + query string` dimension which is scattered in hundreds of unique rows, as every pageview generated from that post arrives on the site with a unique click ID in the URL.

## 💡 Solution

Using a clickid parameter list as the one in this repo, the brand can anticipate incoming traffic from any of these platforms (they might not always know from where traffic comes) and build a tool or configure URL manipulation on their backend (e.g. using GTM, Google Analytics, GA3, GA4) that alleviates the fragmentation problem, either by sending "clean" URL's to the analytics tools in the first page and/or using the list to manipulate or truncate incoming traffic if the tool supports it, which can then be used for reporting.

## 📃 Marketing & Analytics URL Query Parameters | _updated 11 Dec 2023_
---start---

| Query Parameter       | Description                                       |
| --------------------- | ------------------------------------------------- |
| `s_cid`               | Adobe                                             |
| `ef_id`               | Adobe                                             |
| `s_kwcid`             | Adobe                                             |
| `adobe_mc_sdid`       | Adobe Target (A4T)                                |
| `adobe_mc_ref`        | Adobe Target (A4T)                                |
| `ad_id`               | Adroll                                            |
| `awclid`              | Amazon                                            |
| `ao_noptimize`        | Autoptimize Plugin                                |
| `ck_subscriber_id`    | ConvertKit                                        |
| `cn_reloaded`         | Cookie Notice Plugin                              |
| `__s`                 | Drip                                              |
| `cid`                 | Generic & unknown platforms                       |
| `eid`                 | Generic & unknown platforms                       |
| `clickid`             | Generic & unknown platforms                       |
| `hsCtaTracking`       | HubSpot                                           |
| `__hssc`              | Hubspot                                           |
| `__hstc`              | Hubspot                                           |
| `__hsfp`              | Hubspot                                           |
| `_hsmi`               | Hubspot                                           |
| `_hsenc`              | Hubspot                                           |
| `igshid`              | Instagram                                         |
| `_ke`                 | Klaviyo (unconfirmed)                             |
| `_kx`                 | Klaviyo                                           |
| `li_fat_id`           | Linkedin                                          |
| `ct_params`           | Mailchimp                                         |
| `mc_cid`              | Mailchimp                                         |
| `mc_eid`              | Mailchimp                                         |
| `ml_subscriber`       | MailerLite                                        |
| `ml_subscriber_hash`  | MailerLite                                        |
| `mkt_tok`             | Marketo                                           |
| `fbclid`              | Meta (Facebook/Instagram/Messenger/Whatsapp)      |
| `cvid`                | Microsoft MSN/Bing                                |
| `oicd`                | Microsoft MSN/Bing                                |
| `campaign`            | Microsoft                                         |
| `msclkid`             | Microsoft                                         |
| `oly_anon_id`         | Olytics                                           |
| `oly_enc_id`          | Olytics                                           |
| `otc`                 | Olytics                                           |
| `omnisendContactID`   | Omnisend                                          |
| `_openstat`           | OpenStat                                          |
| `ICID`                | Other                                             |
| `subafid`             | Other                                             |
| `rb_clickid`          | Other                                             |
| `dicbo`               | Outbrain                                          |
| `epik`                | Pinterest                                         |
| `rdt_cid`             | Reddit                                            |
| `tblci`               | Taboola                                           |
| `auctid`              | Teads                                             |
| `ttclid`              | TikTok                                            |
| `twclid`              | Twitter                                           |
| `vero_conv`           | Vero                                              |
| `vero_id`             | Vero                                              |
| `WT.mc_id`            | Webtrends Marketing Campaign ID                   |
| `wickedid`            | Wicked Reports                                    |
| `vmcid`               | Yahoo DSP                                         |
| `afid`                | Yahoo Native Params                               |
| `soc_src`             | Yahoo                                             |
| `soc_trk`             | Yahoo                                             |
| `yclid`               | Yandex/Yahoo                                      |
| `_z1_agid`            | Zemanta                                           |
| `_z1_caid`            | Zemanta                                           |
| `_z1_msid`            | Zemanta                                           |
| `_z1_pub`             | Zemanta                                           |

---end---

### ⚠️ GA4-specific Proceed-with-caution URL Query Parameters | _updated 6 May 2023_

The following parameters are required by GA4 to identify the traffic source (for channel reports and Source dimensions) and cross-domain measurement. If they are removed from URL' it might cause unwanted behaviour. If you're not using GA4, your analytics tool might have built-in rules for the below parameters too, but needs to be audited and tested before implementing. As such, these parameters are not included in the automatically generated `parameter_array.js` or `parameter_list.csv` files in this repo.

| Query Parameter       | Description                                       |
| --------------------- | ------------------------------------------------- |
| `gclid`               | Google (non-iOS devices)                          |
| `gbraid`              | Google (iOS 14.5+ opted out devices) (web-to-app) |
| `wbraid`              | Google (iOS 14.5+ opted out devices) (app-to-web) |
| `gtm_debug`           | Google Tag Manager Preview Mode                   |
| `dclid`               | Google Display (Enhanced Attribution)             |
| `gclsrc`              | Google Search Ads 360                             |
| `srsltid`             | Google Shopping Free Listings Result ID           |
| `usqp`                | Google Testing ID                                 |
| `_ga`                 | Google Analytics                                  |
| `_gl`                 | Google Analytics cross-domain measurement linker parameters. Can be found in GA4 `page_location` reports as rogue/stray parameters on incoming website traffic from sites with incorrectly configured cross-domain settings. Consider stripping this parameter within e.g Google Tag Manager unless you are in fact using cross-domain tracking/measurement where this parameter would be required. |

## 🤖 Programmatic Access

Subsidiary files auto-generate upon commits to this repo's master branch, based off the main parameter table in this README file, which outputs into `parameter_list.csv` and `parameter_array.js` respectively. Based on usecase these always-recent files can be directly referenced from within tag templates or custom solutions via `jsdelivr` accordingly:

`https://cdn.jsdelivr.net/gh/henkisdabro/platform-url-click-id-parameters@main/parameter_list.csv`

`https://cdn.jsdelivr.net/gh/henkisdabro/platform-url-click-id-parameters@main/parameter_array.js`

## 🧑‍💼 Google Tag Manager Ideas

Google Tag Manager has a community-provided template gallery with templates that can be used in conjunction with this list. An excellent variable template is written by [@mbaersh](https://github.com/mbaersch). [URL Cleaner](https://github.com/mbaersch/url-cleaner) can be configured to correct for many of abovementioned issues and this list works very well with it.

## 🙏 Sourcing and Inspiration

[Brave Browser Known Tracker Parameters](https://www.cookiestatus.com/brave/#other)

[Chrome UTM Stripper Extension](https://github.com/jparise/chrome-utm-stripper)

[Cloudflare Automatic Platform Optimization product cache rule list](https://developers.cloudflare.com/automatic-platform-optimization/reference/query-parameters/)

## 🔂 Updates

`11/12/2023` | Add Adobe Target (A4T) parameters to main list

`06/05/2023` | Split out Google parameters from the main list and add caveat to README

`19/04/2023` | Add parameters from Cloudflare's cache rule list

`12/04/2023` | Release production version of github action to autogenerate csv and array files off an updated `README.md` file

`06/03/2023` | Consolidate parameters into a single list and start testing with github actions for auto-generation of files.

## 📩 Feedback and Assistance

If you have knowledge of other parameters, from other platforms or tools, feel free to raise a pull request.

## 🎯 Plans

- [ ] Build a GTM Custom Variable Template (Web and/or Server-side)for specific purposes.

- [x] Auto-build `JSON` or `CSV` via Github Actions for programmatic access
