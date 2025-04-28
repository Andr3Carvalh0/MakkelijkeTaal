import { BITBUCKET_BUCKET, BITBUCKET_TOKEN } from "../common/Constants.js"
import { execute } from "../utilities/TerminalUseCase.js"

export const invoke = async (path) => {
    console.log(`Uploading file from ${path}, with token: ${BITBUCKET_TOKEN}, url: ${BITBUCKET_BUCKET}`)
    return execute(`curl -s --header \"Authorization: Bearer ${BITBUCKET_TOKEN}\" -X POST ${BITBUCKET_BUCKET} -F files=@${path}`)
}