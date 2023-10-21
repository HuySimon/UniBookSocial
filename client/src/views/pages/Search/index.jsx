import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiChevronDown } from 'react-icons/hi';
import SearchPost from '../../../components/Post/SearchPost';
import { useForm } from 'react-hook-form';
import Axios from '../../../api/index'
import { ImSpinner9 } from 'react-icons/im';
import { useSearchContext } from '../../../hooks/useSearch';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaRegFaceSadTear } from 'react-icons/fa6'
import { NoResultFound } from '../../../assets';
import { Outlet } from 'react-router-dom';
const Index = () => {

	const [searchPost, setSearchPost] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const { searchValues, searchResults, updateSearch } = useSearchContext()

	const { register, handleSubmit, reset, formState: { errors, isSubmitted } } = useForm({
		mode: 'onChange',
		defaultValues: {
			query: searchValues.query,
			isNew: searchValues.isNew,
			isGeneralSubject: searchValues.isGeneralSubject,
			minPrice: searchValues.minPrice,
			maxPrice: searchValues.maxPrice,
		},
	})
	const onSubmit = async (data) => {
		setIsLoading(true)
		console.log(data)
		try {
			let url = "/api/v1/posts?filter=equals(status,'Unconfirm')"
			let result = url.substring(0, 21)
			if (data.query != "") {
				var queryUrl = `contains(title,'${data.query}')`
				url = result + "and(" + url.substring(21, url.length) + "," + queryUrl + ")"
			}
			if (data.isGeneralSubject != -1) {
				var isGeneralSubjectquery = `equals(isNew,'${data.isGeneralSubject}')`
				url = result + "and(" + url.substring(21, url.length) + "," + isGeneralSubjectquery + ")"
			}
			if (data.isNew != -1) {
				var isNewquery = `equals(isNew,'${data.isNew}')`
				url = result + "and(" + url.substring(21, url.length) + "," + isNewquery + ")"
			}
			if (data.minPrice != '') {
				var minPricequery = `greaterOrEqual(price,'${data.minPrice}')`
				url = result + "and(" + url.substring(21, url.length) + "," + minPricequery + ")"
			}
			if (data.maxPrice != '') {
				var maxPricequery = `lessOrEqual(price,'${data.maxPrice}')`
				url = result + "and(" + url.substring(21, url.length) + "," + maxPricequery + ")"
			}
			console.log(url)
			const res = await Axios.get(url)
			if (res.status === 200) {
				setSearchPost(res.data.data.data)
				setIsLoading(false)
				updateSearch(data, res.data.data.data)
			}
		} catch (err) {
			console.log(err)
			setIsLoading(false)
		}
	}

	useEffect(() => {
		document.title = "Search"
	},[])

	return (
		<div className="w-full h-full px-10 py-6">
			<div className="w-full h-full flex flex-col">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="z-[8]">
					<span className="text-4xl">Search</span>
					<div className="flex justify-between items-center border border-gray-400 rounded-md px-3 py-2 mt-3">
						<input
							type="text"
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
										{...register("isNew")}
										defaultValue={searchValues.isNew}
										className="w-40 border border-gray-400 px-3 py-2 appearance-none rounded-md"
									>
										<option value={'-1'}>
											Select Type
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
										{...register("isGeneralSubject")}
										defaultValue={searchValues.isGeneralSubject}
										className="w-40 border border-gray-400 px-3 py-2 appearance-none rounded-md"
									>
										<option value={'-1'}>
											Select Type
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
									<p className='text-red-500 text-sm absolute'>{errors.minPrice?.message}</p>
									<span> - </span>
									<input
										{...register("maxPrice")}
										defaultValue={searchValues.maxPrice}
										tabIndex={5} type="number" className="text-black px-3 py-2 rounded-md w-40 lg:w-full" />
								</div>
							</div>
						</div>
						<button
							type="submit"
							// className='hidden'
							className='bg-primary-600 w-fit mb-3 px-8 py-3 rounded-md text-white font-normal shadow cursor-pointer'
						>Search</button>
					</div>
				</form>
				<div className="w-full h-full">
					{
						isSubmitted || searchResults.length != 0 ? (
							isLoading ? (
								<div className="w-full h-full flex justify-center items-center">
									<ImSpinner9 className="animate-spin duration-500 text-primary-main" size={100} />
								</div>
							) : searchResults.length === 0 ? (
								<div className="w-full h-fit flex flex-col justify-center items-center">
									<img src={NoResultFound} alt="" className='w-[45vh] h-[45vh]' />
									<p className='font-medium text-xl text-black/90 mb-2 tracking-wide'>No Result Found</p>
									<p className='text-gray-400 text-sm'>Try adjusting your search terms or filters</p>
								</div>
							) : (
								<div className="w-full mt-5 grid grid-cols-[repeat(2,minmax(0,3fr))] xl:grid-cols-[repeat(4,minmax(0,3fr))] 2xl:grid-cols-[repeat(6,minmax(0,3fr))] gap-2 gap-y-5">
									{
										searchResults.map((post, index) => (
											<SearchPost key={index} post={post} />
										))
									}
								</div>
							)
						) : (
							<Outlet />
						)
					}

				</div>
			</div>
		</div>
	);
};

export default Index;
