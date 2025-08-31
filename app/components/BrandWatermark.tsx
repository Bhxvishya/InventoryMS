export default function BrandWatermark() {
  return (
    <div className="fixed bottom-4 right-4 z-10 opacity-30 hover:opacity-60 transition-opacity pointer-events-none">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-xs">B</span>
          </div>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
            by Bhavishya Sharma
          </span>
        </div>
      </div>
    </div>
  );
}