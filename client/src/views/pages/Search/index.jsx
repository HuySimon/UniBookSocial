import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiChevronDown } from 'react-icons/hi';
import SearchPost from '../../../components/Post/SearchPost';
import { useForm } from 'react-hook-form';
import Axios from '../../../api/index'
import { ImSpinner9 } from 'react-icons/im';
const Index = () => {

	const [searchPost, setSearchPost] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const { register, handleSubmit, formState: { errors } } = useForm()
	const onSubmit = async (data) => {
		setIsLoading(true)
		try {
			const res = await Axios.get(`/api/v1/posts?filter=contains(title,'${data.query}')'`)
			if (res.status === 200) {
				console.log(res.data.data.data)
				setSearchPost(res.data.data.data)
				setIsLoading(false)
			}
		} catch (err) {
			console.log(err)
			setIsLoading(false)
		}
	}

	return (
		<div className="w-full h-full px-10 py-6">
			<div className="w-full flex flex-col">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="z-[8]">
					<span className="text-4xl">Search</span>
					<div className="flex justify-between items-center border border-gray-400 rounded-md px-3 py-2 mt-3">
						<input
							type="text"
							{...register("query")}
							className="w-full border-none focus:outline-none text-black"
							placeholder="Type something"
							tabIndex={1}
						/>
						<button type='submit'>
							<FiSearch size={22} className="text-gray-400" />
						</button>
					</div>
					<div className="py-4 flex lg:flex-row flex-col border-b border-gray-400">
						<div className="flex flex-col justify-start lg:items-center">
							<div className="flex items-center relative w-fit">
								<label htmlFor="type" className="text-sm mr-5 w-24">
									Subject Type
								</label>
								<select
									tabIndex={2}
									name=""
									id=""
									className="w-40 border border-gray-400 px-3 py-2 appearance-none rounded-md"
								>
									<option disabled selected>
										Select Type
									</option>
									<option value="general">General Subject</option>
									<option value="main-major">Major</option>
								</select>
								<HiChevronDown size={18} className="absolute right-2" />
							</div>
							<div className="flex items-center relative w-fit mt-3">
								<label htmlFor="type" className="text-sm mr-5 w-24">
									New/Old
								</label>
								<select
									tabIndex={3}
									name=""
									id=""
									className="w-40 border border-gray-400 px-3 py-2 appearance-none rounded-md"
								>
									<option disabled selected>
										Select Type
									</option>
									<option value="new">New</option>
									<option value="old">Old</option>
								</select>
								<HiChevronDown size={18} className="absolute right-2" />
							</div>
						</div>
						<div className="flex flex-row lg:flex-col justify-between gap-4 lg:ml-5 lg:mt-0 mt-3">
							<p className="h-full flex justify-start items-center w-32 lg:w-full">Price</p>
							<div className="w-full flex justify-between items-center lg:gap-5">
								<input tabIndex={4} type="number" name="price-min" id="" className="px-3 py-2 rounded-md w-40 lg:w-full" />
								<span> - </span>
								<input tabIndex={5} type="number" name="price-max" id="" className="px-3 py-2 rounded-md w-40 lg:w-full" />
							</div>
						</div>
					</div>
				</form>
				{
					isLoading ? (
						<div className="w-full h-[70vh] flex justify-center items-center">
							<ImSpinner9 className="animate-spin duration-500 text-primary-main" size={100} />
						</div>
					) : (
						<div className="w-full mt-5 grid grid-cols-[repeat(2,minmax(0,3fr))] xl:grid-cols-[repeat(4,minmax(0,3fr))] 2xl:grid-cols-[repeat(6,minmax(0,3fr))] gap-2 gap-y-5">
							{
								searchPost.map((post, index) => (
									<SearchPost key={index} post={post} />
								)
								)
							}
						</div>
					)
				}
			</div>
		</div>
	);
};

export default Index;
