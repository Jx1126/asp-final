const LinkChecker = () => {
  return (
    <div className="flex items-center mt-5">
      <input
        type="text"
        placeholder="Link"
        className="w-full md:w-96 px-4 py-2 border rounded-l-lg focus:outline-1 focus:outline-blue-400 shadow-sm"
      />
      <button className="bg-blue-700 text-white px-8 py-2 rounded-r-lg shadow-lg hover:bg-blue-800 focus:outline-none ease-in-out hover:skeleton hover:rounded-none hover:rounded-tr-lg hover:rounded-br-lg transition-all">
        Check
      </button>
    </div>
  )
}

export default LinkChecker;