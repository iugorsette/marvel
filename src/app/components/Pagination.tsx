import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-2 py-1 rounded-md ${
            currentPage === i ? "bg-red-800 text-zinc-200" : "bg-zinc-200"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-4 gap-2 ">
      <button
        className={`px-2 py-1 rounded-md ${
          currentPage === 1 ? "bg-zinc-800" : "bg-zinc-200"
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ◀
      </button>
      {renderPageNumbers()}
      <button
        className={`px-2 py-1 rounded-md ${
          currentPage === totalPages ? "bg-zinc-800" : "bg-zinc-200"
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ▶
      </button>
    </div>
  );
};

