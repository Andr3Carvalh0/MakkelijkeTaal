import { getAudioDurationInSeconds } from 'get-audio-duration'

export const invoke = async (path) => {
    try {
        return Math.round(await getAudioDurationInSeconds(path))
    } catch (e) {
        return 0
    }
}