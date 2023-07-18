import React from 'react'
import Tags from './tags'
import ImgSlider from './imgSlider'

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
      <ImgSlider />
    </div>
  )
}

export default PostContent