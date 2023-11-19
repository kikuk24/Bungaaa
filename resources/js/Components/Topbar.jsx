import { Link } from "@inertiajs/react"

const Topbar = ({ category }) => {
  
  return (
      <nav className="w-full bg-slate-500 flex md:flex-row flex-wrap flex-col justify-between items-center px-[8rem] py-3">
          <div className="flex gap-3">
        {category.map((ca,i) => (
                
          <Link key={i} href={ca.slug}>{ca.name}</Link>
              ))}
              
          </div>
          <div className="">
              {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div> */}
              <input type="text" className="rounded-full w-full h-6" />
          </div>
      </nav>
  );
}

export default Topbar