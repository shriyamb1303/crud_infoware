import React from 'react'

const Paginationp = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pt-20'>
            <nav aria-label="Page navigation example">
                <ul class="inline-flex -space-x-px">
                    {pages.map((page, index) => {
                        return (
                            <li>
                                <button key={index}
                                    onClick={() => setCurrentPage(page)}
                                    class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page}</button>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </div>
    )
}

export default Paginationp