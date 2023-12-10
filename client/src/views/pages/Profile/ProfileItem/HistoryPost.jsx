import React, { useEffect, useMemo, useState } from 'react';
import Axios from '../../../../api/index';
import { useAuthContext } from '../../../../hooks/useAuthContext';
import { ImSpinner9 } from 'react-icons/im';
import { NoPostYet } from '../../../../assets';
import ProfilePost from '../../../../components/Post/ProfilePost';
import { usePostContext } from '../../../../hooks/usePostContext';
import { useParams } from 'react-router-dom';
import { useReviewContext } from '../../../../hooks/useReviewContext';
import { motion } from 'framer-motion';
import { RiSearch2Line } from 'react-icons/ri';
const HistoryPost = () => {
    const menu = ['Unconfirmed', 'Confirmed', 'Delivered'];
    const [activeButton, setActiveButton] = useState(0);
    const [query, setQuery] = useState('');
    const [state, dispatch] = useAuthContext();
    const [statePost, dispatchPost] = usePostContext();
    const [stateReview, dispatchReview] = useReviewContext();
    const [userPosts, setUserPosts] = useState([]);
    const userID = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const fetchUserPost = async () => {
        setIsLoading(true);
        let url = `/api/v1/posts?filter=and(equals(userPost,'${userID.id}'),equals(status,'Unconfirmed'))&include=userPostData&sort=-createdAt`;
        if (activeButton === 0) {
            url = `/api/v1/posts?filter=and(equals(userPost,'${userID.id}'),equals(status,'Unconfirmed'))&include=userPostData&sort=-createdAt`;
        } else if (activeButton === 1) {
            url = `/api/v1/posts?filter=and(equals(userPost,'${userID.id}'),equals(status,'Confirmed'))&include=userPostData&sort=-createdAt`;
        } else {
            url = `/api/v1/posts?filter=and(equals(userPost,'${userID.id}'),equals(status,'Delivered'))&include=userPostData&sort=-createdAt`;
        }
        try {
            const res = await Axios.get(url);
            if (res.status === 200) {
                setUserPosts(res.data.data.data);
                // console.log(res.data.data.data)
                setIsLoading(false);
            }
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    };
    const filteredItems = useMemo(() => {
        return userPosts.filter((item) => {
            return (
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.id.toString().toLowerCase().includes(query.toLowerCase())
                // item.userPostData.username.toLowerCase().includes(query.toLowerCase())
            );
        });
    }, [query, userPosts]);
    useEffect(() => {
        fetchUserPost();
    }, [state.user, statePost, stateReview, activeButton]);
    return (
        <div className="flex flex-col gap-3">
            <div className="flex w-full justify-between items-start bg-gray-100 border-b-[3px] border-black/40">
                {menu.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveButton(index)}
                        className={`relative w-full py-3 flex-1 cursor-pointer text-center font-medium ${
                            activeButton === index && 'text-primary-main'
                        }`}
                    >
                        <button type="button" className="text-lg">
                            {item}
                        </button>
                        {activeButton === index && (
                            <motion.div
                                layoutId="active-button"
                                className="absolute w-full h-[3px] bg-primary-main -bottom-[3px]"
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="flex gap-3 items-center w-full border border-gray-400 p-2 rounded-sm">
                <RiSearch2Line size={28} className="text-gray-400" />
                <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border-none w-full focus:outline-none text-black placeholder:text-sm"
                    placeholder="Search here ...."
                />
            </div>
            {filteredItems.length === 0 ? (
                <div className="w-full h-[80vh]">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <img src={NoPostYet} alt="" className="w-[40vh] h-[40vh] object-contain" />
                        {query.trim() != '' ? (
                            <div className="tracking-wide text-xl font-medium">No posts found with "{query}"</div>
                        ) : (
                            <>
                                <p className="tracking-wide text-xl font-medium mb-1">You haven't post anything yet!</p>
                                <p className="text-sm text-gray-500">Post something to see the history post</p>
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-5">
                    {filteredItems.map((post, index) => (
                        <ProfilePost key={index} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HistoryPost;
