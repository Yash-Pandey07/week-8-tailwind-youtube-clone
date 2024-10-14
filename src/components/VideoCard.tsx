export default function VideoCard() {
  return (
    <div>
      <img src="/Thumbnail.jpg" className="rounded-xl"></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img src="/channelLogo.webp" className="rounded-full w-30 h-30"></img>
        </div>
        <div className="col-span-11 pl-5">
          <div>
            Build & Deploy Fully Functional YouTube Clone Single Page
            Application with React JS & Tailwind CSS
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            Channel Name
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            50k | 1 day ago
          </div>
        </div>
      </div>
    </div>
  );
}
