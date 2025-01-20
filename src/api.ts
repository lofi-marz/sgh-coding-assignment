import { BASE_URL, API_URL } from './consts';
import { GetServersResponseSchema } from './schemas';
import { GameServer } from './types';

export async function getServers(): Promise<
    | {
          success: true;
          data: GameServer[];
      }
    | {
          success: false;
          error: string;
      }
> {
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
