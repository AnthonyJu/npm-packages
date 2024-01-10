#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

import archiver from 'archiver'
import Progress from 'progress'

let inputPath = './dist'
let outputPath = './dist.zip'

for (let i = 2; i < process.argv.length; i++) {
  if (process.argv[i] === '-i' && process.argv[i + 1]) {
    inputPath = process.argv[i + 1]
  }
  else if (process.argv[i] === '-o' && process.argv[i + 1]) {
    outputPath = process.argv[i + 1]
  }
}

const output = fs.createWriteStream(outputPath)
const archive = archiver('zip', {
  zlib: { level: 9 },
})

const totalEntries = filesCountInDirectory(inputPath)
const progressBar = new Progress('压缩进度 [:bar] :percent', {
  total: totalEntries,
  complete: '=',
  incomplete: ' ',
  width: 20,
})

archive.directory(inputPath, false)

archive.pipe(output)

archive.finalize()

archive.on('entry', () => {
  progressBar.tick()
})

archive.on('warning', (err) => {
  if (err.code !== 'ENOENT') {
    throw err
  }
})

archive.on('error', (err) => {
  throw err
})

output.on('close', () => {
  console.log('\x1B[32m%s\x1B[0m', `${outputPath.split('/').pop()} 压缩成功\n`)
})

function filesCountInDirectory(dir) {
  let count = 0
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const fullPath = path.join(dir, file)
    const stats = fs.statSync(fullPath)

    if (stats.isDirectory()) {
      count += filesCountInDirectory(fullPath)
    }
    else {
      count++
    }
  })

  return count
}
