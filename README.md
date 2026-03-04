# Age Calculator (Node.js CLI)

A simple Node.js command-line app that asks for your name and date of birth, validates the input, and calculates your age.

## Features
- CLI input using Node `readline`
- Accepts DOB in `YYYY-MM-DD` format (also supports single-digit month/day like `2007-9-2` and normalizes it)
- Validates real calendar dates (handles leap years)
- Rejects future birth dates
- Special handling for Feb 29 birthdays in non-leap years (treated as March 1)

## Requirements
- Node.js (v14+ recommended)

## How to Run
1. Clone the repo:
   ```bash
   git clone https://github.com/toyosi350/Age-Calculator.git
   cd javascript 
