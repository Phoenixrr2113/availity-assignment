const csv2obj = (csv, opt) => {
  opt = opt || {};
  var delimeter = opt.delimeter || ',';
  var i, row, rownum, collumNum, lines = csv.split(/\s*\n\s*/);
  var headers = lines[0].split(delimeter);
  for(i = 0; i < headers.length; i++) {
      headers[i] = headers[i].replace(/(^[\s"]+|[\s"]+$)/g, '');
  }
  var ret = [];
  for (rownum = 1; rownum < lines.length; rownum++) {
      if (lines[rownum].trim().length === 0) continue;
      row = lines[rownum].split(delimeter);
      ret[rownum - 1] = {};
      for (collumNum = 0; collumNum < headers.length; collumNum++) {
          if (row[collumNum].length > 0 && (!isNaN(row[collumNum]) || row[collumNum] === 'true' 
              || row[collumNum] === 'false' || row[collumNum] === 'null')) 
              ret[rownum - 1][headers[collumNum]] = JSON.parse(row[collumNum]);
          else 
              ret[rownum - 1][headers[collumNum]] = row[collumNum].replace(/(^\s*"*|"*\s*$)/g, '');;
      }
  }
  return ret;
}