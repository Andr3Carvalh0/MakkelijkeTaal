import { youtubeDl } from 'youtube-dl-exec'
import { DOWNLOAD_FOLDER, FILE_EXTENSION } from "../common/Constants.js"
import { invoke as IsItemInDownloads } from "../bitbucket/IsItemInDownloadsUseCase.js"
import { invoke as UploadItem } from "../bitbucket/UploadFileToDownloadsUseCase.js"
import fs from 'fs'

export const invoke = async (id, url) => {
    const path = `${DOWNLOAD_FOLDER}/${id}${FILE_EXTENSION}`

    if (!fs.existsSync(DOWNLOAD_FOLDER)) fs.mkdirSync(DOWNLOAD_FOLDER)

    // YouTubeDL requires you to have python3 & ffmpeg installed
    return new Promise(async (resolve, reject) => {
        try {
            const isDownloaded = await IsItemInDownloads(id)

            if (isDownloaded) {
                reject(new Error(`Already has the latest episode (${id})`))
                return
            }

            youtubeDl(url, {
                extractAudio: true,
                output: path,
                audioFormat: "mp3"
            }).then(async () => {
                try {
                    await UploadItem(path)
                    resolve(path)
                } catch (e) {
                    reject(new Error(`Failed to upload (${id})`))
                }
            }).catch(reject)
        } catch (e) {
            reject(new Error(`Failed to check if episode ${id} is already downloaded`))
        }
    })
}
