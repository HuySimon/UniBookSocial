import React from 'react'

import Post from '../../../components/Post/Post'
import BriefProfile from '../Profile/BriefProfile'

const Index = () => {
    return (
        <div className='p-[25px] lg:px-[150px] xl:px-[250px] mx-auto h-[200vh] lg:flex justify-between items-start gap-5'>
			<Post />
			<BriefProfile />
		</div>
    )
}

export default Index