export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">I</span>
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">InventoryMS</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">™</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {currentYear} <span className="font-semibold">Bhavishya Sharma</span>. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Developed with ❤️ by <span className="font-medium text-blue-600 dark:text-blue-400">Bhavishya Sharma</span>
              </p>
            </div>
          </div>

          {/* Tech Stack Badge */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                React
              </span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium">
                Remix
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-medium">
                TypeScript
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Built with modern web technologies
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              InventoryMS™ is a trademark of Bhavishya Sharma. Unauthorized reproduction is prohibited.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-500">
              <span>Version 1.0.0</span>
              <span>•</span>
              <span>Made in India 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}