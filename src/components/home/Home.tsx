function Home() {
  return (
    <div>
      <h1 className="font-bold text-5xl" >Home</h1>

      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex gap-3 items-center">
          <a href="#" className="btn btn-primary text-lg">Link</a>
          <p>className="btn btn-primary text-lg"</p>
        </div>

        <div className="flex gap-3 items-center">
          <a href="#" className="btn btn-secondary text-lg">Link</a>
          <p>className="btn btn-secondary text-lg"</p>
        </div>

        <div className="flex gap-3 items-center">
          <a href="#" className="btn btn-ghost text-lg">Link</a>
          <p>className="btn btn-ghost text-lg"</p>
        </div>
      </div>

    </div>
  )
}

export default Home;