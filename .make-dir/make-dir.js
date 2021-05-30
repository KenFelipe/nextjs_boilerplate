const makeDir = require('make-dir')

const COMPONENTS_DIR_PATH = 'src/components'

const makeDirectories = async () => {
    const paths = await Promise.all([
        makeDir(`${COMPONENTS_DIR_PATH}/atoms`),
        makeDir(`${COMPONENTS_DIR_PATH}/molecules`),
        makeDir(`${COMPONENTS_DIR_PATH}/organisms`),
        makeDir(`${COMPONENTS_DIR_PATH}/template`),
    ])

    console.log(paths)
}

makeDirectories()
