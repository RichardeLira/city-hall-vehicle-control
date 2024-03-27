export default function Sidebar() {
  return (
    <div className="w-80 h-screen flex flex-col bg-white">
      {/* Upper section */}
      <div className="p-8">
        <h2 className="font-semibold">SGF platform</h2>
      </div>

      {/* Separator */}
      <div className="w-full h-[6px] bg-gray-50" />

      {/* Pages */}
      <div className="flex-1 p-8"></div>

      {/* Separator */}
      <div className="w-full h-[6px] bg-gray-50" />

      {/* Bottom section */}
      <div className="p-8">
        <h3 className="font-semibold">Usuário</h3>
        <span className="text-gray-300">Cargo</span>
      </div>
    </div>
  )
}
