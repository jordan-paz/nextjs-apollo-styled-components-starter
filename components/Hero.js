export default function Hero() {
  return (
    <div className="bg-white flex flex-col pl-6 pr-6 pt-24">
      <div className="flex items-end">
        <img
          src="/profile-pic.jpeg"
          className="border-orange border-solid border-2 p-0.5 rounded-full w-20 mr-3"
        />
        <div>
          <p>Hey there, I'm</p>
          <h4>Jordan Paz</h4>
        </div>
      </div>
      <p className="mt-3">
        Welcome to my corner of the internet! I write stuff, mostly about code. I also draw things.
      </p>
    </div>
  );
}
