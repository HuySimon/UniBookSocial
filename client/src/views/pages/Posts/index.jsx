import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { PiTrashSimpleLight } from 'react-icons/pi';

import Pagination from '../../../components/Dashboard/Pagination';
import { Avatar } from '../../../assets';
import { PlaceHolderPostImg } from '../../../assets';
import './Posts.scss';
// import Post from '../../../components/Dashboard/Post/Post';


function Index() {
    const [postList, setPostList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => setPostList(result))
            .catch(error => console.log(error))
    }, [])

    // eslint-disable-next-line no-unused-vars
    const handleSearch = (searchTerm) => {
        const filteredUsers = postList.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setPostList(filteredUsers);
      };

      // 
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    return (
         
    <div className="relative overflow-x-auto sm:rounded-lg">
    <div className="flex items-center pb-4 pt-4 bg-white ">
        <div className='ml-2'>
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 " type="button">
                <span className="sr-only">Action button</span>
                    Today
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                <ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownActionButton">
                    <li>
                        <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Reward</Link>
                    </li>
                    <li>
                        <Link to="#" className="block px-4 py-2 hover:bg-gray-100 ">Promote</Link>
                    </li>
                    <li>
                        <Link to="#" className="block px-4 py-2 hover:bg-gray-100 ">Activate account</Link>
                    </li>
                </ul>
                <div className="py-1">
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Delete User</Link>
                </div>
            </div>
        </div>
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative ml-2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  none-outline" placeholder="Search for users" />
        </div>
        
    </div>

        <div className='flex justify-between items-center pb-4 pt-4 bg-white'>
        {postList && postList.length > 0 ?
                            postList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((post) => (
                                // eslint-disable-next-line react/jsx-key
                                <div className='w-full h-fit px-6 py-5 ml-4 border border-gray-400 shadow-md rounded-lg'>
                    <div className="w-full flex flex-col">
                        <div className="w-full flex justify-between items-center">
                            <div className="flex gap-3">
                                <div className="w-14 h-14 rounded-full overflow-hidden">
                                    <img src={Avatar} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className="flex flex-col justify-start">
                                    <span className="name font-medium">
                                        {post.name}
                                    </span>
                                    <p className='text-[10px] leading-4 text-gray-600'>2 seconds ago</p>
                                </div>
                            </div>
                            <button className='w-10 h-10 hover:bg-gray-100 transition-all rounded-full flex justify-center items-center'>
                                <BiDotsVerticalRounded size={22} />
                            </button>
                        </div>
                        <div className="w-full h-[30vh] xl:h-[40vh] overflow-hidden rounded-lg border border-gray-500 mt-4">
                            <Link>
                                <img src={PlaceHolderPostImg} alt="" className='w-full h-full object-contain' />
                            </Link>
                        </div>
                        <table className='flex border border-gray-500 rounded-lg my-4'>
                            <thead className='flex flex-col border-r w-1/2 xl:w-1/5 border-gray-500'>
                                <th className='border-b p-2 border-gray-500 font-medium text-sm'>Name</th>
                                <th className='border-b p-2 border-gray-500 font-medium text-sm'>Price</th>
                                <th className='border-b p-2 border-gray-500 font-medium text-sm'>Major</th>
                                <th className='border-b p-2 border-gray-500 font-medium text-sm'>Type</th>
                                <th className='p-2 font-medium text-sm'>Description</th>
                            </thead>
                            <tbody className='flex flex-col w-1/2 xl:w-4/5'>
                                <td className='p-2 text-sm'>{post.name}</td>
                                <td className='p-2 border-t border-gray-500 text-sm'>45000</td>
                                <td className='p-2 border-t border-gray-500 text-sm'>General Subject</td>
                                <td className='p-2 border-t border-gray-500 text-sm'>Old</td>
                                <td className='p-2 border-t border-gray-500 text-sm'>
                                    Yesterday with @Jack Phat and @My instagram at concert in LA. 
                                    Was totally fantastic! People were really excited about this one!
                                </td>
                            </tbody>
                        </table>
                        <div className='flex justify-end'>
                            <label className="checkbox">
                                <input type="checkbox" id="checkbox-eins"/>
                                <div className="checkbox__indicator"></div>
                            </label>
                            <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-2xl color">
                                <i>
                                    <PiTrashSimpleLight />
                                </i>
                            </a>
                        </div>
                    </div>
                                </div>
                                )
                            ) : 'Loading'}
            {/* <div className='w-full h-fit px-6 py-5 ml-4 border border-gray-400 shadow-md rounded-lg'>
                    <div className="w-full flex flex-col">
                        <div className="w-full flex justify-between items-center">
                            <div className="flex gap-3">
                                <div className="w-14 h-14 rounded-full overflow-hidden">
                                    <img src={Avatar} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className="flex flex-col justify-start">
                                    <span className="name font-medium">
                                        John Doe
                                    </span>
                                    <p className='text-[10px] leading-4 text-gray-600'>2 seconds ago</p>
                                </div>
                            </div>
                            <button className='w-10 h-10 hover:bg-gray-100 transition-all rounded-full flex justify-center items-center'>
                                <BiDotsVerticalRounded size={22} />
                            </button>
                        </div>
                        <div className="w-full h-[30vh] xl:h-[40vh] overflow-hidden rounded-lg border border-gray-500 mt-4">
                            <Link>
                                <img src={PlaceHolderPostImg} alt="" className='w-full h-full object-contain' />
                            </Link>
                        </div>
                        <table className='flex border border-gray-500 rounded-lg my-4'>
                            <thead className='flex flex-col border-r w-1/2 xl:w-1/5 border-gray-500'>
                                <th className='border-b p-2 border-gray-500 font-medium text-sm'>Name</th>
                                <th className='border-b p-2 border-gray-500 font-medium text-sm'>Price</th>
                                <th className='border-b p-2 border-gray-500 font-medium text-sm'>Major</th>
                                <th className='border-b p-2 border-gray-500 font-medium text-sm'>Type</th>
                                <th className='p-2 font-medium text-sm'>Description</th>
                            </thead>
                            <tbody className='flex flex-col w-1/2 xl:w-4/5'>
                                <td className='p-2 text-sm'>John Doe</td>
                                <td className='p-2 border-t border-gray-500 text-sm'>45000</td>
                                <td className='p-2 border-t border-gray-500 text-sm'>General Subject</td>
                                <td className='p-2 border-t border-gray-500 text-sm'>Old</td>
                                <td className='p-2 border-t border-gray-500 text-sm'>
                                    Yesterday with @Jack Phat and @My instagram at concert in LA. 
                                    Was totally fantastic! People were really excited about this one!
                                </td>
                            </tbody>
                        </table>
                        <div className='flex justify-end'>
                            <label className="checkbox" htmlFor="checkbox-eins">
                                <input type="checkbox" id="checkbox-eins"/>
                                <div className="checkbox__indicator"></div>
                            </label>
                            <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-2xl color">
                                <i>
                                    <PiTrashSimpleLight />
                                </i>
                            </a>
                        </div>
                    </div>
            </div> */}
            {/* <div className='w-full h-fit px-6 py-5 ml-4 border border-gray-400 shadow-md rounded-lg'>
                    <div className="w-full flex flex-col">
                        <div className="w-full flex justify-between items-center">
                            <div className="flex gap-3">
                                <div className="w-14 h-14 rounded-full overflow-hidden">
                                    <img src={Avatar} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className="flex flex-col justify-start">
                                    <span className="name font-medium">
                                        John Doe
                                    </span>
                                    <p className='text-[10px] leading-4 text-gray-600'>2 seconds ago</p>
                                </div>
                            </div>
                            <button className='w-10 h-10 hover:bg-gray-100 transition-all rounded-full flex justify-center items-center'>
                                <BiDotsVerticalRounded size={22} />
                            </button>
                        </div>
                        <div className="w-full h-[30vh] xl:h-[40vh] overflow-hidden rounded-lg border border-gray-500 mt-4">
                            <Link>
                                <img src={PlaceHolderPostImg} alt="" className='w-full h-full object-contain' />
                            </Link>
                        </div>
                        <table className='flex border border-gray-500 rounded-lg my-4'>
                            <thead className='flex flex-col border-r w-1/2 xl:w-1/5 border-gray-500'>
                                <th className='border-b p-2 border-gray-500 font-medium text-sm'>Name</th>
                                <th className='border-b p-2 border-gray-500 font-medium text-sm'>Price</th>
                                <th className='border-b p-2 border-gray-500 font-medium text-sm'>Major</th>
                                <th className='border-b p-2 border-gray-500 font-medium text-sm'>Type</th>
                                <th className='p-2 font-medium text-sm'>Description</th>
                            </thead>
                            <tbody className='flex flex-col w-1/2 xl:w-4/5'>
                                <td className='p-2 text-sm'>John Doe</td>
                                <td className='p-2 border-t border-gray-500 text-sm'>45000</td>
                                <td className='p-2 border-t border-gray-500 text-sm'>General Subject</td>
                                <td className='p-2 border-t border-gray-500 text-sm'>Old</td>
                                <td className='p-2 border-t border-gray-500 text-sm'>
                                    Yesterday with @Jack Phat and @My instagram at concert in LA. 
                                    Was totally fantastic! People were really excited about this one!
                                </td>
                            </tbody>
                        </table>
                        <div className='flex justify-end'>
                        <label className="checkbox" htmlFor="checkbox-drei">
                            <input type="checkbox" id="checkbox-drei"/>
                            <div className="checkbox__indicator"></div>
                        </label>
                            <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-2xl color">
                                <i>
                                    <PiTrashSimpleLight />
                                </i>
                            </a>
                        </div>
                    </div>
            </div> */}
            {/* <Post /> */}
            {/* <Post /> */}
        </div>
        {/* Pagination */}
        <Pagination 
        totalItems={postList.length} 
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        />
</div>
);
}

export default Index;