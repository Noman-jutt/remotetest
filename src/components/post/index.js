import React from 'react'
import ArrowLeftIcon from '../../assets/arrowleft-icon.svg';
import BellIcon from '../../assets/bell.svg';
import './style.css';
import HraetIcon from "../../assets/heart-icon.svg"
import CommentIcon from "../../assets/comment-icon.svg"
import SaveIcon from "../../assets/save-icon.svg"
import ThreeDotIcon from "../../assets/dots-icon.svg"
import ProfileImg from "../../assets/profile-img.png"
import ActivityIcon from "../../assets/activity-icon.svg"
import ImgIcom from "../../assets/img-icon.svg"
import SliderImg from "../../assets/slider.jpg"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../common.css"

const PostComp = () => {

  const ReactionData = [
    {
      icon: HraetIcon,
      totalCount: 5,
      type: 'reaction'
    },
    {
      icon: CommentIcon,
      totalCount: 5,
      type: 'comment'
    },
    {
      icon: SaveIcon,
      type: 'tag'
    },
    {
      icon: ThreeDotIcon,
      type: 'more'
    },
  ]
  return (
    <div className='post_wrapper'>
      <PostHeader title={'자유톡'} />
      <UserDetail profileImg={ProfileImg} activityIcon={ActivityIcon} userName={'안녕 나 응애 '} lastActive={'1일전'} weight={53} size={165} />
      <PostContent title={'지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?'} />
     
      <Reactions data={ReactionData} />
      {[1, 2, 3].map((data) => <CommentSection />)}
      <WriteComment />
    </div>
  )
}
export default PostComp

const PostHeader = ({ title }) => {
  return (
    <div className='com_flex com_items_center com_justify_between post_header'>
      <img src={ArrowLeftIcon} />
      <p className='p_header_title'>{title}</p>
      <img src={BellIcon} />
    </div>
  )
}

const UserDetail = ({ profileImg, userName, lastActive, activityIcon, weight, size, isShowForComment }) => {
  return (
    <div className='com_flex com_items_center com_justify_between com_px_16'>
      <div className='user_info com_flex com_items_center'>
        <img src={profileImg} alt='icon' className='user_img' height={34} width={34} />
        <div>
          <p className='user_name'>
            {userName}
            <img src={activityIcon} alt='icon' className='activity_icon' />
            <span className='activity_time'>{lastActive}</span>
          </p>
          {!isShowForComment &&
            <>
              <span className='user_size'>{size}cm</span>
              <span className='user_size'>{weight}kg</span>
            </>
          }
        </div>
      </div>
      {isShowForComment ? <img src={ThreeDotIcon} alt='icon' className='Three_Dot_icon' /> : <button className='follow_btn'>팔로우</button>}

    </div>
  )
}

const PostContent = ({ title }) => {
  return (
    <div className='post_content_wrapper '>
      <h2 className='event_title com_px_16'>{title}</h2>
      <p className='event_desc com_px_16'>
        지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
        혹시 어떤 상품이 제일 괜찮았어?
        <br /><br />
        후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이
        제일 재밌었다던데 맞아???
        <br /><br />
        올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
        아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
        있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!
      </p>
       <Tags data={['2023', 'todayismonday', 'top', 'pops!', 'wow', 'row']} />
      <SimpleSlider />
    </div>
  )
}

const Tags = ({ data }) => {
  return (
    <div className='com_flex com_items_center tags com_flex_Wrap com_px_16'>
      {data.map((tag) => <p key={tag} className='p_tag'>#{tag}</p>)}
    </div>
  )
}

const Reactions = ({ data }) => {
  return (
    <div className='com_flex com_items_center reaction com_flex_Wrap'>
      {data.map((obj, i) => (
        <div key={i} className='com_flex com_items_center cout_inner_wrapper '>
          <img src={obj.icon} alt='icon' height={20} width={17} />
          <span className='span_Cout'>{obj.totalCount}</span>
        </div>
      ))}
    </div>
  )
}
const CommentSection = () => {
  const ReactionData = [
    {
      icon: HraetIcon,
      totalCount: 5,
      type: 'reaction'
    },
    {
      icon: CommentIcon,
      totalCount: 5,
      type: 'comment'
    },
  ]
  const ReactionDataCommetReply = [{
    icon: HraetIcon,
    totalCount: 5,
    type: 'reaction'
  },]
  return (
    <div className='Commen_Section '>
      <UserDetail profileImg={ProfileImg} activityIcon={ActivityIcon} isShowForComment={true} userName={'안녕 나 응애 '} lastActive={'1일전'} weight={53} size={165} />
      <div className='comment_Main_wrapper'>
        <p className='p_CommetText'>어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭
          우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
          아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
          괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
          꼭 봐주세용~!</p>
        <Reactions data={ReactionData} />
        {[1, 2, 3].map((data) =>
          <div className='comments_reply'>
            <UserDetail profileImg={ProfileImg} activityIcon={ActivityIcon} isShowForComment={true} userName={'안녕 나 응애 '} lastActive={'1일전'} weight={53} size={165} />
            <p className='p_CommetText'>오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다</p>
            <Reactions data={ReactionDataCommetReply} />
          </div>)}

      </div>
    </div>
  )
}
const WriteComment = () => {
  return (
    <div className='comment_Box '>
      <img src={ImgIcom} />
      <input type='text' placeholder='댓글을 남겨주세요.' />
      <button className='btn_registraion'>등록</button>
    </div>

  )
}
const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='img_wrapper_main'>
      <Slider {...settings}>
        {[1,2,3,4].map((data) => (
          <div className='img_wrappper'>
            <img src={SliderImg} alt='image' />
          </div>

        ))}
      </Slider>
    </div>
  );
};
