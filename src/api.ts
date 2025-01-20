import { BASE_URL, API_URL } from './consts';
import { GetServersResponseSchema } from './schemas';
import { GameServer } from './types';
type ApiSuccess<T = undefined> = T extends undefined
    ? { success: true }
    : { success: true; data: T };
type ApiFailure = { success: false; error: string };
type ApiResponse<T = undefined> = ApiSuccess<T> | ApiFailure;

export async function startServer(
    serverId: GameServer['id']
): Promise<ApiResponse> {
    console.log('Starting server with id:', serverId);
    return { success: true };
}
export async function getServers(): Promise<ApiResponse<GameServer[]>> {
    try {
        const response = await fetch(BASE_URL + API_URL).then((res) =>
            res.json()
        );

        const data = GetServersResponseSchema.parse(response);
        return { success: true, data };
    } catch (e) {
        console.error(e);
        return { success: false, error: e as string };
    }
}
