function ModalMessage() {
    return (
        <div
            id="addUserModal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 items-center justify-center flex w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full bg-opacity-50 bg-black"
        >
            <div className="relative w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <form action="#" className="relative bg-white rounded-lg shadow">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">Notice of violation</h3>
                        {/* <AiOutlineClose
                        onClick={() => onClose()}
                        size={22}
                        className="fixed top-4 right-4 text-white cursor-pointer hover:rotate-[360deg] transition-all duration-300 z-20"
                    /> */}
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-3 gap-3">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900">
                                    To
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="first-name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="To: Bonnie"
                                    required=""
                                />
                                {/* {formErrors.firstName && <p className="text-sm text-red-600">{formErrors.firstName}</p>} */}
                            </div>
                            {/* <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                placeholder="example@company.com"
                                required=""
                            />
                        </div> */}
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Last Name
                                </label>
                                <textarea
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                ></textarea>
                            </div>
                            {/* <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 ">
                                Phone Number
                            </label>
                            <input
                                type="number"
                                name="phoneNumber"
                                id="phone-number"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                placeholder="e.g. +(12)3456 789"
                                required=""
                            />
                        </div> */}
                            {/* <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 ">
                                Role
                            </label>
                            <select
                                id="roles"
                                name="role"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:ring-blue-600 focus:border-blue-600 w-full p-2.5"
                            >
                                <option value>Choose a role</option>
                                <option value="1">User</option>
                                <option value="2">Admin</option>
                                <option value="3">Post management</option>
                            </select>
                        </div> */}
                            {/* <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                placeholder="••••••••"
                                required=""
                            />
                        </div> */}
                        </div>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                        <button
                            // onClick={handleSaveClick}
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Sent
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalMessage;
