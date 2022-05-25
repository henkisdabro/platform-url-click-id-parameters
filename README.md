# Platform Click ID URL Parameter Collection

A living collection of url parameters from various traffic platforms (organic and paid). 

## Purpose of click ID's

Advertising and social media platforms have all incorporated the use of click ID's, which in effect are url parameters decorated (suffixed) onto any destination URL added inside the platform. These are mostly used in conjunction with the platforms' marketing tag (pixel) which is recommended to be placed on the brands' website. The tag commonly references the click id in the URL, and drops a first-party cookie in the users' browser, to be used later on for conversion attribution back on the platform itself.

Example: a brand creates an image post with a headline, description and a landing page URL, which they post on Facebook or Instgram, leading the user to the brand's homepage. On the brand's site, they run GA4 to collect user behaviour and struggle with the native `page_location` parameter that becomes unique for evey new click from that post. Using a list similar to this, you can anticipate any incoming traffic from these platforms and build a tools or config that helps with this, such as sending a "cleaned" URL that can be used for reporting.

## Use Cases

A list like that can be used for URL parameter exclusion, filtering and other manipulation tasks from within tag management applications, analytics tools such as GTM, Google Analytics, GA3 and GA4. .

## Active list | updated 25 May 2022

| Query Parameter | Description |
| ------------- | ------------- |
| `gclid` | Google (non-iOS devices) |
| `gbraid`| Google (iOS 14.5+ opted out devices) (web-to-app) |
| `wbraid`| Google (iOS 14.5+ opted out devices) (app-to-web) |
| `dclid` | Google Display (Enhanced Attribution) |
| `gclsrc` | Google Search Ads 360 |
| `fbclid` | Facebook |
| `tblci` | Taboola |
| `li_fat_id` | Linkedin |
| `ttclid` | TikTok |
| `rdt_cid` | Reddit |
| `dicbo` | Outbrain |
| `twclid` | Twitter |
| `auctid` | Teads |
| `vmcid` | Yahoo DSP |
| `msclkid` | Microsoft |
| `mc_cid` | Mailchimp |
| `mc_eid` | Mailchimp |
| `_z1_agid` | Zemanta |
| `_z1_caid` | Zemanta |
| `_z1_msid` | Zemanta |
| `_z1_pub` | Zemanta |

## Feedback and Assistance

If you know of more parameters from other platforms, feel free to send in a pull request and I'll keep this list updated. It would be interesting to keep an updated `JSON` or `CSV` file within the repo as well in the future, that can be used for programmatic purposes; being able to pull an updated list in correct format directly from github (e.g. via `https://cdn.jsdelivr.net/gh/cremedigital/platform-url-click-id-parameters@main/filename.json`) into your tool (such as a GTM custom template).
