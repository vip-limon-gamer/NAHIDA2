---------

###  **✿✦ 𝗡𝗔𝗛𝗜𝗗𝗔 ✦✿  | ʟʀ ʟɪᴍᴏɴ
**`A Massanger  Multi Device Bot To Take Your Massanger To Another Level !`** 

-------

 [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=23&pause=1000&color=4CF726&width=435&lines=NAHIDA+2.0;Made+by+MD+Lijanur+Rahman+Limon+)](https://git.io/typing-svg)

------------

<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>
<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>

### <br>   ❖ DEPLOY_WORKFLOWS ❖
```
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    # Step to check out the repository code
    - uses: actions/checkout@v2

    # Step to set up the specified Node.js version
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}

    # Step to install dependencies
    - name: Install dependencies
      run: npm install

    # Step to run the bot with the correct port
    - name: Start the bot
      env:
        PORT: 8080
      run: npm start
```
-------
