import { invoke as AddEpisodeToRSSFeed } from './rss/AddEpisodeToRSSFeedUseCase.js'
import { invoke as DownloadYouTubeItemAsAudio } from './youtube/DownloadYouTubeItemAsAudioUseCase.js'
import { invoke as DeleteFilesInDirectory } from './utilities/DeleteFilesInDirectoryUseCase.js'
import { invoke as GetAudioDuration } from './utilities/GetAudioDurationUseCase.js'
import { invoke as GetFileSize } from './utilities/GetFileSizeUseCase.js'
import { invoke as GetLatestYouTubeItem } from './youtube/GetLatestYouTubeItemUseCase.js'
import {
    BITBUCKET_PUBLIC_LINK,
    CHANNEL_ID,
    DEFAULT_ARTWORK,
    DOWNLOAD_FOLDER
} from "./common/Constants.js"

const download = async () => {
    const metadata = await GetLatestYouTubeItem(CHANNEL_ID)
    const path = await DownloadYouTubeItemAsAudio(metadata.id, metadata.resource)

    const transformedMetadata = {
        'id': metadata.id,
        'title': metadata.title,
        'description': metadata.description,
        'artwork': `${BITBUCKET_PUBLIC_LINK}/${DEFAULT_ARTWORK}`,
        'thumbnail': metadata.thumbnail,
        'duration': await GetAudioDuration(path),
        'size': await GetFileSize(path),
        'publishedDate': new Date(metadata.publishedDate).toUTCString()
    }

    await AddEpisodeToRSSFeed(transformedMetadata)
    await DeleteFilesInDirectory(DOWNLOAD_FOLDER, [])
}

const main = async () => { await download() }

main().then(() => console.log("A new episode is available!"))
    .catch((err) => console.log(err))
