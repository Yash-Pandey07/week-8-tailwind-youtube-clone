import { Appbar } from "@/components/Appbar";
import VideoCard from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";


export default function Home() {
  return (
    <div>
      {/* Hi!!! from Index  */}
      {/* <VideoCard 
      title={"Build & Deploy Fully Functional YouTube Clone Single Page Application with React JS & Tailwind CSS"}
      channelName={"Channel Name"}
      views={"50k"}
      timestamp={"7 days ago"}
      channelLogo={"channelLogo.webp "}
      Thumbnail={"/Thumbnail.jpg"}
      /> */}
      <Appbar />
      <VideoGrid />
    </div>
  );
}
