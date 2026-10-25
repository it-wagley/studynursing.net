# Figure audit — claims checked against the regulator

Checked 25 October 2026 by reading the regulators' own pages.

This covers the money and eligibility figures a nurse would act on. It is **not**
complete: roughly 170 live factual claims exist across the site and fewer than
twenty have been checked. Everything not listed below is still unverified.

## The dates on the site were false

Every page carried `checkedAt: "2026-10-10"` against its sources. The NMBA fee
schedule now in force took effect **18 September 2025** and lists $410 and $332
where the site said $640 and $185. Anyone who opened that page on 10 October 2026
would have seen the correct figures. The "checked on" dates were not real checks.

## Wrong — corrected in this commit

| Claim on site | Actual | Source |
|---|---|---|
| AHPRA assessment fee **$640 AUD** | **$410 AUD** (IQNM assessment and orientation) | NMBA fee schedule, eff. 18 Sep 2025 |
| Initial registration fee **$185 AUD** | **$332 AUD** (general registration application) | NMBA fee schedule |
| Australia total **~$6,000–6,500 AUD** | **~$5,750–6,050 AUD** recomputed from corrected parts | derived |
| NZ recency **2,500 hours in previous 5 years** | **1,800 hours** post-registration; the Council's self-assessment references 1,800 hours in the **last 10 years** | NCNZ IQN page |
| NZ route **"CGFNS verification + Competence Assessment Programme (CAP)"** | Verification is through **TruMerit**; the Council describes a **theory exam plus clinical OSCE**, and does not use the name CAP | NCNZ IQN page |
| Canada **NNAS main application $650 USD** | RN applicants use **Expedited Service, $750 CAD**. $650 USD is the **Registered Psychiatric Nurse** pathway — the wrong pathway for a registered nurse | NNAS fees page |
| US **NCLEX $350** | **$200** registration **+ $150** international scheduling fee. $350 applies **from 1 February 2027** | NCLEX fees page |

The New Zealand hours error is the one most likely to cause harm: a nurse with
2,000 hours reading the old figure would conclude they were ineligible when they
were not.

## Correct — verified, no change needed

| Claim | Status |
|---|---|
| Australia RN OSCE **$4,000 AUD** | Confirmed on the NMBA fee schedule |
| NCLEX **$200 USD + $150 international** | Confirmed on the NCLEX fees page |
| UK OSCE **£794** | Confirmed on the NMC OSCE page |
| UK OSCE **10 stations** | Confirmed; also confirms resits are £397 for 7 or fewer stations, which the site does not mention |
| UK OSCE at **5 test centres** | Confirmed as five approved OSCE test providers |
| Australia recency **450 hours in the previous 5 years** | Confirmed on the NMBA recency-of-practice fact sheet: "a minimum of 450 hours, within the past five years". Hours need not be continuous, and internationally qualified applicants meet the same standard |

## Could not be checked

- **UK CBT £83, evaluation £140 and registration £153 — still unverified after
  five attempts.** The NMC fees page returned a server error three times, and
  neither Test of Competence page publishes fees: both describe the structure
  only. The OSCE £794 is the sole UK figure confirmed. These four numbers are a
  two-minute check for a human with a browser and should be done before launch.
- **The NMBA Outcomes-Based Assessment page** returned a client error, so the
  Stream A/B/C model is unverified. (The 450-hour recency standard was confirmed
  separately via the NMBA fact sheet — see above.)
- Everything in the Gulf cluster. None of those pages has a working source at all
  — see `source-audit.md`.

## What this implies for the rest

Of the figures checked, **7 were wrong and 6 were right**. The errors are not
random: each is a plausible number in the right shape and currency, and two
(the NNAS psychiatric-nurse fee, the 2027 NCLEX price) are real figures applied
to the wrong thing. That is what makes them hard to catch by reading.

Assume the unchecked ~150 figures carry a similar error rate until someone
verifies them.
