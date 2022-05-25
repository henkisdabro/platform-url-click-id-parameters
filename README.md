# Platform Click ID URL Parameter Collection

A living collection of url parameters from various traffic platforms (organic and paid). 

## Purpose of Click ID's

Social media (and advertising) platforms usually incorporate click ID's on outbound links, which in effect are url parameters suffixed onto any destination URL added from within the platform. The parameters are used in conjunction with the platforms' marketing tag (pixel) which they recommend to place on the brands' website. The tag commonly references the click ID and drops a first-party cookie in the users' browser with the value of the click ID parameter, which it later uses for attribution purposes.

Example: a brand creates a post on Facebook with a headline, description and a landing page URL, meant to encourage and lead a user to the brand's website. The brand relies on GA4 on their site to collect user behaviour and struggle with the native `page_location` dimension which is littered with hundreds of unique rows, as every pageview generated from that post arrives on the site with a unique click ID in the URL. Using a list similar to this, the brand can anticipate incoming traffic from any of these platforms (they might not always know from where traffic comes) and build a tool or configure URL manipulation on their backend (e.g. GTM, Google Analytics, GA3, GA4) that helps with this, such as sending "cleaned" URL that can be used for reporting.

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

If you have experience with other parameters, from other platforms, feel free to send in a pull request to help keep this list updated. 

## Plans
- It would be interesting to keep an updated `JSON` or `CSV` file within the repo, containing comma-separated values and/or array of parameters to be used for programmatic purposes; being able to pull an updated list in correct format directly from github (e.g. via a mirrored CDN resource `https://cdn.jsdelivr.net/gh/cremedigital/platform-url-click-id-parameters@main/filename.json`) into your tool (such as a GTM custom template) could prove benefical.
- We might consider building a GTM (Web and/or Server-side) Custom Variable Template for specific purposes. Ideas are welcome.
