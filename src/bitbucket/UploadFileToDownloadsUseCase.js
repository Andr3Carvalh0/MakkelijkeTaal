import { BITBUCKET_BUCKET, BITBUCKET_TOKEN } from "../common/Constants.js"
import { execute } from "../utilities/TerminalUseCase.js"

export const invoke = async (path) => {
    return execute(`curl -s --header \"Authorization: Bearer ${BITBUCKET_TOKEN()}\" -X POST ${BITBUCKET_BUCKET()} -F files=@${path}`)
}