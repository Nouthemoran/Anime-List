import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
    const { keyword } = 
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?`)
  const topAnime = await response.json()

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer"/>
        <AnimeList api={topAnime}/>
      </section>
    </>
  );
}

export default Page