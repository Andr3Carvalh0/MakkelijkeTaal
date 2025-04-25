export const DOWNLOAD_FOLDER = './resources'
export const FEED_PATH = 'podcast.rss'
export const FILE_EXTENSION = '.mp3'
export const BITBUCKET_BUCKET = `https://api.bitbucket.org/2.0/repositories/${process.env.REPOSITORY_WORKSPACE}/${process.env.REPOSITORY_SLUG}/downloads`
export const BITBUCKET_TOKEN = `${process.env.REPOSITORY_AUTHENTICATION}`