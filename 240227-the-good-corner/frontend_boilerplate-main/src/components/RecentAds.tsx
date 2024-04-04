import AdCards from "./AdCards";
import { GET_ADS } from "../graphql/ads.schema";
import { useQuery } from "@apollo/client";

export default function RecentAds() {
  const { loading, error, data } = useQuery(GET_ADS);
  console.log(data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return <AdCards title="Annonces récentes" ads={data.ad} />;
}
