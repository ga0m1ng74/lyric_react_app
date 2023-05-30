import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  // // const dispatch = useDispatch();
  // const { id:artistId } = useParams();
  // const { activeSong, isPlaying } = useSelector((state) => state.player)
  // const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery({artistId});
  // console.log(artistData);
  // if (isFetchingArtistDetails) return <Loader title='Searching artist details' />
  // if (error) return <Error />
  // return (
  //   <div className="flex flex-col ">
  //     <DetailsHeader artistId={artistId} artistData={artistData} />

  //     <RelatedSongs
  //       data={artistData}
  //       artistId={artistId}
  //       isPlaying={isPlaying}
  //       activeSong={activeSong}
  //       />
  //   </div>
  // )
  return(
    <div></div>
  )
};

export default ArtistDetails;

