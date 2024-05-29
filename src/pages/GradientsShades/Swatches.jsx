import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GradientGrid from '@components/GridBox/GradientGrid';
import gradientsData from "@assets/gradients.json";
import Loader from '@components/Loader';
function Swatches() {
    const [gradients, setGradients] = useState(gradientsData.gradients.slice(0, 12));
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = () => {
        if (gradients.length >= gradientsData.gradients.length) {
            setHasMore(false);
            return;
        }

        // Simulate a fetch call
        setTimeout(() => {
            setGradients((prevGradients) => [
                ...prevGradients,
                ...gradientsData.gradients.slice(prevGradients.length, prevGradients.length + 12)
            ]);
        }, 1100);
    };
    return (
        <section>
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Take a colorful stroll on Gradient Lane</h2>
                <p className="text-gray-700 dark:text-gray-400">
                    Oh hey there, thanks for stopping by. You came here looking for inspiration, thus I feel obliged to tell you that...you came to the right place! We have a nicely curated collection of beautiful gradients on this page and also a list of some of the best resources for swatches all across the web. Have fun exploring!
                </p>
            </div>
            <InfiniteScroll
                dataLength={gradients.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<div className='w-full pt-5 flex items-center justify-center'><Loader /></div>}
            >
                <GradientGrid colors={gradients} status={true} />
            </InfiniteScroll>
        </section>
    )
}
export default Swatches

