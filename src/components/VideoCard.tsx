export default function VideoCard(props: any) {
  return (
    <div className="p-3 cursor-pointer">
      <img src={props.thumbnail} className="rounded-xl"></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          {/* replacing with props */}
          {/* <img src="/channelLogo.webp "  className="rounded-full w-30 h-30"></img> */}
          <img src={props.channelLogo} className="rounded-full w-30 h-30" ></img>
        </div>
        <div className="col-span-11 pl-5">
          <div>
            {props.title}
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.channelName}
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
