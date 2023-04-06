import InfiniteScroll from "react-infinite-scroller";
import IBoughtMain from "./IBuyProduct.main";
import { IBoughtProductUIProps } from "./Mypage.types";
import {
  MyList,
  MyPageIBought,
  MyPageScroll,
  ReturnToMyPage,
} from "./Mypage.styles";
export default function IBoughtProductUI(props: IBoughtProductUIProps) {
  return (
    <MyPageIBought>
      <MyList>내 구매내역</MyList>
      <MyPageScroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditemsIBought.map((el) => (
            <IBoughtMain key={el._id} el={el} />
          ))}
        </InfiniteScroll>
      </MyPageScroll>
      <ReturnToMyPage onClick={props.onClickMyPageMain}>
        목록으로
      </ReturnToMyPage>
    </MyPageIBought>
  );
}
