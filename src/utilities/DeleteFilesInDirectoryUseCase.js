import path from 'path'
import { readdir, unlink } from 'fs/promises'

export const invoke = async (directory, exclude) => {
    try {
        const files = await readdir(directory)
        const toRemove = files.filter(file => !exclude.includes(file))
            .map(file => path.join(directory, file))
            .map(file => unlink(file))

        return (await Promise.all(toRemove))
    } catch (e) {
        return 0
    }
}
