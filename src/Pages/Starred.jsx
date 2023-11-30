import { useStarredShows } from "../lib/useStarredShows";
import { getShowByIds } from "../api/Tvmaze";
import { useQuery } from "@tanstack/react-query";
import Showsgrid from "../components/shows/Showsgrid";
import { useState, useEffect } from "react";
const Starred = () => {
  const [starredShowsIds] = useStarredShows();
  const [starredShows, setStarredShows] = useState(null);
  useEffect(() => {
    const fetchStarredShows = async () => {
      try {
        const result = await getShowByIds(starredShowsIds);
        const mappedShows = result.map((show) => ({ show }));
        setStarredShows(mappedShows);
      } catch (error) {
        // Handle errors here if needed
        console.error("Error fetching starred shows:", error);
      }
    };

    fetchStarredShows(); // Call the function on initial render

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [starredShowsIds]);
  // const { data: starredShows, error: starredShowsError } = useQuery({
  //   queryKey: ["starred", starredShowsIds],
  //   queryFn: () => {
  //     getShowByIds(starredShowsIds).then((result) =>
  //       result.map((show) => ({ show }))
  //     );
  //   },
  //   refetchOnWindowFocus: false,
  // });
  if (starredShows?.length === 0) {
    return <div>No shows were starred</div>;
  }
  if (starredShows?.length > 0) {
    return <Showsgrid shows={starredShows} />;
  }
};
export default Starred;
