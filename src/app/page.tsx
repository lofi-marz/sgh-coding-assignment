import { getServers } from '@/api';

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
    const serverData = await getServers();
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
            {/* main can be deleted and replaced with your own cards */}
            <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
                <h1 className="text-2xl font-bold">Minecraft Server List</h1>
                <p className="text-gray-600">
                    Below is the JSON data fetched from <code>/api/mock</code>.
                    Use it to build the UI.
                </p>
                <pre className="w-full max-w-4xl overflow-auto rounded-lg bg-gray-200 p-4 text-sm text-gray-800">
                    {serverData
                        ? JSON.stringify(serverData, null, 2)
                        : 'Loading data...'}
                </pre>
            </main>
            {/* main can be deleted and replaced with your own cards */}
        </div>
    );
}
