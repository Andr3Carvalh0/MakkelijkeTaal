import { exec } from 'child_process'

export function execute(command){
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error !== null) {
                console.error(`CLI command has failed: ${error}`)
                reject(error)
            }
            resolve(stdout)
        })
    })
}