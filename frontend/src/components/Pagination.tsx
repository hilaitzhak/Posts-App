import { ChevronLeft, ChevronRight } from "lucide-react";
import { PaginationProps } from "../interfaces/interace";

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <button
        onClick={handlePreviousPage}
        className={`flex items-center justify-center gap-1 w-32 px-4 py-2 rounded-lg font-medium transition-all duration-200
          ${currentPage === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600 shadow-sm hover:shadow'
          }`}
      >
        <ChevronLeft className="w-5 h-5" />
        Previous
      </button>
      
      <button
        onClick={handleNextPage}
        className={`flex items-center justify-center gap-1 w-32 px-4 py-2 rounded-lg font-medium transition-all duration-200
          ${currentPage === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600 shadow-sm hover:shadow'
          }`}
      >
        Next
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
  
export default Pagination;