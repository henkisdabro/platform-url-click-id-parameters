# Platform Click ID URL Parameter Collection

A living collection of url parameters from various traffic platforms (organic and paid). 

## Purpose of Click ID's

Social media (and advertising) platforms usually incorporate click ID's on outbound links, which in effect are url parameters suffixed onto any destination URL added from within the platform. The parameters are used in conjunction with the platforms' marketing tag (pixel) which they recommend to place on the brands' website. The tag commonly references the click ID and drops a first-party cookie in the users' browser with the value of the click ID parameter, which it later uses for attribution purposes.

Example: a brand creates a post on Facebook with a headline, description and a landing page URL, meant to encourage and lead a user to the brand's website. The brand relies on GA4 on their site to collect user behaviour and struggle with the native `page_location` dimension which is littered with hundreds of unique rows, as every pageview generated from that post arrives on the site with a unique click ID in the URL. Using a list similar to this, the brand can anticipate incoming traffic from any of these platforms (they might not always know from where traffic comes) and build a tool or configure URL manipulation on their backend (e.g. GTM, Google Analytics, GA3, GA4) that helps with this, such as sending "cleaned" URL that can be used for reporting.

## Active Lists

### Ad/Analytics Platform URL Query Parameters (Click ID's)

_updated 12 July 2022_

| Query Parameter       | Description                                       |
| --------------------- | -------------                                     |
| `s_cid`               | Adobe                                             |
| `gclid`               | Google (non-iOS devices)                          |
| `gbraid`              | Google (iOS 14.5+ opted out devices) (web-to-app) |
| `wbraid`              | Google (iOS 14.5+ opted out devices) (app-to-web) |
| `dclid`               | Google Display (Enhanced Attribution)             |
| `gclsrc`              | Google Search Ads 360                             |
| `igshid`              | Instagram                                         |
| `li_fat_id`           | Linkedin                                          |
| `fbclid`              | Meta (Facebook/Instagram/Messenger/Whatsapp)      |
| `cvid`                | Microsoft MSN/Bing                                |
| `oicd`                | Microsoft MSN/Bing                                |
| `msclkid`             | Microsoft                                         |
| `mc_cid`              | Mailchimp                                         |
| `mc_eid`              | Mailchimp                                         |
| `ml_subscriber`       | MailerLite                                        |
| `ml_subscriber_hash`  | MailerLite                                        |
| `mkt_tok`             | Marketo                                           |
| `oly_anon_id`         | Olytics                                           |
| `oly_enc_id`          | Olytics                                           |
| `otc`                 | Olytics                                           |
| `_openstat`           | OpenStat                                          |
| `dicbo`               | Outbrain                                          |
| `rdt_cid`             | Reddit                                            |
| `s_cid`               | Adobe                                             |
| `tblci`               | Taboola                                           |
| `auctid`              | Teads                                             |
| `ttclid`              | TikTok                                            |
| `twclid`              | Twitter                                           |
| `vero_conv`           | Vero                                              |
| `vero_id`             | Vero                                              |
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

### Miscellaneous URL Query Parameters

_updated 12 July 2022_

| Query Parameter       | Description                                       |
| --------------------- | -------------                                     |
| `__s`                 | Drip                                              |
| `hsCtaTracking`       | HubSpot                                           |
|   `__hssc`            | Hubspot                                           |
|  `__hstc`             | Hubspot                                           |
|  `__hsfp`             | Hubspot                                           | 
|  `_hsmi`              | Hubspot                                           |
|  `_hsenc`             | Hubspot                                           |
|  `ICID`               | Other                                             |
| `campaign`            | Microsoft                                         |
| `subafid`             | Other                                             |
| `rb_clickid`          | Other                                             |

## Sourcing and Inspiration

[Brave Browser Known Tracker Parameters](https://www.cookiestatus.com/brave/#other)

[Chrome UTM Stripper Extension](https://github.com/jparise/chrome-utm-stripper)

## Feedback and Assistance

If you have knowledge of other parameters, from other platforms or tools, feel free to send a pull request.

## Plans
- Build `JSON` or `CSV` to be used programmatically; being able to pull updated lists via a mirrored CDN resource `cdn.jsdelivr.net/gh/cremedigital/platform-url-click-id-parameters@main/filename.json`) into your tool (such as a GTM custom template).
- Build of a GTM Custom Variable Template (Web and/or Server-side)for specific purposes. Ideas are welcome.
