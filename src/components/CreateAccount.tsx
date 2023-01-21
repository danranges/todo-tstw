const CreateAccount = () => {
  return (
    <div className=" flex flex-col m-20 py-20 px-16 rounded-3xl dark:bg-zinc-800 ">
      <div className="ml-1">
        <h1 className="text-4xl w-80 tracking-tighter font-bold dark:text-white">
          Create Account
        </h1>
        <p className="mt-4 dark:text-white font-thin tracking-tight">
          All you need is an email and password
        </p>
      </div>
      <form onSubmit={() => {}} className="mt-10">
        <label className=" sr-only dark:text-white">Email:</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full block px-4 py-2 mb-2 rounded-md transition ease-in-out border-2 bg-clip-padding border-zinc-800 focus:border-teal-400 focus:border-2 focus:outline-none dark:text-white dark:bg-zinc-900 "
        />
        <label className=" sr-only dark:text-white">Password:</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full block px-4 py-2 mb-2 rounded-md transition ease-in-out border-2 bg-clip-padding border-zinc-800 focus:border-teal-400 focus:border-2 focus:outline-none dark:text-white dark:bg-zinc-900 "
        />
        <label className=" sr-only dark:text-white">Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full block px-4 py-2 rounded-md transition ease-in-out border-2 bg-clip-padding border-zinc-800 focus:border-teal-400 focus:border-2 focus:outline-none dark:text-white dark:bg-zinc-900 "
        />
        <input
          type={"submit"}
          value="Create Account"
          className="mt-6 py-2 px-10 rounded-md dark:bg-teal-400  transition ease-in-out border-2 border-zinc-800 focus:border-white focus:outline-none"
        />
      </form>
      <div className="flex mt-2 text-sm dark:text-white ">
        <p className="mx-1 font-thin">Already have an account?</p>
        <a href="/" className="underline">
          Log in
        </a>
      </div>
    </div>
  )
}

export default CreateAccount
