import fs from 'fs/promises'

export const invoke = async (path) => {
    try {
        return (await fs.stat(path)).size
    } catch (e) {
        return 0
    }
}