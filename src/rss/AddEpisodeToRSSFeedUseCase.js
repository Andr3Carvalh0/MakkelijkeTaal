import fs from 'fs/promises'
import { BITBUCKET_BUCKET, FEED_PATH, FILE_EXTENSION } from "../common/Constants.js"

export const invoke = async (metadata) => {
    const feed = await fs.readFile(FEED_PATH, { encoding: 'utf8' })
    const podcastArtwork = `<itunes:image href="${metadata.artwork}"/>`

    const header = feed.split(podcastArtwork)[0]
    const body = feed.split(podcastArtwork)[1]

    const transformedFeed = `${header}${podcastArtwork}
        <item>
			<title>${metadata.title}</title>
			<description>
				<![CDATA[<p>${metadata.description.replaceAll("\n\n", "</p><br><p>")}</p>]]>
			</description>
			<itunes:title>${metadata.title}</itunes:title>
			<itunes:episodeType>full</itunes:episodeType>
			<itunes:summary>${metadata.description}</itunes:summary>
			<guid isPermaLink="false">${metadata.id}</guid>
			<pubDate>${metadata.publishedDate}</pubDate>
			<link>https://www.youtube.com/watch?v=${metadata.id}</link>
			<itunes:explicit>false</itunes:explicit>
			<itunes:image href="${metadata.thumbnail}"/>
			<itunes:duration>${metadata.duration}</itunes:duration>
			<enclosure url="${BITBUCKET_BUCKET}/resources/${metadata.id}${FILE_EXTENSION}" type="audio/mpeg" length="${metadata.size}"/>
		</item>${body}`

    await fs.writeFile(FEED_PATH, transformedFeed, 'utf8')
}
