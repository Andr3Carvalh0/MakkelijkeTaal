import fetch from 'node-fetch'
import { BITBUCKET_BUCKET, BITBUCKET_TOKEN, FILE_EXTENSION } from "../common/Constants.js"

export const invoke = async (itemId) => {
    const response = await fetch(`${BITBUCKET_BUCKET()}/${itemId}${FILE_EXTENSION}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${BITBUCKET_TOKEN()}` }
    })

    return response.status < 400
}
