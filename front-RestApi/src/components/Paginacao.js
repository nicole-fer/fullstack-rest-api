import React from 'react'

export const Paginacao = ( {postPerPage, totalPosts, paginate} ) => {

    const numeroPaginas = [];

    for(let i=1 ; i<= Math.ceil(totalPosts/postPerPage); i++){
        numeroPaginas.push(i)

    }

  return (
   <nav className='border-t pb-1'>
        <ul className='flex justify-center pt-2 gap-3'>
            {numeroPaginas.map(numero=>(
                <li key={numero} className="bg-white px-3 py-1 rounded-full font-semibold border-2 border-cyan-500 text-cyan-500">
                    <a onClick={() => paginate(numero)} href='!#' className='page-link'>
                        {numero}
                    </a>
                </li>
            ))}
        </ul>
   </nav>
  )
}
