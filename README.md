# BS to AD and AD to BS Date Conversion API + webAPP

This is a simple API converting dates between Gregorian (AD) and Bikram Sambat(BS) calenders.

Why made this?
- AD to BS conversion cannot be done via any simple mathematical relation.
- Database of dates have to be maintained for the conversion.
- Lot of conversion portals but outdated APIs 


## Features
- Convert AD to BS and vice-versa
- Get today's BS date
- Validate date inputs

## Live URL
https://nepaldateconversionapi.vercel.app/

## Endpoints
- GET /api/today - Get today's Nepali date

- GET /api/convert/ad-bs - Convert AD to BS

- GET /api/convert/bs-ad - Convert BS to AD


## Examples:

- AD to BS: https://nepaldateconversionapi.vercel.app/api/ad-bs?date=2024-06-01

- BS to AD: https://nepaldateconversionapi.vercel.app/api/bs-ad?date=2081-02-18

