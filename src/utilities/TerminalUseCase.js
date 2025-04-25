import { exec } from 'child_process'

export function execute(command){
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error !== null) reject(error)
            resolve(stdout)
        })
    })
}