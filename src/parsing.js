import * as fs from 'node:fs'
import YAML from 'yaml'

const parse = (file) => {
  const content = fs.readFileSync(file, 'utf8')
  // console.log(typeof content)
  const extension = file.slice(file.lastIndexOf('.') + 1)
  // console.log(extension)
  if (extension === 'json') {
    const parsing = JSON.parse(content)
    // console.log(parsing)
    return parsing
  }
  else if (extension === 'yaml') {
    const parsing = YAML.parse(content)
    // console.log(parsing)
    return parsing
  }
  throw new Error('Unsupported extension. Only json and yaml files are supported.')
}

export default parse
