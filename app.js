function extractpropertyvalues () {
  let jsonTxt = document.getElementById('jsontxt').value

  const jsonObj = JSON.parse(jsonTxt)

  const propName = document.getElementById('jsonexpr').value

  let propnames = [propName]

  if (propName.indexOf('>')) {
    propnames = propName.split('>')
  }

  let result = ''

  for (let i = 0; i < jsonObj.length; i++) {
    let tmp = jsonObj[i]
    for (let j = 0; j < propnames.length; j++) {
      if (propnames[j] in tmp) {
        tmp = tmp[propnames[j]]
      } else {
        console.log(`${propnames[j]} not found in ${JSON.stringify(tmp)}`)
      }
    }

    if (tmp) result += JSON.stringify(tmp) + '<br />'
  }

  document.getElementById('result').innerHTML = result
}
