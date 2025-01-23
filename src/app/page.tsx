import { getServers } from '@/api';
import { ServerCard } from '@/components/ServerCard';
import { ThemeToggle } from '@/components/ThemeToggle';

/*
  Welcome to the simplegamehosting coding assignment!

  if you got this far great job! 🎉
  Now it's your turn to shine! 🌟
  
  The mock data is fetched from the server and displayed on the page.

  Your task is to create a dynamic card component for each server in the list.
  - The card should display the server's name, game, players, status, version etc, bonus points for displaying any extra data from the json response.
  - please use tailwind to style your components, you can use the existing styles in this file as a reference.
  - You can also use any other libraries you like to help you build the UI.
  
  for extra info please read the README.md file in the root of the project.
*/

export default async function Home() {
    const serversData = await getServers();
    if (!serversData.success) throw new Error('Failed to retrieve severs');

    //const [serverData, setServerData] = useState(null);
    // you can update this fetching code if required but it's not necessary for the assignment.
    /*useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch("/api/mock");
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error("Failed to fetch server data:", error);
      }
    };

    fetchServerData();
  }, []);*/

    return (
        <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <div>
                <ThemeToggle />
            </div>

            <main className="grid w-full gap-8 grid-auto-fit grid-max-60 grid-min-fr md:grid-max-fr md:grid-min-72 lg:grid-max-80 2xl:grid-max-96">
                {serversData.data.map((s) => (
                    <ServerCard key={s.id} server={s} />
                ))}
            </main>
        </div>
    );
}
