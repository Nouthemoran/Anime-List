import AnimeList from "@/components/AnimeList";
import Link from "next/link";

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const topAnime = await response.json()

  return (
    <div>
      <AnimeList api={topAnime}/>
    </div>
  );
}

export default Home