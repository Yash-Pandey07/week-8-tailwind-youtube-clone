import VideoCard from "./VideoCard";

const VIDEOS = [
    {
        title: "Build & Deploy Fully Functional YouTube Clone Single Page Application with React JS & Tailwind CSS",
        channelName: "JS Dev Hindi",
        views: "50k",
        timestamp: "7 days ago",
        channelLogo: "channelLogo.webp",
        thumbnail: "Thumbnail.jpg"
    },
    {
        title: "Exploring the Beauty of the Swiss Alps",
        channelName: "Travel Guru",
        views: "75k",
        timestamp: "3 days ago",
        channelLogo: "travelLogo.png",
        thumbnail: "SwissAlps.jpg"
    },
    {
        title: "10 Tips for Mastering Python Programming",
        channelName: "Code Academy",
        views: "120k",
        timestamp: "2 weeks ago",
        channelLogo: "codeAcademyLogo.jpg",
        thumbnail: "PythonTips.jpg"
    },
    {
        title: "The Ultimate Guide to Digital Marketing in 2023",
        channelName: "Marketing Expert",
        views: "90k",
        timestamp: "1 month ago",
        channelLogo: "marketingLogo.jpg",
        thumbnail: "DigitalMarketing.jpg"
    },
    {
        title: "Top 10 Healthy Recipes for Quick Meals",
        channelName: "Chef's Kitchen",
        views: "60k",
        timestamp: "5 days ago",
        channelLogo: "chefsKitchenLogo.webp",
        thumbnail: "HealthyRecipes.jpg"
    }
];

export const VideoGrid = () => {

    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4">
        {VIDEOS.map((video, index) => 
            <div key={index}>
                <VideoCard
                        title={video.title}
                        channelName={video.channelName}
                        views={video.views}
                        timestamp={video.timestamp}
                        channelLogo={video.channelLogo}
                        thumbnail={video.thumbnail}
                    />
            </div>
        )}

    </div>
}