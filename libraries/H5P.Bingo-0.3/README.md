# h5p-bingo
This is a simple game for boring conferences and meetings or other events ;-) Create (Buzzword) Bingo sheets online and share them with your friends and colleagues. And if you really want to, you can play normal Bingo, too ...

No, there's no real multiplayer support and won't be there before H5P learns
some more tricks ...

## Example
!["Bingo for H5P"](https://ibin.co/4sqiO3undZsQ.png "Bingo for H5P")

## Building the distribution files
Pull or download this archive files and go into the main folder. There run

```bash
npm install
```

to get the required modules. Then build the project using

```bash
npm run build
```

or

```bash
npm run watch
```

if you want to modify the code and want to get a fresh build built in the background.

## Ideas to think about ...
- Does a11y support make much sense here?
- Should there be some ticked/unticked xAPI event?
