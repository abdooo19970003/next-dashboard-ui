import React from "react";

const Pagination = ({ pages, current }: { pages: number; current: number }) => {
  const pagesList = [];
  for (
    let index = (current - 3) | 0;
    index < (current + 2 > pages ? pages : current + 2);
    index++
  ) {
    pagesList.push(index + 1);
  }

  return (
    <div className="p-4 flex justify-between items-center w-full">
      <button
        disabled={current == 1}
        className="border px-5 py-1 text-center text-gray-600 rounded-lg bg-secondary hover:bg-primary hover:text-white disabled:opacity-60"
      >
        {"<"} Önceki
      </button>
      <div className="flex justify-center items-center gap-2">
        {pagesList[0] > 1 ? (
          <>
            <button className="flex justify-center items-center w-9 h-9 mt-3 bg-secondary hover:bg-orange-300 active:bg-primary rounded-full">
              {1}
            </button>
            {pagesList[0] == 2 ? null : <span className="text-2xl">...</span>}
          </>
        ) : null}
        {pagesList.map((p) => (
          <div key={p}>
            {p == current ? (
              <button className="active flex justify-center items-center w-9 h-9 mt-3 hover:bg-orange-300 bg-primary rounded-full">
                {p}
              </button>
            ) : (
              <button className="flex justify-center items-center w-9 h-9 mt-3 bg-secondary hover:bg-orange-300 active:bg-primary rounded-full">
                {p}
              </button>
            )}
          </div>
        ))}
        {pagesList[pagesList.length - 1] < pages ? (
          <>
            {pagesList[pagesList.length - 1] == pages ? null : (
              <span className="text-2xl">...</span>
            )}
            <button className="flex justify-center items-center w-9 h-9 mt-3 bg-secondary hover:bg-orange-300 active:bg-primary rounded-full">
              {pages}
            </button>
          </>
        ) : null}
      </div>
      <button
        disabled={current == pages}
        className="border px-5 py-1  text-center text-gray-600 rounded-lg bg-secondary hover:bg-primary hover:text-white disabled:opacity-60"
      >
        Sonraki {">"}
      </button>
    </div>
  );
};

export default Pagination;
