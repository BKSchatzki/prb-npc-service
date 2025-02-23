# PartyRoomBloom NPC Service API

This is a server-hosted version of the API that serves NPCs for [PartyRoomBloom](https://www.partyroombloom.com). Its purpose is to allow creation of random NPCs on the fly when running social storytelling sessions. This API is public and can be accessed at <https://prb-npc-service.onrender.com>.

It is likely that this API will be deprecated in the future, as the logic gets folded into the main PartyRoomBloom repo at <https://github.com/BKSchatzki/partyroombloom>.

## Current Status

The PRB NPC Service's core featureset of allowing users to create NPCs is complete. Users can also fetch NPCs of a specific species, as well as the entire nameset and traitset.

Currently considering allowing users to narrow returned properties either through inclusion or exclusion in URL parameters. The returned object is simple enough that this may be unnecessary.

## Features

- Random NPC: Users can fetch an NPC with a random name, species, gender, age, build, height, skin color, skin texture, hair color, hair style, eye color, eye shape, voice pitch, voice quality, voice speed, voice volume, features, mannerisms, motivations, and plot hooks.
- Random NPC of species: Same as above, but users can specify the species.
- All names: Users can fetch the entire names dataset.
- All traits: Users can fetch the entire traits dataset.
- Landing page documentation: Users can navigate the API from the main page.

## Technologies Used

- Node
- Express
- TypeScript
- Vitest
- Supertest

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BKSchatzki/prb-npc-service.git
   ```

2. Navigate to the project directory:

   ```bash
   cd prb-spc-service
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration (Currently Optional)

1. Create a `.env` file in the root directory
2. Add required environment variables, also found in `.env.example`:

   ```env
   PORT="3000"
   ```

## Usage

Run dev server:

```bash
npm run dev
```

Start production server:

```bash
npm start
```

Testing once:

```bash
npm run test
```

Testing and watching for changes:

```bash
npm run test:watch
```

The application will be available at `http://localhost:3000`

## Build Instructions

To build the project for production:

```bash
npm run build
```

## Deployment Checklist

- Render Build and Deploy Settings:
  - Make sure your Repository, Branch, and Git Credentials are correct
  - Build Command: `npm install && npm run build`
  - Pre-Deploy Command should be left blank
  - Start Command: `npm run start`

## Contributing

You know the drill:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

- Brendan K. Schatzki
- Email: <bkschatzki@gmail.com>
- Project Link: <https://github.com/BKSchatzki/prb-npc-service>
