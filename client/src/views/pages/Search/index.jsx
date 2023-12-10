import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiChevronDown } from 'react-icons/hi';
import SearchPost from '../../../components/Post/SearchPost';
import { useForm } from 'react-hook-form';
import Axios from '../../../api/index'
import { useSearchContext } from '../../../hooks/useSearch';
import { NoResultFound } from '../../../assets';
import { toast } from 'react-toastify'
import Pagination from '../../../components/Dashboard/Pagination';
const Index = () => {

	const [searchPost, setSearchPost] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(0);
	const [itemsPerPage] = useState(12);
	const { searchValues, searchResults, updateSearch, clearSearch } = useSearchContext()
	const { register, handleSubmit, formState: { errors, isDirty }, reset } = useForm({
		mode: 'onChange',
		defaultValues: {
			query: searchValues.query,
			isNew: searchValues.isNew,
			isGeneralSubject: searchValues.isGeneralSubject,
			minPrice: searchValues.minPrice,
			maxPrice: searchValues.maxPrice,
		}
	})
	const onSubmit = async (data) => {
		setIsLoading(true)
		console.log(data)
		try {
			let url = `/api/v1/posts?page[number]=${currentPage}&page[size]=12&filter=equals(status,'Unconfirmed')`
			let result = url.substring(0, 50)
			console.log(result)
			if (isDirty) {
				if (data.query != "") {
					var queryUrl = `contains(title,'${data.query}')`
					url = result + "and(" + url.substring(50, url.length) + "," + queryUrl + ")"
				}
				if (data.isGeneralSubject != -1) {
					var isGeneralSubjectquery = `equals(isGeneralSubject,'${data.isGeneralSubject}')`
					url = result + "and(" + url.substring(50, url.length) + "," + isGeneralSubjectquery + ")"
				}
				if (data.isNew != -1) {
					var isNewquery = `equals(isNew,'${data.isNew}')`
					url = result + "and(" + url.substring(50, url.length) + "," + isNewquery + ")"
				}
				if (data.minPrice != '') {
					if (/^[+]?\d+([.]\d+)?$/.test(data.minPrice)) {
						var minPricequery = `greaterOrEqual(price,'${data.minPrice}')`
						url = result + "and(" + url.substring(50, url.length) + "," + minPricequery + ")"
					} else {
						return toast.error("Please provide an valid number")

					}
				}
				if (data.maxPrice != '') {
					if (/^[+]?\d+([.]\d+)?$/.test(data.maxPrice)) {
						var maxPricequery = `lessOrEqual(price,'${data.maxPrice}')`
						url = result + "and(" + url.substring(50, url.length) + "," + maxPricequery + ")"
					} else {
						return toast.error("Please provide an valid number")
					}
				}
				console.log(url)
				const res = await Axios.get(url)
				if (res.status === 200) {
					console.log(res)
					setSearchPost(res.data.data.data)
					setIsLoading(false)
					updateSearch(data, res.data.data.data)
					const totalItems = res.data.data.totalItem;
					setTotalPages(Math.ceil(totalItems / itemsPerPage));
				}
			}
		} catch (err) {
			console.log(err)
			setIsLoading(false)
		}
	}
	const getPost = async () => {
		try {
			const res = await Axios.get(`/api/v1/posts?page[number]=${currentPage}&page[size]=12&filter=equals(status,'Unconfirmed')&sort=-createdAt`)
			if (res.status === 200) {
				console.log(res.data.data.data)
				setSearchPost(res.data.data.data)
				const totalItems = res.data.totalItem;
				setTotalPages(Math.ceil(totalItems / itemsPerPage));
			}
		} catch (err) {
			console.log(err)
		}
	}
	const handlePageChange = (pageNumber) => {
		if (pageNumber < 1) {
			pageNumber = 1;
		} else if (pageNumber > totalPages) {
			pageNumber = totalPages;
		}
		setCurrentPage(pageNumber);
	};
	const handleClearSeachValue = () => {
		clearSearch()
		reset()
		toast.success("Clear search data!")
		getPost()
	}

	useEffect(() => {
		document.title = "Search"
		getPost()
		//This will return the title to Home when the component is unmount
		return () => {
			document.title = "Home"
		}
	}, [])
	useEffect(() => {
		getPost()
	}, [currentPage, itemsPerPage])
	return (
		<div className="w-full h-full px-10 py-6	">
			<div className="w-full h-full flex flex-col">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="">
					<span className="text-4xl">Search</span>
					<div className="flex justify-between items-center border border-gray-400 rounded-md px-3 py-2 mt-3">
						<input
							type="search"
							{...register("query")}
							defaultValue={searchValues.query}
							className="w-full border-none focus:outline-none text-black"
							placeholder="Type something"
							tabIndex={1}
						/>
						<FiSearch size={22} className="text-gray-400" />
					</div>
					<div className="flex flex-col border-b border-gray-400">
						<div className="pt-4 py-6 flex lg:flex-row flex-col">
							<div className="flex flex-col justify-start lg:items-center">
								<div className="flex items-center relative w-fit">
									<label htmlFor="type" className="text-sm mr-5 w-24">
										Subject Type
									</label>
									<select
										tabIndex={2}
										{...register("isGeneralSubject")}
										defaultValue={searchValues.isGeneralSubject}
										className="w-40 border border-gray-400 px-3 py-2 appearance-none rounded-md"
									>
										<option value={'-1'}>
											All
										</option>
										<option value="0">No</option>
										<option value="1">Yes</option>
									</select>
									<HiChevronDown size={18} className="absolute right-2" />
								</div>
								<div className="flex items-center relative w-fit mt-3">
									<label htmlFor="type" className="text-sm mr-5 w-24">
										New/Old
									</label>
									<select
										tabIndex={3}
										{...register("isNew")}
										defaultValue={searchValues.isNew}
										className="w-40 border border-gray-400 px-3 py-2 appearance-none rounded-md"
									>
										<option value={'-1'}>
											All
										</option>
										<option value="1">New</option>
										<option value="0">Old</option>
									</select>
									<HiChevronDown size={18} className="absolute right-2" />
								</div>
							</div>
							<div className="flex flex-row lg:flex-col justify-between gap-4 lg:ml-5 lg:mt-0 mt-3">
								<p className="h-full flex justify-start items-center w-32 lg:w-full">Price</p>
								<div className="w-full flex justify-between items-center lg:gap-5 ">
									<input
										{...register("minPrice")}
										defaultValue={searchValues.minPrice}
										tabIndex={4} type="number" className="text-black px-3 py-2 rounded-md w-40 lg:w-full" />
									<span> - </span>
									<input
										{...register("maxPrice")}
										defaultValue={searchValues.maxPrice}
										tabIndex={5} type="number" className="text-black px-3 py-2 rounded-md w-40 lg:w-full" />
								</div>
							</div>
						</div>
						<div className="flex gap-5">
							<button
								type="submit"
								className={`w-28 mb-3 px-8 py-3 rounded-md font-normal shadow cursor-pointer bg-primary-600 hover:bg-primary-400 transition-all text-white`}>Search</button>
							<button type='button'
								onClick={() => {
									handleClearSeachValue()
								}}
								className='w-28 mb-3 px-8 py-3 rounded-md font-normal shadow cursor-pointer bg-red-600 hover:bg-red-400 transition-all text-white'>
								Clear
							</button>
						</div>
					</div>
				</form>
				<div className="w-full h-full">
					{
						searchPost.length === 0 ? (
							<div className="w-full h-fit flex flex-col justify-center items-center">
								<img src={NoResultFound} alt="" className='w-[45vh] h-[45vh]' />
								<p className='font-medium text-xl text-black/90 mb-2 tracking-wide'>No Result Found</p>
								<p className='text-gray-400 text-sm'>Try adjusting your search terms or filters</p>
							</div>
						) : (
							<div className="w-full mt-5 grid grid-cols-[repeat(2,minmax(0,3fr))] xl:grid-cols-[repeat(4,minmax(0,3fr))] 2xl:grid-cols-[repeat(6,minmax(0,3fr))] gap-2 gap-y-5">
								{
									searchPost.map((post, index) => (
										<SearchPost key={index} post={post} />
									))
								}
							</div>
						)
					}
				</div>
				<div className="">
					<Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
				</div>
			</div>
		</div>
	);
};

export default Index;
