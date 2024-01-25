import Clients from "@/components/clients";
import getData from "./lib/getData";

const Home = async () => {
  const clients = await getData();
  return (
    <>
      <Clients clients={clients} />
    </>
  );
};
export default Home;
