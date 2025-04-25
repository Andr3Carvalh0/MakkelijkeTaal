import Parser from 'rss-parser'

const FEED_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id='

export const invoke = async (channelId) => {
    const parser = new Parser({
        customFields: {
            item: ['media:group']
        }
    })
    const response = await parser.parseURL(`${FEED_URL}${channelId}`)

    if (response.items == undefined || response.items.length == 0) {
        throw new Error(`No items found for channel "${channelId}"`)
    }

    const newestItem = response.items[0]
    const customFields = newestItem['media:group']

    return {
        'id': newestItem.id.split(":").at(-1),
        'title': newestItem.title,
        'description': customFields?.['media:description']?.[0],
        'thumbnail': customFields?.['media:thumbnail']?.[0]?.["$"]?.url,
        'publishedDate': newestItem.pubDate,
        'resource': newestItem.link
    }
}
