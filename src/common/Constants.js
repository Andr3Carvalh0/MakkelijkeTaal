export const DOWNLOAD_FOLDER = './process'
export const FEED_PATH = 'podcast.rss'
export const FILE_EXTENSION = '.mp3'

export const CHANNEL_ID = `${process.env.CHANNEL_ID || "UCch2JvY2ZSwcjf5gb93HGQw"}`
export const DEFAULT_ARTWORK = `${process.env.DEFAULT_ARTWORK || "UCch2JvY2ZSwcjf5gb93HGQw.jpg"}`

export const BITBUCKET_PUBLIC_LINK = `https://bitbucket.org/${process.env.REPOSITORY_WORKSPACE || "thelifeofcarv"}/${process.env.REPOSITORY_SLUG || "makkelijketaal"}/downloads`
export const BITBUCKET_BUCKET = `https://api.bitbucket.org/2.0/repositories/${process.env.REPOSITORY_WORKSPACE || "thelifeofcarv"}/${process.env.REPOSITORY_SLUG || "makkelijketaal"}/downloads`
export const BITBUCKET_TOKEN = `${process.env.REPOSITORY_AUTHENTICATION}`