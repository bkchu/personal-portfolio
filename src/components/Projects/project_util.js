import anonqq_project from '../../assets/projects/anon-qq.svg';
import instatube_project from '../../assets/projects/instatube.svg';
import jrnlr_project from '../../assets/projects/jrnlr.svg';
import mebu_project from '../../assets/projects/mebu.svg';

export default [
  {
    title: 'MEBU Property Management | Team App',
    description:
      'An application for property owners to manage all aspects of their properties and residents.',
    year: '2018',
    url: 'https://mebu.herokuapp.com',
    img: mebu_project,
    technologies:
      'React,Redux,Node,Express,PostgreSQL,bCrypt,MomentJS,ChartJS,Nodemailer,Stripe,PropTypes',
    color: '#2796D6'
  },
  {
    title: 'Jrnlr | Solo App',
    description:
      'A platform developed for those who want to keep an online journal, along with the ability to have meaningful, social interactions.',
    year: '2018',
    url: 'https://www.jrnlr.me',
    img: jrnlr_project,
    technologies:
      'React,Redux,Node,Express,PostgreSQL,PassportJS,Unsplash API,Giphy API,MomentJS,Mobile-Responsive',
    color: '#FFFFFF'
  },
  {
    title: 'Anon-QQ | Pair-Programming App',
    description:
      'A real-time web sockets application developed within roughly 10 working hours so that students who feel uncomfortable asking questions in front of their peers can ask with anonymity.',
    year: '2018',
    url: 'https://anon-qq.herokuapp.com',
    img: anonqq_project,
    technologies: 'React,Node,Express,Socket.io,Lodash,Mobile-Responsive',
    color: '#072148'
  },
  {
    title: 'InstaTube | Solo App',
    description:
      'A deeper dive into learning ReactJS by building an instant search version for YouTube videos.',
    year: '2017',
    url: 'https://instatube-react.herokuapp.com',
    img: instatube_project,
    technologies: 'React,State + Props,YouTube API,Mobile-Responsive',
    color: '#312F31'
  }
];
