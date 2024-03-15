import VideoComponent from "../components/VideoComponent";

const Projects = () => {
  return (
    <div className="min-h-screen py-5 px-5">
      <div className="h-full rounded-lg flex gap-3 flex-col">
        <h1 className="text-[5vw] text-center px-10 font-semibold">
          What I did
        </h1>
        <div className=" whitespace-nowrap w-full flex">
          <VideoComponent
            invert={false}
            name="Real time Chat"
            link="chat.mp4"
          />
          <VideoComponent
            name="Spotify Clone"
            invert={true}
            link="spotify.mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
