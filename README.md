# MathStudyForTest

An independent responsive chess playground. Intended production URL: https://mathstudyfortest.vercel.app

## Features and routes
- `/`: overview and navigation.
- `/play/online` and `/play`: legal chess against a browser computer (two levels), or two players sharing a device. Undo, restart, board flip, move history, and all four promotion choices.
- `/puzzles`: four original, verified mate-in-one exercises; hints and completion tracking on your device.
- `/analysis`: legal position exploration, FEN and PGN import, PGN export, and local depth-2 move rankings.
- `/events`: Lichess public tournament API listings with organizer links; clear fallback if API access fails.

Deep links and query strings remain on this site's domain via a Vercel SPA rewrite. Arbitrary Chess.com URLs are not mirrored. Unknown routes show a useful not-found page. Query parameters are retained; no Chess.com-specific parameter compatibility is promised.

## Why this is not a Chess.com proxy
Chess.com's User Agreement (reviewed 24 October 2026) restricts reproducing/mirroring substantial portions of its services and requires prior written authorization for other automated access. No such authorization was supplied. We therefore do not proxy, embed, scrape, imitate authentication, or collect Chess.com credentials. This is not affiliated with Chess.com.
Source: https://www.chess.com/legal/user-agreement

## Limitations
The `/play/online` path is retained for familiarity; it provides local/computer play, not internet matchmaking. There are no accounts, ratings, clocks, or network multiplayer. Local analysis uses a small original alpha-beta engine, not Stockfish; it is shallow and should not be treated as expert analysis. Puzzles are a fixed small collection. Tournament listings depend on Lichess availability and browser CORS/network access. External organizer links leave this domain deliberately. Fonts optionally load from Google Fonts with system fallbacks. Games reset on reload; puzzle progress is stored locally. No backend or credentials required.

## Development
Node 22+ recommended. `npm ci`, `npm run dev`, `npm test`, `npm run build`.
Deploy the GitHub repository on Vercel using the Vite preset, build command `npm run build`, output `dist`. The included `vercel.json` handles deep links.

## Credits and licenses
- chess.js 1.4.0, BSD-2-Clause: https://github.com/jhlywa/chess.js — rules and move generation; copyright and license preserved in THIRD_PARTY_LICENSES.txt.
- Vite, MIT: https://github.com/vitejs/vite — build tooling.
- Original UI, local search engine, and puzzle positions: MIT (see LICENSE).
- Unicode chess glyphs; no Chess.com graphics or content.
- Events: https://lichess.org/api#tag/Arena-tournaments/operation/apiTournament

## Privacy
No account, tracking scripts, or credentials. Puzzle progress uses localStorage. Loading the Events page sends a public API request to Lichess. Hosting providers receive normal web requests.
