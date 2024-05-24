interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: '롯데렌터카 단기 개선 프로젝트',
    description: `컨텐츠 번역 수정, 컨텐츠 수정, 개발 테스트, 운영 테스트 (영, 중, 일)`,
    imgSrc: '/static/images/lotte_rentacar.png',
    href: 'https://www.lotterentacar.net/hp/eng/reservation/index.do?LANG=eng',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  
  
]

export default projectsData
