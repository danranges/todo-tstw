const Landing = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="m-10 font-bold text-7xl sm:text-8xl md:text-9xl tracking-tighter dark:text-white">
        AnElephant
      </h1>
      <p className="mb-4 tracking-widest font-thin text-lg sm:text-2xl md:text-3xl text-center dark:text-white shadow-sm">
        a notes app that follows you
      </p>
      <p className="mb-24 tracking-widest font-thin text-lg sm:text-2xl md:text-3xl text-center dark:text-white shadow-sm">
        wherever your thoughts may go
      </p>
      <button className="mb-4 px-14 py-2 sm:px-20 dark:bg-teal-300 dark:text-zinc-900 rounded-md">
        Sign Up
      </button>
      <div className="flex mb-10">
        <p className="mr-2 text-xs font-thin dark:text-white">
          Already have an account?
        </p>
        <a
          href="/"
          className="text-xs font-extralight underline dark:text-white"
        >
          Log In
        </a>
      </div>
    </div>
  )
}

export default Landing
