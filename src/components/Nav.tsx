const Nav = () => {
  return (
    <div className="flex flex-row justify-between px-4 py-2 dark:bg-zinc-900">
      {" "}
      <h1 className="text-4xl tracking-tighter font-bold dark:text-white ">
        AnElephant
      </h1>
      <div className="flex flex-col justify-end">
        <ul className="flex flex-row font-semibold md:space-x-8 space-x-4 dark:text-white ">
          <li>Home</li>
          <li>Projects</li>
          <li>Account</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
