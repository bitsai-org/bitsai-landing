# BitSai Landing Page
This is BitSai Wallet landing page source code.<br>
If you are looking for the source code for the BitSai wallet app: go to [this repo](https://github.com/bitsai-org/bitsai).

## Getting Started
### Prerequisites
- Node - v17.2.0
- Yarn - 1.22.0
- Gatsby - v4.2.0
> Lower version may work but they were not tested.

### Installing dependencies
All you have to do is clone this repository and install the dependancies
```bash
git clone https://github.com/bitasai-org/bitsai-landing
cd bitsai-landing
yarn install
```

## Running it
### Development
`yarn develop`

This will let gatsby spin up a development server locally on port 8000 where
you can check it in "localhost:8000"

### Build it
`yarn build`

This will build all the necessary static files in '/public' directory

## Where is this deployed?
BitSai landing page is deployed at [bitsai.co](https://bitsai.co). All the
static files are served by Netlify, and each commit to master on this repo will
execute a deploy script that will push the new changes to
[bitsai.co](https://bitsai.co).

## License
This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details.
