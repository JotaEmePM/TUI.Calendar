import terminal from 'terminal-kit'

const term = terminal.terminal

term.fullscreen(true)
term.windowTitle('Hello world')

term.table(
  [
    ['header #1', 'header #2', 'header #3'],
    [
      'row #1',
      'a much bigger cell, a much bigger cell, a much bigger cell... ',
      'cell'
    ],
    ['row #2', 'cell', 'a medium cell'],
    ['row #3', 'cell', 'cell'],
    [
      'row #4',
      'cell\nwith\nnew\nlines',
      '^YThis ^Mis ^Ca ^Rcell ^Gwith ^Bmarkup^R^+!'
    ]
  ],
  {
    hasBorder: true,
    contentHasMarkup: true,
    borderChars: 'lightRounded',
    borderAttr: { color: 'blue' },
    textAttr: { bgColor: 'default' },
    firstCellTextAttr: { bgColor: 'blue' },
    firstRowTextAttr: { bgColor: 'yellow' },
    firstColumnTextAttr: { bgColor: 'red' },
    width: term.width,
    fit: true, // Activate all expand/shrink + wordWrap,
    expandToHeight: true
  }
)
