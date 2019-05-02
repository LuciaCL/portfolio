import InfiniteScroll from 'react-infinite-scroller'

function infitinteScroll() {
    <div style="height:700px;overflow:auto;">
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
            loader={<div className="loader">Loading ...</div>}
            useWindow={false}>
            {items}
        </InfiniteScroll>
    </div>
}