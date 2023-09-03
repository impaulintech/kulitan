const start = [
    'g',
    'k',
    'ng',
    't',
    'd',
    'n',
    'l',
    'm',
    'p',
    's',
    'b',
    'w',
    'y',
    'j'
  ];
  
  const mid = [
    'a',
    'á',
    'â',
    'aa',
    'i',
    'í',
    'î',
    'ii',
    'ia',
    'iu',
    'u',
    'ú',
    'û',
    'ua',
    'uu',
    'ui',
    'e',
    'o'
  ];
  
  const end = [
    'g',
    'k',
    'ng',
    't',
    'd',
    'n',
    'l',
    'm',
    'p',
    's',
    'b',
  ];
  
  const masterList = [];
  
  for (const s of start) {
    for (const m of mid) {
      for (const e of end) {
        masterList.push(`${s}${m}${e}`);
      }
      masterList.push(`${s}${m}`);
    }
  }
  
  const midEnd = [];
  for (const m of mid) {
    for (const e of end) {
      midEnd.push(`${m}${e}`);
    }
  }
  
  masterList.push(...mid, 'íng', 'iing', 'queng', 'qng', 'qing', 'qe', 'q', 'ee', 'oo');
  
  const combinations = {
    one: masterList.filter(glyph => glyph.length === 1),
    two: masterList.filter(glyph => glyph.length === 2),
    three: masterList.filter(glyph => glyph.length === 3),
    four: masterList.filter(glyph => glyph.length === 4),
    five: masterList.filter(glyph => glyph.length === 5),
    six: masterList.filter(glyph => glyph.length === 6),
    mid: mid,
    midEnd: midEnd,
  };
  
  // console.log(combinations);
  // console.log(`Total combinations: ${masterList.length + midEnd.length}`);
