import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import {
  motion,
  useMotionValue,
  AnimateSharedLayout,
  AnimatePresence,
} from 'framer-motion';
import classNames from 'classnames';
import './messageList.scss';
import trash from '../../statics/trash-alt.png'; 
type Props = {
  fetchPosts: Function;
  posts: any;
};
const MessageList = (props: Props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  const x = useMotionValue(0);

  const Item = ({ post }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
      <motion.li
        layout
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x }}
        onDragEnd={toggleOpen}
      >
        <motion.div className="avatar" layout />
        <div className={classNames('message-item', { 'is-open': isOpen })}>
          <div className={classNames('message-body', { 'is-open': isOpen })}>
            <div className="image-wrapper">
              <img
                className="user-image"
                src={require(`../../statics/user/${post.userId}.jpg`).default}
                alt=""
              />
            </div>
            <div className="content">
              <div className="title">
                <p>{post.title.substring(0, 10)}</p>
              </div>
              <div className="description">
                <p>{post.body.substring(0, 70)}</p>
              </div>
            </div>
          </div>
          <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </div>
      </motion.li>
    );
  };
  const Content = () => {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="btn-delete-wrapper"
      >
        <button><div className="img-btn-wrapper"><img src={trash} alt="delete"/></div></button>
      </motion.div>
    );
  };

  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        <div className="message-list">
          {props.posts.map((post: any) => (
            <Item post={post} key={post.id} />
          ))}
        </div>
      </motion.ul>
    </AnimateSharedLayout>
  );
};

const mapStateToProps = (state: any) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(MessageList);
