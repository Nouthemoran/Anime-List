import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
    const { keyword } = params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=`)
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